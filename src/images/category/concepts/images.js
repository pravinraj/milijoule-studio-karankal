import desktopConcepts from './desktop/images.js';
import mobileConcepts from './mobile/images.js';

let concepts =
  window.screen.availWidth > 600 ? desktopConcepts : mobileConcepts;

export default concepts;
