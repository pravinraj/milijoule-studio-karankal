import brandProjectImage from './Janela.jpg';
import agrotieProjectImage from './AgroTIE.jpg';
import digitalProjectImage from './Digital.jpg';
import reatailProjectImage from './Retail.jpg';
import startupProjectImage from './Corporate.jpg';
import tellatalesProjectImage from './Tellatales.jpg';
import cocaoProjectImage from './Cocao.jpeg';

let tellatales = {
  imgLink: tellatalesProjectImage,
  buttonText: 'Innovative Cafe Culture',
  projectName: 'Tellatales',
  realProjectName: 'tellatales',
  projectDescr:
    'The fine intertwining of dining and design results in an epic restaurant experience. We are in the business of designing elegant restaurants for wowing customers.'
};

let cafe = {
  imgLink: brandProjectImage,
  buttonText: 'Brand Strategy & Product Packaging',
  projectName: 'Janela',
  realProjectName: 'janela',
  projectDescr:
    'The tiny state of Goa is a very popular tourist destination, thanks to its pristine beaches. The city also has Indo-Portuguese architectural marvels in the form of residences and churches, dating back to the 1700s.'
};

let agrotie = {
  imgLink: agrotieProjectImage,
  buttonText: 'AgroTIE Horticulture Experience Centre',
  projectName: 'AgroTIE',
  realProjectName: 'agrotie',
  projectDescr:
    'Agrotie is a horticultural training centre based in Bangalore, India. Their mission is to strengthen the economic perspective of farmers and rural communities in Karnataka.'
};

let cocao = {
  imgLink: cocaoProjectImage,
  buttonText: 'Cafe/Restaurant',
  projectName: 'Cacao',
  realProjectName: 'cocao',
  projectDescr: ''
};

let trainbooking = {
  imgLink: digitalProjectImage,
  buttonText: 'Product Engagement via UI / UX',
  projectName: 'Train Booking App',
  realProjectName: 'trainbooking',
  projectDescr:
    ' Turn to our UI and UX services to build an engaging product quickly and effortlessly. Enhance your brand communication via user centric easy-to-use web (and mobile) applications.'
};

let globShop = {
  imgLink: reatailProjectImage,
  buttonText: 'Retail Innovation Strategy & Design',
  projectName: 'Walkway',
  realProjectName: 'walkway',
  projectDescr:
    "Our mantra is, 'Innovation through retail design'. We connect to customers through emotionally rich interiors and drive engagement."
};

let grasshoper = {
  imgLink: startupProjectImage,
  buttonText: 'Leading Workspace Corporate Design',
  projectName: 'Grasshoper',
  realProjectName: 'grasshoper',
  projectDescr:
    "Great workspaces inspire great work. Our team of experts will identify, recommend and create the best interior spaces for your productivity and company's success."
};

export default [
  tellatales,
  cafe,
  agrotie,
  // cocao,
  trainbooking,
  globShop,
  grasshoper
];
