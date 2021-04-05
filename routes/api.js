const router = require('express').Router();
const moment = require('moment');
const jwt = require('jwt-simple');

const apiRouterProyectos = require('./api/proyectos');
const middleware = require('./middlewares');

router.use('/proyectos',middleware.checkTkn, apiRouterProyectos);

router.get('/token',(req,res)=>{
    let payload = {
        user : 'Iván',
        created_at: moment().unix(),
        expired_at: moment().add(5,'minutes').unix()
    };
    
    const token = jwt.encode(payload,process.env.SECRET_KEY);
    console.log(token);
    res.json({token});
});

module.exports = router;