import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link,  useNavigate } from "react-router-dom";


const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  const [item, setItem] = useState(null);

  const handleClick = () => {
    setItem(product.category);
    navigate(`/${product.category.toLowerCase()}`);

  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.category}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClick}>View more</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
