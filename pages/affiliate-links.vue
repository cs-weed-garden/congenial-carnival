<template>
  <section class="relative py-20 lg:py-28 bg-gradient-to-b from-dark-800 via-dark-600 to-dark-700 text-light-50 border-t border-gray-800">
    <div class="px-4 mx-auto max-w-full lg:px-6">
      
      <!-- Page Title with SEO -->
      <h1 class="text-3xl lg:text-4xl font-extrabold text-primary-100 mb-4 lg:mb-6 text-center">
        Top Recommended Products from Amazon for Your Cannabis Grow Setup
      </h1>
      
      <!-- Subtitle with SEO -->
      <h2 class="text-xl lg:text-2xl font-semibold text-secondary-200 mb-6 text-center">
        Enhance Your Grow Operation with These Trusted Products
      </h2>
      
      <!-- Explanatory Text -->
      <p class="text-lg lg:text-2xl text-secondary-200 leading-relaxed mb-12 text-center mx-auto max-w-6xl">
        We've carefully selected these Amazon products to help you streamline and improve your cannabis grow operation. Whether you're setting up lighting, ensuring proper ventilation, or looking for the best nutrients, these products are highly rated by customers and aligned with your needs as a grower.
      </p>
      
      <!-- Products Grid -->
      <div class="grid grid-cols-5 gap-6 mx-auto max-w-full">
        <div v-for="(product, index) in filteredProducts" :key="index" class="bg-dark-800 border border-gray-700 rounded-lg shadow-md p-6 flex flex-col justify-between text-center w-full">
          <div class="flex-grow">
            <img :src="product.image" :alt="product.title" class="h-60 w-60 object-cover mb-4 rounded mx-auto">
            <h3 class="text-base font-semibold text-light-50 mb-2 break-words max-h-12 overflow-hidden">{{ product.title }}</h3>
            <p class="text-sm text-secondary-200 mb-4">{{ product.description }}</p>
            <div class="flex items-center justify-center mb-2">
        <span class="text-yellow-400">
          <client-only>
            <i class="fas fa-star" v-for="i in product.rating" :key="i"></i>
          </client-only>
        </span>
              <span class="ml-2 text-sm text-gray-500">({{ product.reviews }} reviews)</span>
            </div>
          </div>
          <a :href="product.link" target="_blank" class="inline-block w-full text-center text-dark-900 bg-primary-100 hover:bg-primary-200 px-4 py-2 rounded-md font-semibold shadow mt-auto">
            Check Price on Amazon
          </a>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        lighting: false,
        soil: false,
        growTents: false,
        ventilation: false,
      },
      products: [
        {
          title: '3x3 Grow Tent Kit Complete System with 150W TS1000 LED Grow Light, High Reflective Mylar for Indoor Growing',
          description: 'This 3x3 grow tent kit includes a powerful 150W TS1000 LED grow light and a 1680D high reflective Mylar tent, perfect for creating an optimal indoor growing environment. Ideal for cannabis, herbs, and vegetables.',
          image: 'https://m.media-amazon.com/images/I/81UJB6J8q7L._AC_UL320_.jpg',
          rating: 4,
          reviews: 120,
          link: 'https://amzn.to/48dfEQs',
          category: 'growTents'
        },
        {
          title: 'MARS HYDRO Seedling Heat Mat with IP67 Waterproof Control for Germination and Cloning',
          description: 'This 10"x 20.75" MARS HYDRO heat mat provides consistent warmth for seedling and cloning growth. Its IP67 waterproof design makes it durable and easy to clean, ideal for indoor cannabis and herb growing.',
          image: 'https://m.media-amazon.com/images/I/61ARKq0sGlL._AC_SX466_.jpg',
          rating: 5,
          reviews: 200,
          link: 'https://amzn.to/3YmWDYo',
          category: 'growTools'
        },
        {
          title: 'MARS HYDRO 4x4 Grow Tent Kit with 300W TSW2000 LED Light and Ventilation for Indoor Gardening',
          description: 'The 2024 MARS HYDRO 4x4 grow tent kit features a 300W TSW2000 dimmable LED light and a complete ventilation system, making it ideal for growing cannabis, herbs, and vegetables indoors. Includes a 6" clip fan and reflective Mylar for maximum efficiency.',
          image: 'https://m.media-amazon.com/images/I/71JRRiTYHkL._AC_SX679_.jpg',
          rating: 4,
          reviews: 78,
          link: 'https://amzn.to/4eZFE3S',
          category: 'growTents'
        },
        {
          title: 'MARS HYDRO Hanging Herb Drying Rack, 2 ft with 4 Layers, Zippered Mesh for Drying Plants and Flowers',
          description: 'This herb drying rack is designed for drying herbs, flowers, and seeds in a 2 ft, 4-layer zippered mesh rack. Perfect for maximizing space in your grow tent or drying area.',
          image: 'https://m.media-amazon.com/images/I/816KzXkzxNL._AC_SX679_.jpg',
          rating: 4,
          reviews: 150,
          link: 'https://amzn.to/4eygCch',
          category: 'growTools'
        },
        {
          title: 'MARS HYDRO Auto Drip Irrigation Kit with 5-Gallon Bucket and 22W Water Pump for Indoor Gardening',
          description: 'Automate your watering system with the MARS HYDRO drip irrigation kit, featuring a 5-gallon bucket and 22W water pump. Perfect for maintaining consistent moisture for indoor cannabis, herb, and vegetable gardens.',
          image: 'https://m.media-amazon.com/images/I/71vqknwPqXL._SX522_.jpg',
          rating: 4,
          reviews: 120,
          link: 'https://amzn.to/4h421H1',
          category: 'wateringSystems'
        },
      ]
    };
  },
  computed: {
    filteredProducts() {
      const { lighting, soil, growTents, ventilation } = this.filters;
      return this.products.filter(product => {
        if (lighting && product.category === 'lighting') return true;
        if (soil && product.category === 'soil') return true;
        if (growTents && product.category === 'growTents') return true;
        if (ventilation && product.category === 'ventilation') return true;
        if (!lighting && !soil && !growTents && !ventilation) return true;
        return false;
      });
    }
  }
};
</script>

<style scoped>
.grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
