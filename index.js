const hamburgerButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelector('.nav_list');
const myName = document.querySelector('.logo');
const body = document.getElementById('body');
const popupWindow = document.querySelector('.popup_card');
const header = document.getElementById('header');
const projectData = [
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featuredImage: ['./assets/multi_post_image_desktop.svg'],
    technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },

  {
    name: 'Professional data',
    description:
      'Professional project for a risk management company who needed data visualization to support decision making.',
    featuredImage: ['./assets/popup_image.svg'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },

  {
    name: 'Healthcare Dashboard',
    description:
      "User interface representing a dashboard displaying all the patient's information for the physicians, everything from vital signals to diet preferences.",
    featuredImage: ['./assets/popup_image.svg'],
    technologies: ['html', 'JavaScript', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },

  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    featuredImage: ['./assets/popup_image.svg'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },

  {
    name: 'Geolocalization',
    description:
      'Project for the government with the main goal of geolocalizating spies around the country.',
    featuredImage: ['./assets/popup_image.svg'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },

  {
    name: 'Data Visualization',
    description:
      "User Interface for a fitness company who needed an app for it's users to log in and track their fitness journey.",
    featuredImage: ['./assets/popup_image.svg'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },

  {
    name: 'Video Game',
    description:
      'A basic video game with the goal to help children and teenagers understand how biological systems fight entropy for no aparent logical reason.',
    featuredImage: ['./assets/popup_image.svg'],
    technologies: ['html', 'Bootstrap', 'Rails'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },
];

function openMenu() {
  hamburgerButton.classList.toggle('invisible');
  myName.classList.toggle('invisible');
  closeButton.classList.toggle('invisible');
  navItems.classList.toggle('invisible');
  navItems.classList.toggle('open_menu');
}

function closeMenu() {
  hamburgerButton.classList.toggle('invisible');
  myName.classList.toggle('invisible');
  closeButton.classList.toggle('invisible');
  navItems.classList.toggle('invisible');
  navItems.classList.toggle('open_menu');
}

function seeProject(k) {
  const title = document.querySelector('.popup_title');
  const techStack = document.querySelector('.tech_stack');
  const popupText = document.querySelector('.popup_text');
  const popupImage = document.querySelector('.popup_img');
  const socialMedia = document.querySelector('.social_media');

  [popupImage.src] = projectData[k - 2].featuredImage;
  title.innerText = projectData[k - 2].name;
  popupText.innerText = projectData[k - 2].description;
  for (let l = 0; l < projectData[k - 2].technologies.length; l += 1) {
    const tech = document.createElement('li');
    tech.className = 'techs';
    tech.innerText = projectData[k - 2].technologies[l];
    techStack.append(tech);
  }
  popupWindow.classList.toggle('invisible');
  window.location.href = '#popup';
  body.classList.toggle('active');
  header.classList.toggle('blur');
  socialMedia.classList.toggle('blur');
}

function closeProject() {
  const techStack = document.querySelector('.tech_stack');
  const socialMedia = document.querySelector('.social_media');
  popupWindow.classList.toggle('invisible');
  window.location.href = '#portfolio_down';
  body.classList.toggle('active');
  techStack.innerHTML = '';
  header.classList.toggle('blur');
  socialMedia.classList.toggle('blur');
}

hamburgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
navItems.addEventListener('click', closeMenu);

const xProject = document.querySelector('.close_icon');
xProject.addEventListener('click', closeProject);

const worksSection = document.getElementById('portfolio');
const mainMiddleText = document.createElement('div');
mainMiddleText.className = 'main_middle_text';
const myRecentWorks = document.createElement('h3');
myRecentWorks.innerText = 'My Recent Works';
const titleLine = document.createElement('div');
titleLine.className = 'title_line';
mainMiddleText.append(myRecentWorks, titleLine);

const mainContainer = document.createElement('div');
mainContainer.className = 'main_articles_container';

for (let i = 0; i < projectData.length; i += 1) {
  const multiPostCard = document.createElement('article');
  multiPostCard.className = 'multi_post_card';

  if (i === 0) {
    const featuredImage = document.createElement('img');
    const multiPostText = document.createElement('div');
    const name = document.createElement('h4');
    name.innerText = projectData[i].name;
    const description = document.createElement('p');
    description.innerText = projectData[i].description;

    const technologies = document.createElement('ul');
    technologies.className = 'techs_used';
    const listOfTechnologies = projectData[i].technologies;

    for (let j = 0; j < listOfTechnologies.length; j += 1) {
      const technology = document.createElement('li');
      technology.innerText = listOfTechnologies[j];
      technologies.append(technology);
    }

    const button = document.createElement('button');
    button.innerText = 'See Project';
    button.addEventListener('click', seeProject);

    multiPostText.className = 'multi_post_text';
    [featuredImage.src] = projectData[i].featuredImage;
    featuredImage.className = 'multi_post_image';
    multiPostText.append(name, description, technologies, button);

    multiPostCard.append(featuredImage, multiPostText);
    mainContainer.append(multiPostCard);
  } else {
    const projectCard = document.createElement('article');
    projectCard.className = 'project_card';
    const name = document.createElement('h4');
    name.innerText = projectData[i].name;
    const description = document.createElement('p');
    description.innerText = projectData[i].description;

    const technologies = document.createElement('ul');
    technologies.className = 'techs_used_project';
    const listOfTechnologies = projectData[i].technologies;

    for (let j = 0; j < listOfTechnologies.length; j += 1) {
      const technology = document.createElement('li');
      technology.innerText = listOfTechnologies[j];
      technologies.append(technology);
    }

    const button = document.createElement('button');
    button.classList.add('project_button');
    button.innerText = 'See Project';
    projectCard.append(name, description, technologies, button);
    mainContainer.append(projectCard);
  }
}

worksSection.append(mainMiddleText, mainContainer);

const buttons = document.querySelectorAll('button');

for (let k = 0; k < buttons.length; k += 1) {
  buttons[k].addEventListener('click', () => seeProject(k));
}