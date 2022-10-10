//==================== Reference table ====================//
//:: Settings
//:: Main-Colors
//:: Profile-Picture-Color
//:: Button-Color
//:: Text-Colors
//:: Hover-Colors
//:: Opacity
//:: Background
//==================== *************** ====================//

//***************************
// Settings
//***************************
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);


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
// Profile-Picture-Color
//***************************
let social_linking_profile_picture_color_one = document.querySelector(".edit-panel #social-linking-profile-picture-color-one");
let social_linking_profile_picture_color_two = document.querySelector(".edit-panel #social-linking-profile-picture-color-two");
let social_linking_profile_picture_color_three = document.querySelector(".edit-panel #social-linking-profile-picture-color-three");
function generateprofilepicturecolor()
{
    root.style.setProperty('--social-linking-profile-picture-color-one', `${social_linking_profile_picture_color_one.value}`)
    root.style.setProperty('--social-linking-profile-picture-color-two', `${social_linking_profile_picture_color_two.value}`)
    root.style.setProperty('--social-linking-profile-picture-color-three', `${social_linking_profile_picture_color_three.value}`)
}
social_linking_profile_picture_color_one.addEventListener("input", generateprofilepicturecolor);
social_linking_profile_picture_color_two.addEventListener("input", generateprofilepicturecolor);
social_linking_profile_picture_color_three.addEventListener("input", generateprofilepicturecolor);


//***************************
// Button-Color
//***************************
let social_linking_button_color_one = document.querySelector(".edit-panel #social-linking-button-color-one");
let social_linking_button_color_two = document.querySelector(".edit-panel #social-linking-button-color-two");
let social_linking_button_color_three = document.querySelector(".edit-panel #social-linking-button-color-three");
function generatebuttoncolor()
{
    root.style.setProperty('--social-linking-button-color', `linear-gradient(to right, ${social_linking_button_color_one.value} 20%, ${social_linking_button_color_two.value} 100%)`)
    root.style.setProperty('--social-linking-button-shadow-color', `${social_linking_button_color_three.value}`)
}
social_linking_button_color_one.addEventListener("input", generatebuttoncolor);
social_linking_button_color_two.addEventListener("input", generatebuttoncolor);
social_linking_button_color_three.addEventListener("input", generatebuttoncolor);


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
const background_panel = document.querySelector(".edit-panel .panel .content .image-container .container #background-photo img");
const background_image = document.querySelector(".background img");
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
        background_panel.src = result;
        background_image.src = result;
    }
        remove_background.addEventListener("click", function(){
        background_panel.src = "background.jpg";
        background_image.src = "background.jpg";
    })
    reader.readAsDataURL(file);
  }
  if(this.value){
    let valueStore = this.value.match(regExp);
  }
});