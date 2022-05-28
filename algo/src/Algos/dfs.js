export function dfs(grid,startNode,endNode)
{
  const StackNodes=[startNode];
  const visitedNodes=[];
  while(StackNodes.length)
  {
      const visnode=StackNodes.pop();
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
              StackNodes.push(nextNode);
              }
          }
          if(visnode.row<grid.length-1)
          {
              nextNode=grid[visnode.row+1][visnode.col];
              if(!nextNode.isVisited){
              nextNode.previousNode=visnode;
              StackNodes.push(nextNode);
              }
          }
          if(visnode.col>0)
          {
                nextNode=grid[visnode.row][visnode.col-1];
                if(!nextNode.isVisited){
                nextNode.previousNode=visnode;
                StackNodes.push(nextNode);
                }
          }
          if(visnode.col<grid[0].length-1)
          {
              nextNode=grid[visnode.row][visnode.col+1];
              if(!nextNode.isVisited){
              nextNode.previousNode=visnode;
              StackNodes.push(nextNode);
              }
          }
      }

  }
}
export function shortestPathNodesDFS(endNode)
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