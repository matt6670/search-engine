

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyAHqIDvpLzsblxnd7CYaqQmrPZ6F67cENA',
    // Your API key will be automatically added to the Discovery Document URLs.
    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/customsearch/v1/rest'],
    // clientId and scope are optional if auth is not required.
    // 'clientId': '',
    // 'scope': 'profile',
}).then(function() {
    console.log(gapi.client.cse.list({
        cx:
        q: "q",
      }));
    // Executes an API request, and returns a Promise.
    // The method name `language.translations.list` comes from the API discovery.
    return gapi.client.cse.list({
      q: "q",
    });
  }).then(function(response) {
    console.log(response.result.data.translations[0].translatedText);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
console.log("script has run");
gapi.load('client', start);
