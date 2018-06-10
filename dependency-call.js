console.log("calling slow API Call");

//Asyncronous slow call
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        console.log(xhr.responseText);
    }
}
xhr.open('GET', 'https://slowapi.azurewebsites.net/api/values', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://crm747053.crm.dynamics.com');
xhr.send(null);

//This is going to fail because of JQuery
$.ajax({
    url: 'https://slowapi.azurewebsites.net/api/values',
    method: 'GET'
}).done(function (data) {
    console.log('Slow API Call completed');
    console.log(data);
}).fail(function () {
    console.log('Slow API Call failed');
});

