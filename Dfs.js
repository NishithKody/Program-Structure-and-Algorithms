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

let dfs = (graph, des, start) =>{
    let stack = []
    let visited = []
    let adj = graph.adjList
    stack.push(adj[start])
    visited.push(start)

    console.log('Initial stack', stack)
    console.log('Initial visited',visited)

    while(stack.length!=0){
        let cur = stack.pop()

        // console.log('cur', cur)
        for(let i of cur){

            console.log(i)
            if(visited[i.node]){
                continue
            }

            visited.push(i.node)

            if(i.node == des){
                return `Des found ${des}`
            }

            stack.push(adj[i.node])
        }

    }


}

let graph = new Graph()
graph.addNode("1")
graph.addNode('2')
graph.addNode('3')
graph.addNode('4')
graph.addNode('5')
graph.addNode('6')
graph.addNode('7')
graph.addNode('8')
graph.addNode('9')
graph.addNode('10')
graph.addNode('11')
graph.addNode('12')

graph.addEdge('1','2',1)
graph.addEdge('1','3',1)
graph.addEdge('1','4',1)
graph.addEdge('2','5',1)
graph.addEdge('2','6',1)
graph.addEdge('4','7',1)
graph.addEdge('4','8',1)
graph.addEdge('5','9',1)
graph.addEdge('5','10',1)
graph.addEdge('7','11',1)
graph.addEdge('7','12',1)

// console.log(graph.adjList)

console.log(dfs(graph, 11,1)
)
