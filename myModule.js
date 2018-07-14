let a = (obj)=>{
    return obj.x * obj.y
}
let b = (obj)=>{
    return obj.x / obj.y
}
let c = (obj)=>{
    return obj.x + obj.y
}

module.exports = {
    a,
    b,
    c
}