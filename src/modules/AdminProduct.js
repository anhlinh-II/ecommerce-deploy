import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Table, Button, Input, Form } from 'antd';

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ title: '', price: '', description: '', image: '' });
  const [editingProduct, setEditingProduct] = useState(false);

  // Reference to the Edit Product form
  const editFormRef = useRef(null);

  // Columns for Ant Design Table
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => `$${text}`,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img src={text} alt="Product" style={{ width: '50px', height: '50px' }} />,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div className='flex gap-4'>
          <Button
            type="default" // Using default type to avoid any primary button styling
            onClick={() => handleSelectProduct(record)}
            style={{
              borderColor: 'rgb(2 132 199)',
              backgroundColor: 'white',
              color: 'rgb(2 132 199)',
            }}
            className='hover:bg-slate-100'
          >
            Edit
          </Button>
          <Button danger onClick={() => handleDeleteProduct(record.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      const storedProducts = JSON.parse(localStorage.getItem('products'));
      if (storedProducts) {
        setProducts(storedProducts);
      } else {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
        } catch (error) {
          toast.error('Failed to fetch products');
        }
      }
    };
    fetchProducts();
  }, []);

  // Save products to localStorage
  const saveProductsToLocalStorage = (products) => {
    localStorage.setItem('products', JSON.stringify(products));
  };

  // Add a new product
  const handleAddProduct = () => {
    const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
    toast.success('Product added successfully!');
    setNewProduct({ title: '', price: '', description: '', image: '' });
  };

  // Edit product
  const handleEditProduct = () => {
    const updatedProducts = products.map((prod) =>
      prod.id === selectedProduct.id ? selectedProduct : prod
    );
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
    toast.success('Product updated successfully!');
    setSelectedProduct(null);
    setEditingProduct(false);
  };

  // Delete product
  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((prod) => prod.id !== id);
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);
    toast.success('Product deleted successfully!');
  };

  // Scroll to the Edit Product form when selecting a product
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setEditingProduct(true);
    if (editFormRef.current) {
      editFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Products</h1>

      {/* Product Table */}
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        pagination={false}
        bordered
      />

      {/* New Product Form */}
      <div ref={editFormRef} className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
        <Form layout="vertical">
          <Form.Item label="Title">
            <Input
              value={editingProduct ? selectedProduct.title : newProduct.title}
              onChange={(e) =>
                editingProduct
                  ? setSelectedProduct({ ...selectedProduct, title: e.target.value })
                  : setNewProduct({ ...newProduct, title: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Price">
            <Input
              value={editingProduct ? selectedProduct.price : newProduct.price}
              onChange={(e) =>
                editingProduct
                  ? setSelectedProduct({ ...selectedProduct, price: e.target.value })
                  : setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Description">
            <Input.TextArea
              value={editingProduct ? selectedProduct.description : newProduct.description}
              onChange={(e) =>
                editingProduct
                  ? setSelectedProduct({ ...selectedProduct, description: e.target.value })
                  : setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Image URL">
            <Input
              value={editingProduct ? selectedProduct.image : newProduct.image}
              onChange={(e) =>
                editingProduct
                  ? setSelectedProduct({ ...selectedProduct, image: e.target.value })
                  : setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item>
            <Button
              className='bg-sky-500 text-white font-semibold py-4'
              onClick={editingProduct ? handleEditProduct : handleAddProduct}
            >
              {editingProduct ? 'Update Product' : 'Add Product'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminProduct;

