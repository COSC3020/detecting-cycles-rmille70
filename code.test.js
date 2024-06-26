const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

const testCases = [
  {
    description: 'Empty adjacency matrix (No Cycles)',
    adjacencyMatrix: [],
    expectedResult: false,
  },

  {
    description: 'Single Node; no edges (No Cycles)',
    adjacencyMatrix: [[0]],
    expectedResult: false,
  },

  {
    description: 'Disconnected graph (No Cycles)',
    adjacencyMatrix: [[0, 0], [0, 0]],
    expectedResult: false,
  },

  {
    description: 'Single Node; has edge (Contains Cycle)',
    adjacencyMatrix: [[1]],
    expectedResult: true,
  },

  {
    description: 'Simple connected graph (Contains Cycle)',
    adjacencyMatrix: [[0, 1], [1, 0]],
    expectedResult: true,
  },

  {
    description: 'Graph with multiple cycles',
    adjacencyMatrix: [[0, 1, 0], [1, 0, 1], [0, 1, 0]],
    expectedResult: true,
  },

  {
    description: 'Reflexive Edge',
    adjacencyMatrix: [[1, 0], [0, 1]],
    expectedResult: true,
  },

  {
    description: 'Disconnected Graph + Reflexive Edge',
    adjacencyMatrix: [[0, 1, 0], [0, 0, 0], [0, 0, 1]],
    expectedResult: true,
  },

  {
    description: 'Directed graph with a path',
    adjacencyMatrix: [[0, 1, 0], [0, 0, 1], [0, 0, 0]],
    expectedResult: false,
  },
];

function runTest(testCase) {
  const actualResult = hasCycle(testCase.adjacencyMatrix);
  const passed = JSON.stringify(actualResult) === JSON.stringify(testCase.expectedResult);
  console.log(`Test Case: ${testCase.description} - ${passed ? 'Passed' : 'Failed'}`);
  console.log(`  Adjacency Matrix: ${JSON.stringify(testCase.adjacencyMatrix)}`);
  console.log(`  Expected Result: ${JSON.stringify(testCase.expectedResult)}`);
  console.log(`  Actual Result: ${JSON.stringify(actualResult)}`);
  console.log('------------------------------------');
  return passed;
}

for(let c = 0; c < testCases.length; c++){
	assert(runTest(testCases[c]));
}
