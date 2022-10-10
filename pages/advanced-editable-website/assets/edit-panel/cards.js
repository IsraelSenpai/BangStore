//==================== Reference table ====================//
//:: Settings
//:: Gradient
//:: Main-Colors
//:: Card-Image-Border-Radius
//:: Card-Text-Color
//:: Card-Border-Radius
//:: Text-Colors
//:: Hover-Color
//:: Pagination-Border-Radius
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
let secondary_color = document.querySelector(".edit-panel #secondary-color");
function generatemaincolor()
{
    root.style.setProperty('--primary-color', `${primary_color.value}`)
    root.style.setProperty('--secondary-color', `${secondary_color.value}`)
}
primary_color.addEventListener("input", generatemaincolor);
secondary_color.addEventListener("input", generatemaincolor);


//***************************
// Card-Image-Border-Radius
//***************************
var card_image_border_top_left = document.querySelector(".edit-panel #card-image-border-top-left");
var card_image_border_top_left_result = document.querySelector(".edit-panel #card-image-border-top-left-result");
var card_image_border_top_right = document.querySelector(".edit-panel #card-image-border-top-right");
var card_image_border_top_right_result = document.querySelector(".edit-panel #card-image-border-top-right-result");
var card_image_border_bottom_right = document.querySelector(".edit-panel #card-image-border-bottom-right");
var card_image_border_bottom_right_result = document.querySelector(".edit-panel #card-image-border-bottom-right-result");
var card_image_border_bottom_left = document.querySelector(".edit-panel #card-image-border-bottom-left");
var card_image_border_bottom_left_result = document.querySelector(".edit-panel #card-image-border-bottom-left-result");
function generatecardimageborderradius() 
{
    root.style.setProperty('--card-image-border-radius-top-left', `${card_image_border_top_left.value}px`)
    card_image_border_top_left_result.innerHTML = card_image_border_top_left.value;
    root.style.setProperty('--card-image-border-radius-top-right', `${card_image_border_top_right.value}px`)
    card_image_border_top_right_result.innerHTML = card_image_border_top_right.value;
    root.style.setProperty('--card-image-border-radius-bottom-right', `${card_image_border_bottom_right.value}px`)
    card_image_border_bottom_right_result.innerHTML = card_image_border_bottom_right.value;
    root.style.setProperty('--card-image-border-radius-bottom-left', `${card_image_border_bottom_left.value}px`)
    card_image_border_bottom_left_result.innerHTML = card_image_border_bottom_left.value;
}
card_image_border_top_left.addEventListener("input", generatecardimageborderradius);
card_image_border_top_right.addEventListener("input", generatecardimageborderradius);
card_image_border_bottom_right.addEventListener("input", generatecardimageborderradius);
card_image_border_bottom_left.addEventListener("input", generatecardimageborderradius);


//***************************
// Card-Text-Color
//***************************
let card_text_color_one = document.querySelector(".edit-panel #card-text-color-one");
let card_text_color_two = document.querySelector(".edit-panel #card-text-color-two");
function generatecardtextcolor()
{
    root.style.setProperty('--card-text-color-one', `${card_text_color_one.value}`)
    root.style.setProperty('--card-text-color-two', `${card_text_color_two.value}`)
}
card_text_color_one.addEventListener("input", generatecardtextcolor);
card_text_color_two.addEventListener("input", generatecardtextcolor);


//***************************
// Card-Border-Radius
//***************************
var card_border_left = document.querySelector(".edit-panel #card-border-left");
var card_border_left_result = document.querySelector(".edit-panel #card-border-left-result");
var card_border_right = document.querySelector(".edit-panel #card-border-right");
var card_border_right_result = document.querySelector(".edit-panel #card-border-right-result");

