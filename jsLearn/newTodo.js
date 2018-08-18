let vm = new Vue({
    el:"#app",
    data:{
        plans:[{isSelected:false,plan:'vue学习'},{isSelected:false,plan:'vue学习'}],
        msplan:"",
        cur:"",
        hash:""
    },
    // 我们还需要添加一个功能，就是当数据发生变化的时候会实时将数据存到本地
    // 页面一加载的时候要把上面存的数据拿出来
    created(){  // ajax获取，数据初始化
        // 要判断当之前没有加数据的时候即下面的data为空的情况
        // 即如果本地localStorage有数据用他里面存的，如果没有则用默认的
        this.plans = JSON.parse(localStorage.getItem('data'));
        // 监控hash值的变化
        // 用浏览器自带的添加监听事件方法，里面有三个参数，第一个是事件名称，第二个是listener监听器function，第三个是否使用捕获，使用true，不使用false
        // 这里一定要绑一个箭头函数，不然this就会指向window
        // 监控hash值的变化，如果额面已经有hash值了，重新刷新页面也要获取hash值
        // 将hash值的变化映射到数据内
        //  hash值只要后面的名字，不需要前面的/#两个字符，用slice截取掉
        this.hash = window.location.hash.slice(2) || "all";  // 如果没有触发，也需要初始化一个hash值
        window.addEventListener('hashchange',()=>{
            this.hash = window.location.hash.slice(2);
        },false) // 这里默认就是false
    },
    // 这样就需要监控我们的数据变化
    // watch
    watch:{   // 但是watch只能监控一层的数据变化，即数据plans中如果数组添加一个对象，则能监控到，但是若只是改变数组中某个对象的val则不会被监控到
       //plans(){  //如果是要进行深度监控，我们需要把plans变成一个对象
       //}
        plans:{
            handler(){  //默认写成函数，就相当于默认写了个handler
                // localStorage默认存的是字符串，getItem--用JSON.parse和setItem--用JSON.stringify进行数据类型转换
                localStorage.setItem('data',JSON.stringify(this.plans));
            },deep:true
        }
    },
    directives:{
        // 如果自定义指令中名字太长，比如在html中定义成v-focus-aa，在js里面就要写成focusAa，不能写两个小写
        // 要写成驼峰形式
        focus(el,bindings){
            // 当cur==one的时候才会让内部的输入框获取焦点
            // 这里的bindings.value就是指html中的"one == cur"
            if(bindings.value == true) el.focus();// dom获取交点的方法

        }
    },
    methods:{
        add(){
            this.plans.push({isSelected:false,plan:this.msplan});
            this.msplan = "";
        },
        remove(one){
            this.plans = this.plans.filter(item=>item !== one);
        },
        editor(one){  // 当前传递的是单个todo（点击的哪一项传递哪一项）
            this.cur = one;
        },
        cancel(){
            this.cur = ''
        }
    },
    //  只要是要显示计算属性的值，就写在computed里面
    computed:{
        count(){
            return this.plans.filter(item=>!item.isSelected).length;
        },
        filterPlans(){
            if(this.hash === "all") return this.plans;
            if(this.hash === "finish") return this.plans.filter(item=>item.isSelected);
            if(this.hash === "unfinish") return this.plans.filter(item=>!item.isSelected);
            return this.plans;
        }
    }
});