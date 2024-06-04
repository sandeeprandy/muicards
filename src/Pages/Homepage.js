import Header from "../Components/Header";
import ProductLists from "../Components/ProductLists";

function HomePage() {
    const products = [
        {
          id: 1,
          name: 'Laptop',
          description: 'High performance laptop for work and play.',
          image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d'
        },
        {
          id: 2,
          name: 'Headphones',
          description: 'Noise-cancelling over-ear headphones.',
          image: 'https://images.unsplash.com/photo-1512499617640-c2f999077ba2'
        },
        {
          id: 3,
          name: 'Camera',
          description: 'Digital camera with high resolution.',
          image: 'https://images.unsplash.com/photo-1519183071298-a2962a02a652'
        }, {
            id: 1,
            name: 'Laptop',
            description: 'High performance laptop for work and play.',
            image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d'
          },
          {
            id: 2,
            name: 'Headphones',
            description: 'Noise-cancelling over-ear headphones.',
            image: 'https://images.unsplash.com/photo-1512499617640-c2f999077ba2'
          },
          {
            id: 3,
            name: 'Camera',
            description: 'Digital camera with high resolution.',
            image: 'https://images.unsplash.com/photo-1519183071298-a2962a02a652'
          }
      ];

  return (
    <div>
      <Header />
      <div style={{padding: "20px"}}>
        <ProductLists products={products} />
      </div>
    </div>
  );
}

export default HomePage;
