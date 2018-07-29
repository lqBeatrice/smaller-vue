// //回调函数：做饭，做饭之前需要买菜
// function buy(){
//     setTimeout(()=>{
//         let a = "蘑菇";
//     },2000);
// }
// buy();// 回调函数，将后续的处理逻辑传入到当前要做的事，事情做好后在调用此函数
// //要在cook中拿到"蘑菇"，即需要将这个后续逻辑函数cook传入到buy函数中
// function cook(){
//
// }


// 回调函数，将后续的处理逻辑传入到当前要做的事，事情做好后在调用此函数
// 要在cook中拿到"蘑菇"，即需要将这个后续逻辑函数cook传入到buy函数中
function buy(callback){
    setTimeout(()=>{
        let a = "蘑菇";
        callback(a);
    },2000);
}

buy(function cook(val){
    console.log(val);
});

//需要手动传入callback，不简洁，需要使用promise来就解决回调问题
//promise三个状态：成功态、失败态、等待状态；这三个状态是自己定义的
