let url_array = ["https://imageio.forbes.com/specials-images/imageserve/608990c4bcf2c7b4802c9725/Indoor-plants/960x0.jpg?fit=bounds&format=jpg&width=960","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newsweek.com%2Famplify%2F10-products-that-could-help-keep-your-dog-cool-this-summer&psig=AOvVaw2BmbDy6Ixfw0fnQuO4T9Hh&ust=1644977668255000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOC9h7_RgPYCFQAAAAAdAAAAABAD"]

let index = 0;
  
function get(){
  index++;

  return url_array[index= index+ 1%url_array.length]
  }

function handClick(){
   document.getElementById("img").src = get();  
}
