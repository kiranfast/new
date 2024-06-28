// let a = prompt("what is your name?")
// console.log('hi',a)

// let ticket = prompt("How Many Tickets Do You Want ?")
// console.log("You should pay Rs.",ticket*60)

// let a = prompt("Enter the Number")
// console.log(Number(a) + 5)

// async function gold(){
//     var data = await fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD")
//     console.log(data)
// }
// gold()

// let inputval = Number(document.getElementById("input").value);
// let resultval = inputval/2.54;       
// let result = document.getElementById("result")
// result.innerHTML = resultval

function gold(){

    let inputval  = Number(document.getElementById("input").value)
    let resultval = inputval/2.54
    let results = document.getElementById("result")
    results.innerHTML = resultval.toFixed(2)+ " Inches "
}
