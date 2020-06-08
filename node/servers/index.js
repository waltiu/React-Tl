const user = require('./user')

const getApi = (app) =>{
    app.use('/api',user)
}
module.exports = getApi