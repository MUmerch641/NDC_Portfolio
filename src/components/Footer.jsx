const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo" style={{ marginBottom: '20px' }}>
                            <img src="/logo.jpg" alt="NDC Hospital Logo" className="logo-img" />
                        </div>
                        <p>
                            Leading diagnostic center in Rahim Yar Khan providing accurate, timely, and reliable pathology and radiology services since over a decade.
                        </p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/ndcpklab/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-facebook-f"></i>
                            </a>

                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact & Map</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Pathology</a></li>
                            <li><a href="#">Radiology</a></li>
                            <li><a href="#">Molecular Genetics</a></li>
                            <li><a href="#">Microbiology</a></li>
                            <li><a href="#">Home Sampling</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Patient Care</h4>
                        <ul className="footer-links">
                            <li><a href="#">Timings & Schedule</a></li>
                            <li><a href="#contact">Book a Test</a></li>
                            <li><a href="#">Online Reports</a></li>
                            <li><a href="#">Health Packages</a></li>
                            <li><a href="#">FAQ&apos;s</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} National Diagnostic Complex (NDC) Hospital. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
