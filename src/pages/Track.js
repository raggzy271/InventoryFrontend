import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';

function Track() {
    const navigate = useNavigate();
    React.useEffect(() => {
        if (window.location.pathname === '/track') {
            navigate('/track/dashboard', { replace: true });
        }
    }, [navigate]);

    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
}

export default Track;
