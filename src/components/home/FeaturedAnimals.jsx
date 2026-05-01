import Link from "next/link";
import AnimalsGrid from "../animals/AnimalsGrid";

const FeaturedAnimals = async () => {
  // Fetch all animals from the API
  const res = await fetch(process.env.ANIMALS_API_URL, {
    next: { revalidate: 300 },
  });
  const data = await res.json();

  // Extract animals from the API response
  const animals = data.animals;

  //   Filter to get only featured animals
  const featuredAnimals = animals.filter((animal) => animal.featured === true);

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

          {/* Heading */}
          <h2 className="font-heading text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-heading mb-3 tracking-tight">
            Featured Animals
          </h2>

          {/* Sub-text */}
          <p className="font-body text-base sm:text-lg text-muted max-w-130 mx-auto leading-relaxed">
            Handpicked premium livestock available for Qurbani this season
          </p>
        </div>

        {/* Featured Animals Grid */}
        <AnimalsGrid animalsData={featuredAnimals} />

        {/* View All Button */}
        <div className="mt-14 lg:mt-16 text-center">
          <Link
            href={"/animals"}
            className="inline-flex items-center gap-2.5 border-2 border-primary text-primary bg-transparent font-body text-[15px] font-semibold px-10 py-3.5 rounded-xl transition-all duration-300 hover:bg-primary hover:text-background hover:shadow-lg hover:-translate-y-0.5 active:scale-95 group"
          >
            <span>View All Animals</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
