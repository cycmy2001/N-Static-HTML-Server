var app = require('./app');
app.createServer(80,function(req,res,httppath,realpath){
    req.on('data',function(chunk){
        console.log(chunk.toString());
    });
    var opts = {
        name : "isLogin",
        value : true,
        expires : 500
    };
    res.end(JSON.stringify(opts));
    //console.log(res)
    console.log(httppath);
    console.log(realpath)
});