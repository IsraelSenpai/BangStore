//==================== Reference table ====================//
//:: Settings
//:: Gradient
//:: Main-Colors
//:: Search-Text-Color
//:: Search-Bar-Color
//:: Search-Border-Radius
//:: Text-Colors
//:: Hover-Color
//:: Logo-Color
//:: Parallax-Border-Radius
//:: Opacity
//:: Background
//==================== *************** ====================//

//***************************
// Settings
//***************************
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);


//***************************
// Gradient
//***************************
let gradient_primary_color = document.querySelector(".edit-panel #gradient-primary-color");
let gradient_secondary_color = document.querySelector(".edit-panel #gradient-secondary-color");
function generategradientcolor()
{
    root.style.setProperty('--gradient-color', `linear-gradient(to right, ${gradient_primary_color.value} 20%, ${gradient_secondary_color.value} 100%)`)
    root.style.setProperty('--gradient-primary-color', `${gradient_primary_color.value}`)
    root.style.setProperty('--gradient-secondary-color', `${gradient_secondary_color.value}`)
    root.style.setProperty('--gradient-primary-color-transparent', `${gradient_primary_color.value}aa`)
}
gradient_primary_color.addEventListener("input", generategradientcolor);
gradient_secondary_color.addEventListener("input", generategradientcolor);


//***************************
// Main-Colors
//***************************
let primary_color = document.querySelector(".edit-panel #primary-color");
function generatemaincolor()
{
    root.style.setProperty('--primary-color', `${primary_color.value}`)
}
primary_color.addEventListener("input", generatemaincolor);


//***************************
// Search-Text-Color
//***************************
let search_text_color_one = document.querySelector(".edit-panel #search-text-color-one");
let search_text_color_two = document.querySelector(".edit-panel #search-text-color-two");
function generatesearchtextcolors()
{
    root.style.setProperty('--search-text-color-one', `${search_text_color_one.value}`)
    root.style.setProperty('--search-text-color-two', `${search_text_color_two.value}`)
}
search_text_color_one.addEventListener("input", generatesearchtextcolors);
search_text_color_two.addEventListener("input", generatesearchtextcolors);


//***************************
// Search-Bar-Color
//***************************
let search_bar_color = document.querySelector(".edit-panel #search-bar-color");
function generatesearchbarcolor()
{
    root.style.setProperty('--search-bar-color', `${search_bar_color.value}`)
}
search_bar_color.addEventListener("input", generatesearchbarcolor);


//***************************
// Search-Border-Radius
//***************************
var search_border_radius_top_left = document.querySelector(".edit-panel #search-border-radius-top-left");
var search_border_radius_top_left_result = document.querySelector(".edit-panel #search-border-radius-top-left-result");
var search_border_radius_top_right = document.querySelector(".edit-panel #search-border-radius-top-right");
var search_border_radius_top_right_result = document.querySelector(".edit-panel #search-border-radius-top-right-result");
var search_border_radius_bottom_right = document.querySelector(".edit-panel #search-border-radius-bottom-right");
var search_border_radius_bottom_right_result = document.querySelector(".edit-panel #search-border-radius-bottom-right-result");
var search_border_radius_bottom_left = document.querySelector(".edit-panel #search-border-radius-bottom-left");
var search_border_radius_bottom_left_result = document.querySelector(".edit-panel #search-border-radius-bottom-left-result");
function generatesearchborderradius() 
{
    root.style.setProperty('--search-border-radius-top-left', `${search_border_radius_top_left.value}px`)
    search_border_radius_top_left_result.innerHTML = search_border_radius_top_left.value;
    if (search_border_radius_top_left.value > 4)
    {
        root.style.setProperty('--search-bar-border-radius-top-left', `${search_border_radius_top_left.value - 3}px`)
    }
    if (search_border_radius_top_left.value == 4)
    {
        root.style.setProperty('--search-bar-border-radius-top-left', `1px`)
    }
    if (search_border_radius_top_left.value == 3 || search_border_radius_top_left.value == 2 || search_border_radius_top_left.value == 1 || search_border_radius_top_left.value == 0)
    {
        root.style.setProperty('--search-bar-border-radius-top-left', `0px`)
    }

    root.style.setProperty('--search-border-radius-top-right', `${search_border_radius_top_right.value}px`)
    search_border_radius_top_right_result.innerHTML = search_border_radius_top_right.value;
    if (search_border_radius_top_right.value > 4)
    {
        root.style.setProperty('--search-bar-border-radius-top-right', `${search_border_radius_top_right.value - 3}px`)
    }
    if (search_border_radius_top_right.value == 4)
    {
        root.style.setProperty('--search-bar-border-radius-top-right', `1px`)
    }
    if (search_border_radius_top_right.value == 3 || search_border_radius_top_right.value == 2 || search_border_radius_top_right.value == 1 || search_border_radius_top_right.value == 0)
    {
        root.style.setProperty('--search-bar-border-radius-top-right', `0px`)
    }

    root.style.setProperty('--search-border-radius-bottom-right', `${search_border_radius_bottom_right.value}px`)
    search_border_radius_bottom_right_result.innerHTML = search_border_radius_bottom_right.value;
    if (search_border_radius_bottom_right.value > 4)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-right', `${search_border_radius_bottom_right.value - 3}px`)
    }
    if (search_border_radius_bottom_right.value == 4)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-right', `1px`)
    }
    if (search_border_radius_bottom_right.value == 3 || search_border_radius_bottom_right.value == 2 || search_border_radius_bottom_right.value == 1 || search_border_radius_bottom_right.value == 0)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-right', `0px`)
    }

    root.style.setProperty('--search-border-radius-bottom-left', `${search_border_radius_bottom_left.value}px`)
    search_border_radius_bottom_left_result.innerHTML = search_border_radius_bottom_left.value;
    if (search_border_radius_bottom_left.value > 4)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-left', `${search_border_radius_bottom_left.value - 3}px`)
    }
    if (search_border_radius_bottom_left.value == 4)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-left', `1px`)
    }
    if (search_border_radius_bottom_left.value == 3 || search_border_radius_bottom_left.value == 2 || search_border_radius_bottom_left.value == 1 || search_border_radius_bottom_left.value == 0)
    {
        root.style.setProperty('--search-bar-border-radius-bottom-left', `0px`)
    }
}
search_border_radius_top_left.addEventListener("input", generatesearchborderradius);
search_border_radius_top_right.addEventListener("input", generatesearchborderradius);
search_border_radius_bottom_right.addEventListener("input", generatesearchborderradius);
search_border_radius_bottom_left.addEventListener("input", generatesearchborderradius);


