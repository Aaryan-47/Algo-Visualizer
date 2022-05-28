function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function Helper(array,animations)
{
    for(let i=0;i<array.length;i++)
    {
        for(let j=i+1;j<array.length;j++)
        {
            if(array[j]<array[i])
            {
                animations.push([i,j]);
                animations.push([i,j]);
                animations.push([i,j,array[j],array[i]])
                swap(array,i,j)
            }
        }
    } 
}
export default function bubbleSort(array)
{
    const animations=[];
    Helper(array,animations);
    return animations;
}