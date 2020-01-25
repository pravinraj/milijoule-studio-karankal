import projectImage from './trainbookingproject.jpg';
import projectImages from './project/images.js';
import specialProcessImage from './trainbookingprocess.png';

export default {
  projectImage,
  projectImages,
  specialProcessImage,
  imageTypes: ['process'],
  reviews: [
    {
      name: 'Ayush Roy_ Bangalore',
      text:
        'Nuts about tella - Amazing. Roasted almonds 😍, Maple tella pancake - Must try (paisa wasool item😋) Ambiance : 10/10, I liked the songs and sitting space is descent. Ambiance is soothing.',
      src: { link: '', from: 'zomato_com' }
    }
  ],
  clientInfo: [
    'Client : Goibibo, 2016 (Mobile Application)',
    'Design By : Rahul karankal'
  ],
  projectDescr: [
    'The project goal was to enable the user to check PNR status/Train Availability & book available train tickets for the GoIbibo native application. The entire project was executed in collaboration with the CTO, Architect, Product manager & developers. We conducted user interviews to find train ticket booking patterns and designed multiple features & interactions - devising an alarm when approaching the user’s destination, showing alternative routes to the user, and availability of train. We adhered to Android Material Design guidelines to promote consistency in the overall user interface of the mobile app.'
  ],
  projectName: 'Train Booking App',
  realProjectName: 'trainbooking',
  projectTypes: ['home', 'customize', 'transportable', 'wooden', 'workspace'],
  categoryTypes: ['digital']
};
