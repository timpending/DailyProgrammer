function LinkedList() {
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  var privates = { head: null };

  this.insert = insert.bind(this, Node, privates);
  this.find = find.bind(this, privates);
  this.remove = remove.bind(this, privates);
  this.pop = pop.bind(this, privates);
  this.toString = toString.bind(this, privates);
}




var list = new LinkedList();

console.log(list.find(3)); // null
console.log(list.toString()); // [ ]
list.insert(1).insert(2).insert(3).insert(4).insert(5);
console.log(list.toString()); // [ 1, 2, 3, 4, 5 ]
console.log(list.find(3)); // { value: 3, next... }
list.remove(1);
console.log(list.find(1)); // null
console.log(list.toString()); // [ 1, 2, 4, 5 ]
list.insert(3);
console.log(list.toString()); // [ 1, 2, 4, 5, 3 ]
console.log(list.pop()); // { value 3, next:... }
console.log(list.toString()); // [ 1, 2, 4, 5 ]




function insert(Node, privates, value) {
  if (!privates.head) {
    privates.head = new Node(value);
  } else {
    var previous, node = new Node(value), position = privates.head;
    while (position) {
      previous = position;
      position = position.next;
    }
    previous.next = node;
  }
  return this;
}

function find(privates, value) {
  var position = privates.head;
  while (position && position.value != value) {
    position = position.next;
  }
  return position;
}

function remove(privates, value) {
  var position = privates.head;
  if (privates.head.value == value) {
    privates.head = privates.head.next;
  }
  while (position && position.next && position.next.value != value) {
    position = position.next;
  }
  if (position.next) position.next = position.next.next;
}

function pop(privates) {
  var position = privates.head;
  while (position && position.next && position.next.next) {
    position = position.next;
  }
  var node = position && position.next;
  position.next = null;
  return node;
}

function toString(privates) {
  var position = privates.head;
  var string = '[ ';
  while (position) {
    string += position.value + ', ';
    position = position.next;
  }
  return string.substring(0, string.length - 2 || 2) + ' ]';
}
