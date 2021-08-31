let variables = {
 hamburger: document.querySelector('.hamburger'),
 menu: document.querySelector('.nav-list-cont'),
 body: document.querySelector('body'),
 closeModal: document.querySelector('.close-modal'),
 navList: document.querySelectorAll('.nav-list'),
 sampleContainers: document.querySelector('.sampe-containers'),
 sampleJobs: document.querySelector('.sample-jobs'),
 project: document.querySelector('.project'),
 buttons: document.querySelectorAll('button')
}
// Beginning of navigation pop-up
function openMenu() {
  if (variables.menu.classList.toggle('hamburger-toggle', true)) {
    variables.body.style.overflow = 'hidden';
  }
}
variables.hamburger.addEventListener('click', openMenu);

function closeMenu() {
  variables.menu.classList.toggle('hamburger-toggle', false);
  variables.body.style.overflow = 'visible';
}
variables.closeModal.addEventListener('click', closeMenu);

function closeMenuWithNav() {
    for (let i = 0; i < variables.navList.length; i += 1) {
        variables.navList[i].addEventListener('click', closeMenu);
    }
}
closeMenuWithNav();

//Beginning of populate main-section 
let details = [
    {
        projectName: 'Keeping track of hundred of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.',
        imgSrc: '#',
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'Javascript',
        tech4: 'Ruby on rails',
        liveLink: '#',
        srcLink:'#'
    },
    {
        projectName: 'Keeping track of hundred of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.',
        imgSrc: '#',
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'Javascript',
        tech4: 'Ruby on rails',
        liveLink: '#',
        srcLink:'#'
    },
    {
        projectName: 'Keeping track of hundred of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.',
        imgSrc: '#',
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'Javascript',
        tech4: 'Ruby on rails',
        liveLink: '#',
        srcLink:'#'
    },
    {
        projectName: 'Keeping track of hundred of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.',
        imgSrc: '#',
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'Javascript',
        tech4: 'Ruby on rails',
        liveLink: '#',
        srcLink:'#'
    },
    {
        projectName: 'Keeping track of hundred of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.',
        imgSrc: '#',
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'Javascript',
        tech4: 'Ruby on rails',
        liveLink: '#',
        srcLink:'#'
    },
    {
        projectName: 'Keeping track of hundred of components',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.',
        imgSrc: '#',
        imgSrcAlt: '#',
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'Javascript',
        tech4: 'Ruby on rails',
        liveLink: '#',
        srcLink:'#'
    }

];

function populateMain() {
    variables.sampleJobs.innerHTML = ` <div class="header-2-container">
                <h2 class="header header-2">My Recent Works</h2>
                </div>
                <div class="indicator">
                <img src="#" alt="" id="indicator">
                </div>
                <article class="cards">
                <div class="sample-containers">
                    <div class="sample-img-container">
                        <img src="${details[0].imgSrc}" alt="" class="sample-img" id="sample-img-1">
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
                        <button type="button" class="btn" data-card= 'card1'>See Project</button>
                    </div>
                </div>
                <div class="sample-containers">
                <div class="sample-img-container">
                    <img src="${details[1].imgSrc}" alt="" class="sample-img" id="sample-img-1">
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
                    <button type="button" class="btn" data-card = 'card2'>See Project</button>
                </div>
            </div>
            <div class="sample-containers">
            <div class="sample-img-container">
                <img src="${details[2].imgSrc}" alt="" class="sample-img" id="sample-img-1">
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
                <button type="button" class="btn" data-card = 'card3'>See Project</button>
            </div>
        </div>
        <div class="sample-containers">
            <div class="sample-img-container">
                <img src="${details[3].imgSrc}" alt="" class="sample-img" id="sample-img-1">
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
                <button type="button" class="btn" data-card= 'card4'>See Project</button>
            </div>
        </div>   
        <div class="sample-containers">
            <div class="sample-img-container">
                <img src="${details[4].imgSrc}" alt="" class="sample-img" id="sample-img-1">
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
                <button type="button" class="btn" data-card= 'card5'>See Project</button>
            </div>
        </div>
        <div class="sample-containers">
            <div class="sample-img-container">
                <img src="${details[5].imgSrc}" alt="" class="sample-img" id="sample-img-1">
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
}
populateMain();

function getButton() {
    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener('click', openProjectDetails);
    }

}
getButton();

function openProjectDetails(event) {
    variables.project.classList.add('window');
    variables.project.innerHTML = `
    <div class="sample-img-container">
        <img src="${details[5].imgSrc}" alt="" class="sample-img" id="sample-img-1">x
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
        <button type="button" class="btn" data-card='project'>See Project</button>
    </div>`;
}
