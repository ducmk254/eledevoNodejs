const hocvienModel = require('../models/hocvienModel')
const hocVien = require('../models/hocvienModel')
module.exports.list_hocvien = (req,res)=>{
    hocVien.find()
            .sort({age: 'asc'})
            .skip(parseInt(req.query.page) * parseInt(req.query.limit))
            .limit(parseInt(req.query.limit))
            .exec((err,result)=>{
                if(err) res.send(err)
                res.send(result)
            })
}
module.exports.them_hocvien = (req,res)=>{
        hocVien.create(req.body,(err,result)=>{
            if(err) res.send(err)
            res.send(result)
        })
}
module.exports.timkiem_hocvien_theo_id = (req,res)=>{
    hocvienModel.findById({_id:req.params.id},(err,result)=>{
        if(err) res.send(err)
        res.send(result)
    })
}
module.exports.timkiem_hocvien_theo_ten = (req,res)=>{
    hocvienModel.find({lastName: {$regex:req.query.lastname, $options: 'i'},age:{$gt:20}})
                .skip(10)
                .limit(100)
                .exec((err,docs)=>{
                    if(err) res.send(err)
                    res.send(docs)
                })
}
module.exports.sua_hocvien_theo_id = (req,res)=>{

        hocvienModel.update({_id:req.params.id},req.body,(err,result)=>{
            if(err) res.send(err)
            
            res.send(result)
        })


}
module.exports.xoa_hocvien_theo_id = (req,res)=>{
    hocvienModel.findByIdAndDelete({_id:req.params.id},(err,result)=>{
        if(err) res.send(err)
        res.send(result)
    })
}
