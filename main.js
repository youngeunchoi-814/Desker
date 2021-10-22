$(".mainSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 1800,
    dots : true, 
    dotsClass : "main-dots", 
    appendArrows: false,
    draggable : false
});

 $('.storeSlider').slick({ //storeSlider
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots : true, 
        dotsClass : "store-dots", 
        appendArrows: false,
        draggable : false
    });

const arrowUp=document.querySelector('.btn_up');
arrowUp.addEventListener('click',()=>{
    arrowup.scrollIntoView('#navbar');
    arrowUp.scrollIntoView({behavior: "smooth"});
});