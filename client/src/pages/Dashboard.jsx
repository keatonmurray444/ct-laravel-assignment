import { Link } from "react-router-dom"
import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import Form from "../partials/Form";

const Dashboard = () => {

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

return (
    <div>
        <nav className="navbar bg-primary py-3 px-md-4 px-0" aria-label="Eleventh navbar example">
            <div className="container-fluid d-flex justify-content-md-between justify-content-center">
                <Link to="/" className="navbar-brand text-white text-uppercase fw-bold">
                    CT Posting System
                </Link>
                <div className="d-md-flex d-none align-items-center justify-content-center">
                    <span className="text-white me-2 fw-bold">Logout</span>
                    <FaSignOutAlt size={30} style={{color: "#fff"}}/>
                </div>
            </div>
        </nav>

        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold">All posts</h4>
                <button className="btn btn-primary fw-bold" onClick={handleOpenModal}>
                    Write post
                </button>
            </div>

            <div className="row g-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div className="col-12 col-md-4 col-lg-3" key={i}>
                        <div className="card border-0 shadow-sm rounded-4">
                            <img
                                src="/images/blog1.jpg"
                                className="card-img-top rounded-top-4"
                                alt="Post"
                            />
                            <div className="card-body">
                                <span className="text-primary small">Category</span>
                                <h6 className="fw-bold mb-1">Blog post title</h6>
                                <p className="text-muted small">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Modal */}
        {showModal && (
            <Form handleCloseModal={handleCloseModal} />
        )}
    </div>
)
}

export default Dashboard
