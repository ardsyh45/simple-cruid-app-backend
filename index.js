const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoutes = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated');
});

mongoose.connect("mongodb+srv://ardsyh:zDzrVMudNE6ExPWy@backend.t4tkqhp.mongodb.net/?appName=backend")
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });