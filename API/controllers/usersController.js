const userModel = require('../models/usersModel');
module.exports.list_users = (req,res)=>{
    userModel.find((err,result)=>{
        if(err) res.send(err)
        res.send(result);
    })
};
module.exports.read_a_user = (req,res)=>{
    userModel.findById({_id:req.params.userId},(err,result)=>{
        if(err) res.send(err)
        res.send(result)
    })
};
module.exports.create_a_new_user =(req,res)=>{
    if(!req.body){
        userModel.create(req.body,(err,result)=>{
            if(err) res.send(err)
            res.send(result)
        })
    }
    res.send('Body empty')
}
module.exports.update_a_user = (req,res)=>{
    if(!req.params.lastName){
        userModel.update({_id:req.params.userId},req.body,(err,result)=>{
            if(err) res.send(err)
            res.send(result);
        });
    }
}
module.exports.delete_a_user = (req,res)=>{
    userModel.deleteOne({_id:req.params.userId},(err,result)=>{
        if(err) res.send(err)
        res.send(result)
    });
}
