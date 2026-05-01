const HomeLoadingSkeleton = () => {
  return (
    <div className="bg-background">
      {/* Hero Section Skeleton */}
      <section className="relative min-h-125 sm:min-h-150 lg:min-h-175 flex items-center justify-center bg-surface border-b-2 border-border">
        <div className="xl:container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content Skeleton */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <div className="h-12 sm:h-16 lg:h-20 w-3/4 bg-background border border-border rounded-lg animate-pulse" />
                <div className="h-12 sm:h-16 lg:h-20 w-full bg-background border border-border rounded-lg animate-pulse" />
              </div>
              <div className="space-y-3">
                <div className="h-5 w-full bg-background border border-border rounded animate-pulse" />
                <div className="h-5 w-5/6 bg-background border border-border rounded animate-pulse" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="h-14 w-48 bg-background border border-border rounded-lg animate-pulse" />
                <div className="h-14 w-48 bg-background border border-border rounded-lg animate-pulse" />
              </div>
            </div>

            {/* Right Image Skeleton */}
            <div className="relative h-75 sm:h-100 lg:h-125 bg-background border-2 border-border rounded-2xl animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Animals Section Skeleton */}
      <section className="bg-background py-12 sm:py-16 lg:py-20">
        <div className="xl:container mx-auto px-4">
          {/* Section Header Skeleton */}
          <div className="text-center mb-14 lg:mb-16 space-y-4">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-12 h-0.5 bg-surface border border-border rounded-full animate-pulse" />
              <div className="w-6 h-6 bg-surface border border-border rounded-full animate-pulse" />
              <div className="w-12 h-0.5 bg-surface border border-border rounded-full animate-pulse" />
            </div>
            <div className="h-10 w-80 mx-auto bg-surface border border-border rounded-lg animate-pulse" />
            <div className="h-6 w-96 mx-auto bg-surface border border-border rounded animate-pulse" />
          </div>

          {/* Featured Animals Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-surface border border-border rounded-[14px] overflow-hidden animate-pulse"
              >
                {/* Image Skeleton */}
                <div className="relative h-50 w-full bg-background" />

                {/* Card Body */}
                <div className="p-5 space-y-4">
                  <div className="h-6 bg-background border border-border rounded-lg w-3/4" />
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-8 w-24 bg-background border border-border rounded-lg" />
                    <div className="h-8 w-20 bg-background border border-border rounded-lg" />
                    <div className="h-8 w-20 bg-background border border-border rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-24 bg-background border border-border rounded" />
                    <div className="h-8 w-32 bg-background border border-border rounded-lg" />
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="h-11 w-full bg-background border border-border rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button Skeleton */}
          <div className="mt-14 lg:mt-16 text-center">
            <div className="h-14 w-56 mx-auto bg-surface border border-border rounded-xl animate-pulse" />
          </div>
        </div>
      </section>

      {/* Qurbani Tips Section Skeleton */}
      <section className="bg-surface py-12 sm:py-16 lg:py-20 border-y-2 border-border">
        <div className="xl:container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-14 space-y-4">
            <div className="h-10 w-72 mx-auto bg-background border border-border rounded-lg animate-pulse" />
            <div className="h-6 w-96 mx-auto bg-background border border-border rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-background border-2 border-border rounded-xl p-6 space-y-4 animate-pulse"
              >
                <div className="h-12 w-12 bg-surface border border-border rounded-full" />
                <div className="h-6 w-3/4 bg-surface border border-border rounded-lg" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-surface border border-border rounded" />
                  <div className="h-4 w-5/6 bg-surface border border-border rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Breeds Section Skeleton */}
      <section className="bg-background py-12 sm:py-16 lg:py-20">
        <div className="xl:container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-14 space-y-4">
            <div className="h-10 w-64 mx-auto bg-surface border border-border rounded-lg animate-pulse" />
            <div className="h-6 w-80 mx-auto bg-surface border border-border rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-surface border-2 border-border rounded-xl overflow-hidden animate-pulse"
              >
                <div className="relative h-48 w-full bg-background" />
                <div className="p-6 space-y-3">
                  <div className="h-7 w-3/4 bg-background border border-border rounded-lg" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-background border border-border rounded" />
                    <div className="h-4 w-5/6 bg-background border border-border rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeLoadingSkeleton;
