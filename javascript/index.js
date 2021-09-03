const variables = {
  hamburger: document.querySelector('.hamburger'),
  menu: document.querySelector('.nav-list-cont'),
  body: document.querySelector('body'),
  closeModal: document.querySelector('.close-modal'),
  navList: document.querySelectorAll('.nav-list'),
  sampleContainers: document.querySelector('.sampe-containers'),
  sampleJobs: document.querySelector('.sample-jobs'),
  project: document.querySelector('.project'),
  buttons: document.querySelectorAll('button'),
  shadow: document.querySelector('.shadow-div'),
  input: document.querySelector('input'),
  fullName: document.querySelector('#name'),
  email: document.querySelector('#email'),
};

// Beginning of navigation pop-up
const openMenu = () => {
  if (variables.menu.classList.toggle('hamburger-toggle', true)) {
    variables.body.style.overflow = 'hidden';
    variables.menu.style.overflow = 'visible';
  }
};
variables.hamburger.addEventListener('click', openMenu);

const closeMenu = () => {
  variables.menu.classList.toggle('hamburger-toggle', false);
  variables.body.style.overflow = 'visible';
};
variables.closeModal.addEventListener('click', closeMenu);

const closeMenuWithNav = () => {
  for (let i = 0; i < variables.navList.length; i += 1) {
    variables.navList[i].addEventListener('click', closeMenu);
  }
};
closeMenuWithNav();

// Beginning of populate main-section
const details = [
  {
    projectName: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'Javascript',
    tech4: 'Ruby on rails',
    liveLink: '#',
    srcLink: '#',
  },
  {
    projectName: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'Javascript',
    tech4: 'Ruby on rails',
    liveLink: '#',
    srcLink: '#',
  },
  {
    projectName: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    imgSrc: '#',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'Javascript',
    tech4: 'Ruby on rails',
    liveLink: '#',
    srcLink: '#',
  },
  {
    projectName: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    imgSrc: '#',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'Javascript',
    tech4: 'Ruby on rails',
    liveLink: '#',
    srcLink: '#',
  },
  {
    projectName: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    imgSrc: '#',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'Javascript',
    tech4: 'Ruby on rails',
    liveLink: '#',
    srcLink: '#',
  },
  {
    projectName: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    imgSrc: '#',
    imgSrcAlt: '#',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'Javascript',
    tech4: 'Ruby on rails',
    liveLink: '#',
    srcLink: '#',
  },

];

