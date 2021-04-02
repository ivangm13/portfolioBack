const router = require('express').Router();
const { check, validationResult } = require('express-validator');

const Proyecto = require('../../models/proyecto');

router.get('/', async (req,res)=>{
    try{
        const proyectos = await Proyecto.find();
        res.json(proyectos);
    } catch(err){
        res.status(503).json({"error": err});
    }
    
    
});

router.post('/',[
    check('titulo','El titulo debe existir y tener entre 3 y 30 caracteres')
        .exists()
        .isLength({min:3,max:30}),
    check('descripcion','La descripcion debe existir y tener máximo 300 caracteres')
        .exists()
        .isLength({min:3,max:300}),
    check('url','La url del proyecto debe ser correcta')
        .isURL()

],async (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()});
    }

    try{
        const created = await Proyecto.create(req.body);
        res.json(created);
    } catch(err){
        res.status(503).json({"error": err});
    }  
});
router.put('/:id', async(req, res)=>{
    try{
        const modified = await Proyecto.findByIdAndUpdate(req.params.id, req.body);
        res.json(modified);
    }catch(err){
        res.status(503).json({"error": err});

    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const deleted = await Proyecto.findByIdAndDelete(req.params.id);
        res.json(deleted);
    }catch(err){
        res.status(503).json({"error": err});
    }
});

module.exports = router;