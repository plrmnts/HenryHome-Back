
const buscar = (array1,array2)=>{
    var c=0
    for(let x=0; x<array1.length ;x++){
        for(let y=0; y<array2.length; y++){
           if (array1[x].dataValues.name===array2[y]){c++}
        }
    }
    if(c===array2.length){return true}
    return false
}

module.exports={buscar}