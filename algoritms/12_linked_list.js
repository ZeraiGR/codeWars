class LindedList {

	constructor () {
		this.size = 0;
		this.root = null;
	}

	add (value) {
		if (this.size === 0) {
			this.root = new Node(value);
			this.size += 1;
			return true;
		}
		let node = this.root;

		while(node.next) {
			node = node.next;
		}

		let newNode = new Node(value);
		node.next = newNode;
		this.size += 1;
	}

	getSize () {
		return this.size;
	}

	print() {
		let result = [];
		let node = this.root;

		while (node) {
			result.push(node.value);
			node = node.next;
		}

		console.log(result);
	}

}

class Node {
	constructor (value) {
		this.value = value;
		this.next = null;
	}
}

const linkList = new LindedList();

linkList.add(2);
linkList.add(3);
linkList.add(4);
linkList.add(5);
linkList.add(6);

linkList.print();