$(function () {
    myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false});

    $(".banner").scrollBanner({
        images : [
            {src:"img/banner3.jpg",href:"#"},
            {src:"img/banner6.jpg",href:"#"},
            {src:"img/banner2.jpg",href:"#"},
            {src:"img/banner3.jpg",href:"#"},
            {src:"img/banner4.jpg",href:"#"}
        ],
        scrollTime:3000,
        bannerHeight:"170px",
        iconColor: "#FFFFFF",
        iconHoverColor : "#c9c41d",
        iconPosition : "center"
    });

})