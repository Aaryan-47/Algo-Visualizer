function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function Helper(array,animations)
{
    for(let i=0;i<array.length;i++)
    {
        let min_index=i;
        for(let j=i+1;j<array.length;j++)
        {
            if(array[j]<array[min_index])
            {
                min_index=j;
            }
        }
        animations.push([i,min_index]);
                animations.push([i,min_index]);
                animations.push([i,min_index,array[min_index],array[i]])
                swap(array,i,min_index)
    } 
}
export default function selectionSort(array)
{
    const animations=[];
    Helper(array,animations);
    return animations;
}