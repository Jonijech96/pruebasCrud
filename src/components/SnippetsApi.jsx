import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsList from "./ProductsList";
import ProductsForm from "./ProductsForm";
export const SnippetsApi = () => {
  const [productsList, setProductsList] = useState([]);
  const [productSelected, setProductSelected] = useState(null);
  useEffect(() => {
    axios
      .get("http://products-crud.academlo.tech/products/")
      .then((res) => setProductsList(res.data));
  }, []);

  const getProducts = () => {
    axios
      .get("http://products-crud.academlo.tech/products/")
      .then((res) => setProductsList(res.data));
  };

  const addProduct = (newProduct) => {
    // productsList.push(newProduct);
    // setProductsList([...productsList, newProduct]);
    axios
      .post("http://products-crud.academlo.tech/products/", newProduct)
      .then(() => getProducts())
      .catch((error) => console.log(error.response?.data));
  };

  const deleteProduct = (id) => {
    axios
      .delete(`http://products-crud.academlo.tech/products/${id}/`)
      .then(() => getProducts());
  };

  const selectProduct = (product) => {
    setProductSelected(product);
  };

  const updateProduct = (editedProduct) => {
    axios
      .put(
        `http://products-crud.academlo.tech/products/${productSelected.id}/`,
        editedProduct
      )
      .then(() => getProducts())
      .catch((error) => console.log(error.response?.data));
    setProductSelected(null);
  };
  return (
    <div>
      <ProductsForm
        addProduct={addProduct}
        productSelected={productSelected}
        updateProduct={updateProduct}
        selectProduct={selectProduct}
      />
      <ProductsList
        productsList={productsList}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    </div>
  );
};
