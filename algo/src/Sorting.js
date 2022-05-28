
import {useState,useEffect} from 'react';
import './index.css';
import mergeSort from './Algos/mergesort';
import quickSort from './Algos/quicksort';
import selectionSort from './Algos/selectionsort';
import bubbleSort from './Algos/bubblesort';
import heapSort from './Algos/heapsort';
import randomSort from './Algos/randomsort';
import logo from './images/pic.jpg';
function Sorting() {
  const[arr,setarr]=useState([]);
  useEffect(()=>{reset()},[])
  function check(array1,array2)
  {
    if(array1.length!==array2.length)
    return false;
    else
    {
      const[idx1,idx2]=array1;
      const[idx3,idx4]=array2;
      if(idx1===idx3&&idx2===idx4)
      return true;
    }
    return false;
  }
  function randomsort()
  {
    const animations=randomSort(arr);
    console.log(animations)
    for(let i=0;i<animations.length;i++)
    {
      let change=(animations[i].length===2) //index 0 and 1 color change index 2 height change
      const arraybar=document.getElementsByClassName('arrayBar')
      if(change)
      {
        const[idx1,idx2]=animations[i];
        const barOneStyle=arraybar[idx1].style;
        const barTwoStyle=arraybar[idx2].style;
        const color=(i===1||check(animations[i],animations[i+1]))?'#00008B':'rgb(234, 252, 251)';
        setTimeout(()=>{
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;
        },i*10);
      }
      else
      {
        setTimeout(()=>{
          const[idx1,idx2,idx3,idx4]=animations[i];//idx1 is the index and idx2 is the value
          console.log(i);
          const barStyle=arraybar[idx1].style
          const barStyle2=arraybar[idx2].style
          barStyle.height=`${idx3*20}px`;
          barStyle2.height=`${idx4*20}px`;
        }
        ,i*10)
      }
      }
  }
  function bubblesort()
  {
    const animations=bubbleSort(arr);
    console.log(animations)
    for(let i=0;i<animations.length;i++)
    {
      let change=i%3!==2; //index 0 and 1 color change index 2 height change
      const arraybar=document.getElementsByClassName('arrayBar')
      if(change)
      {
        const[idx1,idx2]=animations[i];
        const barOneStyle=arraybar[idx1].style;
        const barTwoStyle=arraybar[idx2].style;
        const color=i%3===0?'#00008B':'rgb(234, 252, 251)';
        setTimeout(()=>{
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;
        },i*15);
      }
      else
      {
        setTimeout(()=>{
          const[idx1,idx2,idx3,idx4]=animations[i];//idx1 is the index and idx2 is the value
          const barStyle=arraybar[idx1].style
          const barStyle2=arraybar[idx2].style
          barStyle.height=`${idx3*20}px`;
          barStyle2.height=`${idx4*20}px`;
        }
        ,i*15)
      }
      }
  }
  function heapsort()
  {
    const animations=heapSort(arr);
    for(let i=0;i<animations.length;i++)
    {
      const arraybar=document.getElementsByClassName('arrayBar')
      const change=(animations[i].length===2)
      if(change)
      {
        const[idx1,idx2]=animations[i];
        const barOneStyle=arraybar[idx1].style;
        const barTwoStyle=arraybar[idx2].style;
        const color=(i===0||check(animations[i],animations[i+1]))?'#00008B':'rgb(234, 252, 251)';
        console.log(color);
        setTimeout(()=>{
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;
        },i*10);
      }
      else
      {
        setTimeout(()=>{
          const[idx1,idx2,idx3,idx4]=animations[i];//idx1 is the index and idx2 is the value
          console.log(animations[i].length)
          console.log(idx1,idx2,idx3,idx4);
          const barStyle=arraybar[idx1].style
          const barStyle2=arraybar[idx2].style
          barStyle.height=`${idx3*20}px`;
          barStyle2.height=`${idx4*20}px`;
        }
        ,i*10)
      }
      }
  }
  function selectionsort()
  {
    const animations=selectionSort(arr);
    console.log(animations)
    for(let i=0;i<animations.length;i++)
    {
      let change=i%3!==2; //index 0 and 1 color change index 2 height change
      const arraybar=document.getElementsByClassName('arrayBar')
      if(change)
      {
        const[idx1,idx2]=animations[i];
        const barOneStyle=arraybar[idx1].style;
        const barTwoStyle=arraybar[idx2].style;
        const color=i%3===0?'#00008B':'rgb(234, 252, 251)';
        setTimeout(()=>{
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;
        },i*15);
      }
      else
      {
        setTimeout(()=>{
          const[idx1,idx2,idx3,idx4]=animations[i];//idx1 is the index and idx2 is the value
          const barStyle=arraybar[idx1].style
          const barStyle2=arraybar[idx2].style
          barStyle.height=`${idx3*20}px`;
          barStyle2.height=`${idx4*20}px`;
        }
        ,i*15)
      }
      }
    }
  function quicksort()
  {
    const animations=quickSort(arr);
    console.log(animations)
    for(let i=0;i<animations.length;i++)
    {
      let change=i%3!==2; //index 0 and 1 color change index 2 height change
      const arraybar=document.getElementsByClassName('arrayBar')
      if(change)
      {
        const[idx1,idx2]=animations[i];
        const barOneStyle=arraybar[idx1].style;
        const barTwoStyle=arraybar[idx2].style;
        const color=i%3===0?'#00008B':'rgb(234, 252, 251)';
        setTimeout(()=>{
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;
        },i*10);
      }
      else
      {
        setTimeout(()=>{
          const[idx1,idx2,idx3,idx4]=animations[i];//idx1 is the index and idx2 is the value
          const barStyle=arraybar[idx1].style
          const barStyle2=arraybar[idx2].style
          barStyle.height=`${idx3*20}px`;
          barStyle2.height=`${idx4*20}px`;
        }
        ,i*10)
      }
      }
    }
  function mergesort()
  {
    var t0=performance.now();
    const animations=mergeSort(arr);
    var t1=performance.now();
    console.log(animations)
    const arraybar=document.getElementsByClassName('arrayBar')
    for(let i=0;i<animations.length;i++)
    {
      let change=i%3!==2; //index 0 and 1 color change index 2 height change
      if(change)
      {
        const[idx1,idx2]=animations[i];
        const barOneStyle=arraybar[idx1].style;
        const barTwoStyle=arraybar[idx2].style;
        const color=i%3===0?'#00008B':'rgb(234, 252, 251)';
        setTimeout(()=>{
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;
        },i*10);
      }
      else
      {
        setTimeout(()=>{
          const[idx1,idx2]=animations[i];//idx1 is the index and idx2 is the value
          const barStyle=arraybar[idx1].style
          barStyle.height=`${idx2*20}px`;
        }
        ,i*10)
      }
      }
      let time_taken=t1-t0;
      const string="Time taken to sort the array="+`${time_taken}`+"Milliseconds"
      setTimeout(()=>{
      window.alert(string);
      },15000);
      
       
    }
    console.log(arr);
const reset=()=>
{
  let arr=[]
  for(let p=0;p<80;p++){
  let i=Math.floor(Math.random()*30+2);
  arr.push(i);
  }

  setarr(arr);
}
const shuffle=()=>
{
  const array=[...arr];
  for(let i=array.length-1;i>=0;i--)
  {
    let j=Math.floor(Math.random()*i+1);
    var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
  }
  setarr(array);
}
 console.log(arr);
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
    <a class="navbar-brand design" href="#"><img src={logo} className="img"></img>SORTING VISUALIZER</a>
    <form class="form-inline">
    <button class="btn btn-danger but" type="button" onClick={reset}>Reset Array</button>
    <button class="btn btn-danger but" type="button" onClick={shuffle}>Shuffle Array</button>
    <button class="btn btn-success but1" type="button" onClick={quicksort}>Quick Sort</button>
    <button class="btn btn-success but1" type="button" onClick={mergesort}>Merge Sort</button>
    <button class="btn btn-success but1" type="button" onClick={heapsort}>Heap Sort</button>
    <button class="btn btn-success but1" type="button" onClick={selectionsort}>Selection Sort</button>
    <button class="btn btn-success but1" type="button" onClick={randomsort}>Random Quick Sort</button>
    <button class="btn btn-success but1" type="button" onClick={bubblesort}>Bubble Sort</button>
  </form>
  </div>
    </nav>
    <br></br>
   <div className="container container-fluid">
    {arr.map((item)=>(<div className="arrayBar" style={{height:`${item*20}px`}}></div>))
    }
    </div>
    </>
  );
}

export default Sorting;
