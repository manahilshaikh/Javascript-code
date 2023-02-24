// const obj={
//     fname:"userFname",
//     INname:"UserLname",
//     mName:"UserMname"
// };
// // const copyobj =obj;   //shallow copy of an object
// // copyobj.fname="zahura"
// // console.log(obj)      //orignale object
// // console.log(copyobj)
// ///////////////////////////////////////DEEP COPY /////////////////////
// const spreadCopy={...obj };
// spreadCopy.fname="muskan";
// spreadCopy.INname="lubna";
// spreadCopy.mName="zahura";
// console.log(spreadCopy)
// ////////////////////////////////////////////////////////////////////////////
// const obj={
//     name:"shaikh taha",
//     age:"19",
//     gender:"male",
//     city:"parbhani",
// }
// const copyobj=obj ;
// copyobj.name="Azhar",
// copyobj.age="30",
// copyobj.city="pune",
// console.log(obj)
// console.log(copyobj)
// const spreadCopy={...obj };
// spreadCopy.name="altamash",
//  spreadCopy.city="pune",
//  spreadCopy.gender="male",
//  spreadCopy.age="28"
//  console.log(spreadCopy)
const obj={
    a:"amer",
    b:"sohel",
    c:{d:"nanded",
    e:"maharashtra" }
}
// const coppyObj=obj
// coppyObj.c="nanded"
// coppyObj.d="maharashtra"
// console.log(obj)
// console.log(coppyObj)
const spreadCopy={...obj }
spreadCopy.d="pune"
spreadCopy.e="anderaperdesh"
console.log(spreadCopy)

/////////////////////////////////////////////////////////////////////////////
const arr=[{
    fName:"zimad",
    lName:"khan",},
    {fName:"ibrahim",
    lName:"khan"
}
]
const newArr=arr.map((elem)=>elem.fullname="zimad khan")
const newArr1=arr.map((item)=>{
        return{...item,fullname:`${item.fName}${item.lName}`}
})
console.log(newArr1)

