/**
 * Created by tediousbaby on 14/11/10.
 */

var routes = require('./routes/index');
var users = require('./routes/users');

exports.config = function(app){
    app.use('/', routes);
    app.use('/users', users);
};

