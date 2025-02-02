import React, { useState } from 'react';

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: "https://picsum.photos/400/300?random=1",
      alt: "Gallery Image 1",
      title: "Nature 1"
    },
    {
      id: 2,
      src: "https://picsum.photos/400/300?random=2",
      alt: "Gallery Image 2",
      title: "Nature 2"
    },
    {
      id: 3,
      src: "https://picsum.photos/400/300?random=3",
      alt: "Gallery Image 3",
      title: "Nature 3"
    },
    {
      id: 4,
      src: "https://picsum.photos/400/300?random=4",
      alt: "Gallery Image 4",
      title: "Nature 4"
    },
    {
      id: 5,
      src: "https://picsum.photos/400/300?random=5",
      alt: "Gallery Image 5",
      title: "Nature 5"
    },
    {
      id: 6,
      src: "https://picsum.photos/400/300?random=6",
      alt: "Gallery Image 6",
      title: "Nature 6"
    },
    {
        id: 7,
        src: "https://picsum.photos/400/300?random=7",
        alt: "Gallery Image 7",
        title: "Nature 7"
      },
      {
        id: 8,
        src: "https://picsum.photos/400/300?random=8",
        alt: "Gallery Image 8",
        title: "Nature 8"
      }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Image Gallery</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {images.map((image) => (
          <div 
            key={image.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '10px' }}>
              <h3 style={{ margin: '0' }}>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          zIndex: 1000
        }} onClick={() => setSelectedImage(null)}>
          <div style={{ maxWidth: '90%', maxHeight: '90%' }}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain'
              }}
            />
            <button
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '20px'
              }}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;