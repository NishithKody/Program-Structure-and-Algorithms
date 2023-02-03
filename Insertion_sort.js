let a = [3,1,2,5,0,4,7,8,10]

console.log(a.length)
for(let i =0; i<a.length-1; i++){
    // console.log(i)
    for(let j=i+1; j<a.length; j++){
        if(a[i]>a[j]){
            let temp = a[j]
            a[j] = a[i]
            a[i] = temp
        }
    }
}

console.log(a)
