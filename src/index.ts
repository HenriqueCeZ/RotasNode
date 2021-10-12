import validator from "validator";
import path from 'path'
import express, {Request, Response} from 'express'
import mainRoutes from './routs/index'
const server = express();


server.use(express.static(path.join(__dirname,'../public'))); //arquivos publicos

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
        res.status(404).send('Página não encontrada!');
});

server.listen(80);





console.log(validator.isEmail("teste.jp@gmail.com"));
