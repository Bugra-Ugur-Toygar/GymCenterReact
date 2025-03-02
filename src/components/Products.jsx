import React from "react";
import styled from "styled-components";

const productsData = [
  {
    id: 1,
    title: "Kettlebell / 5kg",
    price: "$25.00",
    image: "/images/purchase1.jpg",
  },
  {
    id: 2,
    title: "Treadmill",
    price: "$250.00",
    image: "/images/purchase2.jpg",
  },
  {
    id: 3,
    title: "Adjustable Dumbbell",
    price: "$50.00",
    image: "/images/purchase3.jpg",
  },
  {
    id: 4,
    title: "Kettlebell / 3kg",
    price: "$20.00",
    image: "/images/purchase4.jpg",
  },
];

const Products = () => {
  return (
    <ProductsSection>
      <h2>PURCHASE FROM US</h2>
      <p>
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical at Hampden-Sydney College.
      </p>
      <ProductsGrid>
        {productsData.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.title} />
            <CardInfo>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </CardInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsSection>
  );
};

export default Products;

// Styled Components
const ProductsSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #f8f8f8;
  h2 {
    color: #0033cc;
  }
  p {
    margin-bottom: 30px;
    color: #555;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const CardInfo = styled.div`
  padding: 10px;
  text-align: center;
  h3 {
    margin-bottom: 5px;
  }
  p {
    color: #777;
  }
`;
