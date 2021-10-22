$(".mainSlider").slick({//mainSlider
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

    const arrowUp=document.querySelector('.btn__up');
    arrowUp.addEventListener('click',()=>{
        scrollIntoView('#navbar');
    });
    
    function scrollIntoView(selector){
        const scrollTo = document.querySelector(selector);
        scrollTo.scrollIntoView({behavior: "smooth"});
    }
    