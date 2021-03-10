var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
//  Comment on how AJAX returns an API call
//ajax returns an array of objects
$.ajax({
  url: requestUrl, //pass in request URL here
  method: 'GET', //define type of request
}).then(function (response) { //promise begins here
  console.log('AJAX Response \n-------------');//code to be run when a response is returned
  console.log(response);
});

// Browser Fetch Method
// TODO Comment on how Fetch returns an API call
//Fetch also returns an array of objects
fetch(requestUrl) //shorthand for 
  .then(function (response) {
    return response.json(); //converts output to .json
  })
  .then(function (data) { //defines what to do with return data
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO Comment on how XMLHttpRequest returns an API call
//XHR returns a long string object
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
