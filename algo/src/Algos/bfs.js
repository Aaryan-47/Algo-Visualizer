export function bfs(grid,startNode,endNode)
{
  const QueueNodes=[startNode];
  const visitedNodes=[];
  while(QueueNodes.length)
  {
      const visnode=QueueNodes.shift();
      if(visnode===endNode){
      console.log(visitedNodes);
      return visitedNodes;
      }
      if(!visnode.isWall&&(visnode.isStart||!visnode.isVisited))
      {
          visitedNodes.push(visnode);
          visnode.isVisited = true;
          let nextNode;
          if(visnode.row>0)
          {
              nextNode=grid[visnode.row-1][visnode.col];
              if(!nextNode.isVisited){
              nextNode.previousNode=visnode;
              QueueNodes.push(nextNode);
              }
          }
          if(visnode.row<grid.length-1)
          {
              nextNode=grid[visnode.row+1][visnode.col];
              if(!nextNode.isVisited){
              nextNode.previousNode=visnode;
              QueueNodes.push(nextNode);
              }
          }
          if(visnode.col>0)
          {
                nextNode=grid[visnode.row][visnode.col-1];
                if(!nextNode.isVisited){
                nextNode.previousNode=visnode;
                QueueNodes.push(nextNode);
                }
          }
          if(visnode.col<grid[0].length-1)
          {
              nextNode=grid[visnode.row][visnode.col+1];
              if(!nextNode.isVisited){
              nextNode.previousNode=visnode;
              QueueNodes.push(nextNode);
              }
          }
      }

  }
}
export function shortestPathNodes(endNode)
{
  const pathNodes=[];
  let node=endNode;
  while(node!=null)
  {
      pathNodes.unshift(node);
      node=node.previousNode;
  }
  return pathNodes;
}