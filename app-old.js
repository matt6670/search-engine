const express =require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// // AIzaSyAHqIDvpLzsblxnd7CYaqQmrPZ6F67cENA api key
// // 263335470091-0l4bc6ek27p6nnc1bsq1e6ip4slb2rqs.apps.googleusercontent.com client
// // HDTpGNUM4E5nQYJBMGL0SMrQ secret

// var CLIENT_ID = '263335470091-0l4bc6ek27p6nnc1bsq1e6ip4slb2rqs.apps.googleusercontent.com
// var API_KEY = 'AIzaSyAHqIDvpLzsblxnd7CYaqQmrPZ6F67cENA';


// // Array of API discovery doc URLs for APIs used by the quickstart
// var DISCOVERY_DOCS = ['https://docs.googleapis.com/$discovery/rest?version=v1'];

// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// var SCOPES = "https://www.googleapis.com/auth/documents.readonly";

// var authorizeButton = document.getElementById('authorize_button');
// var signoutButton = document.getElementById('signout_button');

// function initClient() {
//     gapi.client.init({
//       apiKey: API_KEY,
//       clientId: CLIENT_ID,
//       discoveryDocs: DISCOVERY_DOCS,
//       scope: SCOPES
//     }).then(function() {
//       // Listen for sign-in state changes.
//       gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

//       // Handle the initial sign-in state.
//       updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//       authorizeButton.onclick = handleAuthClick;
//       signoutButton.onclick = handleSignoutClick;
//     });
//   }
