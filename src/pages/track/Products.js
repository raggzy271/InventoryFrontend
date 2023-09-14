import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import {
  AddProductModal,
  EditProductModal,
} from "../../components/track/modals/ProductModal";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../../services/ToastService";
import axios from "axios";
import DeleteConfirmationService, { useDeleteConfirmationModal } from "../../services/DeleteConfirmationService";

function Products() {
  const [products, setProducts] = useState([]);
  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    // Fetch the list of products from the API
    // axios.get('http://localhost:5195/api/Product/GetAllProduct')
    //     .then((response) => {
    //         setProducts(response.data);
    //     })
    //     .catch((error) => {
    //         console.error('Error fetching products:', error);
    //         addToast('Error fetching products.', 'danger');
    //     });
    setProducts([
      {
        ProductId: 1,
        Name: "Product 1",
        Price: 50.0,
      },
      {
        ProductId: 2,
        Name: "Product 2",
        Price: 50.0,
      },
      {
        ProductId: 3,
        Name: "Product 3",
        Price: 50.0,
      },
      {
        ProductId: 4,
        Name: "Product 4",
        Price: 50.0,
      },
    ]);
  }, []);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  // Function to handle adding a product
  const handleAddProduct = (product) => {
    // POST the product to the API
    axios
      .post("http://localhost:5195/api/Product/AddProduct", product)
      .then((response) => {
        // Update the list of products
        setProducts([...products, product]);
        addToast("Product added successfully.", "success");
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        addToast("Error adding product.", "danger");
      });
  };

  // Function to handle opening the edit modal
  const handleShowEditModal = (product) => {
    setProductToEdit(product);
    setShowEditModal(true);
  };

  // Function to handle closing the edit modal
  const handleCloseEditModal = () => {
    setProductToEdit(null);
    setShowEditModal(false);
  };

  // Function to handle editing a product
  const handleEditProduct = (product) => {
    // PUT the product to the API
    axios
      .put("http://localhost:5195/api/Product/UpdateProduct", product)
      .then((response) => {
        // Update the list of products
        setProducts(
          products.map((p) => (p.ProductId === product.ProductId ? product : p))
        );
        addToast("Product updated successfully.", "success");
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        addToast("Error updating product.", "danger");
      });
  };

  const openConfirmationModal = useDeleteConfirmationModal();

  const handleDeleteClick = (productName, apiUrl) => {
    const entityName = "Example Entity"; // Replace with the actual entity name
    openConfirmationModal(entityName);
  };

  return (
    <main>
      <h2 className="display-6 mb-3">Products</h2>
      <Button
        variant="success"
        className="mb-3 d-block"
        style={{ marginLeft: "auto" }}
        onClick={() => setShowAddModal(true)}
      >
        <FontAwesomeIcon icon={faPlus} className="me-2" />
        Add Product
      </Button>
      <table className="table table-dark table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.ProductId}>
              <th scope="row">{index + 1}</th>
              <td>{product.ProductId}</td>
              <td>{product.Name}</td>
              <td>₹{product.Price}</td>
              <td>
                <div className="d-flex align-item-center">
                  <button
                    type="button"
                    className="btn btn-primary me-2"
                    title="Edit Product"
                    onClick={() => handleShowEditModal(product)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    title="Delete Product"
                    onClick={() =>
                      handleDeleteClick(product.Name, product.ProductId)
                    }
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddProductModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onAdd={handleAddProduct}
      />
      <EditProductModal
        show={showEditModal}
        onHide={handleCloseEditModal}
        onEdit={handleEditProduct}
        productToEdit={productToEdit}
      />
    </main>
  );
}

export default Products;
