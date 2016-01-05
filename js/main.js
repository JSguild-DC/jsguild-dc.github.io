console.log('bananaFoo');

// JavaScript for the sticky nav bar --

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
        //document.getElementById('js-sticky-nav-filler').style.marginTop = 'inherit';
    // else give js-main-nav the 'triggered' class
    } else {
        document.getElementById('js-main-nav').className = 'sticky-nav';
        document.getElementById('js-sticky-nav-filler').style.marginTop = headerHeight + "px";
    }
};





// Google Maps API initialization function

function initialize() {
    // creates an object that houses all of the google
    // maps keys.
    var mapOptions = {
        center: { lat: 38.90423423481152, lng: -77.03126300000002},
        zoom: 12
        };

    // creates a new google map out of the above specs
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}

// loads that map we created above when the window gets loaded
google.maps.event.addDomListener(window, 'load', initialize);

// Function to send visitors to correct content based on initial button clicks
function whoAreYou() {
    
    console.log('listening');
    var member = document.getElementById('member');

    member.onclick = function go(){
        var info = document.getElementById('info');
        var form = document.getElementById('form');

        //function to hide all other person classes and show class "this" (stringified) in the info and form divs
        console.log(member);
        console.log(this);
        debugger

    }
}whoAreYou();

 // function go(person) {
 //    console.log('hey');
 //        console.log(person+' clicked');
 //    };


//Carolyn's test
