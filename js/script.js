$(() => {
    /** 
    *  Smooth down scroll
    */
    $("#projects-scroll").on("click","a", function (event) {
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);

    });

    $("#news-scroll").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".header-arrow").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    /**
     * Header slider
     */
    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        vertical: true,
        customPaging : function(slider, i) {
            return '<img src="img/empty-dot.png" /><img src="../img/full-dot.png" />';
        },
    });

    /**
     * News slider
     */
    $('.news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        customPaging : function(slider, i) {
            return '<img src="img/empty-dot.png" /><img src="../img/full-dot.png" />';
        },
    });

    /**
     * Gallery
     */
    $("#gallery-first").lightGallery();
    $("#gallery-second").lightGallery();

    /**
     * Show second gallery
     */
    $( ".more-button" ).click(function(e){ 
        e.preventDefault();
        $( "#gallery-second" )
                .css("display", "grid")
                .hide()
                .slideDown();
        
        $( ".more-button" ).slideUp(0);
        $( ".less-button" ).css("display", "block")
                        .hide()
                        .slideDown();
    });

    /**
     * Hide second gallery
     */
    $( ".less-button" ).click(function(e){ 
        e.preventDefault();
        $( "#gallery-second" ).slideUp();
        $( ".less-button" ).slideUp(0);
        $( ".more-button" ).css("display", "block")
                        .hide()
                        .slideDown();
    });



});