//***************************
// Text-Colors
//***************************
let text_color_one = document.querySelector(".edit-panel #text-color-one");
let text_color_two = document.querySelector(".edit-panel #text-color-two");
function generatetextcolor()
{
    root.style.setProperty('--text-color-one', `${text_color_one.value}`)
    root.style.setProperty('--text-color-two', `${text_color_two.value}`)
}
text_color_one.addEventListener("input", generatetextcolor);
text_color_two.addEventListener("input", generatetextcolor);


//***************************
// Hover-Color
//***************************
let hover_color = document.querySelector(".edit-panel #hover-color");
function generatehovercolor()
{
    root.style.setProperty('--hover-color-two', `${hover_color.value}`)
}
hover_color.addEventListener("input", generatehovercolor);


//***************************
// Logo-Color
//***************************
let color_logo = document.querySelector(".edit-panel #logo-color");
function generatelogocolor()
{
    root.style.setProperty('--logo-color', `${color_logo.value}`)
}
color_logo.addEventListener("input", generatelogocolor);


//***************************
// Parallax-Border-Radius
//***************************
var parallax_border_top_left = document.querySelector(".edit-panel #parallax-border-radius-top-left");
var parallax_border_top_left_result = document.querySelector(".edit-panel #parallax-border-radius-top-left-result");
var parallax_border_top_right = document.querySelector(".edit-panel #parallax-border-radius-top-right");
var parallax_border_top_right_result = document.querySelector(".edit-panel #parallax-border-radius-top-right-result");
var parallax_border_bottom_right = document.querySelector(".edit-panel #parallax-border-radius-bottom-right");
var parallax_border_bottom_right_result = document.querySelector(".edit-panel #parallax-border-radius-bottom-right-result");
var parallax_border_bottom_left = document.querySelector(".edit-panel #parallax-border-radius-bottom-left");
var parallax_border_bottom_left_result = document.querySelector(".edit-panel #parallax-border-radius-bottom-left-result");
function generateparallaxborderradius() 
{
    root.style.setProperty('--parallax-border-radius-top-left', `${parallax_border_top_left.value}px`)
    parallax_border_top_left_result.innerHTML = parallax_border_top_left.value;
    root.style.setProperty('--parallax-border-radius-top-right', `${parallax_border_top_right.value}px`)
    parallax_border_top_right_result.innerHTML = parallax_border_top_right.value;
    root.style.setProperty('--parallax-border-radius-bottom-right', `${parallax_border_bottom_right.value}px`)
    parallax_border_bottom_right_result.innerHTML = parallax_border_bottom_right.value;
    root.style.setProperty('--parallax-border-radius-bottom-left', `${parallax_border_bottom_left.value}px`)
    parallax_border_bottom_left_result.innerHTML = parallax_border_bottom_left.value;
}
parallax_border_top_left.addEventListener("input", generateparallaxborderradius);
parallax_border_top_right.addEventListener("input", generateparallaxborderradius);
parallax_border_bottom_right.addEventListener("input", generateparallaxborderradius);
parallax_border_bottom_left.addEventListener("input", generateparallaxborderradius);


//***************************
// Opacity
//***************************
var opacity = document.querySelector(".edit-panel #opacity");
var opacity_result = document.querySelector(".edit-panel #opacity-result");
function generateopacity() 
{
    root.style.setProperty('--opacity', `${opacity.value}%`)
    opacity_result.innerHTML = opacity.value;
}
opacity.addEventListener("input", generateopacity);


//***************************
// Background
//***************************
const background = document.querySelector(".edit-panel #background");
const add_background = document.querySelector(".edit-panel #add-background");
const remove_background = document.querySelector(".edit-panel #remove-background");
const background_image = document.querySelector(".edit-panel .panel .content .image-container .container #background-photo img");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function Background(){
    background.click();
}
background.addEventListener("change", function(){
  const file = this.files[0];
  if(file)
  {
        const reader = new FileReader();
        reader.onload = function(){
        const result = reader.result;
        background_image.src = result;
        root.style.setProperty('--background', `url('${result}')`)
    }
        remove_background.addEventListener("click", function(){
            background_image.src = "background.jpg";
        root.style.setProperty('--background', `url('../../background.jpg')`)
    })
    reader.readAsDataURL(file);
  }
  if(this.value){
    let valueStore = this.value.match(regExp);
  }
});