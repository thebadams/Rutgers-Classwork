var requestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=5'

var fetchOptions = {
  method: 'GET',
  credentials: 'same-origin',
  cache: 'reload',
  redirect: 'follow'
}

fetch(requestUrl, )
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
