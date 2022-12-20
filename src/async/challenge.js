import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

/**
 * FetchData() is an async function that returns a promise that resolves to the JSON response of the
 * fetch() call
 * @param urlApi - The URL of the API you want to fetch data from.
 * @returns The data is being returned.
 */
// function declarative
async function fetchData(urlApi) {
    const response = await fetch(urlApi); // fetch es un promesa
    const data = await response.json();
    return data;
}

/**
 * "We're fetching the products, then we're fetching the first product, then we're fetching the
 * category of that product."
 * 
 * The problem with this approach is that we're making three separate requests to the server
 * @param urlApi - The URL of the API you want to fetch data from.
 */
// arrow function (ver donde va el async a diferenca de arriba)
const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[0].id}`)
        const category = await fetchData(`${API}/categories/${product?.category?.id}`)

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
} 

anotherFunction(API);

/*
Output: 
[
  {
    id: 20,
    title: 'Small Frozen Mouse',
    price: 3201,
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
    title: 'prueba',
    price: 2500,
    description: 'ghjghjghjghjghjgh',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/platzi-store-forms.appspot.com/o/0.783039767020191Name.png?alt=media&token=87c6634a-ba4e-4a84-a3d5-7264942f9063',
      'https://firebasestorage.googleapis.com/v0/b/platzi-store-forms.appspot.com/o/0.7113771092957843Name.png?alt=media&token=dfd01137-d55c-4b5e-bda6-5a561a92c52e'
    ],
    category: {
      id: 2,
      name: 'Electronics',
      keyLoremSpace: 'watch',
      image: 'https://api.lorem.space/image/watch?w=640&h=480&r=5366'
    },
    id: 236
  },
  {
    title: 'Dallas',
    price: 79010,
    description: 'кресло',
    images: [
      'https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2020/11/DAL_2_0005--w_500.webp'
    ],
    category: {
      id: 3,
      name: 'Furniture',
      keyLoremSpace: 'furniture',
      image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=6878'
    },
    id: 239
  },
  {
    title: 'МУЖСКИЕ КРОССОВКИ PUMA',
    price: 9090,
    description: 'RS-Z CORE (38359001)',
    images: [
      'https://www.basketshop.ru/files/catalog/42319/38359001(3).JPG',
      'https://www.basketshop.ru/files/catalog/42319/38359001(7).JPG'
    ],
    category: {
      id: 4,
      name: 'Shoes',
      keyLoremSpace: 'shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1890'
    },
    id: 240
  },
  {
    title: 'first new peoduct super computer',
    price: 1231,
    description: 'super cuantic computer ',
    images: [ 'https://placeimg.com/640/480/any' ],
    category: {
      id: 1,
      name: 'Clothes',
      keyLoremSpace: 'fashion',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=8448'
    },
    id: 241
  },
  {
    title: 'first new peoduct super computer',
    price: 1231,
    description: 'super cuantic computer ',
    images: [ 'https://placeimg.com/640/480/any' ],
    category: {
      id: 1,
      name: 'Clothes',
      keyLoremSpace: 'fashion',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=8448'
    },
    id: 242
  },
  {
    title: 'eSTE ES UN PRODUCTO DE PRUBA',
    price: 1500,
    description: 'pRODUCTO DE PRUEBA PARA LA CATEGORIA DE PRODUCTOS',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/platzi-store-forms.appspot.com/o/0.09654847915938625Name.png?alt=media&token=4c914b7d-266e-4974-b702-ad0431c61a56',
      'https://firebasestorage.googleapis.com/v0/b/platzi-store-forms.appspot.com/o/0.7113157558407286Name.png?alt=media&token=167d2ac4-6b9e-40f8-9b7c-099e593ef18f',
      'https://firebasestorage.googleapis.com/v0/b/platzi-store-forms.appspot.com/o/0.9632018864179512Name.png?alt=media&token=f6747e5f-60ef-4337-9b9d-7aa0aeaaae8b'
    ],
    category: {
      id: 3,
      name: 'Furniture',
      keyLoremSpace: 'furniture',
      image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=6878'
    },
    id: 243
  },
  {
    title: 'Juego de Camping',
    price: 50,
    description: 'El mejor juego de camping del mercado. ',
    images: [
      'https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: {
      id: 1,
      name: 'Clothes',
      keyLoremSpace: 'fashion',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=8448'
    },
    id: 244
  },
  {
    title: 'Nueva categoria',
    price: 4233,
    description: 'sdfsfsdfdsfsdfsd',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/platzi-store-forms.appspot.com/o/0.6352997309408055Name.png?alt=media&token=4fefb873-12b1-4818-9a7e-5a16f0b31597',
      'https://firebasestorage.googleapis.com/v0/b/platzi-store-forms.appspot.com/o/0.20728560921573602Name.png?alt=media&token=c7f9fe54-d89e-41df-8431-3be74dc5dca3'
    ],
    category: {
      id: 3,
      name: 'Furniture',
      keyLoremSpace: 'furniture',
      image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=6878'
    },
    id: 245,
    categoryId: 3
  },
  {
    title: 'HOla',
    price: 132,
    description: 'HOLAAAA',
    images: [ '169779.jpg' ],
    category: {
      id: 1,
      name: 'Clothes',
      keyLoremSpace: 'fashion',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=8448'
    },
    id: 246
  },
  {
    title: 'HOla',
    price: 132,
    description: 'HOLAAAA',
    images: [ '169779.jpg' ],
    category: {
      id: 1,
      name: 'Clothes',
      keyLoremSpace: 'fashion',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=8448'
    },
    id: 247
  },
  {
    title: ' New Course on the platform',
    price: 919191,
    description: 'This is the course description',
    images: [ 'https://placeimg.com/640/480/any' ],
    category: {
      id: 1,
      name: 'Clothes',
      keyLoremSpace: 'fashion',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=8448'
    },
    id: 248
  }
]
Small Frozen Mouse
Shoes
*/