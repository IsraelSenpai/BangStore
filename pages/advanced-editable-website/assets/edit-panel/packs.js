//==================== Reference table ====================//
//:: Settings
//:: Gradient
//:: Main-Colors
//:: Pack-Text-Color
//:: Pack-Border-Radius
//:: Pack-Button-Text-Color
//:: Pack-Button-Border-Radius
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
// Pack-Text-Color
//***************************
let pack_text_color_gradient_one = document.querySelector(".edit-panel #pack-text-color-gradient-one");
let pack_text_color_gradient_two = document.querySelector(".edit-panel #pack-text-color-gradient-two");
let pack_text_color = document.querySelector(".edit-panel #pack-text-color");
function generatepacktextcolor()
{
    root.style.setProperty('--pack-text-color-gradient', `linear-gradient(to right, ${pack_text_color_gradient_one.value} 20%, ${pack_text_color_gradient_two.value} 100%)`)
    root.style.setProperty('--pack-text-color', `${pack_text_color.value}`)
}
pack_text_color_gradient_one.addEventListener("input", generatepacktextcolor);
pack_text_color_gradient_two.addEventListener("input", generatepacktextcolor);
pack_text_color.addEventListener("input", generatepacktextcolor);


//***************************
// Pack-Border-Radius
//***************************
var pack_border_radius_top_left = document.querySelector(".edit-panel #pack-border-radius-top-left");
var pack_border_radius_top_left_result = document.querySelector(".edit-panel #pack-border-radius-top-left-result");
var pack_border_radius_top_right = document.querySelector(".edit-panel #pack-border-radius-top-right");
var pack_border_radius_top_right_result = document.querySelector(".edit-panel #pack-border-radius-top-right-result");
var pack_border_radius_bottom_right = document.querySelector(".edit-panel #pack-border-radius-bottom-right");
var pack_border_radius_bottom_right_result = document.querySelector(".edit-panel #pack-border-radius-bottom-right-result");
var pack_border_radius_bottom_left = document.querySelector(".edit-panel #pack-border-radius-bottom-left");
var pack_border_radius_bottom_left_result = document.querySelector(".edit-panel #pack-border-radius-bottom-left-result");
function generatepackborderradius() 
{
    root.style.setProperty('--pack-border-radius-top-left', `${pack_border_radius_top_left.value}px`)
    pack_border_radius_top_left_result.innerHTML = pack_border_radius_top_left.value;
    root.style.setProperty('--pack-border-radius-top-right', `${pack_border_radius_top_right.value}px`)
    pack_border_radius_top_right_result.innerHTML = pack_border_radius_top_right.value;
    root.style.setProperty('--pack-border-radius-bottom-right', `${pack_border_radius_bottom_right.value}px`)
    pack_border_radius_bottom_right_result.innerHTML = pack_border_radius_bottom_right.value;
    root.style.setProperty('--pack-border-radius-bottom-left', `${pack_border_radius_bottom_left.value}px`)
    pack_border_radius_bottom_left_result.innerHTML = pack_border_radius_bottom_left.value;
    if (pack_border_radius_top_left.value < 50 || pack_border_radius_top_right.value < 50)
    {
        root.style.setProperty('--pack-padding', `15px`)
    }
    if (pack_border_radius_top_left.value > 50 || pack_border_radius_top_right.value > 50)
    {
        root.style.setProperty('--pack-padding', `25px`)
    }
}
pack_border_radius_top_left.addEventListener("input", generatepackborderradius);
pack_border_radius_top_right.addEventListener("input", generatepackborderradius);
pack_border_radius_bottom_right.addEventListener("input", generatepackborderradius);
pack_border_radius_bottom_left.addEventListener("input", generatepackborderradius);


//***************************
// Pack-Button-Text-Color
//***************************
let pack_button_text_color_one = document.querySelector(".edit-panel #pack-button-text-color-one");
let pack_button_text_color_two = document.querySelector(".edit-panel #pack-button-text-color-two");
function generatepackcolor()
{
    root.style.setProperty('--pack-button-text-color-one', `${pack_button_text_color_one.value}`)
    root.style.setProperty('--pack-button-text-color-two', `${pack_button_text_color_two.value}`)
}
pack_button_text_color_one.addEventListener("input", generatepackcolor);
pack_button_text_color_two.addEventListener("input", generatepackcolor);


