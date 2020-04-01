const express =require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const http = require('http');

app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));
app.use(express.static('views'));

searchData ="empty";

app.use(cors());
app.use(express.static("public"));

async function callAPI(url, req, res){
    await http.get(url, function (data) {
        console.log(data)
        console.log(req.body)
        
        // im feeling lucky check
        // if (req.body.lucky = "I'm Feeling Lucky"){
        //     var redirecturl = data.organic_results[0].url;
        //     return res.redirect(redirecturl);
        // };
        response = ""
        data.organic_results.forEach(res => {
            result = `<h1>${res.title}</h1><br><a href="${res.url}">${res.url}</a><p>${res.snippet}</p>`

            response += result;

        })
        res.send(response)
        console.log("done!");
    })
}

// Needs to search for and return data posted from client
app.post("/search", (req, res) => {
    console.log(req.body);
    let query = req.body.searchBar;

    let result;

    var API_KEY = "6d0d53e22b308aba126396137fcbabd9";

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query

    console.log(url)

    http.get(url, function (data) {
        console.log(data)
        console.log(req.body)
        
        // im feeling lucky check
        // if (req.body.lucky = "I'm Feeling Lucky"){
        //     var redirecturl = data.organic_results[0].url;
        //     return res.redirect(redirecturl);
        // };
        response = ""
        data.organic_results.forEach(res => {
            result = `<h1>${res.title}</h1><br><a href="${res.url}">${res.url}</a><p>${res.snippet}</p>`

            response += result;

        })
        res.send(response)
        console.log("done!");
    })

    // callAPI(url, req, res);

    // res.send(searchData)
}); 

// I'm Feeling lucky

/*app.get("/",  (req, res) => {
    console.log(req.body);
    let query = req.body.searchBar;

    let result;

    var API_KEY = "6d0d53e22b308aba126396137fcbabd9";

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query

    console.log(url)

    app.get(url, function (data) {
        console.log(data)

        var redirecturl = data.organic_results[0].url;
        return res.redirect(redirecturl);
    })
})*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
