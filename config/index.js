var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        // pc server :)
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@10.3.95.227/db_user_info';
    }

}