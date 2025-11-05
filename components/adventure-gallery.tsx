export function AdventureGallery() {
  const images = [
    {
      src: "/packrafter-navigating-whitewater-rapids-action-sho.jpg",
      alt: "Whitewater adventure",
      span: "md:col-span-2",
    },
    {
      src: "/packraft-on-alpine-lake-with-mountains.jpg",
      alt: "Alpine lake",
      span: "md:col-span-1",
    },
    {
      src: "/hiker-carrying-packraft-through-forest.jpg",
      alt: "Backcountry hiking",
      span: "md:col-span-1",
    },
    {
      src: "/packraft-camp-by-river-at-sunset.jpg",
      alt: "River camping",
      span: "md:col-span-2",
    },
  ]

  return (
    <section id="adventures" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-4">WHERE WILL YOU GO?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of adventurers exploring remote rivers and backcountry waterways
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className={`relative aspect-[4/3] overflow-hidden rounded-lg group ${image.span}`}>
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
