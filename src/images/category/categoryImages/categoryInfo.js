import categoryImageFooding from './categoryImageFooding.jpg';
import categoryImageLiving from './categoryImageLiving.jpg';
import categoryImageShopping from './categoryImageShopping.jpg';
import categoryImageWorking from './categoryImageWorking.jpg';
import categoryImageAsana from './categoryImageAsana.jpg';
import categoryImageDigital from './categoryImageDigital.jpg';

let cafe = {
  title: 'Restaurant Brand Story ',
  description:
    'Visitors at your cafe and restaurant are not just there to satisfy their taste buds! They need to know the story behind your brand, and have a memorable experience. Does your brand have a legendary tale that’s waiting to be told?',
  imgLink: categoryImageFooding,
  buttonText: 'cafe',
  categoryName: 'Cafe & Restaurant'
};
let asana = {
  title: 'Think In Creative',
  description:
    'Craftsmanship and inventiveness dependably astonishes individuals and makes them inquisitive. It breaks the tedious way of life schedule. Hence, we expect to encompass the clients with craftsmanship display and, music to enable them to venture out of their daily practice and make them feel more restored.',
  imgLink: categoryImageAsana,
  buttonText: 'asana',
  categoryName: 'Furniture & Product'
};
let living = {
  title: 'Live In Rasa',
  description:
    "Home is a declaration of our life and Rasa is the type of articulation. We are relating house inside with Rasas that you can encounter regular through your home's environment.",
  imgLink: categoryImageLiving,
  buttonText: 'living',
  categoryName: 'Resedential'
};
let digital = {
  title: 'User Experience Design',
  description:
    'We design UX/UI website and also do web development. We bring all the diverse components together and viably incorporate them to make a completely utilitarian site that speaks for your business in an exact, imaginative and persuading way. ',
  imgLink: categoryImageDigital,
  buttonText: 'digital',
  categoryName: 'Digital Design(UX/UI)'
};
let corporate = {
  title: 'Creative Workspaces',
  description:
    'A lively workspace enhances energy levels and influences productivity. A fresh ambience with ergonomic seating, inspires the team and customers alike. Welcome the breeze of innovation and aesthetics into your work environment and experience the magic as we design your creative workspace.',
  imgLink: categoryImageWorking,
  buttonText: 'corporate',
  categoryName: 'Corporate'
};
let retail = {
  title: 'Retail Experience Design',
  description:
    'People love to go for shopping, as it makes them feel great, and look confident. The ambience you create in your retail space makes them stay longer and spend more. Customers love basking in the glow of soft lighting, a cosy atmosphere and top-notch products. Is your store ready to handle the rush?',
  imgLink: categoryImageShopping,
  buttonText: 'retail',
  categoryName: 'Retail'
};

//TODO
let branding = {
  title: 'Brand matters',
  description:
    'Indian festivals and weddings are a part of our culture. During this time friends and family shop together and enjoy the moment. This entire experience around us makes us feel like it is an event; this is because of the surroundings. If one feels that part of an event, they feel their surrounding is changing. So, when you shop, you need to feel that!',
  imgLink: categoryImageShopping,
  buttonText: 'branding',
  categoryName: 'Branding & Packaging'
};

export default {
  cafe,
  corporate,
  retail,
  digital
  // living,
  // asana,
};
