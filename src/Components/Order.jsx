import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Checkbox,
  Container,
} from "@mui/material";

const Order = () => {
  const [formData, setFormData] = useState({
    date: "",
    address: "",
    cakeColor: "",
    design: "",
    size: "",
    cakeType: "",
    flavor: "",
    age: "",
    delivery: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
   <section style={{
    marginTop:'50px',
    marginBottom:'100px'
   }}>
        <Container>
            <Box component="form" onSubmit={handleSubmit}>
              {/* Date Picker */}
              <TextField
                label="Pick a Date"
                type="date"
                name="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                margin="normal"
                value={formData.date}
                onChange={handleChange}
              />
        
              {/* Address */}
              <TextField
                label="Address"
                name="address"
                fullWidth
                margin="normal"
                value={formData.address}
                onChange={handleChange}
              />
        
              {/* Cake Color */}
              <TextField
                label="Cake Color"
                name="cakeColor"
                fullWidth
                margin="normal"
                value={formData.cakeColor}
                onChange={handleChange}
              />
        
              {/* Design */}
              <TextField
                label="Cake Design"
                name="design"
                fullWidth
                margin="normal"
                value={formData.design}
                onChange={handleChange}
              />
        
              {/* Size */}
              <FormControl fullWidth margin="normal">
                <FormLabel>Size</FormLabel>
                <Select name="size" value={formData.size} onChange={handleChange}>
                  <MenuItem value="normal">Normal</MenuItem>
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                </Select>
              </FormControl>
        
              {/* Cake Type */}
              <FormControl fullWidth margin="normal">
                <FormLabel>Cake Type</FormLabel>
                <RadioGroup
                  name="cakeType"
                  value={formData.cakeType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="birthday"
                    control={<Radio />}
                    label="Birthday Cake"
                  />
                  <FormControlLabel
                    value="normal"
                    control={<Radio />}
                    label="Normal Cake"
                  />
                </RadioGroup>
              </FormControl>
        
              {/* Flavor */}
              <FormControl fullWidth margin="normal">
                <FormLabel>Flavor</FormLabel>
                <RadioGroup
                  name="flavor"
                  value={formData.flavor}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="chocolate"
                    control={<Radio />}
                    label="Chocolate"
                  />
                  <FormControlLabel
                    value="buttercream"
                    control={<Radio />}
                    label="Buttercream"
                  />
                </RadioGroup>
              </FormControl>
        
              {/* Age for Birthday Cake */}
              {formData.cakeType === "birthday" && (
                <TextField
                  label="Age"
                  name="age"
                  fullWidth
                  margin="normal"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                />
              )}
        
              {/* Delivery Option */}
              <FormControlLabel
                control={
                  <Checkbox
                    name="delivery"
                    checked={formData.delivery}
                    onChange={handleChange}
                  />
                }
                label="Should we deliver it?"
              />
        
              {/* Submit Button */}
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Order
              </Button>
            </Box>
        </Container>
   </section>
  );
};

export default Order;
