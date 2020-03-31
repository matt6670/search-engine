// $("form").submit(event){
//     e.preventDefault()
//     var query = $("search").val();

// }



//Needs to send server search data
//Currently using code from assessment as placeholder
$("form").submit(event => { 
    event.preventDefault();
    axios.post("/search").then(response => {
      searchData = response.data;
      $("#searchData").css({
        "text-align": "center",
        "min-height": "150px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      });
      $("#searchData").html(searchData);
    });
  });
  