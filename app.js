const express=require('express');
var app=new express();
var bodyParser=require('body-parser');
const cors=require('cors');
app.options('*', cors())
app.use(cors());
//app.use(bodyParser.json());
// const path=require('path');
// app.use(express.static(__dirname+'/dist/tax'));
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());
app.get('/1',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');   

    res.send({"description":"flower1 NFT by Sam","external_url":"https://gateway.pinata.cloud/ipfs/QmVWoNGaDLyCKwYQEZ8RuxzF9mMGzEEpd8jLyaMXU3eCkh","image":"https://gateway.pinata.cloud/ipfs/QmVWoNGaDLyCKwYQEZ8RuxzF9mMGzEEpd8jLyaMXU3eCkh","name":"flower1 #1","attributes":[{"trait_type":"Background","value":"Blue"},{"trait_type":"shape","value":"Round"},{"trait_type":"Color","value":"White"},{"trait_type":"Inner Circle","value":"Yellow"}]})
});

app.get('/2',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');   

    res.send({"description":"flower2 NFT by Sam","external_url":"https://gateway.pinata.cloud/ipfs/Qmaj4hWtT8HmuMe4NHrrDDkfeyJ5bYEz6cb3ASYpFTzzFe","image":"https://gateway.pinata.cloud/ipfs/Qmaj4hWtT8HmuMe4NHrrDDkfeyJ5bYEz6cb3ASYpFTzzFe","name":"flower2 #2","attributes":[{"trait_type":"Background","value":"Violet"},{"trait_type":"shape","value":"Round"},{"trait_type":"Color","value":"Rose"},{"trait_type":"Inner Circle","value":"Yellow"}]})
});

app.listen(process.env.PORT ||4000, function(){
    console.log('listening to port 4000');
});
