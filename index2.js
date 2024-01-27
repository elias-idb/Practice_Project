const http = require('http');
const path = require('path');
const fs = require('fs');



const Myserver = http.createServer((req, res) =>{
    
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err , content) =>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type' : 'text/html'});
    //         res.end(content);
    //     })

    //     // res.writeHead(200, {'Content-Type' : 'text/html'})
    //     // res.end('<h1>a clever fox jumps over the lazy dogsjj</h1>');
    // }
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err , content) =>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type' : 'text/html'});
    //         res.end(content);
    //     })
    // }
    

    // if(req.url === '/api/users'){
    //     const users = [
    //         { name: "Elias", age: 31},
    //         { name: "Raju", age: 31},
    //         { name: "Joy", age: 30},
    //         { name: "Sohel", age: 32},

    //     ];
    //     res.writeHead(200, {'content-type' : 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    // if(req.url === '/api/object'){
    //     const object ={
    //         name: "Elias",
    //         age: 31,
    //         mail: 'elias_dreamboy@gmail.com',
    //         occupation: 'Software developper'
    //     }           
      
    //     res.writeHead(200, {'content-type' : 'application/json'});
    //     res.end(JSON.stringify(object));
    // }
    
    // console.log(filePath);
    // res.end();

    //Build a file path 

    let filePath = path.join(
        __dirname,
         'public',
         req.url === '/' ? 'index.html' : req.url
    );

    // Extenstion of file
    let extname = path.extname(filePath);

    //Initial content type
     let contentType = 'text/html';

     // Check extension and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;           
    } 
    
    //Read file
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                //Page Not Found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) =>{
                    res.writeHead(200, {'Content-type' : 'text/html'});
                    res.end(content, 'utf8');
                })
            }else{
                //server error 
                res.writeHead(500);
                res.end(`Server Error : ${err.code}`);
            }
        }else{
            res.writeHead(200, {'Content-type' : contentType});
                res.end(content, 'utf8');
        }
    })


   
    // if(req.url === '/'){
    //     res.end('<h1>I am Mohammad Elias Ali</h1>');
    // }

    // res.write('<h1>I am Mohammad Elias</h1>');
    // res.end();
});

const PORT = process.env.PORT || 3000

Myserver.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//Thid code use in package.json file for instant change
// "scripts": {
//     "start": "node index",
//     "dev": "nodemon index2"
//   },

//npm run dev use in terminal for showing instant change value