const usersRoute = require('../controllers/usersController');
module.exports = (app)=>{

    app.route('/users')
        .get(usersRoute.list_users)
        .post(usersRoute.create_a_new_user)

    app.route('/users/:userId')
        .get(usersRoute.read_a_user)
        .put(usersRoute.update_a_user)
        .delete(usersRoute.delete_a_user)
}