const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-grid">
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="NDC Hospital Facility"
                        className="about-img-main"
                    />
                    <div className="about-stats">
                        <div className="stat-item">
                            <h3>15+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>50k+</h3>
                            <p>Happy Patients</p>
                        </div>
                    </div>
                </div>

                <div className="about-content">
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Why NDC is a Complete Hospital</h2>
                    <p>
                        Located in the heart of Rahim Yar Khan, the National Diagnostic Complex (NDC) goes beyond being just a premier pathology and imaging lab. It is a complete healthcare ecosystem dedicated to your well-being.
                    </p>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
                        From initial diagnostics and advanced lab testing to specialized doctor consultations and immediate care, NDC provides an integrated approach to health. We bring together highly qualified medical professionals, modern equipment, and a patient-first philosophy under one roof.
                    </p>

                    <div className="feature-list">
                        <div className="feature-item">
                            <i className="fas fa-user-md"></i>
                            Expert Consultants
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-vial"></i>
                            Advanced PK LAB
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-x-ray"></i>
                            Modern Radiology
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-ambulance"></i>
                            24/7 Emergency Support
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-heartbeat"></i>
                            Complete Health Packages
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-procedures"></i>
                            Patient Care Facilities
                        </div>
                    </div>

                    <a href="#contact" className="btn btn-primary">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
