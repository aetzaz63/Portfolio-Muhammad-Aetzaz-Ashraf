'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    title: 'Web Development',
    description: 'Building modern web applications',
  },
  {
    url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    title: 'Team Collaboration',
    description: 'Working with diverse teams',
  },
  {
    url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    title: 'Problem Solving',
    description: 'Tackling complex challenges',
  },
  {
    url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    title: 'Innovation',
    description: 'Creating innovative solutions',
  },
  {
    url: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    title: 'Learning',
    description: 'Continuous skill development',
  },
  {
    url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    title: 'Technology',
    description: 'Exploring new technologies',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    if (direction === 'prev') {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    } else {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            A visual journey through my work and interests
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 text-white hover:text-slate-300 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 text-white hover:text-slate-300 transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <div
              className="max-w-5xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-semibold text-xl">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/80">{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
