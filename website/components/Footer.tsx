export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 py-10">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h3 className="text-xl font-semibold">Wise Banana 🍌</h3>

          <p className="mt-2 text-gray-500">
            Premium digital products for creators.
          </p>
        </div>

        <div className="flex gap-6 text-gray-500">
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}