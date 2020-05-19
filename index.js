// Your code here
function mapToNegativize(sourceArray){
    let newAry = []
    for(let i=0; i < sourceArray.length; i++){
        newAry.push(sourceArray[i] * -1)
    }
    return newAry
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    let newAry = []
    for(let i=0; i < sourceArray.length; i++){
        newAry.push(sourceArray[i] * 2)
    }
    return newAry
}

function mapToSquare(sourceArray){
    let newAry = []
    for(let i=0; i < sourceArray.length; i++){
        newAry.push(sourceArray[i] ** 2)
    }
    return newAry
}

function reduceToTotal(sourceArray, startingPoint=0){
    for(let i=0; i < sourceArray.length; i++){
       startingPoint = startingPoint + sourceArray[i]
    }
    return startingPoint
}

function reduceToAllTrue(sourceArray){
    let i = 0
    while(sourceArray[i]) {
        i++
    }
    if (i === sourceArray.length){
        return true
    }else {
        return false
    }
}

function reduceToAnyTrue(sourceArray){
    for(let i=0; i < sourceArray.length; i++){
        if(sourceArray[i]) return true
    }
    return false
}