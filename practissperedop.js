const animalname=["cat","dog","elephant","maus","manki","got"]
const sportName=["crickat","footboll","batmentel","tennis"]
const cityName=["auragabad","hyderabad","mumbai","kolhapur","kashmir"]
const newArr=[...animalname,...sportName,...cityName]
console.log(newArr)
const sweet={name:"gulabjamun",color:"black",price:"10"}
const laziz={name:"shorma",color:"red,bron",price:"90"}
const baick={name:"KTM",color:"orang black",price:"1000"}
const newObj={...baick,...laziz,...sweet}
console.log(newObj)
const name={
    a:"muskan",
    b:"zahura"
}
const room={
    c:"saba",
    d:"shifa",
    e:"lubna"
}
const newobj={...name,...room}
console.log(newobj)
const copyArr=[...newArr]
const copyObject={...newobj}
console.log(newArr)
console.log(newobj)