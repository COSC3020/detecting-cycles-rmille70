function hasCycle(adjMatrix) {
    for(let v = 0; v < adjMatrix.length; v++){
        let cycle = dfsCycles(adjMatrix, v, v);
        if(cycle.length >= 1){ return true; }
    }
    return false;
}

// Altered my depth first search from https://github.com/COSC3020/graph-search-rmille70
function dfsCycles(adjMatrix, startNode, targetNode) {
    if (!adjMatrix || !adjMatrix.length) { return []; }
    if(startNode == adjMatrix.length-1){
        if(adjMatrix.length == 1 && adjMatrix[0][0] == 1){
            return [startNode];
        } else if (adjMatrix.length == 1 && adjMatrix[0][0] == 0){
            return [];
        } else if(adjMatrix[startNode][startNode] == 1){
            return [startNode];
        } else if(adjMatrix[startNode][startNode] == 0){
            return [];
        }
    }
    if(startNode == targetNode && adjMatrix[startNode][startNode] == 1){ return [startNode]; }
    startNode++;
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

