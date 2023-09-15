import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <main>
            <h2 className="display-6 mb-3">Dashboard</h2>
            <div class="d-flex flex-wrap">
                <div class="card m-1" style={{ width: '48%' }}>
                    <div class="card-body">
                        <h5 class="card-title">Products</h5>
                        <p class="card-text">View, add, update or delete your products.</p>
                        <Link to="/track/products" class="btn btn-primary">Manage</Link>
                    </div>
                </div>
                <div class="card m-1" style={{ width: '48%' }}>
                    <div class="card-body">
                        <h5 class="card-title">Orders</h5>
                        <p class="card-text">View, add, update or delete your orders.</p>
                        <Link to="/track/orders" class="btn btn-primary">Manage</Link>
                    </div>
                </div>
                <div class="card m-1" style={{ width: '48%' }}>
                    <div class="card-body">
                        <h5 class="card-title">Purchases</h5>
                        <p class="card-text">View, add, update or delete your purchases.</p>
                        <Link to="/track/purchases" class="btn btn-primary">Manage</Link>
                    </div>
                </div>
                <div class="card m-1" style={{ width: '48%' }}>
                    <div class="card-body">
                        <h5 class="card-title">Sales</h5>
                        <p class="card-text">View, add, update or delete your sales.</p>
                        <Link to="/track/sales" class="btn btn-primary">Manage</Link>
                    </div>
                </div>
                <div class="card m-1" style={{ width: '48%' }}>
                    <div class="card-body">
                        <h5 class="card-title">Customers</h5>
                        <p class="card-text">View, add, update or delete your customers.</p>
                        <Link to="/track/customers" class="btn btn-primary">Manage</Link>
                    </div>
                </div>
                <div class="card m-1" style={{ width: '48%' }}>
                    <div class="card-body">
                        <h5 class="card-title">Suppliers</h5>
                        <p class="card-text">View, add, update or delete your suppliers.</p>
                        <Link to="/track/suppliers" class="btn btn-primary">Manage</Link>
                    </div>
                </div>
            </div>

        </main >
    );
}

export default Dashboard;