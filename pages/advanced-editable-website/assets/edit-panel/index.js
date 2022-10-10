//==================== Reference table ====================//
//:: Settings
//:: Gradient
//:: Main-Colors
//:: Card-Image-Border-Radius
//:: Card-Text-Color
//:: Card-Border-Radius
//:: Text-Colors
//:: Hover-Colors
//:: Parallax-Border-Radius
//:: Button-Text-Color
//:: Button-Color
//:: Button-Border-Radius
//:: Categories
//:: Pack-Text-Color
//:: Pack-Border-Radius
//:: Pack-Button-Text-Color
//:: Pack-Button-Border-Radius
//:: Logo-Color
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
// Hover-Colors
//***************************
let hover_color_one = document.querySelector(".edit-panel #hover-color-one");
let hover_color_two = document.querySelector(".edit-panel #hover-color-two");
function generatehovercolor()
{
    root.style.setProperty('--hover-color-one', `${hover_color_one.value}`)
    root.style.setProperty('--hover-color-two', `${hover_color_two.value}`)
}
hover_color_one.addEventListener("input", generatehovercolor);
hover_color_two.addEventListener("input", generatehovercolor);


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
// Button-Text-Color
//***************************
let button_text_color_one = document.querySelector(".edit-panel #button-text-color-one");
let button_text_color_two = document.querySelector(".edit-panel #button-text-color-two");
let button_text_color_three = document.querySelector(".edit-panel #button-text-color-three");
function generatebuttontextcolor()
{
    root.style.setProperty('--button-text-gradient', `linear-gradient(to right, ${button_text_color_one.value} 20%, ${button_text_color_two.value} 100%)`)
    root.style.setProperty('--button-text-active', `${button_text_color_three.value}`)
}
button_text_color_one.addEventListener("input", generatebuttontextcolor);
button_text_color_two.addEventListener("input", generatebuttontextcolor);
button_text_color_three.addEventListener("input", generatebuttontextcolor);


//***************************
// Button-Color
//***************************
let button_color_one = document.querySelector(".edit-panel #button-color-one");
let button_color_two = document.querySelector(".edit-panel #button-color-two");
let button_color_three = document.querySelector(".edit-panel #button-color-three");
let button_color_four = document.querySelector(".edit-panel #button-color-four");
function generatebuttoncolor()
{
    root.style.setProperty('--button-color-one', `${button_color_one.value}`)
    root.style.setProperty('--button-color-two', `${button_color_two.value}`)
    root.style.setProperty('--button-color-three', `${button_color_three.value}`)
    root.style.setProperty('--button-color-four', `${button_color_four.value}`)
}
button_color_one.addEventListener("input", generatebuttoncolor);
button_color_two.addEventListener("input", generatebuttoncolor);
button_color_three.addEventListener("input", generatebuttoncolor);
button_color_four.addEventListener("input", generatebuttoncolor);


//***************************
// Button-Border-Radius
//***************************
var button_border_radius_top_left = document.querySelector(".edit-panel #button-border-radius-top-left");
var button_border_radius_top_left_result = document.querySelector(".edit-panel #button-border-radius-top-left-result");

var button_border_radius_top_right = document.querySelector(".edit-panel #button-border-radius-top-right");
var button_border_radius_top_right_result = document.querySelector(".edit-panel #button-border-radius-top-right-result");

var button_border_radius_bottom_right = document.querySelector(".edit-panel #button-border-radius-bottom-right");
var button_border_radius_bottom_right_result = document.querySelector(".edit-panel #button-border-radius-bottom-right-result");

var button_border_radius_bottom_left = document.querySelector(".edit-panel #button-border-radius-bottom-left");
var button_border_radius_bottom_left_result = document.querySelector(".edit-panel #button-border-radius-bottom-left-result");

function generatebuttonborderradius() 
{
    root.style.setProperty('--button-border-radius-top-left', `${button_border_radius_top_left.value}px`)
    button_border_radius_top_left_result.innerHTML = button_border_radius_top_left.value;

    root.style.setProperty('--button-border-radius-top-right', `${button_border_radius_top_right.value}px`)
    button_border_radius_top_right_result.innerHTML = button_border_radius_top_right.value;

    root.style.setProperty('--button-border-radius-bottom-right', `${button_border_radius_bottom_right.value}px`)
    button_border_radius_bottom_right_result.innerHTML = button_border_radius_bottom_right.value;

    root.style.setProperty('--button-border-radius-bottom-left', `${button_border_radius_bottom_left.value}px`)
    button_border_radius_bottom_left_result.innerHTML = button_border_radius_bottom_left.value;
}

button_border_radius_top_left.addEventListener("input", generatebuttonborderradius);

button_border_radius_top_right.addEventListener("input", generatebuttonborderradius);

button_border_radius_bottom_right.addEventListener("input", generatebuttonborderradius);

button_border_radius_bottom_left.addEventListener("input", generatebuttonborderradius);


//***************************
// Categories
//***************************
var categories_image_border_radius_top_left = document.querySelector(".edit-panel #categories-image-border-radius-top-left");
var categories_image_border_radius_top_left_result = document.querySelector(".edit-panel #categories-image-border-radius-top-left-result");

var categories_image_border_radius_top_right = document.querySelector(".edit-panel #categories-image-border-radius-top-right");
var categories_image_border_radius_top_right_result = document.querySelector(".edit-panel #categories-image-border-radius-top-right-result");

var categories_image_border_radius_bottom_right = document.querySelector(".edit-panel #categories-image-border-radius-bottom-right");
var categories_image_border_radius_bottom_right_result = document.querySelector(".edit-panel #categories-image-border-radius-bottom-right-result");

var categories_image_border_radius_bottom_left = document.querySelector(".edit-panel #categories-image-border-radius-bottom-left");
var categories_image_border_radius_bottom_left_result = document.querySelector(".edit-panel #categories-image-border-radius-bottom-left-result");

function generatecategoriesimagesborderradius() 
{
    root.style.setProperty('--categories-image-border-radius-top-left', `${categories_image_border_radius_top_left.value}px`)
    categories_image_border_radius_top_left_result.innerHTML = categories_image_border_radius_top_left.value;

    root.style.setProperty('--categories-image-border-radius-top-right', `${categories_image_border_radius_top_right.value}px`)
    categories_image_border_radius_top_right_result.innerHTML = categories_image_border_radius_top_right.value;

    root.style.setProperty('--categories-image-border-radius-bottom-right', `${categories_image_border_radius_bottom_right.value}px`)
    categories_image_border_radius_bottom_right_result.innerHTML = categories_image_border_radius_bottom_right.value;

    root.style.setProperty('--categories-image-border-radius-bottom-left', `${categories_image_border_radius_bottom_left.value}px`)
    categories_image_border_radius_bottom_left_result.innerHTML = categories_image_border_radius_bottom_left.value;
}

categories_image_border_radius_top_left.addEventListener("input", generatecategoriesimagesborderradius);

categories_image_border_radius_top_right.addEventListener("input", generatecategoriesimagesborderradius);

categories_image_border_radius_bottom_right.addEventListener("input", generatecategoriesimagesborderradius);

categories_image_border_radius_bottom_left.addEventListener("input", generatecategoriesimagesborderradius);


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
// Logo-Color
//***************************
let color_logo = document.querySelector(".edit-panel #logo-color");
function generatelogocolor()
{
    root.style.setProperty('--logo-color', `${color_logo.value}`)
}
color_logo.addEventListener("input", generatelogocolor);


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