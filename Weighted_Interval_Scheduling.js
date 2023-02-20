"use strict"
// let cost =[50,20,100,200]
// let inter = [[1,2],[3,5],[6,19],[2,100]]

let cost =[2,4,3,2,3]
let inter = [[0,2],[0,4],[2,5],[4,6], [5,8]]

inter.sort((a,b)=>a[1]-b[1])

let n = inter.length
let dp  = new Array(n)

for(let i=0; i<n; i++){
    dp[i]=cost[i]
}

let i=1
let j=0

while(i<n ){
    let curStart = inter[i][0]
    let prevEnd = inter[j][1]
    
   while(prevEnd<=curStart){
        dp[i] = Math.max(dp[i], dp[j]+cost[i])
        j++
        prevEnd = inter[j][1]
   }
   i++;
   j=0;
    
}

console.log('final ',dp)

console.log('Rsult',dp[n-1])
