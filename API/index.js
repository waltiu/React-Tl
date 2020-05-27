var express = require('express')
var bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        test:'1'
    })

})
const init = require ('./data/index')
// setInterval(()=>{
    init()
// },100000)
const getApi = require('./servers/index')
const api = getApi(app)
setInterval(()=>{

},10)
const port = process.env.PORT || 5003;
app.listen(port, () => {
    console.log('http://127.0.0.1:%s', port)
})