const Price = ({ price, text }) => {
  if (!price) return null;

  return (
    <span className="block text-sm text-green-500 font-bold mt-1 space-x-3">
      £{price}
      {text && <span className="block text-[10px] text-gray-400">{text}</span>}
    </span>
  );
};

export const MenuItem = ({ item }) => {
  if (!item) return null;

  const { fields } = item;

  return (
    <li className="relative flex flex-col items-center justify-between space-y-3">
      <div className="w-full">
        <span className="block">
          <span className="absolute inset-0" aria-hidden="true"></span>
          <p className="font-bold truncate">{fields.name}</p>
        </span>

        <div className="mt-2">
          <p className="line-clamp-2 text-sm text-gray-600">
            {fields.description}
          </p>
        </div>
      </div>

      <footer className="flex items-center justify-between [ w-full ][ border-t border-gray-100 py-1 ][ space-x-3 ]">
        <Price price={fields.price} text={fields.price_text} />

        <Price
          price={fields.additional_price}
          text={fields.additional_price_text}
        />
      </footer>
    </li>
  );
};
