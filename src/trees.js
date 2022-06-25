class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  insertChild(value) {
    // create new node with value.
    // push to children
    if (this.children === null) {
      this.children = [];
    }
    const node = new Tree(value);
    this.children.push(node);
    console.log(node, this.children);
  }

  // Uses a Depth-First Traversal
  static traverse(tree, func = console.log) {}

  contains(searchValue) {}

  static size(tree) {}

  static find(tree, value) {}

  insert(parentTree, value) {}

  remove(value) {}

  reorder(node1, node2) {}
}

export default Tree;
