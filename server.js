const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3000; // 你可以选择任何端口号

app.use(express.static(__dirname));

app.use(cors()); // 允许跨域请求

// 连接到SQLite数据库
const db = new sqlite3.Database('Bolly-Aatcraft.sqlite'); // 请替换为实际的数据库文件

// 设置静态文件目录
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 创建API端点以获取Circle表的数据
app.get('/api/christmas', (req, res) => {
    db.all('SELECT * FROM Christmas', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// 启动Express.js服务器
app.listen(port, () => {
    console.log('http://localhost:3000');
    console.log(`Server is running on port ${port}`);
});
