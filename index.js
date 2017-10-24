// b=[1,1,1,2,2,3,3,4,4,1,1,1,1
//  ];
// var count={};
// b.forEach(function(i)
// {
//        count[i]=(count[i]||0)+1;
  

// });
// console.log(count);
var count=[11,11,22,22,33,33]
var map =new Map();
count.forEach(function(element,index,arr)
{
    if(map.has(element))
    {
        map.set(element,map.get(element)+1)
    }
    else{
        map.set(element,1);
     }
}, this);
var maparr=[...map];
maparr.sort(function(a,b){
return b[1]-a[1];

})
console.log(maparr);
