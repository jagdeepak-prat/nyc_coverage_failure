const hello_from_dependency=require('dummy_node_module');

function hello(){
    return new Promise((resolve,reject)=>{
    console.log("hello world");
    resolve("hello world")
    })
}
module.exports = {
    "hello":hello,
    "hello_from_dependency":hello_from_dependency
}