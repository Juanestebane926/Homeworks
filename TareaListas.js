class Node{
    constructor(value,next=null){
      this.value= value;
      this.next = next;
      }
  }
  
  class LinkedList{
    constructor(){
      this.head = null;
      this.tail = null;
    }
  
    append(value){
      const node = new Node(value);
      if(this.head){
        this.tail.next = node;
      }else{
        this.head = node;
      }
      this.tail = node;
    }
  
    print(){
      let node = this.head;
      while(node != null){
        console.log(`Value: ${node.value} Next: ${node.next?.value || null} \n`);
        node = node.next; 
      }
  
      
    }
  
    
  }

  class Todo{
    constructor(title,description,points){
      this.title = title;
      this.description = description;
      this.points = points;  
    }
  }


const tarea1 = new Todo("Completar informe mensual", "Redactar y revisar el informe de ventas", 8);
const tarea2 = new Todo("Reunión con el equipo de desarrollo", "Discutir el progreso del proyecto y asignar tareas", 5);
const tarea3 = new Todo("Preparar presentación para el cliente", "Crear una presentación convincente para la reunión de mañana", 10);

const todoList = new LinkedList()
todoList.append(JSON.stringify(tarea1));
todoList.append(JSON.stringify(tarea2));
todoList.append(JSON.stringify(tarea3));
todoList.print()
