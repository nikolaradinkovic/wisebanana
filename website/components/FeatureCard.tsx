type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-6 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>
    </div>
  );
}