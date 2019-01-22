const fs = require('fs');
const path = require('path');



function getContentType(url) {
    let contentType = 'text/plain';

    if(url.endsWith('.html')){
        return contentType = 'text/html';
    }else if(url.endsWith('.css')){
        return contentType = 'text/css';
    }else if(url.endsWith('.js')){
        return contentType = 'text/javascript';
    }else if(url.endsWith('.png')){
        return contentType = 'image/png';
    }else if(url.endsWith('.jpeg')){
        return contentType = 'image/jpeg';
    }else if(url.endsWith('.ico')){
        return contentType = 'image/x-icon';
    }

    return contentType;
}

module.exports = (req,res) => {

    if(req.path.startsWith('/public') && req.method === 'GET'){
        fs.readFile(path.join(__dirname,'../' + req.path) ,'utf8', (err,data) => {
            if(err){
                res.writeHead(404, {
                    'Content-Type': getContentType(req.path)
                });
                res.write('404 --> The page is not Found!');
                res.end();
                return;
            }

            res.writeHead(200,{
                'Content-Type': getContentType(req.path)
            });
            res.write(data);
            res.end();
        });
    }
};