'use strict';

const LinkedList = require('../LinkedList');

describe('LinkedList', () => {
    let linkedList;
    beforeEach(() => {
        linkedList = new LinkedList();
    });
    test('LinkedList is an instance of the LinkedList Class', () => {
        expect(linkedList).toBeInstanceOf(LinkedList);
    });
});
