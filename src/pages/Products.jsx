import React, { useState, useEffect } from 'react';

function Products({ searchTerm, addToCart, removeFromCart }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quantities, setQuantities] = useState({});

  const categories = ['all', 'HONEY', 'STONE-PRESSED OIL', 'PURE-GHEE','PICKLE','AMLAPRASH','Hand-Made Products','Rice','Flour'];
  const exchangeRate = 1; // INR exchange rate

  const staticProducts = [
    {
      id: 1,
      title: '250 Gram Pure Honey',
      price: 249.00,
      thumbnail: 'https://wowzo.in/storage/screenshot-2024-09-12-232945.png',
      description: 'Wild Flower Honey is a multi-floral honey, responsibly collected from bees feeding on wild forest flowers nectar from the forest of the Himalayas',
      category: 'HONEY',
    },
    {
      id: 2,
      title: '500 Gram Pure Honey',
      price: 499,
      thumbnail: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/honeycomb-732x549-thumbnail-732x549.jpg',
      description: 'Wild Flower Honey is a multi-floral honey, responsibly collected from bees feeding on wild forest flowers nectar from the forest of the Himalayas',
      category: 'HONEY',
    },
    {
      id: 3,
      title: 'Stonepressed Mustard Oil 500 ML',
      price: 239,
      thumbnail: 'https://www.gyros.farm/cdn/shop/files/seasame4.jpg?v=1723463991&width=1445',
      description: 'Our mustard oil is 100% pure, natural, and free from any harmful chemicals, additives, or preservatives.',
      category: 'STONE-PRESSED OIL',
    },
    {
      id: 4,
      title: 'Stonepressed Mustard Oil 1 Litre',
      price: 469,
      thumbnail: 'https://www.organicgyaan.com/cdn/shop/files/Black_Sesame_Oil_Back.jpg?v=1723542799&width=1000’',
      description: 'Our mustard oil is 100% pure, natural, and free from any harmful chemicals, additives, or preservatives. ',
      category: 'STONE-PRESSED OIL',
    },
    {
      id: 5,
      title: 'Pure Ghee 500 ML',
      price: 549,
      thumbnail: 'https://static.toiimg.com/thumb/109644456/109644456.jpg?height=746&width=420&resizemode=76&imgsize=46752',
      description: 'A2 Gir Cow Ghee is made using fresh Gir cow milk. The Cows are free-grazed. The milk from them is brought to a boil and naturally cooled down to room temperature',
      category: 'PURE-GHEE',
    },
    {
      id: 6,
      title: 'Pure Ghee 1 Litre',
      price: 1099,
      thumbnail: 'https://static.toiimg.com/thumb/109644456/109644456.jpg?height=746&width=420&resizemode=76&imgsize=46752',
      description: 'A2 Gir Cow Ghee is made using fresh Gir cow milk. The Cows are free-grazed. The milk from them is brought to a boil and naturally cooled down to room temperature',
      category: 'PURE-GHEE',
    },
    {
      id: 7,
      title: 'Pure Ghee 1.5 Litre',
      price: 1649,
      thumbnail: ' https://static.toiimg.com/thumb/109644456/109644456.jpg?height=746&width=420&resizemode=76&imgsize=46752',
      description: 'A2 Gir Cow Ghee is made using fresh Gir cow milk. The Cows are free-grazed. The milk from them is brought to a boil and naturally cooled down to room temperature',
      category: 'PURE-GHEE',
    },
    {
      id: 8,
      title: '200 gm Home-Made Pickle',
      price: 199,
      thumbnail: 'https://ourbetterplanet.com/cdn/shop/files/Garlic-Pickle-Left.png?v=1715862743&width=1080',
      description: 'Authentic Oil Mango pickle from the ethic villages of India.',
      category: 'PICKLE',
    },
    {
      id: 9,
      title: '300 gm Pickle',
      price: 299,
      thumbnail: 'https://ourbetterplanet.com/cdn/shop/files/Garlic-Pickle-Left.png?v=1715862743&width=1080',
      description: 'Authentic Oil Mango pickle from the ethic villages of India.',
      category: 'PICKLE',
    },
    {
      id: 10,
      title: '500 gm Pickle',
      price: 499,
      thumbnail: 'https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-kerala-mango-pickle-1.jpg?resize=1296%2C1767',
      description:'Authentic Oil Mango pickle from the ethic villages of India.' ,
      category: 'PICKLE',
    },

    {
      id: 11,
      title: 'AmlaPrash (300gm) ',
      price: 589,
      thumbnail:' https://m.media-amazon.com/images/I/51NGDMV3wfL.AC_UF1000,1000_QL80.jpg',
      description: 'Made using hand picked amla fruit and A2 Gir cow ghee. Naturally sweetened with desi khand. Contains no refined sugar.',
      category:'AMLAPRASH',
    },
    {
      id: 12,
      title: 'Hand-Made Jewellery ',
      price: 199,
      thumbnail:' https://phuljhadi.com/cdn/shop/products/20201001125147.jpg?v=1620973055',
      description: 'sourcing high-quality, sustainable materials like ethically sourced gemstones, sterling silver, gold, and natural elements to create unique designs that tell a story',
      category:'Hand-Made Products',
    },
    {
      id: 13,
      title: 'Cane handmade stool(mora)(Pair of 2)',
      price: 1049,
      thumbnail:'https://m.media-amazon.com/images/I/71BcrYwMU1L.AC_UF1000,1000_QL80.jpg',
      description: 'Experience the beauty of traditional crafts with our handmade cane stool.',
      category:'Hand-Made Products',
    },
    
    {
      id: 14,
      title: 'Hand-Made Bag',
      price: 349,
      thumbnail:'https://i.pinimg.com/originals/13/f7/bf/13f7bf84de550d475393d02200aecce3.jpg',
      description: 'Every bag is designed to elevate your daily style',
      category:'Hand-Made Products',
    },
    {
      id: 15,
      title: 'Basmati',
      thumbnail:'https://www.aeroplanerice.com/wp-content/uploads/2022/03/Basmati-Rice.jpg',
      description: 'Coming Soon........',
      category:'Rice',
    },
    {
      id: 16,
      title: 'Brown Rice',
      thumbnail:'https://images.onlymyhealth.com/imported/images/2024/June/26_Jun_2024/mn-brown-rice.jpg',
      description: 'Coming Soon........',
      category:'Rice',
    },
    {
      id: 17,
      title: 'Bajra Flour',
      thumbnail:'https://satopradhan.com/cdn/shop/files/Preview-2BajraAtta.jpg?v=1705727601',
      description: 'Coming Soon........',
      category:'Flour',
    },
    {
      id: 18,
      title: 'Jowar Flour',
      thumbnail:'https://satopradhan.com/cdn/shop/files/Preview-1JowarAtta.jpg?v=1697708707',
      description: 'Coming Soon........',
      category:'Flour',
    },
    

    


  
  

    
    // other products here...
  ];

  useEffect(() => {
    const filtered = selectedCategory === 'all'
      ? staticProducts
      : staticProducts.filter(product => product.category === selectedCategory);

    setFilteredProducts(filtered);
  }, [selectedCategory]);

  useEffect(() => {
    if (searchTerm) {
      const searchFiltered = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(searchFiltered);
    }
  }, [searchTerm, filteredProducts]);

  const handleAddToCart = (product, quantity) => {
    addToCart({ ...product, quantity });
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities(prev => ({ ...prev, [productId]: newQuantity }));
  };

  return (
    <div className="products-container p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="category-list mb-4 flex space-x-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => {
            const quantity = quantities[product.id] || 1;

            return (
              <div key={product.id} className="product-card border p-4 rounded-md">
                <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover mb-2" />
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-gray-600 text-2xl flex items-center justify-center p-4">₹{(product.price * exchangeRate).toFixed(2)}</p>
                <p className="text-sm">{product.description}</p>

                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => handleQuantityChange(product.id, quantity > 1 ? quantity - 1 : 1)}
                    className="px-3 py-1 bg-gray-300 rounded-md"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product.id, quantity + 1)}
                    className="px-3 py-1 bg-gray-300 rounded-md"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
                  onClick={() => handleAddToCart(product, quantity)}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="mt-2 w-full rounded-sm bg-red-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
                  onClick={() => handleRemoveFromCart(product)}
                >
                  Remove from Cart
                </button>
              </div>
            );
          })
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
