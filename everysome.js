//const arr=["nanded","parbhani","hydrabad","jalna","aurangabad"]
const car=["supra","marsadise","bMw","mastan","farari","lambergini","taksi"]
const result=car.some((item)=>item.toLowerCase()=="bMw".toLowerCase())
const result1=car.every((item)=>item.toLowerCase()=="bMw".toLowerCase())
const result2=car.every((item)=>item.toLowerCase().includes("marsa".toLowerCase()))
console.log(result,result1,result2)
//////////
///////////////////////////////////////////////////////////////////////////
//INDEXOF  ()
const fruits=["mango","KIWI","orange","pineapple","orange","orange"]
 const result3=fruits.indexOf("orange")
// const middel=fruits[fruits]
// console.log(result3)
midddle-index(fruits-length-1)/2

function found (){
    fruits.reduce(function(elem,index,i){
        if (index==="orange")
        elem.push(i);
        return elem
        
    },[]);
}
console.log(fruits(found()))




