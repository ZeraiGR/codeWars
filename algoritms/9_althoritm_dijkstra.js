// Алгоритм дейкстры. 
// Поиск кратчайшего пути в графе

const graph = {};
graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

function shortPath(graph, start) {
	let costs = {};
	let processed = [];
	let neighbors = {};

	Object.keys(graph).forEach(node => {
		if (graph[node] !== graph[start]) {
			let cost = graph[start][node];
			costs[node] = cost || 10000000;
		}
	});

	let node = findLowestCostNode(costs, processed);

	while (node) {
		let cost = costs[node];
		neighbors = graph[node];

		Object.keys(neighbors).forEach(neighbor => {
			let newCost = cost + neighbors[neighbor];
			if (newCost < costs[neighbor]) {
				costs[neighbor] = newCost;
			}
		});

		processed.push(node);
		node = findLowestCostNode(costs, processed);
	}

	return costs;
}

function findLowestCostNode(costs, processed) {
	let minCost = 10000000;
	let minCostNode;

	Object.keys(costs).forEach(node => {
		let cost = costs[node];
		if (cost < minCost && !processed.includes(node)) {
			minCost = cost;
			minCostNode = node;
		}
	});

	return minCostNode;
}


console.log(shortPath(graph, 'a'));