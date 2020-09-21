const userModel = require('../models/usersModel');
module.exports.list_users = (req,res)=>{
    userModel.find((err,result)=>{
        if(err) res.send(err)
        res.send(result);
    })
};
module.exports.read_a_user = (req,res)=>{
    res.send('Find a user.')
};
module.exports.create_a_new_user =(req,res)=>{
    if(req.body){
        userModel.create(req.body,(err,result)=>{
            if(err) res.send(err)
            res.send(result)
        })
    }
}
module.exports.update_a_user = (req,res)=>{
    res.send('Update information of a user')
}
module.exports.delete_a_user = (req,res)=>{
    res.send('Delete a user from list')
}
