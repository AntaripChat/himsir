const app = require('../app');
const a = require('../controller/index');

module.exports = function(app){
    app.get('/',a.data);
    app.get('/api',a.dat)
};