

//Promise
//Vada
// let qiymat = (a,b)  => {
//     return(a+b)
// }
// function Promis(){
//     let renders = qiymat(10,5)
//     let vada  = new Promise((resolve , reject) => {
//         if(renders === 15){
//             resolve("rostdan ham 15")
//         }else {
//             reject("yuq 15 emas")
//         }
//     })
//     console.log(vada);
//     vada.then((response) => console.log(response))
//     vada.catch((error) => console.log(error))
//     vada.finally(() => console.log("baribir chiqadi"))
// }
// Promis()

const expration = () => {
    let jsons = fetch("https://jsonplaceholder.typicode.com/users")
}
jsons.then((response) => response.json()).then((data) => console.log(data))    
