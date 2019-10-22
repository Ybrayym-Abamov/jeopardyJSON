const fetch = require('node-fetch')

const fs = require('fs')

const http = require('http')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

fetch('https://jservice.io/api/categories?count=100')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        fs.writeFile('categories.json', JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log('Replaced!');
        });
    });

// let readme = fs.readFileSync(json, 'utf8', function (err, data) {
//     data = data.JSON.stringify()
//     fs.writeFileSync("categories.json", data)
// })