const populateMain = () => {
  variables.sampleJobs.innerHTML = ` <div class="header-2-container">
                  <h2 class="header header-2">My Recent Works</h2>
                  </div>
                  <div class="indicator">
                  <img src="#" alt="" id="indicator">
                  </div>
                  <article class="cards">
                  <div class="sample-containers">
                      <div class="sample-img-container">
                          <img src=${details[0].imgSrc} alt="" class="sample-img" id="sample-img-1">
                      </div>
                      <div class="sample-img-txt-head-container">
                          <h3 class="sample-img-head-txt">${details[0].projectName}</h3>
                      </div>
                      <ul class="code-lang-container">
                          <li class="ruby-on-rails">${details[0].tech4}</li>
                          <li class="css">${details[0].tech3}</li>
                          <li class="js">${details[0].tech2}</li>
                          <li class="html">${details[0].tech1}</li>
                      </ul>
                      <div class="btn-container">
                      <button type="button" class="btn" data-card='card0' 'card1'>See Project</button>
                      </div>
                  </div>
                  <div class="sample-containers">
                  <div class="sample-img-container">
                      <img src=${details[1].imgSrc} alt="" class="sample-img" id="sample-img-1">
                  </div>
                  <div class="sample-img-txt-head-container">
                      <h3 class="sample-img-head-txt">${details[1].projectName}</h3>
                  </div>
                  <ul class="code-lang-container">
                      <li class="ruby-on-rails">${details[1].tech4}</li>
                      <li class="css">${details[1].tech3}</li>
                      <li class="js">${details[1].tech2}</li>
                      <li class="html">${details[1].tech1}</li>
                  </ul>
                  <div class="btn-container">
                      <button type="button" class="btn" data-card = 'card1'>See Project</button>
                  </div>
              </div>
              <div class="sample-containers">
              <div class="sample-img-container">
                  <img src=${details[2].imgSrc} alt="" class="sample-img" id="sample-img-1">
              </div>
              <div class="sample-img-txt-head-container">
                  <h3 class="sample-img-head-txt">${details[2].projectName}</h3>
              </div>
              <ul class="code-lang-container">
                  <li class="ruby-on-rails">${details[0].tech4}</li>
                  <li class="css">${details[2].tech3}</li>
                  <li class="js">${details[2].tech2}</li>
                  <li class="html">${details[2].tech1}</li>
              </ul>
              <div class="btn-container">
                  <button type="button" class="btn" data-card = 'card2'>See Project</button>
              </div>
          </div>
          <div class="sample-containers">
              <div class="sample-img-container">
                  <img src=${details[3].imgSrc} alt="" class="sample-img" id="sample-img-1">
              </div>
              <div class="sample-img-txt-head-container">
                  <h3 class="sample-img-head-txt">${details[3].projectName}</h3>
              </div>
              <ul class="code-lang-container">
                  <li class="ruby-on-rails">${details[3].tech4}</li>
                  <li class="css">${details[3].tech3}</li>
                  <li class="js">${details[3].tech2}</li>
                  <li class="html">${details[3].tech1}</li>
              </ul>
              <div class="btn-container">
                  <button type="button" class="btn" data-card= 'card3'>See Project</button>
              </div>
          </div>   
          <div class="sample-containers">
              <div class="sample-img-container">
                  <img src=${details[4].imgSrc} alt="" class="sample-img" id="sample-img-1">
              </div>
              <div class="sample-img-txt-head-container">
                  <h3 class="sample-img-head-txt">${details[4].projectName}</h3>
              </div>
              <ul class="code-lang-container">
                  <li class="ruby-on-rails">${details[4].tech4}</li>
                  <li class="css">${details[4].tech3}</li>
                  <li class="js">${details[4].tech2}</li>
                  <li class="html">${details[4].tech1}</li>
              </ul>
              <div class="btn-container">
                <button type="button" class="btn" data-card= 'card4'>See Project</button>
              </div>
          </div>
          <div class="sample-containers">
              <div class="sample-img-container">
                  <img src=${details[5].imgSrc} alt="" class="sample-img" id="sample-img-1">
              </div>
              <div class="sample-img-txt-head-container">
                  <h3 class="sample-img-head-txt">${details[5].projectName}</h3>
              </div>
              <ul class="code-lang-container">
                  <li class="ruby-on-rails">${details[5].tech4}</li>
                  <li class="css">${details[5].tech3}</li>
                  <li class="js">${details[5].tech2}</li>
                  <li class="html">${details[5].tech1}</li>
              </ul>
              <div class="btn-container">
                  <button type="button" class="btn" data-card= 'card5'>See Project</button>
              </div>
          </div>           
      </article>`;
};
populateMain();

