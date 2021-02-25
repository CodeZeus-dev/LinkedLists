'use strict';

const Node = require('../Node');

describe('Node', () => {
    let node;
    beforeEach(() => {
        node = new Node('Makers');
    });
    test('node is an instance of the Node Class', () => {
        expect(node).toBeInstanceOf(Node);
    });
    describe('fetching data and next node from current node', () => {
        test('getData returns a node\'s data content', () => {
            expect(node.getData()).toBe('Makers');
        });
        test('getNextNode returns null by default', () => {
            expect(node.getNextNode()).toBe(null);
        });
    });
    describe('setting the next node', () => {
        test('setNextNode updates the next property of the current node', () => {
            const nextNode = new Node('Academy');
            node.setNextNode(nextNode);
            expect(node.getNextNode()).toBe(nextNode);
        });
        test('setNextNode throws an error if the input is not a Node instance', () => {
            const nextNode = 'Academy';
            expect(() => { node.setNextNode(nextNode) }).toThrowError('Invalid Input Format!');
        });
        test('setNextNode doesn\'t throw an error if the input is null', () => {
            const nullNode = null;
            node.setNextNode(nullNode)
            expect(node.getNextNode()).toBe(nullNode);
        });
    });
});
