console.log('JSGuild Rules');


// variable defines height of header and subtracts the height
// of the main-nav id to get the height of where the toggleScroll
// function should be triggered
var headerHeight = (document.getElementById('js-header').offsetHeight - document.getElementById('js-main-nav').offsetHeight);

// sets an onscroll event listener to trigger the toggleScroll
// function on a scroll event. This is also on the body element
// but could be on any element
document.body.onscroll = toggleScroll;


function toggleScroll() {
    // if the scroll (or YOffset is less then headerHeight, keep
    // the class 'main-nav'
    if(window.pageYOffset < headerHeight) {
        document.getElementById('js-main-nav').className = 'main-nav';
    // else give js-main-nav the 'triggered' class
    } else {
        document.getElementById('js-main-nav').className = 'sticky-nav';
    }
};


function initialize() {
    var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);


