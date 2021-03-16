const hello_from_dependency=require('dummy_node_module');
module.exports = {"hello":function(inputs){
    console.log("hello world");
    return "hello world"
},
"hello_from_dependency":hello_from_dependency
}