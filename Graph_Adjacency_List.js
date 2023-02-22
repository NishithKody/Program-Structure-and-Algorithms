"use strict"

class Graph{
    constructor(){
        this.node = []
        this.adjList = {}
    }

    addNode(node){
        this.node.push(node)
        this.adjList[node] = []
    }

    addEdge(node1, node2, cost){
        this.adjList[node1].push({node:node2, cost:cost})
        this.adjList[node2].push({node:node1, cost:cost})
    }
}

let graph = new Graph()
graph.addNode("a")
graph.addNode('b')

graph.addEdge('a','b',50)

console.log(graph)
console.log(graph.adjList)
