import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT, UPDATE_PRODUCT } from "../../store/productsSlice";
import { TextField, Button, Checkbox, FormControlLabel, Box } from "@mui/material";
import { useNavigate } from "react-router";


var EditProduct = () => {
  var [product, setProduct] = useState({ name: "", description: "", price: 0, available: true });
  var dispatch = useDispatch();
  var navigate = useNavigate();

  var handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  var handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ADD_PRODUCT({ ...product, price: parseFloat(product.price), id: Date.now() }));
    navigate("/products");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, margin: "10px auto" }}>
      <TextField label="Название" name="name" value={product.name} onChange={handleChange} required />
      <TextField label="Описание" name="description" value={product.description} onChange={handleChange} required />
      <TextField label="Цена" name="price" value={product.price} onChange={handleChange} type="number" required />
      <FormControlLabel control={<Checkbox checked={product.available} onChange={() => setProduct({ ...product, available: !product.available })} />} label="В наличии" />
      <Button type="submit" variant="contained">Добавить</Button>
    </Box>
  );
};

export default EditProduct;
