import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'test',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'testcustomer',
      email: 'test@example.com',
      password: bcrypt.hashSync('123453'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'model1',
      slug: 'model-1',
      image: '/images/p1.jpg',
      brand: 'test',
      category: 'test',
      size: 's',
      description: 'product model description',
      countInStock: 5,
      price: 100,
    },
    {
      name: 'model2',
      slug: 'model-2',
      image: '/images/p2.jpg',
      brand: 'test',
      category: 'test',
      size: 'm',
      description: 'product model description',
      countInStock: 15,
      price: 100,
    },
    {
      name: 'model3',
      slug: 'model-3',
      image: '/images/p3.jpg',
      brand: 'test',
      category: 'test',
      size: 'l',
      description: 'product model description',
      countInStock: 0,
      price: 100,
    },
    {
      name: 'model4',
      slug: 'model-4',
      image: '/images/p4.jpg',
      brand: 'test',
      category: 'test',
      size: 'l',
      description: 'product model description',
      countInStock: 5,
      price: 300,
    },
  ],
};

export default data;
