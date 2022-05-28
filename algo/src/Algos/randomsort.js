export default function randomSort(array)
{
    const animations=[];
    Helper(array,0,array.length-1,animations);
    console.log(array);
    return animations;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function Helper(Array,low,high,animations)
{
    if(low<high)
    {
        let random=low+Math.floor(Math.random(high-low+1));
    animations.push([random,high,Array[high],Array[random]]);
    swap(Array,random,high);
    let i=Partition(Array,low,high,animations);
        Helper(Array,low,i-1,animations);
        Helper(Array,i+1,high,animations)
    }
}
function Partition(Array,low,high,animations)
{
    let pivot=Array[high];
    let k=low;
    for(let i=low;i<high;i++)
    {
     if(Array[i]<pivot)
     {
         animations.push([i,k]);
         animations.push([i,k]);
         animations.push([i,k,Array[k],Array[i]]);
         swap(Array,i,k);
         k++;
     }
    }
    animations.push([k,high]);
    animations.push([k,high]);
    animations.push([k,high,Array[high],Array[k]]);
    swap(Array,k,high);
    return k;
}