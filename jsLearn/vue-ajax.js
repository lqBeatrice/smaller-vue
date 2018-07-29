
// $.ajax({
//     url:'',
//     data:{},
//     type:'get',
//     dataType:'json',
//     succes:{}
// })

//promise-ajax
//{}里面设置默认值
function ajax({url='',type='get',dataType='json'}){
    return new Promise((resolve,reject)=>{
        //ajax四步曲
        let xhr = new XMLHttpRequest();//
        xhr.open(type,url,true);//1
        xhr.responseType = dataType;//2
        xhr.onload = function(){  //3  xhr.readState = 4  xhr.status = 200
            resolve(xhr.response);  //成功调用成功的方法
        };
        xhr.onerror  = function(err){
            resolve(err);  //失败调用失败的方法
        }
        xhr.send();//4
    })


}
