$(document).ready(function(){
  async function search(){
      let query = $("#searchBar").val();
      let result;
      var API_KEY = "6d0d53e22b308aba126396137fcbabd9";
      var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
      let response ="";
      var opened;
      console.log("processing");
      await $.get(url, function (data) {
        console.log(data)
        data.organic_results.forEach(res => {
            result = `<h1>${res.title}</h1><br><a href="${res.url}">${res.url}</a><p>${res.snippet}</p>`
            response += result;
        })
        console.log("done!");
    })
    await $("#data").html("test");
    newDoc = response;
    opened = window.open("/search");
    await opened.document.write(newDoc);
  }
  async function lucky(){
    let query = $("#searchBar").val();
    let result;
    var API_KEY = "6d0d53e22b308aba126396137fcbabd9";
    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
    let response ="";
    var opened;
    console.log("processing");
    await $.get(url, function (data) {
      console.log(data)
    var redirecturl = data.organic_results[0].url;
    window.open(redirecturl);
  })}
  $("form button").click(function (ev) {
    ev.preventDefault()
    if ($(this).attr("value") == "I'm Feeling Lucky") {
      lucky();
    }
    if ($(this).attr("value") == "Search") {
      search();
    }});
});
