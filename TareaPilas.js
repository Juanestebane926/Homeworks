class Stack{
    constructor(){
      this.stack = {};
      this.count = 0;
    }
  
    push(dato){
      this.stack[this.count] = dato;
      this.count++
      return this.stack[this.count-1]
    }
  
    pop(){
      this.count--
      const eliminado = this.stack[this.count];
      delete this.stack[this.count];
      return eliminado;
    }
  
    peek(){
      return this.stack[this.count-1]
    }
  
    size(){
      return this.count
    }
  
    print(){
      console.log(this.stack)        
    }
  
  }
  
  class Book{
    constructor(name,isbn,author,editorial){
      this.name = name;
      this.isbn = isbn;
      this.author = author;
      this.editorial = editorial;
    }
  }
  
const stack = new Stack();

const libro1 = new Book("Cien años de soledad", "9780140182750", "Gabriel García Márquez", "Vintage");
const libro2 = new Book("El Señor de los Anillos", "9780544003415", "J.R.R. Tolkien", "Houghton Mifflin Harcourt");
const libro3 = new Book("Harry Potter y la piedra filosofal", "9788478884459", "J.K. Rowling", "Salamandra");

stack.push(JSON.stringify(libro1));
stack.push(JSON.stringify(libro2));
stack.push(JSON.stringify(libro3));
stack.print();