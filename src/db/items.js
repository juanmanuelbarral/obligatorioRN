import imgAvocado from '../assets/Avocado.png';
import imgCucumber from '../assets/Cucumber.png';
import imgGrapefruit from '../assets/Grapefruit.png';
import imgGrapefruitLg from '../assets/Grapefruit-2.png';
import imgKiwi from '../assets/kiwi.png';
import imgKiwiLg from '../assets/Kiwi-2.png';
import imgWatermelon from '../assets/Watermelon.png';
import imgWatermelonLg from '../assets/Watermelon-2.png';

const items = [
  {
    section_id: 'fruits',
    name: 'Fruits',
    items: [
      {
        item_id: 'f_kiwi',
        name: 'Kiwi',
        price: 30,
        imgSmall: imgKiwi,
        imgBig: imgKiwiLg,
      },
      {
        item_id: 'f_grapefruit',
        name: 'Grapefruit',
        price: 45,
        imgSmall: imgGrapefruit,
        imgBig: imgGrapefruitLg,
      },
      {
        item_id: 'f_watermelon',
        name: 'Watermelon',
        price: 45,
        imgSmall: imgWatermelon,
        imgBig: imgWatermelonLg,
      },
    ],
  },
  {
    section_id: 'veggies',
    name: 'Veggies',
    items: [
      {
        item_id: 'v_avocado',
        name: 'Avocado',
        price: 30,
        imgSmall: imgAvocado,
        imgBig: imgAvocado,
      },
      {
        item_id: 'v_cucumber',
        name: 'Cucumber',
        price: 30,
        imgSmall: imgCucumber,
        imgBig: imgCucumber,
      },
    ],
  },
];

export default items;
