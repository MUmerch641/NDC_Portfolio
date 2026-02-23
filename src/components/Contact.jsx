const Contact = () => {
    return (
        <section id="contact" className="section bg-main">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-subtitle">
                        We are here to help you. Reach out to us for any inquiries, home sampling bookings, or to access your test reports.
                    </p>
                </div>

                <div className="contact-cards-grid">
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h4>Location</h4>
                        <p>National Diagnostic Complex,<br />Near Main Hospital Road,<br />Rahim Yar Khan, Pakistan</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h4>Phone Number</h4>
                        <p>+92 (068) 123-4567<br />+92 300 1234567</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <h4>Email Address</h4>
                        <p>info@ndcpklab.com<br />support@ndcpklab.com</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <h4>Working Hours</h4>
                        <p>Monday - Sunday<br />24 Hours Open</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
