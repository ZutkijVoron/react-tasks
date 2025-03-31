import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PRODUCT } from "../../store/productsSlice";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

var EditProduct = () => {
  var { id } = useParams();
  var product = useSelector((state) => state.products.find((p) => p.id == id));
  var [updatedProduct, setUpdatedProduct] = useState(product);
  var dispatch = useDispatch();
  var navigate = useNavigate();
  useEffect(() => setUpdatedProduct(product), [product]);
  if (!product) return <h2>Продукт не найден</h2>;

  var handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  var handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UPDATE_PRODUCT(updatedProduct));
    navigate("/products");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, margin: "10px auto" }}>
      <TextField label="Название" name="name" value={updatedProduct.name} onChange={handleChange} required />
      <TextField label="Описание" name="description" value={updatedProduct.description} onChange={handleChange} required />
      <TextField label="Цена" name="price" value={updatedProduct.price} onChange={handleChange} type="number" required />
      <Button type="submit" variant="contained">Сохранить</Button>
    </Box>
  );
};

export default EditProduct;
