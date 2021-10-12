import {Router, Request, Response} from 'express';

const router = Router();

router.get('/',(req: Request,res: Response)=>{
            res.send("Olá mundo!");

});

router.get('/Contato',(req: Request,res: Response)=>{
    res.send("Formulário de contato!");

});router.get('/sobre',(req: Request,res: Response)=>{
    res.send("Página institucional da empresa");

});

export default router;