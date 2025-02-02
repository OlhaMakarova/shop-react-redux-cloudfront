import API_PATHS from "~/constants/apiPaths";
import ProductsTable from "~/components/pages/admin/PageProductImport/components/ProductsTable";
import CSVFileImport from "~/components/pages/admin/PageProductImport/components/CSVFileImport";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function PageProductImport() {
  const token = localStorage.getItem("authorization_token");
  useEffect(() => {
    if (!token) {
      window.localStorage.setItem(
        "authorization_token",
        "T2x0YUha2Fvb3ZhOlFU1RfUEFTU1dPUkO=="
      );
    }
  }, [token]);

  return (
    <Box py={3}>
      <Box mb={2} display="flex" justifyContent="space-between">
        <CSVFileImport
          url={`${API_PATHS.import}/import`}
          title="Import Products CSV"
        />
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{ alignSelf: "end" }}
          component={Link}
          to={"/admin/product-form"}
        >
          Create product
        </Button>
      </Box>
      <ProductsTable />
    </Box>
  );
}
