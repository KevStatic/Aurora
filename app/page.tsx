// app/page.tsx

// You can create these components as separate files in your /components/sections folder later.
// For now, we can define them right here to keep it simple.

const HeroSection = () => {
  return (
    // We'll use a dark background for contrast and assume a background image would be applied here via CSS
    <section className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-[60vh] text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          The Foundation of a Modern Wardrobe
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Timeless essentials, responsibly crafted in Surat for the day ahead.
        </p>
        <button className="mt-8 px-8 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200 transition-colors">
          Shop The Collection
        </button>
      </div>
    </section>
  );
};

const FeaturedProductsSection = () => {
  // This is a placeholder. Later, you'll pass real product data here.
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-10">
          Featured Essentials
        </h2>
        {/* This is where your <ProductGrid /> would go */}
        <div className="text-center text-gray-500">
          [Product Grid will be displayed here soon]
        </div>
      </div>
    </section>
  );
};


// This is the main component for your homepage
export default function HomePage() {
  return (
    // No need to add a <div> here if you don't need it.
    // The <main> tag from your layout.tsx is already wrapping this.
    <>
      <HeroSection />
      <FeaturedProductsSection />
    </>
  );
}