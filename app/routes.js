const SampleControler = require('../controllers/SampleControler');
// declare next controlers here


module.exports = function(app) {
    
    
    /*********************** Sample functions *********************************/
    app.get('/api/users', SampleControler.getUsers);
    app.get('/api/users/:id', SampleControler.getUserById);
    app.post('/api/users', SampleControler.createUser);
    app.put('/api/users/:id', SampleControler.updateUser);
    app.delete('/api/users/:id', SampleControler.deleteUser);

}