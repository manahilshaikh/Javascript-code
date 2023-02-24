const first=[1,2,3,4,5]
const second=[10,20,30,40]
const third=[100,200,300,400]
const newArr=[...first,...second,...third]
console.log(newArr)
////SPREAD OPERATER is used for concat multiple array and object 
/////ti used to coppy array

    const car={
        carName:"Toyota",
        model:"XD4000",
        color:"Black Glossy",
        type:"sedan",
        seats:"5",
        tyers:"4"
}
const school={
    named:"shaikh taha",
    surname:"shaikh",
    gender:"male",
    ability:"Abled",
}
const name={
    named:"zahura",
    surname:"pathan",
    gender:"female",
    ability:"Abled",
}
const newObj={...car,...school,...name}
console.log(newObj)
///////////////////////////////////////////////////////////////
const friend=["zahura","muskan di","lubna di","saba di","shifa"]
const sister=["uzma di","samreen di","arshiya di","fariya","laiba","saniya"]
const bro=["Azhar bhai","altmash bhai","shoeb bhai","noman bhai","saif bhai","taha"]
const newArr2=[...friend,...sister,...bro]
console.log(newArr2)
//////////////////////////////////////////////////////////////////
// const city={
//     name:"maharashtra",
//     name:"goa",
//     name:"aurngabad",
//     name:"hyderabad",
// }
// const fruits={
//     name:"apple",
//     name:"mango",
//     name:"pinapele",
//     name:"kiwi",
//     name:"banana",
// }
// const newArr3={...city,...fruits}
// console.log(newArr3)
////////////////////////////////////////////////////////////
const copyArr=[...newArr];
const copyObject={...newArr2}
console.log(copyArr)
console.log(copyObject)
console.log(newArr===copyArr)
console.log(newArr2===copyObject)
////////////////////////////////////////////////////////////////
//REST OPERATER use in function in the form of arry
//maltipel operater it is uese to last
const sum =(discount,...goodCost)=>{
    const totalCost =goodCost.reduce((acc,cur)=>acc+cur)
    const discountedCost=totalCost*discount
    return totalCost-discountedCost
}
console.log(sum(10,20,30,40,50,60))
function cloths(a,...z){
    const result=z.reduce((acc,cur)=>acc+cur)
    return a*result
}
console.log(cloths(0.1,2000,3500,4000))
const getTotalTravelExp=(km,carmilage,fualprice)=> km/carmilage*fualprice
console.log(getTotalTravelExp(300.987,18.78,97.87))

