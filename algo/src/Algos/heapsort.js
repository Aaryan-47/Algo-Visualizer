export default function heapSort(array)
{
    let size=array.length;
    const animations=[];
    for(let i=size/2-1;i>=0;i--){
    heapify(array,size,i,animations);
    }
    for(let i=size-1;i>=0;i--)
    {
        animations.push([i,0,array[0],array[i]])
        let t=array[0];
        array[0]=array[i];
        array[i]=t;
        heapify(array,i,0,animations);
    }
    console.log(array);
    return animations;
}
function heapify(array,sz,i,animations)
{
    let largest,lch,rch;
    lch=2*i+1;
    rch=2*i+2;
    if(lch>=sz)
    return;
    largest=i;
    if(lch<sz&&array[lch]>array[largest])
    {
        animations.push([lch,largest]);
        animations.push([lch,largest]);
        largest=lch;
    }
    if(rch<sz&&array[rch]>array[largest])
    {
        largest=rch;
        animations.push([rch,largest]);
        animations.push([rch,largest]);
    }
    if(largest!==i)
    {
    animations.push([largest,i,array[i],array[largest]])
      let t=array[largest];
      array[largest]=array[i];
      array[i]=t;
      heapify(array,sz,largest,animations);
    }
}