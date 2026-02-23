import React from 'react';

// Use Vite's import.meta.glob to load all images from the gallery folder.
// This automatically finds all images matching the patterns and provides their URLs.
const imagesGlob = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg,webp}', { eager: true, query: '?url', import: 'default' });

const Gallery = () => {
    // Generate an array of objects containing the dynamically imported asset URLs
    const imageList = Object.values(imagesGlob);

    return (
        <section id="gallery" className="section bg-light">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Our Gallery</h2>
                    <p className="section-subtitle">
                        A glimpse into our modern facilities, advanced equipment, and dedicated team.
                    </p>
                </div>

                {imageList.length > 0 ? (
                    <div className="gallery-grid">
                        {imageList.map((src, index) => (
                            <div className="gallery-item" key={index}>
                                <img src={src} alt={`Gallery Image ${index + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center" style={{ padding: '3rem', backgroundColor: 'var(--light-color)', borderRadius: '10px' }}>
                        <i className="fas fa-images" style={{ fontSize: '3rem', color: 'var(--text-light)', marginBottom: '1rem' }}></i>
                        <p style={{ color: 'var(--text-light)' }}>
                            Gallery is currently empty.<br/>
                            Simply drop images into <code>src/assets/gallery/</code> folder to see them here automatically!
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
