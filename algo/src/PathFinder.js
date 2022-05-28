
import {useState,useEffect} from 'react';
import './PathFinder.css';
import './index.css';
import Node from './Node/Node';
import{bfs, shortestPathNodes} from './Algos/bfs';
import{dfs,shortestPathNodesDFS} from './Algos/dfs';
import logo from './images/path.png';
function PathFinder() {

  const[grid,setgrid]=useState([])
  //const[firstTime,setfirstTime]=useState(1);
  const[mouseIsPressed,setmouseIsPressed]=useState(0);
  useEffect(()=>{getGrid()
  },[]);
  const getGrid=()=>{
    const nodes=[];
    for(let row=0;row<15;row++)
    {
        const currentRow=[];
        for(let col=0;col<50;col++)
        {
            currentRow.push({col,row,isStart:row===10&&col===15,isEnd:row===10&&col===35
                           ,distance:Infinity,isVisited:false,isWall:false,previousNode:null
                          });
        }
        nodes.push(currentRow);
    }
    setgrid(nodes);
}
  function generate()
  {
    clearWall();
    clearGrid();
    const newGrid=grid.slice();
    for(let i=0;i<200;i++)
    {
      let r=Math.floor(Math.random()*15);
      let c=Math.floor(Math.random()*50);
      if(!(r===10&&c===35)&&!(r===10&&c===15))
      {
        const node=grid[r][c];
        const node_new={...node,isWall:true}
        newGrid[r][c]=node_new;
      }
    }
    setgrid(newGrid);
  }
  function AnimateResult(NodesInOrderOfPath)
  {
    for(let i=0;i<NodesInOrderOfPath.length;i++)
    {
      setTimeout(()=>{
        const name=document.getElementById(`node-${NodesInOrderOfPath[i].row}-${NodesInOrderOfPath[i].col}`).className;
        if(name!=='node node-start'&&name!=='node node-finish')
        document.getElementById(`node-${NodesInOrderOfPath[i].row}-${NodesInOrderOfPath[i].col}`).className='node node-shortest-path';
      },40*i);
    }
    setTimeout(()=>{
      const string ="The Path length ="+`${NodesInOrderOfPath.length}`;
    window.alert(`${string}`)
    },NodesInOrderOfPath.length*71);
  }
  function AnimateVisited(visitedOrder,NodesInOrderOfPath)
  {
    console.log(visitedOrder);
     for(let i=0;i<=visitedOrder.length;i++)
     {
       if(i===visitedOrder.length)
       {
         setTimeout(()=>{AnimateResult(NodesInOrderOfPath)},10*i);
         return;
       }
       setTimeout(()=>
       {
         const visited=visitedOrder[i];
         const name=document.getElementById(`node-${visited.row}-${visited.col}`).className;
         if(name!=='node node-start'&&name!=='node node-finish')
         document.getElementById(`node-${visited.row}-${visited.col}`).className='node node-visited';
       },10*i)
     }
  }
  
  function BFSvisual()
  {
    const visitedOrder=bfs(grid,grid[10][15],grid[10][35]);
    const NodesInOrderOfPath=shortestPathNodes(grid[10][35]);
    AnimateVisited(visitedOrder,NodesInOrderOfPath);
  }
  function DFSvisual()
  {
    const visitedOrder=dfs(grid,grid[10][15],grid[10][35]);
    const NodesInOrderOfPath=shortestPathNodesDFS(grid[10][35]);
    AnimateVisited(visitedOrder,NodesInOrderOfPath);
  }
  function getWalledGrid(row,col)
  {
      const newGrid=(grid).slice();
      const node_initial=newGrid[row][col];
      const node_walled={...node_initial,isWall:true}
      newGrid[row][col]=node_walled;
      return newGrid;
  }
  function handleMouseDown(row,col)
  {
      const grid_new=getWalledGrid(row,col);
      setgrid(grid_new);
      setmouseIsPressed(1);
  }
  function handleMouseEnter(row,col)
  {if(mouseIsPressed){
    const grid_new=getWalledGrid(row,col);
    setgrid(grid_new);   
  }
  }
  function handleMouseUp()
  {
      console.log("s");
      setmouseIsPressed(0);
    console.log(grid);
  }
  
  function clearWall()
  {
      const newGrid=grid.slice();
      for(const row of newGrid)
      {
        for(const node of row)
        {
          let name=document.getElementById(`node-${node.row}-${node.col}`).className;
          if(name==='node node-wall')
          {
            document.getElementById(`node-${node.row}-${node.col}`).className='node';
            node.isWall=false;
          }
        }
      }
  }
  function clearGrid()
  {
    const newGrid=grid.slice();
    for(const row of newGrid)
    {
      for(const node of row)
      {
        const name=document.getElementById(`node-${node.row}-${node.col}`).className;
        if(name==='node node-visited'||name==='node node-shortest-path')
        {
          document.getElementById(`node-${node.row}-${node.col}`).className='node';
          node.isVisited=false;
          node.distance=Infinity;
        }

      }
    }
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
    <a class="navbar-brand design" href="#"><img src={logo} className="img1"style={{height:`30px`,width:'30px'}} ></img>PATHFINDING VISUALIZER</a>
    <form class="form-inline">
    <button class="btn btn-danger but" type="button" onClick={generate}>Generate Maze</button>
    <button class="btn btn-danger but" type="button" onClick={clearGrid}>Clear Path</button>
    <button class="btn btn-danger but" type="button" onClick={clearWall}>Remove Walls</button>
    <button class="btn btn-success but1" type="button" onClick={BFSvisual}>Breadth First Search</button>
    <button class="btn btn-success but1" type="button" onClick={DFSvisual}>Depth First Search</button>
    </form>
  </div>
    </nav>
    <div className="grid">
        {(grid).map((row,rowIdx) =>{
            return <div key={rowIdx}>
                {
                   row.map((node,nodeIdx)=><Node key={nodeIdx} isStart={node.isStart} isEnd={node.isEnd}
                   isWall={node.isWall} isVisited={node.isVisited} distance={node.distance}
                   col={node.col} row={node.row} mouseIsPressed={mouseIsPressed}
                   onMouseDown={(row, col) => handleMouseDown(row, col)}
                   onMouseEnter={(row, col) =>
                     handleMouseEnter(row, col)
                   }
                   onMouseUp={() => handleMouseUp()}></Node>)
                }
                </div>
        })}
    </div>
    </>
  );
}

export default PathFinder;
