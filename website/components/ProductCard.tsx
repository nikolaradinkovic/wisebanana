type ProductCardProps = {
  icon: string;
  title: string;
  description: string;
  price: string;
};
export default function ProductCard({
  icon,
  title,
  description,
  price,
}: ProductCardProps)  {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-2xl">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-black">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

      <div className="mt-auto flex items-center justify-between pt-8">
        <span className="text-xl font-bold">{price}</span>

        <button className="rounded-xl bg-black px-5 py-2 text-white transition hover:bg-gray-800">
          View
        </button>
      </div>
    </div>
  );
}