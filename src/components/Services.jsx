const Services = () => {
    const servicesList = [
        {
            icon: "fas fa-flask",
            title: "Pathology Tests",
            description: "Comprehensive blood, urine, and bodily fluid analysis with precise accuracy to detect various health conditions early."
        },
        {
            icon: "fas fa-x-ray",
            title: "Radiology & Imaging",
            description: "State-of-the-art X-Ray, Ultrasound, and CT scanning services ensuring detailed internal diagnostics."
        },
        {
            icon: "fas fa-heartbeat",
            title: "Cardiology Diagnostics",
            description: "ECG, Echo, and stress testing accurately monitored by leading cardiologists to keep your heart healthy."
        },
        {
            icon: "fas fa-dna",
            title: "Molecular Pathology",
            description: "Advanced DNA/RNA testing for infectious diseases and genetic conditions using the latest technology."
        },
        {
            icon: "fas fa-vial",
            title: "Microbiology",
            description: "Identification of bacteria, viruses, and fungi to ensure the precise prescription of targeted antibiotics."
        },
        {
            icon: "fas fa-user-md",
            title: "Consultation & Review",
            description: "Expert reviews of lab reports by qualified doctors to guide your immediate next medical steps."
        }
    ];

    return (
        <section id="services" className="section bg-main">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        NDC Hospital offers a wide range of diagnostic services utilizing advanced medical technology to provide you with fast and reliable test results.
                    </p>
                </div>

                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="#contact" className="service-link">
                                Learn more <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
