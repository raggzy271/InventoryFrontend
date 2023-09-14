function NotFound() {
    return (
        <div className="position-fixed text-center w-100" style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <p className="display-5">😞</p>
            <h1 className="display-1">404 - Page Not Found</h1>
            <p className="display-5">The page you are looking for does not exist.</p>
        </div>
    );
}

export default NotFound;