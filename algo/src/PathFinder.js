
import {useState,useEffect} from 'react';
import './PathFinder.css';
import './index.css';
import Node from './Node/Node';
import{bfs, shortestPathNodes} from './Algos/bfs';
import{dfs,shortestPathNodesDFS} from './Algos/dfs';
import logo from './images/path2.jpg';

function PathFinder() {
  useEffect(()=>{
    getGrid()
  },[])

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
        getGrid()
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  let w=useWindowDimensions().width
  let h=useWindowDimensions().height
  let start=Math.round(useWindowDimensions().height/60)
  let start_col=Math.round(useWindowDimensions().height/70)
  let end_col=Math.round(useWindowDimensions().height/30)
  console.log(w)
  console.log(h)
  const[grid,setgrid]=useState([])
  //const[firstTime,setfirstTime]=useState(1);
  const[mouseIsPressed,setmouseIsPressed]=useState(0);
  function generate()
  {
    clearWall();
    clearGrid();
    const newGrid=grid.slice();
    for(let i=0;i<200;i++)
    {
      let r=Math.floor(Math.random()*20);
      let c=Math.floor(Math.random()*50);
      if(!(r===10&&c===35)&&!(r===10&&c===15)&&r<grid.length&&c<grid[0].length)
      {
        const node=grid[r][c];
        const node_new={...node,isWall:true}
        newGrid[r][c]=node_new;
      }
    }
    setgrid(newGrid);
  }

  const getGrid=()=>{
    const nodes=[];
    for(let row=0;row<w/75;row++)
    {
        const currentRow=[];
        for(let col=0;col<(h/18);col++)
        {
            currentRow.push({col,row,isStart:row===start&&col===start_col,isEnd:row===start&&col===end_col
                           ,distance:Infinity,isVisited:false,isWall:false,previousNode:null,weight:1
                          });
        }
        nodes.push(currentRow);
    }
    setgrid(nodes);
   
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
    const visitedOrder=bfs(grid,grid[start][start_col],grid[start][end_col]);
    const NodesInOrderOfPath=shortestPathNodes(grid[start][end_col]);
    AnimateVisited(visitedOrder,NodesInOrderOfPath);
  }
  function DFSvisual()
  {
    const visitedOrder=dfs(grid,grid[start][start_col],grid[start][end_col]);
    const NodesInOrderOfPath=shortestPathNodesDFS(grid[start][end_col]);
    AnimateVisited(visitedOrder,NodesInOrderOfPath);
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
  function show()
{
const links = document.querySelector('.links')
  links.classList.toggle('show-links')

}
  return (
    <>
   <nav>
      <div class="nav-center">
        <div class="nav-header">
          <button class="nav-toggle" onClick={show}>
            <i class="fas fa-bars"></i>
          </button>
        
        <ul class="links2">
        <li>
          <button className="btn btn-primary btn-danger" onClick={generate}>Generate Maze</button>
          </li>
          <li>
          <button className="btn btn-primary btn-danger" onClick={clearGrid}>Clear Path</button>
          </li>
          <li>
          <button className="btn btn-primary btn-danger" onClick={clearWall}>Remove Walls</button>
          </li>
          </ul>
          </div>
          <ul class="links">
          <li>
          <button className="btn btn-primary btn-success" onClick={BFSvisual}>Breadth First Search</button>
          </li>
          <li>
          <button className="btn btn-primary btn-success" onClick={DFSvisual}>Depth First Search</button>
          </li>
        </ul>
       
      </div>
    </nav>
    <div className="grid">
      
        {(grid).map((row,rowIdx) =>{
            return <div key={rowIdx}>
                {

                   row.map((node,nodeIdx)=><Node width={w} height={h} key={nodeIdx} isStart={node.isStart} isEnd={node.isEnd}
                   isWall={node.isWall} isVisited={node.isVisited} distance={node.distance}
                   col={node.col} row={node.row} wt={node.weight} mouseIsPressed={mouseIsPressed}
                  ></Node>)
                }
                </div>
        })}
    </div>
    </>
  );
}

export default PathFinder;
