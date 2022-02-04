const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/todo-list-frontend'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/todo-list-frontend/index.html'));});
app.listen(process.env.PORT || 8080, () => console.log(`isBitTodoList is running on port ${process.env.PORT}`));
