
import './Node.css';

export default function Node(props)
{
    const {
        col,
        isEnd,
        isStart,
        isWall,
        onMouseDown,
        onMouseEnter,
        onMouseUp,
        row,
      } = props;
    let checkWhether;
    if(isEnd===true)
    checkWhether='node-finish'
    else if(isStart===true)
     checkWhether='node-start';
     else if(isWall===true)
     checkWhether='node-wall';
    return (
        <div
        id={`node-${row}-${col}`}
        className={`node ${checkWhether}`}
        onMouseDown={() => onMouseDown(row,col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}></div>
    )
}