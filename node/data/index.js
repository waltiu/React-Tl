const http = require('http') // Node.js提供了http模块，用于搭建HTTP服务端和客户端
const cheerio = require('cheerio')
var url = 'http://tl.cyg.changyou.com/goods/selling?world_id=0&have_chosen=&page_num=5#goodsTag'
const init = () =>{
    http.get(url,function(res){  //发送get请求
        var html=''
        res.on('data',function(data){
          html += data  //字符串的拼接
        })
        res.on('end',function(){
            var $ = cheerio.load(html)
            var chapters = $('.ui-pagination span')  //在html里寻找需要的资源的class
            let total = $(chapters['11']).text()
            let ids =[]
            for (var i = 2; i < 3; i++) { 
            let pageUrl = `http://tl.cyg.changyou.com/goods/selling?world_id=0&have_chosen=&page_num=${i}#goodsTag`
                http.get(pageUrl,(res)=>{
                    let html2=''
                    res.on('data',function(data){
                        html2 += data  //字符串的拼接
                    })
                    res.on('end',function(){
                        var $ = cheerio.load(html2)
                         $('.item-info a').each(async function (i, item) {
                          await ids.push($(item).attr('href'));
                            });
                        console.log(1)
                        console.log(ids)
                    })
                })
            }
        
            
          })
      }).on('error',function(){
        console.log('获取资源出错！')
      })
}
module.exports = init