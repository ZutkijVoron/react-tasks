import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_PRODUCT } from "../../store/productsSlice";
import { List, ListItem, ListItemText, IconButton, Box } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

var ProductList = () => {
  var products = useSelector((state) => state.products);
  var dispatch = useDispatch();
  var navigate = useNavigate();

  return (
    <List>
      {products.map((product) => (
        <ListItem key={product.id} sx={{ borderBottom: "1px solid #ddd" }}>
          <ListItemText primary={product.name} secondary={`Цена: ${product.price}₽, ${product.available ? "В наличии" : "Нет в наличии"}`} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton edge="end" onClick={() => navigate(`/edit/${product.id}`)}>
              <Edit />
            </IconButton>
            <IconButton edge="end" onClick={() => dispatch(REMOVE_PRODUCT(product.id))}>
              <Delete />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;
