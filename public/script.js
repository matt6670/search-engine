// $("form").submit(event){
//     e.preventDefault()
//     var query = $("search").val();

// }



//Needs to send server search data
//Currently using code from assessment as placeholder

$(document).ready(function(){

  async function getAPI(){
    event.preventDefault();
      let query = $("#searchBar").val();
      let result;
      var API_KEY = "6d0d53e22b308aba126396137fcbabd9";
      var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
      let response ="";
      var opened;

      console.log("processing");
      await $.get(url, function (data) {
        console.log(data)

        
        // im feeling lucky check
        // if (req.body.lucky = "I'm Feeling Lucky"){
        //     var redirecturl = data.organic_results[0].url;
        //     return res.redirect(redirecturl);
        // };
        
        data.organic_results.forEach(res => {
            result = `<h1>${res.title}</h1><br><a href="${res.url}">${res.url}</a><p>${res.snippet}</p>`

            response += result;

        })
        // res.send(response)
        console.log("done!");
    })

    await $("#data").html("test");
    newDoc = response;
    opened = window.open("/search");
    await opened.document.write(newDoc);
      
  }



  // var opened = window.open("results.html");
  // opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
  

  

  $("form").submit(event => { 

      getAPI();

    });
});


