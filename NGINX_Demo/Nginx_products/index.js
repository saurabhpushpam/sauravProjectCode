const express = require('express');
const app = express();

app.get('/products', (req, res) => {
  res.json({
    service: 'Product Service',
    products: [
      { id: 101, name: 'Laptop' },
      { id: 102, name: 'Mobile' }
    ]
  });
});

app.listen(4002, () => {
  console.log('Product Service running on port 4002');
});
