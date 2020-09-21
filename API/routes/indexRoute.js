const indexController = require('../controllers/indexController')
module.exports = (app)=>{
    app.route('/')
        .get(indexController.render);
}