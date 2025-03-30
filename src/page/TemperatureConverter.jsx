import React, { useState } from "react";
import { TextField, Container, Box } from "@mui/material";
import Message from "../components/message/Message";

function TemperatureConverter() {
  var [celsius, setCelsius] = useState("");
  var [fahrenheit, setFahrenheit] = useState("");

  var handleCelsiusChange = (event) => {
    var value = event.target.value;
    setCelsius(value);
    if (value === "") {
      setFahrenheit("");
    } else {
      setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
    }
  };

  var handleFahrenheitChange = (event) => {
    var value = event.target.value;
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
    } else {
      setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
    }
  };

  return (
    <Container sx={{ textAlign: "center" }} className="App">
      <Message variant="h4" gutterBottom>
        Конвертер температуры
      </Message>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Градусы Цельсия"
          variant="outlined"
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          fullWidth
        />
        <TextField
          label="Градусы Фаренгейта"
          variant="outlined"
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          fullWidth
        />
      </Box>
    </Container>
  );
};

export default TemperatureConverter;
