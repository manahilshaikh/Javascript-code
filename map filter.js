const { REFUSED } = require("dns");

const mobile=[
    {name:"samsung Galaxy s20",rate:"1000",color:"black"},
    {name:"samsung Guru",rate:"2000",color:"golden"},
    {name:"POCO C50",rate:"2000",color:"blue"},
    {name:"APPLE iphone 14",rate:"5000",color:"black"},
    {name:"MotorolaG62",rate:"3000",color:"Gray"},
    {name:"I KALL K60",rate:"9000",color:"green"}, ///coll back function()
    {name:"REDMI 9i",rate:"8000",color:"Blue"},
    {name:"POCO C31",rate:"8000",color:"Gray"},
];
//const result =mobile.filter((item)=>item.rate==2000)   //2000 value check only
//const result1=mobile.filter((item)=>item.rate==="2000")  //"2000"data and value check
//const result=mobile.filter((item)=>console.log(item))  //pura deta ans
//const result=mobile.filter((item)=>item.color)
    // const result=mobile.filter(function(item){    //filter are the filter case sanstive
    //     return  item.color==="blue"
    // })
    //const result2=mobile.filter((item,index)=>index.name==[2])
    console.log(mobile[1],[4])
    // const result1=mobile.map((elem)=>elem.color)  //map are the itrat function
    // const result1=mobile.map((elem)=>elem.name== "POCO C50"&&elem.rate==="2000") //is say nhi hota
    // const result1=mobile.filter((elem)=>elem.name== "POCO C50"&&elem.rate==="2000")
    // console.log(result1)
     const arr=[]
        arr[0]=10
        arr[1]=20
        arr[2]=3000
        arr[3]=40
        arr[4]=50
        arr[5]=60
        arr[6]=7000
        arr[7]=80
        arr[8]=90
        arr[9]=100
        console.log(arr)
       console.log(arr[6])        ///change the array
//console.log(result)
const arrrr=['a','b','c']
const res=arrrr.map((I,n)=>{
    return['a','b','c','d']
})
console.log(res)