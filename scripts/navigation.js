// GET A LIST OF ITEMS TO WATCH
const myListOfItems = document.querySelectorAll('main section')

// CONFIGURE THE OVSERVER
let observerOptions = {
    //null is the default and references the viewport
    root: null, //alters the viewport. negative values decrease the size.
    rootMargin: '-40% 0px -40% 0px', // Watches a smaller area near the middle of the screen
    threshold: 0
}

// AllItems is a list of all elements being watched
const myObserver = new IntersectionObserver(allItems => {
    allItems.forEach(singleItem => {
        if (singleItem.isIntersecting) {
            highlight(singleItem.target)
        }
    })
}, observerOptions)

// FUNCTION TO ADD A CLASS
function highlight(cmi) {
    document.querySelector('nav li.active').classList.remove('active');
    let theid = cmi.getAttribute('id');
    let newActiveLink = document.querySelector(`[href="#${theid}"]`)
    newActiveLink.parentElement.classList.add('active');
}

// CALL THE OBSERVER ON PAGE LOAD
myListOfItems.forEach(item => {
    myObserver.observe(item)
});
