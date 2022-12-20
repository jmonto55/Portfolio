const hamburgerButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelector('.nav_list');
const myName = document.querySelector('.logo');

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

hamburgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
navItems.addEventListener('click', closeMenu);

const worksSection = document.getElementById('portfolio');
const mainMiddleText = document.createElement('div');
mainMiddleText.innerHTML = '<h3>My Recent Works</h3>';
const titleLine = document.createElement('div');
titleLine.className = 'title_line';
mainMiddleText.appendChild(titleLine);

const projectData = [
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featuredImage: [
      './assets/multi_post_image.svg',
      './assets/multi_post_image_desktop.svg',
    ],
    technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },

  {
    name: 'Professional data',
    description:
      "A daily selection of privately personalized reads; no account's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featuredImage: [],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },

  {
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: [],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },

  {
    name: 'Profesional Art Printing Data More',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: [],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },

  {
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: [],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },

  {
    name: 'Data Visualization',
    description:
      "A daily selection of privately personalized reads; no account's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featuredImage: [],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    links: {
      linkToLiveServer: '',
      linkToSourceCode: '',
    },
  },
];


const mainContainer = document.createElement('div');
mainContainer.className = 'main_articles_container';


for (let i = 0; i < projectData.length; i += 1) {
  const multiPostCard = document.createElement('article');
  if (i == 0) {
    const featuredImage = document.createElement('img');
    const multiPostText = document.createElement('div');
    const name = document.createElement('h4');
    name.innerText = projectData[i]['name'];
    const description = document.createElement('p');
    description.innerText = projectData[i]['description'];

    const technologies = document.createElement('ul');
    technologies.className = 'techs_used';
    let listOfTechnologies = projectData[i]['technologies'];
    for (let j = 0; j < listOfTechnologies.length; j +=1) {
      let technology = document.createElement('li');
      technology.innerText = listOfTechnologies[j];
      technologies.append(technology);
    }
    const button = document.createElement('button');
    button.innerText = 'See Project';

    multiPostText.className = 'multi_post_text';
    [featuredImage.src] = projectData[i].featuredImage;
    featuredImage.className = 'multi_post_image';
    multiPostText.append(name, description, technologies, button);

    multiPostCard.append(featuredImage, multiPostText);
    mainContainer.append(multiPostCard);
    continue;
  }

  const projectCard = document.createElement('article');

}


worksSection.append(mainMiddleText, mainContainer);