function generatecardborderradius() 
{
    root.style.setProperty('--card-border-radius-left', `${card_border_left.value}px`)
    card_border_left_result.innerHTML = card_border_left.value;
    root.style.setProperty('--card-border-radius-right', `${card_border_right.value}px`)
    card_border_right_result.innerHTML = card_border_right.value;
    if (card_border_left.value < 50 || card_border_right.value < 50)
    {
        root.style.setProperty('--card-padding', `7px`)
    }

    if (card_border_left.value > 50 || card_border_right.value > 50)
    {
        root.style.setProperty('--card-padding', `20px`)
    }
}
card_border_left.addEventListener("input", generatecardborderradius);
card_border_right.addEventListener("input", generatecardborderradius);


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
// Pagination-Border-Radius
//***************************
var pagination_border_radius_top_left = document.querySelector(".edit-panel #pagination-border-radius-top-left");
var pagination_border_radius_top_left_result = document.querySelector(".edit-panel #pagination-border-radius-top-left-result");
var pagination_border_radius_top_right = document.querySelector(".edit-panel #pagination-border-radius-top-right");
var pagination_border_radius_top_right_result = document.querySelector(".edit-panel #pagination-border-radius-top-right-result");
var pagination_border_radius_bottom_right = document.querySelector(".edit-panel #pagination-border-radius-bottom-right");
var pagination_border_radius_bottom_right_result = document.querySelector(".edit-panel #pagination-border-radius-bottom-right-result");
var pagination_border_radius_bottom_left = document.querySelector(".edit-panel #pagination-border-radius-bottom-left");
var pagination_border_radius_bottom_left_result = document.querySelector(".edit-panel #pagination-border-radius-bottom-left-result");
function generatepaginationborderradius() 
{
    root.style.setProperty('--pagination-border-radius-top-left', `${pagination_border_radius_top_left.value}px`)
    pagination_border_radius_top_left_result.innerHTML = pagination_border_radius_top_left.value;
    if (pagination_border_radius_top_left.value > 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-left', `${pagination_border_radius_top_left.value - 2}px`)
    }
    if (pagination_border_radius_top_left.value == 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-left', `1px`)
    }
    if (pagination_border_radius_top_left.value == 2 || pagination_border_radius_top_left.value == 1 || pagination_border_radius_top_left.value == 0)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-left', `0px`)
    }

    root.style.setProperty('--pagination-border-radius-top-right', `${pagination_border_radius_top_right.value}px`)
    pagination_border_radius_top_right_result.innerHTML = pagination_border_radius_top_right.value;
    if (pagination_border_radius_top_right.value > 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-right', `${pagination_border_radius_top_right.value - 2}px`)
    }
    if (pagination_border_radius_top_right.value == 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-right', `1px`)
    }
    if (pagination_border_radius_top_right.value == 2 || pagination_border_radius_top_right.value == 1 || pagination_border_radius_top_right.value == 0)
    {
        root.style.setProperty('--pagination-fill-border-radius-top-right', `0px`)
    }

    root.style.setProperty('--pagination-border-radius-bottom-right', `${pagination_border_radius_bottom_right.value}px`)
    pagination_border_radius_bottom_right_result.innerHTML = pagination_border_radius_bottom_right.value;
    if (pagination_border_radius_bottom_right.value > 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-right', `${pagination_border_radius_bottom_right.value - 2}px`)
    }
    if (pagination_border_radius_bottom_right.value == 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-right', `1px`)
    }
    if (pagination_border_radius_bottom_right.value == 2 || pagination_border_radius_bottom_right.value == 1 || pagination_border_radius_bottom_right.value == 0)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-right', `0px`)
    }

    root.style.setProperty('--pagination-border-radius-bottom-left', `${pagination_border_radius_bottom_left.value}px`)
    pagination_border_radius_bottom_left_result.innerHTML = pagination_border_radius_bottom_left.value;
    if (pagination_border_radius_bottom_left.value > 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-left', `${pagination_border_radius_bottom_left.value - 2}px`)
    }
    if (pagination_border_radius_bottom_left.value == 3)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-left', `1px`)
    }
    if (pagination_border_radius_bottom_left.value == 2 || pagination_border_radius_bottom_left.value == 1 || pagination_border_radius_bottom_left.value == 0)
    {
        root.style.setProperty('--pagination-fill-border-radius-bottom-left', `0px`)
    }
}
pagination_border_radius_top_left.addEventListener("input", generatepaginationborderradius);
pagination_border_radius_top_right.addEventListener("input", generatepaginationborderradius);
pagination_border_radius_bottom_right.addEventListener("input", generatepaginationborderradius);
pagination_border_radius_bottom_left.addEventListener("input", generatepaginationborderradius);


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