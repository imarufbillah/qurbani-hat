import Image from "next/image";
import { Scale } from "lucide-react";

const TopBreeds = async () => {
  // Fetch top breeds from the API
  const res = await fetch(process.env.ANIMALS_API_URL);
  const data = await res.json();

  // Extract top breeds from the API response
  const breeds = data.topBreeds;

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="xl:container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-3 mb-5 opacity-70">
            <div className="w-12 h-0.5 bg-gradient-accent rounded-full" />
            <span className="text-accent text-xl font-bold">◆</span>
            <div className="w-12 h-0.5 bg-gradient-accent rounded-full" />
          </div>

          {/* Main Heading */}
          <h2 className="font-heading text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-heading mb-3 tracking-tight">
            Top Breeds This Season
          </h2>

          {/* Supporting Description */}
          <p className="font-body text-base sm:text-lg text-muted max-w-130 mx-auto leading-relaxed">
            Popular breeds chosen by buyers for quality and size
          </p>
        </div>

        {/* Breeds Grid - Desktop / Scrollable - Mobile */}
        <div className="overflow-x-auto lg:overflow-visible -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <div className="flex lg:grid lg:grid-cols-5 gap-5 lg:gap-6 min-w-max lg:min-w-0">
            {breeds.map((breed) => (
              <div
                key={breed.id}
                className="group relative bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer w-56 lg:w-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(45,80,22,0.15)] hover:border-accent/40"
              >
                {/* Breed Image */}
                <div className="relative h-48 w-full overflow-hidden bg-background">
                  <Image
                    src={breed.image}
                    alt={breed.name}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Type Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-accent text-primary font-body text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {breed.type}
                  </div>
                </div>

                {/* Breed Info */}
                <div className="p-4">
                  {/* Breed Name */}
                  <h3 className="font-heading text-lg font-bold text-heading mb-2 group-hover:text-primary transition-colors duration-300">
                    {breed.name}
                  </h3>

                  {/* Weight Range */}
                  <div className="flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-2">
                    <Scale className="w-4 h-4 text-muted shrink-0" />
                    <span className="font-body text-sm font-medium text-muted">
                      {breed.weightRange}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Hint for Mobile */}
        <div className="lg:hidden mt-6 text-center">
          <p className="font-body text-xs text-muted italic">
            ← Swipe to see more breeds →
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopBreeds;
