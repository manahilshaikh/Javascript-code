   const arr=[1,2,3,4,5,6,7,8]
   const first=arr.map((elem)=>elem).filter((ele)=>ele>2).reduce((a,c)=>a+c)
   console.log(first)
//    const arr1=[1,2,3,4,5,6,7,8]
//    const newFir1=arr1.forEach((elem)=>elem)
//    .filter((ele)=>ele > 5) 
//    .reduce((a,c)=>a+c)
//    console.log(newFir1)
const arr1="996677889910"
const result=arr1.split().reduce((acc,cur)=>acc*cur)
const result1=arr1. split ().reduce((acc,cur)=>Number(acc)+Number(cur))
console.log(result,result1)


