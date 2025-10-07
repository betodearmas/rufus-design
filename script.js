const swup = new Swup();

swup.hooks.on('page:view', () => {
  const bodyClass = document.body.className;

  if (bodyClass.includes('home')) {
    initHome();
  } 
  else if (bodyClass.includes('overview')) {
    initOverview();
  }
  else if (bodyClass.includes('selected')) {
    initSelected();
  }
  else if (bodyClass.includes('about')) {
    initAbout();
  }
});


function initHome() {
  console.log("Home page initialized");


  // Home page specific JS here
}

function initOverview() {
  console.log("About page initialized");


  // About page specific JS here
}


function initSelected() {
  console.log("About page initialized");


  // About page specific JS here
}

function initAbout() {
  console.log("About page initialized");

  
  // About page specific JS here
}