let arr = [3,2,1,0,5]
let n = arr.length;

for(let i=0; i<n-1;i++)
{
    for(let j=0; j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j+1]
            arr[j+1] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr)
