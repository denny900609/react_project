import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ProductsListResults from 'src/components/products/ProductsListResults';
import ProductsListToolbar from 'src/components/products/ProductsListToolbar';
import customers from 'src/__mocks__/customers';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ProductsListToolbar />
        <Box sx={{ pt: 3 }}>
          <ProductsListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
