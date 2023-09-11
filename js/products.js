class Items{
    // itemNo，图片路径，色号，产品名
    constructor(itemNo,img,coler,name) {
        this.itemNo = itemNo;
        this.img = img;
        this.coler = coler;
        this.name = name;
    }

}

var app = new Vue({
    el: '#app',
    data: {
        item:[
            // 21年
            new Items(),
        ]
    }
})