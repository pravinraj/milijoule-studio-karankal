import projectImage from './chillbillproject.jpg';
import projectImages from './project/images.js';
import specialProcessImage from './chillbillprocessimage.png';
import media from './media/images.js';

export default {
  projectImage,
  projectImages,
  specialProcessImage,
  reviews: [
    {
      name: 'Ayush Roy_ Bangalore',
      text:
        'Nuts about tella - Amazing. Roasted almonds 😍, Maple tella pancake - Must try (paisa wasool item😋) Ambiance : 10/10, I liked the songs and sitting space is descent. Ambiance is soothing.',
      src: { link: '', from: 'zomato_com' }
    }
  ],
  media,
  imageTypes: ['process', 'media'],
  clientInfo: [
    'Client : NID, 2011(Mobile Application)',
    'Design By : Rahul, Shashi, Mayank'
  ],
  projectDescr: [
    'Conceptualize the in-store billing process for a hypermarket chain to provide a bang-up shopping experience for its customers by providing an alternative to the existing billing counters.',
    "Entire idea is to overcome long que's by giving billing power to the customer."
  ],
  projectName: 'Chill Bill',
  realProjectName: 'chillbill',
  projectTypes: ['ux/ui', 'mobile', 'travel'],
  categoryTypes: ['digital']
};
