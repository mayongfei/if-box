
const category = [
  'Unicorn', 'Folivora', 'Walrus', 'new Sloth', 'Flying Squirrel', 'New Fox',
  'Narwhal', 'Kangaroo', 'cow', 'child_newSioth', 'Giraffe', 'child', 'chilcFlying Squirrel'
];

const items = [
  {
    id: 1,
    name: '02.2712354',
    src: '02.2712354.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 2,
    name: '02.2712355',
    src: '02.2712355.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 3,
    name: '02.2712356',
    src: '02.2712356.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 4,
    name: '02.2712357',
    src: '02.2712357.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 5,
    name: '02.2712359',
    src: '02.2712359.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 6,
    name: '02.2712360',
    src: '02.2712360.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 7,
    name: '02.2712361',
    src: '02.2712361.jpg',
    description: 'Stay Safe with 1440p PoE Security Video System! 3TB HDD 16-Channel NVR for 24/7 Recording.'
  },
  {
    id: 8,
    name: '02.2712362',
    src: '02.2712362.jpg',
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
