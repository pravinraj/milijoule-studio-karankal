import React from 'react';
import ImageLinks from '../../images/category/images';

let {
  conceptImages,
  featuredImages,
  projectImages,
  categoryInfo,
  mobileProjectInfo,
  desktopProjectInfo
} = ImageLinks;

const PRODUCTLIST = Object.keys(categoryInfo);
let imagesInfo = {};
PRODUCTLIST.map(key => {
  let projects = {};
  Object.keys(projectImages).map(project => {
    if (
      projectImages[project].categoryTypes &&
      projectImages[project].categoryTypes.includes(key)
    ) {
      projects[project] = projectImages[project];
    }
    imagesInfo[key] = projects;
  });
});
Object.keys(imagesInfo).map(projKey => {
  let categoryImagesInfo = {};
  Object.keys(imagesInfo[projKey]).map(project => {
    imagesInfo[projKey][project].projectTypes &&
      imagesInfo[projKey][project].projectTypes.map(item => {
        if (categoryImagesInfo.hasOwnProperty(item)) {
          categoryImagesInfo[item][project] = imagesInfo[projKey][project];
        } else {
          categoryImagesInfo[item] = {};
          categoryImagesInfo[item][project] = imagesInfo[projKey][project];
        }
      });
    categoryImagesInfo['all'] = imagesInfo[projKey];
  });
  imagesInfo[projKey] = categoryImagesInfo;
});
let allCategoryProj = {};
Object.keys(imagesInfo).map(key => {
  Object.keys(imagesInfo[key]).map(item => {
    if (allCategoryProj.hasOwnProperty(item)) {
    } else {
      allCategoryProj[item] = {};
    }
    Object.keys(imagesInfo[key][item]).map(proj => {
      if (!allCategoryProj[item].hasOwnProperty(proj)) {
        allCategoryProj[item][proj] = imagesInfo[key][item][proj];
      }
    });
  });
});
imagesInfo['all'] = allCategoryProj;

const CONCEPTS = {
  story:
    'Each restaurant venue has a story. Travelling to any historic place possibly amidst ruins is meaningless without the guide telling you the story behind those remnants. We don’t start designing at the outset. We look at your space for the story. E.g., when we developed Nutella cafe, we knew that the target customers were college students and young office or IT staff. Their most favourite place to have Nutella was not a desert but in the snowy mountains. We recreate the desired experience and set the best themes for restaurants and cafes. You cannot enjoy a dead space, but when you look at the story, you can enjoy the venue and have the experience of a lifetime, every time.',
  ergonomics:
    'Ergonomics should be at the centre of every design process. "Ergonomics" means ensuring a good fit between people and objects or environment - with which they interact. It should be considered when designing every product with which humans interact - and not just chairs. Ignoring this can lead to customer or staff discomfort. For us, it means "workplace or restaurant layout and environment".',
  material:
    'Materials enliven your surroundings and make them stand out. In a restaurant, a great theme with fabric wallpaper, matching furniture having the right texture and luxurious flooring or carpeted floor can make your guests feel comfortable. Materials add their own life and character to the surroundings to make it more effective. They should complement the lighting and overall ambience. The right materials also help in softening of excess noise as well as a mixture of strong aromas coming from the kitchen. Thus, the right materials keep your venue intact for a pleasurable experience.',
  trends:
    'Change is the law of nature. In the field of apparel retail, fashion keeps changing. E.g. what was chic in the early 1970s, 80s is considered vintage now, for obvious reasons. Even in the field of restaurant interiors, the trends keep changing. The interior design, colours, and styling keep changing. While some people prefer a minimalist trend, others are more inclined towards pop, or clutter – kind of interiors. Some of your clients may not even visit your restaurant. They prefer to order online and eat at home. We take care of that too! We make you kill your competition online! We do it by equipping your business with innovative digital marketing trends!',
  lighting:
    'Lighting sets the mood of a given space, be it an office or a cafe. Along with colour, flooring, textures, furniture and availability of natural light, the placement and type of lighting are important aspects of interior design. It enhances the aesthetic appeal of a given space. Lighting adds a blend of warmth and style to the interior. Lighting transforms a space by adding a touch of sophistication blended with functionality. Lighting contributes to the positive ambience of a room.',
  sense:
    'Memorable places never fail to tickle all your five senses! This is why we remember certain sites we visit. The same is true with restaurants we design. We don’t just design interiors and hand it over to clients. We make sure that the people who work there and visitors who come along – find it welcoming. We make sure that we engage all the five human senses to make the place – suitable for people with aesthetic taste buds.                         We know that your special guests need special surroundings to feel comfortable. We ensure that the texture and seating feels right, the bad odours are negligible, the place looks cool, soft background music keeps running, and the odour is fresh.',
  brand:
    'We believe that Brand is a personality. It creates an association with the user through tangible and intangible surroundings'
};

const DATA = Object.keys(categoryInfo).map(key => categoryInfo[key]);
const CATEGORYLIST = {};
Object.keys(categoryInfo).map(
  key => (CATEGORYLIST[key] = categoryInfo[key].categoryName)
);
CATEGORYLIST.all = 'ALL (Projects)';

export default {
  categoryInfo,
  mobileProjectInfo,
  desktopProjectInfo,
  imagesInfo,
  projectImages,
  CATEGORYLIST,
  conceptImages,
  featuredImages,
  DATA,
  CONCEPTS
};
