import Typography from "@mui/material/Typography";
import { AvailableProduct, Product } from "~/models/Product";
import CartIcon from "@mui/icons-material/ShoppingCart";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import { useCart, useInvalidateCart, useUpsertCart } from "~/queries/cart";
import React from "react";
import { CartItem } from "~/models/CartItem";
import CardContent from "@mui/material/CardContent/CardContent";

type AddProductToCartProps = {
  count: number;
  product: Product;
};

export default function AddProductToCart({
  count,
  product,
}: AddProductToCartProps) {
  // const { data = [], isFetching } = useCart();
  // const { mutate: upsertCart } = useUpsertCart();
  // const invalidateCart = useInvalidateCart();
  // const cartItem = data.find((i) => i.product.id === product.id);

  // const addProduct = () => {
  //   upsertCart(
  //     { product, count: cartItem ? cartItem.count + 1 : 1 },
  //     { onSuccess: invalidateCart }
  //   );
  // };

  // const removeProduct = () => {
  //   if (cartItem) {
  //     upsertCart(
  //       { ...cartItem, count: cartItem.count - 1 },
  //       { onSuccess: invalidateCart }
  //     );
  //   }
  // };

  const [counter, setCounter] = React.useState<number>(0);
  const isFetching = false;
  const addProduct = () => {
    if (count > counter) {
      setCounter(counter + 1);
    }
  };

  return counter > 0 ? (
    <>
      <IconButton
        disabled={isFetching}
        onClick={() => setCounter(counter - 1)}
        size="large"
      >
        <Remove color={"secondary"} />
      </IconButton>
      <Typography align="center">{counter}</Typography>
      <IconButton
        disabled={isFetching || counter === count}
        onClick={addProduct}
        size="large"
      >
        <Add color={"secondary"} />
      </IconButton>

      {counter == count && (
        <Typography color={"secondary"} variant="body2" component="p">
          {"You reach maximum count"}
        </Typography>
      )}
    </>
  ) : (
    <IconButton disabled={isFetching} onClick={addProduct} size="large">
      <CartIcon color={"secondary"} />
    </IconButton>
  );
}
