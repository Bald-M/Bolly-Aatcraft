class Items{
    // itemNo，图片路径，色号，产品名
    constructor(itemNo,img,color,name) {
        this.itemNo = itemNo;
        this.img = img;
        this.color = color;
        this.name = name;
    }
}

var app = new Vue({
    el: '#app',
    data: {
        products: {
            "Christmas": {
                "Tree": [
                    // 2021年
                    new Items("DM21001","imgs/DM21圣诞产品图/DM21001.jpg","#G001","20.5 Oilseed fir with fruit Pendulous Branch"),
                    new Items("DM21002","imgs/DM21圣诞产品图/DM21002.jpg","#G001","29 Oilseed fir with fruit Pendulous Branch"),
                    new Items("DM21003","imgs/DM21圣诞产品图/DM21003.jpg","#G001","38.5 Oilseed fir with fruit Pendulous Branch"),
                ],
                "Decoration": ["a", "b", "c"]
            }
        },
        selectedCategory: null,
        selectedCategoryProducts: {},
        selectedProduct: null
    },
    methods: {
        selectCategory(categoryName) {
            // 点击产品类别时，更新选中的类别和类别的产品
            this.selectedCategory = categoryName;
            this.selectedCategoryProducts = this.products[categoryName];
            this.selectedProduct = null; // 重置选中的产品
        },
        showProduct(productName) {
            // 点击产品时，显示对应的产品内容
            this.selectedProduct = productName;
        }
    }
})