const openCloseProjDetails = (event) => {
  const dataSet = event.target.dataset.card;
  let num = 0;
  if (dataSet === 'card0') {
    num = 0;
  } else if (dataSet === 'card1') {
    num = 1;
  } else if (dataSet === 'card2') {
    num = 2;
  } else if (dataSet === 'card3') {
    num = 3;
  } else if (dataSet === 'card4') {
    num = 4;
  } else if (dataSet === 'card5') {
    num = 5;
  } else {
    return;
  }

  variables.project.classList.add('window');
  variables.shadow.classList.add('shadow');
  variables.shadow.overflow = 'hidden';
  window.scrollTo(
    {
      top: 100,
      left: 100,
      behavior: 'smooth',
    },
  );
  variables.project.style.overflow = 'auto';
  variables.project.classList.remove('sample-containers');
  variables.project.innerHTML = `
      <section class='window-container'>
          <div id="sample-img-container">
              <img src=${details[num].imgSrc} alt="" class="sample-img">
              <span id="sample-img-txt" data-num = ${num}>x</span>
          </div>
          <div class="sample-img-txt-head-container">
              <h3 class="sample-img-head-txt">${details[num].projectName}</h3>
          </div>
          <ul class="code-lang-container">
              <li id="popuprails">${details[num].tech4}</li>
              <li class="css">${details[num].tech3}</li>
              <li class="js">${details[num].tech2}</li>
          </ul>
          <p>${details[num].description}</p>
          <div class="win-btn-container">
              <a href='https://fobadara.github.io' class="window-btn" rel='norefferer noopener'><button type="button" data-card='project'>See Live <img src='images/see-live.svg' alt='Expand icon'></button></a>
              <a href='https://github.com/fobadara' class="window-btn" target='_blank' rel='norefferer noopener'><button type="button" data-card='project'>Source<img src='images/white-github.png' alt='Github's icon'></button></a>
          </div>
      </section>`;

  // Close details window
  const closeProjectDetails = (event) => {
    variables.project.classList.remove('window');
    variables.shadow.classList.remove('shadow');
    // Move screen card position after closing window
    const num = parseInt(event.target.dataset.num, 10);
    let top;
    if (window.innerWidth >= 992) {
      top = 1000;
    } else if (window.innerWidth >= 600) {
      top = 1350;
    } else {
      top = 1010 + (400 * num);
    }

    window.scrollTo(
      {
        top,
        left: 100,
        behavior: 'smooth',
      },
    );
  };
  const closeBtn = document.querySelector('#sample-img-txt');
  closeBtn.addEventListener('click', closeProjectDetails);
};

const getButton = () => {
  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', openCloseProjDetails);
  }
};
getButton();

const validateForm = () => {
  const mail = document.querySelector('#email');
  const mailValue = mail.value;
  const mailLower = mailValue.toLowerCase();
  const message = document.querySelector('#message');
  if (mailValue !== mailLower) {
    message.innerText = `Please enter email in lowercase. For example: ${mailLower}`;
    mail.style.border = 'solid thin gold';
    mail.style.outline = 'solid thin gold';
  } else if (mailValue === '') {
    message.innerText = 'Email cannot be empty';
    mail.style.border = 'solid thin gold';
    mail.style.outline = 'solid thin gold';
  } else {
    message.innerText = '';
    mail.style.border = 'initial';
    mail.style.outline = 'solid thin #36b37f';
  }
};

for (let i = 0; i < variables.buttons.length; i += 1) {
  if (variables.buttons[i].innerText === 'Get in touch') {
    variables.buttons[i].addEventListener('click', validateForm);
    variables.buttons[i].addEventListener('blur', validateForm);
  }
}

// Code for localStorage API
const populateName = () => {
  const fullName = JSON.parse(localStorage.getItem('fullName'));
  variables.fullName.value = fullName;
};
const populateEmail = () => {
  const email = JSON.parse(localStorage.getItem('email'));
  variables.email.value = email;
};

const checkStorage = (event) => {
  if (event.target.dataset.name === 'full-name') {
    if (variables.fullName.value === '') {
      populateName();
    } else {
      const fullName = event.target.value;
      localStorage.setItem('fullName', JSON.stringify(fullName));
    }
  } else if (event.target.dataset.email === 'email') {
    if (variables.email.value === '') {
      populateEmail();
    } else {
      const email = event.target.value;
      localStorage.setItem('email', JSON.stringify(email));
    }
  }
};
variables.input.addEventListener('change', checkStorage);
variables.email.addEventListener('change', checkStorage);

window.addEventListener('load', populateName);
window.addEventListener('load', populateEmail);