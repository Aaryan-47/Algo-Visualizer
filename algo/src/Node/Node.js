
import './Node.css';

export default function Node(props)
{
    const {
        width,
        height,
        col,
        isEnd,
        isStart,
        isWall,
        row,
        wt
      } = props;
    let checkWhether;
    if(isEnd===true)
    checkWhether='node-finish'
    else if(isStart===true)
     checkWhether='node-start';
     else if(isWall===true)
     checkWhether='node-wall';
     else if(wt>1)
     checkWhether='node-weight';
    return (
        <div
        style={{width:`${width/50}px`,height:`${height/30}px`}}
        id={`node-${row}-${col}`}
        className={`node ${checkWhether}`}
        ></div>
    )
}