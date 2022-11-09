import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";
import { useAvailableProducts } from "~/queries/products";

export default function Products() {
  const { data = [], isLoading } = useAvailableProducts();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  if (!data.length) {
    return <Typography variant="h5">No products</Typography>;
  }
  return (
    <Grid container spacing={4}>
      {data.map(({ count, ...product }, index) => {
        return (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                sx={{ pt: "100%" }}
                image={product.url}
                title="Image title"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography>{formatAsPrice(product.price)}</Typography>
              </CardContent>

              {count > 0 ? (
                <CardActions>
                  <AddProductToCart count={count} product={product} />
                </CardActions>
              ) : (
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography color={"secondary"} variant="body1" component="p">
                    {"Product is out of stock :("}
                  </Typography>
                </CardContent>
              )}
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
