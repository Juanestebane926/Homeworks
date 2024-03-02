class Queue{
    constructor(){
      this.queue = [];
    }

    enqueue(dato){
      this.queue.push(dato);
    }

    dequeue(){
      return this.queue.shift();
    }

    peek(){
      return this.queue[0];
    }

    size(){
      return this.queue.length;
    }

    isEmpty(){
      return this.queue.length === 0;
    }

    print(){
      console.log(this.queue)
    }

}

class Person{
  constructor(name, arrivedTime){
    this.name = name;
    this.arrivedTime = arrivedTime;
  }
  
}

const person1 = new Person('John', 10);
const person2 = new Person('Jane', 5);
const person3 = new Person('Bob', 8);

const personQueue = new Queue();
personQueue.enqueue(JSON.stringify(person1)); 
personQueue.enqueue(JSON.stringify(person2)); 
personQueue.enqueue(JSON.stringify(person3)); 

personQueue.print();