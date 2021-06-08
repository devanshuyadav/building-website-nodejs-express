const expres = require('express');

const app = expres();

const routes = require('./routes')

app.use('/', routes());

app.listen(3000);

module.export = app;