import { useState } from 'react';
import { Image, Play, X } from 'lucide-react';
import { Button } from '.././components/ui/button';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1588416499018-d8c621461f50?q=80&w=1974',
    title: 'Tea Plantations in Nuwara Eliya'
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1581246366725-19c6e3dee3c5?q=80&w=1974',
    title: 'Stilt Fishermen in Galle'
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1546432507-81f925fd1b9c?q=80&w=1974',
    title: 'Yala National Park Wildlife'
  },
  {
    id: 4,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1602419391075-25c139b8399a?q=80&w=1974',
    title: 'Temple of the Sacred Tooth Relic'
  },
  {
    id: 5,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1568186863046-49e2f8d29f4a?q=80&w=1974',
    title: 'Galle Fort Colonial Architecture'
  },
  {
    id: 6,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1584283092069-e14682eecce9?q=80&w=1974',
    title: 'Elephants at Udawalawe'
  }
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Photo Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Browse stunning images from across Sri Lanka that showcase its beauty and diversity
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-lg group cursor-pointer h-64"
              onClick={() => openLightbox(item.url)}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white p-4">
                  {item.type === 'image' ? (
                    <Image className="h-10 w-10 mb-2 mx-auto" />
                  ) : (
                    <Play className="h-10 w-10 mb-2 mx-auto" />
                  )}
                  <p className="text-sm text-center">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-lanka-blue hover:bg-lanka-blue/90">
            View More Photos
          </Button>
        </div>
        
        {/* Lightbox */}
        {lightboxOpen && currentImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={currentImage}
              alt="Enlarged view" 
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;