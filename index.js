// Code your solutions in this file
// Code your solutions in this file
function writeCards(arr, event){
    let newArr = []
    for(let i =0; i<arr.length; i++){
        newArr[i] = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
    }
    return  newArr


}

function countDown(number){
    let num = number
    while(num>=0){
        console.log(num)
        num--
    } 
    
}
countDown(10)