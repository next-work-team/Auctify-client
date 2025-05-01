export default function AuctionImageGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <section>
      <div className="overflow-hidden rounded-lg border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[0] || '/placeholder.svg'}
          alt={title}
          className="h-[300px] w-full object-cover sm:h-[400px] md:h-[500px]"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image || '/placeholder.svg'}
              alt={`${title} - 이미지 ${index + 1}`}
              className="h-24 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
