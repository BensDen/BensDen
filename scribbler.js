// utilities
var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};



// toggle tabs on codeblock
window.addEventListener("load", function() {
  // get all tab_containers in the document
  var tabContainers = getAll(".tab__container");

  // bind click event to each tab container
  for (var i = 0; i < tabContainers.length; i++) {
    get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
  }

  // each click event is scoped to the tab_container
  function tabClick (event) {
    var scope = event.currentTarget.parentNode;
    var clickedTab = event.target;
    var tabs = getAll('.tab', scope);
    var panes = getAll('.tab__pane', scope);
    var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // remove all active pane classes
    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    // apply active classes on desired tab and pane
    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(i, event) {
  var element = sections[i];
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
  for (var i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', smoothScrollTo.bind(this,i));
  }
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = "This is a website filled with all of the things that I have worked on over the years.\n\nSome are silly, some are serious, but they were all fun to do. \n\n If you have some time to spare, come and have a browse!";
  
  var speed = 45;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}



(function changeIntro() {
  var mainIntro = ["How're ya gettin on?", "Hello? Who's there?", "How's the form?", "Wit ye uptae?", "Must be a slow day if you're here", "Bens den, ran by a hen",
  "Den for Ben, no girls allowed", "Available for other events and gatherings","Stop Refreshing the page", "Big Bens dev and design den", "Owned and ran by a hen", 
  "Grab a pen", "Runs on good vibes", "Congratulations!\n You are a visitor!", "Formerly known as Ken", "Secretly afraid of worms", "Do not feed after midnight", "At some point I was ten",
  "Den near the Glen", "13% of statistics are made up", "Go ahead, take a look around", "Only allowed outside until the street lights turn on", "Formally trained in the art of being cool", 
  "Help I'm trapped in this website", "Hard to understand", "Good at ???", "Sole creator of this poor excuse for a website", "Owner of a computer","I hope you're having a good day :D",
  "Worlds best Googler", "Website sponsered by Ben: 'It's okay I guess'", "Number one handsomest man (according to my mum)", "I was self employed until I was laid off", "Blahem",
  "Reaching the bottom of the barrel since 2012","Disappointing generations since 2000","Part time sleeper", "I built my own keyboard and it haunts me everyday"];
  var randomIntro = Math.floor(Math.random() * mainIntro.length);
  document.getElementById('introduction_text').innerHTML = mainIntro[randomIntro];
})();

var str = document.querySelector('.wavy').innerHTML;

if (Math.abs(str.length % 2) == 1) {str += " "}

var out = '';
for (let i = 0; i < str.length/2; i++) {
  out += '<span style="animation-delay:'+i*0.1+'s">'+str[i]+'</span>';
}
let n = str.length/2;
for (let i = str.length/2; i < str.length; i++) {
  out += '<span style="animation-delay:'+n*0.1+'s">'+str[i]+'</span>';
  n--;
}

document.querySelector('.wavy').innerHTML = out;

$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});



