const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // 可以根据需要更改端口号

// 设置静态文件目录
//app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname,'html')));

// 启动服务器
app.listen(port, () => {
    // console.log(path.join(__dirname))
    // console.log(path.join(__dirname,'/docs'))
    console.log(`Server is running on port ${port}`);
});
