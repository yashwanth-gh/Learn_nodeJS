function add(a,b){
    return (a+b);
}
function sub(a,b){
    return (a-b);
}

// const sub = (a,b)=>{a-b}   //! --not correct way

//? for single export :
//? module.export = add;


module.exports = {
    add,
    sub,
}