function init() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xobj = new XMLHttpRequest();
    xobj.open('GET', './build_stats.json', true); // Replace 'my_data' with the path to your file
    //var actual_JSON = JSON.parse(response);
    //console.log(actual_JSON);
}


init();