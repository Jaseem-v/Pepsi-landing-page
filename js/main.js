$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });
  
//  pepsi image change
function imageSlider(images){
    document.querySelector('.pepsi').src = images;
}

// background-image change

function BgColorChange(color){
    const colorChange = document.querySelector('.main')
    colorChange.style.background = color;
}


// toggle-menu

function toggleMenu(){
    const toggle =document.querySelector('.toggle-menu')
    toggle.classList.toggle('active')
    const navigation =document.querySelector('.navigation')
    navigation.classList.toggle('active')
}



