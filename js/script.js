/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});
$("button").click(function(){
search = $("input").val;
fetch("https://api.giphy.com/v1/gifs/search?q="+search+"&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        $(".results").append("<img src='"+ data.data[0].embed_url+"'>")
    })
});