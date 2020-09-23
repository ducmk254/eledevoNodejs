const hocvienController = require('../controllers/hocviensController')
module.exports = (app)=>{
    app.route('/hocvien')
        .get(hocvienController.list_hocvien)
        .post(hocvienController.them_hocvien)

    app.route('/hocvien/:id')
        .get(hocvienController.timkiem_hocvien_theo_id)
        .put(hocvienController.sua_hocvien_theo_id)
        .delete(hocvienController.xoa_hocvien_theo_id)
}
