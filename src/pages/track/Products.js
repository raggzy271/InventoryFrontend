import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { AddProductModal, EditProductModal } from "../../components/track/modals/ProductModal";
import { useContext, useEffect, useState } from "react";

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
                ProductId: 1, Name: 'Product 1', Price: 50.00
            }, {
                ProductId: 2, Name: 'Product 2', Price: 50.00
            }, {
                ProductId: 3, Name: 'Product 3', Price: 50.00
            }, {
                ProductId: 4, Name: 'Product 4', Price: 50.00
            },
        ])
    }, []);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleAddProduct = (product) => {
        console.log(product);
    };

    const handleEditProduct = (product) => {
        console.log(product);
    };

    return (
        <main>
            <h2 className="display-6 mb-3">Products</h2>
            <Button variant="success" className="mb-3 d-block" style={{ marginLeft: 'auto' }} onClick={() => setShowAddModal(true)}>
                <FontAwesomeIcon icon={faPlus} className="me-2" />Add Product
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
                        // <li key={product.id}>
                        //     {product.name} - ${product.price.toFixed(2)}
                        // </li>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{product.ProductId}</td>
                            <td>{product.Name}</td>
                            <td>₹{product.Price}</td>
                            <td>
                                <div className="d-flex align-item-center">
                                    <button type="button" className="btn btn-primary me-2" title="Edit Product" onClick={() => handleEditProduct(product)}><FontAwesomeIcon icon={faEdit} /></button>
                                    <button type="button" className="btn btn-danger" title="Delete Product"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddProductModal show={showAddModal} onHide={() => setShowAddModal(false)} onAdd={handleAddProduct} />
            <EditProductModal show={showEditModal} onHide={() => setShowEditModal(false)} onEdit={handleEditProduct} />
        </main>
    );
}

export default Products;