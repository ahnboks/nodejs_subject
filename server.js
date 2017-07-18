//1. 서버 연결(3000)
const express = require('express');
const http = require('http');
const app=express();

app.use(express.static(__dirname)); //현재 디렉토리 경로를 정적 경로로 설정

//2. html 파일 응답
app.get('/',function(req,res){
    res.sendFile(__dirname+'/View/main.html');//console.log(data);
});

app.get('/nodejs',function(req,res){
  res.send('127.0.0.1:3000/nodejs');
  console.log('nodejs 전송');
});

app.get('/boot',function(req,res){
  res.send('127.0.0.1:3000/boot');
    console.log('boot 전송');
});

app.get('/javascript',function(req,res){
  res.send('127.0.0.1:3000/javascript');
    console.log('javascript 전송');
});

http.createServer(app).listen(3000, function(){
  console.log('Server Start');
});
//3.html 파일 태그 클릭 시 파일 데이터를 읽어와 브라우저에 출력
