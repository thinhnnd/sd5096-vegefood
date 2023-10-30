import IProduct from '../models/interfaces/product.interface'

export const products: IProduct[] = [
  {
    id: 1,
    productName: 'Bell Pepper',
    productDesc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nihil sequi voluptas debitis illo. Tempora dolore nulla possimus minima voluptatum nobis voluptate molestias rerum blanditiis doloribus, laborum adipisci dolorem accusantium eveniet dolor quis, perferendis delectus sit explicabo ex vitae ut.',
    saleRate: 30,
    price: 120,
    categoryId: 2,
    productImageUrl: 'images/product-1.jpg',
    isFeatured: true
  },
  {
    id: 2,
    productName: 'Strawberry',
    productDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et sapien bibendum, cursus lectus a, venenatis erat. Integer lobortis enim et augue lacinia, et luctus dui pulvinar. Fusce leo turpis, interdum sed ullamcorper et, lobortis rhoncus quam. Vivamus sed molestie felis. Praesent hendrerit iaculis ullamcorper',
    saleRate: 0,
    price: 120,
    categoryId: 1,
    productImageUrl: 'images/product-2.jpg',
    isFeatured: true
  },
  {
    id: 3,
    productName: 'Green beans',
    productDesc:
      'Pellentesque rutrum nunc et ante viverra tincidunt. Etiam eget sagittis nisi. Integer vehicula commodo nunc, in eleifend justo luctus a. Etiam quis placerat neque. Cras in tortor at leo semper consectetur id et libero. Vivamus non fermentum lacus. Donec ac odio leo.',
    saleRate: 30,
    price: 120,
    categoryId: 2,
    productImageUrl: 'images/product-3.jpg',
    isFeatured: true
  },
  {
    id: 4,
    productName: 'Purple Cabbage',
    productDesc:
      'Quisque mattis enim ante, vel fermentum quam lacinia sed. Nam fermentum urna ac erat rutrum auctor. Morbi tincidunt nulla vitae leo blandit suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices ante id enim sollicitudin placerat.',
    saleRate: 30,
    price: 120,
    categoryId: 2,
    productImageUrl: 'images/product-4.jpg',
    isFeatured: true
  },
  {
    id: 5,
    productName: 'Tomatoe',
    saleRate: 30,
    price: 120,
    categoryId: 2,
    productImageUrl: 'images/product-5.jpg',
    isFeatured: true,
    productDesc:
      'Aliquam viverra orci id elit aliquet, id eleifend lectus porttitor. Fusce fermentum, tortor sit amet varius cursus, felis dolor blandit lectus, in dignissim mi libero sit amet quam. Mauris posuere ac lacus vitae aliquet. Quisque id orci ante'
  },
  {
    id: 6,
    productName: 'Brocolli',
    saleRate: 30,
    price: 120,
    categoryId: 2,
    productImageUrl: 'images/product-6.jpg',
    isFeatured: true,
    productDesc:
      'Vestibulum vel dolor pellentesque, aliquam erat at, pellentesque ipsum. Ut vulputate arcu a magna aliquet, sit amet dignissim nisi mollis. Mauris in tempor leo, vitae eleifend nunc. Curabitur ultricies elementum sapien sed eleifend.'
  },
  {
    id: 7,
    productName: 'Bell Pepper',
    saleRate: 30,
    price: 120,
    categoryId: 2,
    productImageUrl: 'images/product-7.jpg',
    isFeatured: true,
    productDesc:
      'Nullam massa nisl, tempor id luctus sit amet, interdum sit amet magna. Vivamus interdum lobortis lacus, a posuere erat vehicula ut. Maecenas ornare, tellus at lacinia tempor, velit mi aliquet magna, in mattis dolor nibh non diam.'
  },
  {
    id: 8,
    productName: 'Fruit Juice',
    saleRate: 30,
    price: 120,
    categoryId: 3,
    productImageUrl: 'images/product-8.jpg',
    isFeatured: true,
    productDesc:
      'Sed a imperdiet nibh, sit amet varius ipsum. Etiam tempus leo vel tristique facilisis. Ut nec eros vulputate, ultrices est placerat, condimentum dui. Maecenas feugiat eros eget ipsum sagittis, id scelerisque tortor vulputate.'
  },
  {
    id: 9,
    productName: 'Onion',
    saleRate: 30,
    price: 120,
    categoryId: 2,
    productImageUrl: 'images/product-9.jpg',
    isFeatured: true,
    productDesc:
      'Phasellus eget ex sed nibh laoreet pretium. Phasellus finibus eget metus in ullamcorper. Etiam elementum tincidunt justo, nec dictum ex. Proin tincidunt, justo id blandit imperdiet, mauris sapien placerat tortor, vel venenatis ipsum nunc vel est. Phasellus laoreet sed ligula vel pulvinar.'
  },
  {
    id: 10,
    productName: 'Apple',
    saleRate: 0,
    price: 120,
    categoryId: 1,
    productImageUrl: 'images/product-10.jpg',
    isFeatured: true,
    productDesc:
      'Cras ut ante ut libero mattis mollis. Aliquam efficitur est consequat egestas tristique. Pellentesque in est quis orci faucibus bibendum. Curabitur at magna congue, bibendum massa sed, ullamcorper leo. Sed vestibulum ante quis dapibus malesuada.'
  },
  {
    id: 11,
    productName: 'Garlic',
    saleRate: 0,
    price: 120,
    categoryId: 2,
    productImageUrl: 'images/product-11.jpg',
    isFeatured: true,
    productDesc:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed lobortis massa. Donec in velit quis metus rutrum vulputate. Aliquam et pellentesque erat. Vivamus gravida aliquam neque nec iaculis. Suspendisse risus ex, pharetra id nisi eu, mollis semper purus.'
  },
  {
    id: 12,
    productName: 'Chilli',
    saleRate: 0,
    price: 120,
    categoryId: 2,
    productImageUrl: 'images/product-12.jpg',
    isFeatured: true,
    productDesc:
      'Fusce id faucibus nulla. Duis auctor orci interdum risus imperdiet efficitur. Cras commodo, est a lobortis aliquet, tortor lectus facilisis lectus, tincidunt viverra arcu elit id ipsum'
  }
]
