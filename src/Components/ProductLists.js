import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./PeoductCard";

const ProductLists = ({ products }) => {
  console.log(products);
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={6} md={4} sm={6} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductLists;
