const app = require('./app');
const serverP = require('./config/index');

require('./route/first.route')(app);

app.listen(serverP.PORT);