//***************************
// Pack-Button-Border-Radius
//***************************
var pack_button_border_radius_top_left = document.querySelector(".edit-panel #pack-button-border-radius-top-left");
var pack_button_border_radius_top_left_result = document.querySelector(".edit-panel #pack-button-border-radius-top-left-result");
var pack_button_border_radius_top_right = document.querySelector(".edit-panel #pack-button-border-radius-top-right");
var pack_button_border_radius_top_right_result = document.querySelector(".edit-panel #pack-button-border-radius-top-right-result");
var pack_button_border_radius_bottom_right = document.querySelector(".edit-panel #pack-button-border-radius-bottom-right");
var pack_button_border_radius_bottom_right_result = document.querySelector(".edit-panel #pack-button-border-radius-bottom-right-result");
var pack_button_border_radius_bottom_left = document.querySelector(".edit-panel #pack-button-border-radius-bottom-left");
var pack_button_border_radius_bottom_left_result = document.querySelector(".edit-panel #pack-button-border-radius-bottom-left-result");
function generatepackbuttonborderradius() 
{
    root.style.setProperty('--pack-button-border-radius-top-left', `${pack_button_border_radius_top_left.value}px`)
    pack_button_border_radius_top_left_result.innerHTML = pack_button_border_radius_top_left.value;
    if (pack_button_border_radius_top_left.value > 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-left', `${pack_button_border_radius_top_left.value - 2}px`)
    }
    if (pack_button_border_radius_top_left.value == 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-left', `1px`)
    }
    if (pack_button_border_radius_top_left.value == 2 || pack_button_border_radius_top_left.value == 1 || pack_button_border_radius_top_left.value == 0)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-left', `0px`)
    }

    root.style.setProperty('--pack-button-border-radius-top-right', `${pack_button_border_radius_top_right.value}px`)
    pack_button_border_radius_top_right_result.innerHTML = pack_button_border_radius_top_right.value;
    if (pack_button_border_radius_top_right.value > 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-right', `${pack_button_border_radius_top_right.value - 2}px`)
    }
    if (pack_button_border_radius_top_right.value == 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-right', `1px`)
    }
    if (pack_button_border_radius_top_right.value == 2 || pack_button_border_radius_top_right.value == 1 || pack_button_border_radius_top_right.value == 0)
    {
        root.style.setProperty('--pack-button-fill-border-radius-top-right', `0px`)
    }

    root.style.setProperty('--pack-button-border-radius-bottom-right', `${pack_button_border_radius_bottom_right.value}px`)
    pack_button_border_radius_bottom_right_result.innerHTML = pack_button_border_radius_bottom_right.value;
    if (pack_button_border_radius_bottom_right.value > 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-right', `${pack_button_border_radius_bottom_right.value - 2}px`)
    }
    if (pack_button_border_radius_bottom_right.value == 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-right', `1px`)
    }
    if (pack_button_border_radius_bottom_right.value == 2 || pack_button_border_radius_bottom_right.value == 1 || pack_button_border_radius_bottom_right.value == 0)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-right', `0px`)
    }

    root.style.setProperty('--pack-button-border-radius-bottom-left', `${pack_button_border_radius_bottom_left.value}px`)
    pack_button_border_radius_bottom_left_result.innerHTML = pack_button_border_radius_bottom_left.value;
    if (pack_button_border_radius_bottom_left.value > 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-left', `${pack_button_border_radius_bottom_left.value - 2}px`)
    }
    if (pack_button_border_radius_bottom_left.value == 3)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-left', `1px`)
    }
    if (pack_button_border_radius_bottom_left.value == 2 || pack_button_border_radius_bottom_left.value == 1 || pack_button_border_radius_bottom_left.value == 0)
    {
        root.style.setProperty('--pack-button-fill-border-radius-bottom-left', `0px`)
    }
}
pack_button_border_radius_top_left.addEventListener("input", generatepackbuttonborderradius);
pack_button_border_radius_top_right.addEventListener("input", generatepackbuttonborderradius);
pack_button_border_radius_bottom_right.addEventListener("input", generatepackbuttonborderradius);
pack_button_border_radius_bottom_left.addEventListener("input", generatepackbuttonborderradius);


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