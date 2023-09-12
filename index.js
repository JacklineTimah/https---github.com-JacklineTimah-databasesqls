// Imports database config
require('./src/config/database.config')

const express = require('express');
const ap1Version1 = require('./src/config/versioning/v2')
const envConfig = require('./src/env/index')
const { notFound, appErrorHandler, genericErrorHandler } = require('./src/middlewares/error.middlewares');

const app = express();

app.use(express.json())

const PORT = envConfig.APP_PORT || 7006;

app.listen(PORT, () => {
    console.log(`Applicaion running on port ${PORT}`)
})

app.use('/api/v2', ap1Version1);
app.use(appErrorHandler);
app.use(genericErrorHandler);
app.use(notFound)

module.exports = app;