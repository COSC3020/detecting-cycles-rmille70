function hasCycle(adjMatrix) {
    if (!adjMatrix || !adjMatrix.length) { return false; }
    if(adjMatrix.length == 1 && adjMatrix[0][0] == 1){ return true; }
    if(adjMatrix.length == 1 && adjMatrix[0][0] == 0){ return false; }
    for(let v = 0; v < adjMatrix.length; v++){
        for(let e = 0; e < adjMatrix[v].length; e++){
            if(adjMatrix[v][e] == 1){
                let cycle = dfsCycle(adjMatrix, e, v);
                if(cycle.length >= 1){ return true; }
            }
        }
    }
    return false;
}

// Renamed my depth first search from graph search assignment
// Graph Search Repo: https://github.com/COSC3020/graph-search-rmille70
function dfsCycle(adjMatrix, startNode, targetNode) {
    let visited = []; 
    function dfsFinder(currentNode, path) {
        visited.push(currentNode);
        if (currentNode == targetNode) { return path.concat(currentNode); }
        for (let adj = 0; adj < adjMatrix[currentNode].length; adj++) {
            if (!visited.includes(adj) && adjMatrix[currentNode][adj] == 1) {
                const foundPath = dfsFinder(adj, path.concat(currentNode));
                if (foundPath) { return foundPath; }
            }
        }
        return [];
    }
    let sol = dfsFinder(startNode, []);
    return sol;
}