'use strict';

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getData() {
        return this.data;
    }

    getNextNode() {
        return this.next;
    }

    setNextNode(nextNode) {
        if (!(nextNode instanceof Node) && nextNode !== null) {
            throw new Error ('Invalid Input Format!');
        }
        this.next = nextNode;
    }
}

module.exports = Node;
