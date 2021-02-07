/* function randomizeArr (arr){
    let newArr=[];
    while(newArr.length <= arr.length){
        let rand = Math.floor(Math.random()*arr.length);
        if(newArr.indexOf(arr[rand]) === -1){
            newArr.push(arr[rand])
        }
        if(newArr.length === arr.length){
            break;
        }
    }
    return newArr
} */
function randomizeArr (arr){
    let rand;
    let newArr = [];
    do{
        rand = Math.floor(Math.random()*arr.length);
        if(newArr.indexOf(arr[arr.indexOf(arr[rand])])===-1)
        {
            newArr.push(arr[arr.indexOf(arr[rand])]) 
        }
    }while(newArr.length !== arr.length)
    return newArr;
}



export {randomizeArr};