/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  const graph = {};
  for(let i = 0; i < n; i++) graph[i] = { r: [], b: [] };
  redEdges.forEach(([i, j]) => graph[i].r.push(j));
  blueEdges.forEach(([i, j]) => graph[i].b.push(j));

  const res = Array(n).fill(-1);
  const visited = {
    r: new Set(),
    b: new Set(),
  };

  const queue = [
    [0, 'r'],
    [0, 'b'],
  ];

  let len = 0;

  while(queue.length){
    const j = queue.length;

    for(let i = 0; i < j; i++){
      const [currValue, currColor] = queue.shift();

      if(res[currValue] === -1){
        res[currValue] = len;
      };

      const nextValues = graph[currValue][currColor];
      const nextColor = currColor === 'b' ? 'r' : 'b';

      nextValues.forEach((nextValue) => {
        if (!visited[nextColor].has(nextValue)) {
          visited[nextColor].add(nextValue);
          queue.push([nextValue, nextColor]);
        };
      });
    };
    len++;
  };

  return res;
};