var unirest = require("unirest");
var req = unirest("GET", "https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%2520cheese");
req.query({
	"fields": "item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat"
});
req.headers({
	"x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
	"x-rapidapi-key": "9ddcbe8bcemsh4a5cf2c09611caep1c2ccejsn68e91efe0abf"
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});

$.ajax({
    url: req,
    method: "GET"
}).then(function(response) {
    $(".form-inline").text(JSON.stringify(response));
});



$(".onclick").on("click", function() {
    let submitBtn = {
        submit: $(".onclick".val().trim())
    }
});

