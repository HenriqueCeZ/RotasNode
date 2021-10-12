import validator from "validator";
import express, {Request,Response} from 'express'

const server = express();
server.listen(80);

server.get('/', (req:Request,res:Response)=>{
    res.send("Olá mundo !!");


});

server.get('/:Nome', (req:Request,res:Response)=>{
    let Nome = req.params.Nome;
    res.send(`Olá, ${Nome}`);



});

server.get('/Voos/:ida-:volta', (req:Request,res:Response)=>{
    let {ida,volta} = req.params;
    res.send(`Destino: ${ida} Origem: ${volta}`);



});
console.log(validator.isEmail("Teste.Validator@gmail.com"));
