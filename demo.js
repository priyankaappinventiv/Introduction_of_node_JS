const express = require('express');
 
const calc = require('./calc');

const adds =require('./adds');

const subs = require('./subs');

const muls=require('./muls');

const sqrts= require('./sqrts');

const byxs= require('./byxs');

const cubes= require('./cubes');

const modus= require('./modus');

const missing= require('./missing');

const fibos=require('./fibos');

const power=require('./power');



 
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	console.log("Hii Priyanka Patel");
})
  

app.post('/divide',calc);

app.post('/add',adds);

app.post('/sub',subs);

app.post('/mul',muls);

app.post('/sqrt',sqrts);

app.post('/byx',byxs);

app.post('/cube',cubes);

app.post('/modu',modus);

app.post('/miss',missing);

app.post('/fibo',fibos);

app.post('/pow',power);





app.listen(8000, () => {
	console.log("server is running on 8000")
});



