
const category = [
  'Unicorn', 'Folivora', 'Walrus', 'new Sloth', 'Flying Squirrel', 'New Fox',
  'Narwhal', 'Kangaroo', 'cow', 'child_newSioth', 'Giraffe', 'child', 'chilcFlying Squirrel'
];

const items = [
  {
    id: 1,
    name: '02.2712204',
    src: '02.2712204.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 2,
    name: '02.2712316',
    src: '02.2712316.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 3,
    name: '02.2712570',
    src: '02.2712570.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 4,
    name: '02.2712602',
    src: '02.2712602.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 5,
    name: '654',
    src: '654.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 6,
    name: 'bluenui',
    src: 'bluenui.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 7,
    name: 'new fox',
    src: 'new fox.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 8,
    name: 'new2',
    src: 'new2.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 9,
    name: 'pink_uni',
    src: 'pink_uni.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 10,
    name: 'shulan',
    src: 'shulan.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 11,
    name: 'zijing',
    src: 'zijing.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 12,
    name: 'zijing2',
    src: 'zijing2.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 13,
    name: 'zijing3',
    src: 'zijing3.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  }
];

let getProducts = function () {
  let colSize = 3;
  let cols = [];
  let products = [];
  for(let i = 0; i < items.length; i++) {
    cols.push(items[i]);
    if((i + 1)%colSize === 0) {
      products.push(cols);
      cols = [];
    }
    if((items.length)%colSize != 0 && i === items.length-1) {
      products.push(cols);
    }
  }
  return products;
};
module.exports = {
  category,
  items,
  getProducts
};
