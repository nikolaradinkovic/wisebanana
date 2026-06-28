export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center bg-gradient-to-b from-white via-yellow-50 to-white text-center">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
        Digital Products Marketplace
      </p>

      <h1 className="mt-6 text-6xl font-semibold leading-tight text-black">
        Build.
        <br />
        Sell.
        <br />
        Grow.
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
        Discover premium AI prompts, templates and digital products
        designed to help creators work faster and smarter.
      </p>
<div className="mt-10 flex justify-center gap-4">
  <button className="rounded-xl bg-yellow-500 px-7 py-3 font-semibold text-black transition hover:bg-yellow-400">
    Explore Products
  </button>

  <button className="rounded-xl border border-gray-300 px-7 py-3 font-semibold text-black transition hover:bg-gray-100">
    Learn More
  </button>
</div>
    </section>
  );
}