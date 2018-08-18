// emit发布，on订阅  {男生失恋：['喝酒','睡觉','打游戏']}

function Boy(){
    
}

let boy = new Boy();
let drink = ()=>{console.log('喝酒')};
let sleep = ()=>{console.log('睡觉')};
let game = ()=>{console.log('打游戏')};

boy.on('失恋',drink);  // {失恋:[drink]}
boy.on('失恋',sleep);  // {失恋:[drink,sleep]}
boy.on('失恋',game);   // {失恋:[drink,sleep,game]}

boy.emit('失恋');  // 发布
