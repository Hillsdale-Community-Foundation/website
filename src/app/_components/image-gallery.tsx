import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  return (
    <section className="py-12">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            {image.caption && (
              <div className="p-4">
                <p className="text-sm text-gray-600">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
