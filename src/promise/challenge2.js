// El fetch común es un fetch get. Y se usa para traer info de una API

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

/**
 * It returns a promise that resolves to the response of the fetch call.
 * @param urlApi - The URL of the API endpoint.
 * @returns fetchData(urlApi)
 *         .then(response => response.json())
 *         .then(data => {
 *             console.log(data);
 *         })
 *         .catch(error => console.log(error));
 */
function fetchData(urlApi) {
    return fetch(urlApi); // fetch de node.js es por defecto una promesa. Por lo que no debo generar previamente una new Promise para luego trabajar con sus resultados. 
};

// Llamado multipli mediante callback hell

fetchData(`${API}/products`)
    .then(response => response.json()) // return implicito. 
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`); // Solo quiero el primero de los productos
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product?.category?.id}`);
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Terminamos la solicitud. Finally!"))

/*
Output:

[
  {
    id: 20,
    title: 'Small Frozen Mouse',
    price: 320,
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=3006',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=4978',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=7033'
    ]
  },
  {
    id: 57,
    title: 'Refine',
    price: 611,
    description: 'The Football Is Good For Training And Recreational Purposes',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=3368',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=8316',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=9602'
    ]
  },
  {
    id: 59,
    title: 'Licensed Plastic Towels',
    price: 16,
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=4764',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2334',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2609'
    ],
    categoryId: 1
  },
  {
    id: 66,
    title: 'Handmade Rubber Soap',
    price: 131,
    description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=3659',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=1768',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2198'
    ]
  },
  {
    id: 67,
    title: 'Incredible Rubber Mouse',
    price: 381,
    description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=7957',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=8978',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=6579'
    ]
  },
  {
    id: 83,
    title: 'Unbranded Frozen Tuna',
    price: 892,
    description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2785',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=8723',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=6022'
    ]
  },
  {
    id: 97,
    title: 'Handmade Wooden Gloves',
    price: 512,
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=3585',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=9396',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2729'
    ]
  },
  {
    id: 98,
    title: 'Practical Steel Table',
    price: 447,
    description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=9285',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=3575',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=4440'
    ]
  },
  {
    id: 100,
    title: 'Tasty Soft Keyboard',
    price: 437,
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=4808',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=8532',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=3587'
    ]
  },
  {
    id: 110,
    title: 'Practical Fresh Salad',
    price: 94,
    description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2294',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=5967',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=9877'
    ]
  },
  {
    id: 112,
    title: 'Refined Wooden Salad',
    price: 790,
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2503',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=1401',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=6225'
    ]
  },
  {
    id: 113,
    title: 'Handcrafted Frozen Towels',
    price: 525,
    description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=8388',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=1394',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=5969'
    ]
  },
  {
    id: 117,
    title: 'Handcrafted Cotton Pizza',
    price: 957,
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=263',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=4775',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=3142'
    ]
  },
  {
    id: 118,
    title: 'Practical Plastic Shoes',
    price: 93,
    description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=6912',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=1623',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=6178'
    ]
  },
  {
    id: 122,
    title: 'Practical Soft Salad',
    price: 464,
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=8009',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2679',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=8037'
    ]
  },
  {
    id: 125,
    title: 'Licensed Concrete Ball',
    price: 745,
    description: 'The Football Is Good For Training And Recreational Purposes',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=9964',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2285',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=5846'
    ]
  },
  {
    id: 127,
    title: 'Incredible Granite Towels',
    price: 249,
    description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=6726',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=1261',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=6427'
    ]
  },
  {
    id: 130,
    title: 'Fantastic Fresh Shirt',
    price: 33,
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=9702',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=6931',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=9354'
    ]
  },
  {
    id: 141,
    title: 'Rustic Steel Tuna',
    price: 218,
    description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=5545',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2447',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=3716'
    ]
  },
  {
    id: 148,
    title: 'Fantastic Frozen Chips',
    price: 780,
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=8273',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=9455',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2318'
    ]
  },
  {
    id: 151,
    title: 'Incredible Fresh Ball',
    price: 944,
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=9807',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=1600',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=1094'
    ]
  },
  {
    id: 167,
    title: 'Handmade Metal Mouse',
    price: 216,
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=1659',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=7466',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=5190'
    ]
  },
  {
    id: 169,
    title: 'Gorgeous Plastic Gloves',
    price: 984,
    description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=4875',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=8196',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=4763'
    ]
  },
  {
    id: 186,
    title: 'Fantastic Metal Hat',
    price: 137,
    description: 'The Football Is Good For Training And Recreational Purposes',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=4847',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=9288',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=5888'
    ]
  },
  {
    id: 187,
    title: 'Small Wooden Car',
    price: 805,
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=6202',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=7880',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=932'
    ]
  },
  {
    id: 194,
    title: 'Ergonomic Cotton Chicken',
    price: 656,
    description: 'The Football Is Good For Training And Recreational Purposes',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=9519',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=7842',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=3865'
    ]
  },
  {
    id: 195,
    title: 'Rustic Steel Chair',
    price: 616,
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=7099',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=3371',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=1638'
    ]
  },
  {
    id: 197,
    title: 'Unbranded Cotton Pizza',
    price: 519,
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=8154',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=1549',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=3060'
    ],
    categoryId: 4
  },
  {
    id: 198,
    title: 'Awesome Plastic Hat',
    price: 401,
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    images: [
      'https://api.lorem.space/image/shoes?w=640&h=480&r=6611',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=6173',
      'https://api.lorem.space/image/shoes?w=640&h=480&r=2456'
    ],
    categoryId: 1
  }
]
Small Frozen Mouse
Shoes
Terminamos la solicitud. Finally!
*/