import FeatureCard from "./FeatureCard";
export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
          Why Wise Banana?
        </p>

        <h2 className="mt-4 text-4xl font-semibold">
          Everything creators need.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
  <FeatureCard
    icon="⚡"
    title="Save Time"
    description="Spend less time working and more time creating."
  />

  <FeatureCard
    icon="⭐"
    title="Premium Quality"
    description="Every product is carefully designed and tested."
  />

  <FeatureCard
    icon="🚀"
    title="Instant Access"
    description="Download your products immediately after purchase."
  />
</div>
      </div>
    </section>
  );
}