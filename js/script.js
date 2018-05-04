// INSTRUCTION FOR STICKY NAV-BAR
// get the navigation bar
const nav = document.querySelector('.navigation');
const topOfNav = nav.offsetTop;
function fixNav() {
    //console.log(topOfNav);
    if(window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
}
window.addEventListener('scroll', fixNav);



//INSTRUCTION FOR ACTIVE LINKS

//var menuNav = document.getElementsByClassName('navbar');
//var navItems = menuNav.getElementsByClassName('nav-link');
// for (var i = 0; i < navItems.length; i++) {
//     navItems[i].addEventListener('click', function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }


// var navItems = menuNav.getElementsByClassName('nav-link');
// for(var i = 0; i < navItems.length; i++) {
//     navItems[i].onclick = function() {
//         // remove class from sibling
//         var link = navItems[0];
//         while(link) {
//             if(link.tagName === "HOME", "ABOUT", "SERVICES", "PORTFOLIO", "CONTACT") {
//                 //remove class
//                 link.classList.remove("active");
//             }
//             //pass to the new sibling
//             link = link.nextSibling;
//         }
//         this.classList.add("active");
//     };
// }

$('.navLi').on('click', 'li', function() {
    $('.navLi li.active').removeClas('active');
    $(this).addClass('active');
});
