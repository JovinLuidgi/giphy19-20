/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});
$("button").click(function(){
search = $("input").val();
picNum = Math.floor(Math.random() * 11);
url = "https://api.giphy.com/v1/gifs/search?q="+search+"&limit=10&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY"
console.log(url);
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        $(".results").html("<div></div>")
        $(".results").append("<img src='" + data.data[picNum].images.original.url + "'>")
        console.log(search);
    })
});