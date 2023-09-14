import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { AddProductModal } from "../../components/track/modals/ProductModal";
import { useState } from "react";

function Products() {
    const [showModal, setShowModal] = useState(false);

    const handleAddProduct = (newProduct) => {
        console.log(newProduct)
    };

    return (
        <main>
            <h2 class="display-6 mb-3">Products</h2>
            <Button variant="success" className="mb-3 d-block" style={{ marginLeft: 'auto' }} onClick={() => setShowModal(true)}>
                <FontAwesomeIcon icon={faPlus} className="me-2" />Add Product
            </Button>
            <table class="table table-dark table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product ID</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><div className="d-flex align-item-center">
                            <button type="button" className="btn btn-primary me-2" title="Edit Product"><FontAwesomeIcon icon={faEdit} /></button>
                            <button type="button" className="btn btn-danger" title="Delete Product"><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </div></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><div className="d-flex align-item-center">
                            <button type="button" className="btn btn-primary me-2" title="Edit Product"><FontAwesomeIcon icon={faEdit} /></button>
                            <button type="button" className="btn btn-danger" title="Delete Product"><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </div></td>
                    </tr><tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><div className="d-flex align-item-center">
                            <button type="button" className="btn btn-primary me-2" title="Edit Product"><FontAwesomeIcon icon={faEdit} /></button>
                            <button type="button" className="btn btn-danger" title="Delete Product"><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </div></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><div className="d-flex align-item-center">
                            <button type="button" className="btn btn-primary me-2" title="Edit Product"><FontAwesomeIcon icon={faEdit} /></button>
                            <button type="button" className="btn btn-danger" title="Delete Product"><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </div></td>
                    </tr>
                </tbody>
            </table>
            <AddProductModal show={showModal} onHide={() => setShowModal(false)} onAdd={handleAddProduct} />
        </main>
    );
}

export default Products;