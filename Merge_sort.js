"use strict"

let a = [1,5,9,3,10,11,2,4]
console.log('original ',a)

let sort_list = (a,b) =>{
    // console.log('a',a)
    // console.log('b',b)
    let n = a.length
    let m = b.length

    let sorted = []
    let i=0
    let j=0

    while(i<n&& j<m){
        if(a[i]<b[j]){
            sorted.push(a[i])
            i++
        }
        else{
            sorted.push(b[j])
            j++;
        }
    }
    while(i<n){
        sorted.push(a[i])
        i++
    }

    while(j<m){
        sorted.push(b[j])
            j++;
    }
    // console.log('sorted',sorted)

    return sorted
}

let merge_sort = (a)=>{
    // console.log(a)
    // console.log('----')
    if(a.length<=1){
        return a
    }
    let low =0
    let high = a.length
    let mid = parseInt((low+high)/2)
    
    let left = merge_sort(a.slice(low,mid))
    let right = merge_sort(a.slice(mid, high))

    return sort_list(left,right)

}

let res = merge_sort(a)
console.log(res)
