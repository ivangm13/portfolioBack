const jwt = require('jwt-simple');
const moment = require('moment');

exports.checkTkn = (req,res,next)=>{
    if(!req.headers['access-token']){
        return res.status(403).json({error:'Falta la cabecera access-token'});
    }

    const token = req.headers['access-token'];
    let payload = null;
    try{
        payload = jwt.decode(token,process.env.SECRET_KEY);
    }catch(err){
        return res.status(403).json({error:'Token incorrecto'});
    }
    
    if(payload.expired_at <moment().unix()){
        return res.status(403).json({error:'El token ha caducado'});
    }
    if(payload.user !=="Iván"){
        return res.status(403).json({error:'Usuario no válido'});
        
    }

    req.payload = payload;

    next();
}