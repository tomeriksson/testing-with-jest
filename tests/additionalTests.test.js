const stack = require('../src/stack');

test('pop on filled stack returns defined', () => {
    stack.push(321)
    expect(stack.pop()).toBeDefined()
});

test('push and peek of object on the stack', () => {
    stack.push({key1: "value1", key2: 321})
    expect(stack.peek()).toStrictEqual({key1: "value1", key2: 321});
});

test('pop of object on the stack', () => {
    expect(stack.pop()).toStrictEqual({key1: "value1", key2: 321});
});
