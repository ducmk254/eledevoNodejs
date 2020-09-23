const hocvienModel = require('../models/hocvienModel')
const hocVien = require('../models/hocvienModel')
module.exports.list_hocvien = (req,res)=>{
    hocVien.find((err,result)=>{
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
    hocvienModel.find({name:req.param.lastName},(err,result)=>{
        if(err) res.send(err)
        res.send(result)
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
