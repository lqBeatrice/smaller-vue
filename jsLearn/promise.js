//Promise是一个类。使用它解决回调问题，new
// let t = new Promise(()=>{
//    console.log(1);//上来就执行没有等待，也没有异步
// });
// console.log(2);
//输出  1 2

//resolve代表的是转向成功态，即调用它表示成功
//reject代表的是转向失败态，即调用它表示失败
//resolve和reject两者都是函数
//promise的实例就有一个then方法。
// let pending = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let a = "蘑菇";
//         resolve(a);
//     },2000)
// });
//then方法中有两个参数
//这里规定好了，选择resolve就自动调用then里面的前一个函数，如果选择reject就自动调用then里面的后一个函数
// pending.then((data)=>{console.log(data)},()=>{});

//给上面的功能添加自动判断输出结果
function buyP(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5) resolve('买好了');
            else reject('不买了');
        },Math.random()*1000)

    })
}

buyP().then((data)=>{
    console.log(data);
},(data)=>{
    console.log(data);
});