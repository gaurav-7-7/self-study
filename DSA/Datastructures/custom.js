const stacks = () => {
    /**
     * Works on LIFO principle
     * Both insertion and deletion from the same end(top)
     * Example of use: Browser history tracking, Undo operation, Expression converstions, Call stack in JS runtime.
     * Operations: push(), pop() & peek()
     */

    const s = new Stack([1,2,3,4,5]);
    s.push(34)
    console.log(s.pop())
    console.log(s.peek())
    s.size()
}

const queues = () => {
    /**
     * Works on FIFO principle
     * insertion read end then deletion from the front end
     * Example of use: Printers, CPU task scheduling, Callback queue in JS runtime.
     * Operations: enqueue(), dequeue() & peek()
     */

    const q = new Queue();
    q.enqueue(34)
    q.enqueue(11)
    console.log(q.isEmpty())
    console.log(q.peek())
    console.log(q.size())
}

class Stack {
    constructor(initialItems = []) {
        this.item = initialItems
    }

    push(e) {
        this.item.push(e)
    }

    pop() {
        if(!this.isEmpty())
            return this.item.pop()
        else
            return `Stack is empty!`
    }

    peek() {
        if(!this.isEmpty())
            return this.item[this.item.length - 1];
        else
            return `Stack is empty!`
    }

    isEmpty() {
        return this.item.length === 0
    }

    size() {
        return this.item.length
    }

    clear() {
        this.item = []
    }
}

class Queue {
    constructor(initialItems = []) {
        this.items = initialItems
        this.read = 0
        this.front = 0
    }

    enqueue(e) {
        this.items[this.rear] = e
        this.rear++
    }

    dequeue() {
        const i = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return i
    }

    isEmpty() {
        return this.read - this.front === 0
    }

    peek() {
        return this.items[this.front]
    }

    size() {
        return this.rear - this.front
    }

    print() {
        console.log(this.items)
    }
}

(function mail() {
    
})();