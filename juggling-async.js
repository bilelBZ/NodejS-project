const http = require('http');

var URLs = [process.argv[2], process.argv[3], process.argv[4]];
var strs = ["", "", ""];
var ctr = 0;

function httpGet(i){
    http.get(URLs[i], (response) => {
        response.setEncoding('utf8');
        response.on('data', (data) => {
            strs[i] += data;
        });
        response.on('end', () => {
            ctr++;
            if(ctr == 3){
                console.log(strs[0]);
                console.log(strs[1]);
                console.log(strs[2]);
            }
        });
    });
}

for(var i = 0; i < 3; i++){
    httpGet(i);
}