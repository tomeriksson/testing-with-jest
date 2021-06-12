const stack = require('../src/stack');
const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5; // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
    //console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async () => {
    await driver.quit();
}, defaultTimeout);

test('push and peek of object on the stack', () => {
    stack.push({ key1: "value1", key2: 321 })
    expect(stack.peek()).toStrictEqual({ key1: "value1", key2: 321 });
});
let fontBefore;
let fontAfter;
describe('Not changing font on push; set up', () => {
    
    it('should open a prompt box', async () => {
        fontBefore = await driver.findElement(By.id('top_of_stack')).getCssValue("font-family")
        let push = await driver.findElement(By.id('push'));
        await push.click();
        let alert = await driver.switchTo().alert();
        await alert.sendKeys("Hej");
        await alert.accept();
        fontAfter = await driver.findElement(By.id('top_of_stack')).getCssValue("font-family")
    });

});
test('compare font before and after', () => {
    expect(fontBefore).toBe(fontAfter);
});




