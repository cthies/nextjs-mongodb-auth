import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image'
import Login from '../components/login';
import Logout from '../components/logout';

export async function getStaticProps() {
  try {
    // TODO: add BASE_URL=http://localhost:3000 as variable in .env.local
    let response = await fetch('http://localhost:3000/api/getProducts');
    let products = await response.json();
    return {
      props: { products: products },
    };
  } catch (e) {
    console.error(e);
    return { props: {} };
  }
};

export default function Products({ products }) {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user?.email ? (
        <>
          <Logout email={session?.user?.email} />
          <div>
            <h2>Products</h2>
            {products?.map((product, index) => (
              <div key={index} className='productWrapper'>
                <Image src={product.image} alt={product.name} layout='responsive' width={640} height={960} className="productImage" />
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <small>Articlenumber: {product.sku}</small>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}
