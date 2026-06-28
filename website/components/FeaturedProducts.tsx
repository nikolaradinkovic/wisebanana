import ProductCard from "./ProductCard";
import { products } from "../data/products";
export default function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
          Featured Products
        </p>

        <h2 className="mt-4 text-4xl font-semibold text-black">
          Tools designed to save you time.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Explore our growing collection of AI prompts, templates and digital
          products built for creators and entrepreneurs.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
{products.map((product) => (
  <ProductCard
    key={product.title}
    icon={product.icon}
    title={product.title}
    description={product.description}
    price={product.price}
  />
))}
</div>
      </div>
    </section>
  );
}