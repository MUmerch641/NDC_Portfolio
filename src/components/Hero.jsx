const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-grid">
                <div className="hero-content">
                    <h1>Advanced Diagnostics For <span>Better Health</span></h1>
                    <p>
                        National Diagnostic Complex (NDC) Hospital in Rahim Yar Khan provides state-of-the-art medical testing, accurate results, and compassionate care to empower your healthcare journey.
                    </p>
                    <div className="hero-buttons">
                        <a href="#services" className="btn btn-primary">
                            Our Services <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="hero-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="NDC Lab Professionals"
                        />
                    </div>

                    <div className="floating-badge badge-top">
                        <div className="badge-icon">
                            <i className="fas fa-microscope"></i>
                        </div>
                        <div className="badge-text">
                            <h4>Accurate</h4>
                            <p>Precise Results</p>
                        </div>
                    </div>

                    <div className="floating-badge badge-bottom">
                        <div className="badge-icon" style={{ background: 'var(--secondary)' }}>
                            <i className="fas fa-notes-medical"></i>
                        </div>
                        <div className="badge-text">
                            <h4>Modern</h4>
                            <p>Technology Built</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
