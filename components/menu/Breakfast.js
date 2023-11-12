import { TitleAndIntro } from "@components/menu";
import { MENU_API_CATEGORIES } from "@constants/menu";
import { alternateRowColour, chunkArray } from "@utils/global";
import { getMenuDataByCategory } from "@utils/menu";

const BreakfastItems = ({ data = [] }) => {
  if (!data.length) return null;

  return (
    <section className="border border-gray-200 rounded-md shadow-sm overflow-hidden">
      <table className="min-w-full ">
        <tbody className="divide-y divide-gray-200">
          {data.map((row, idx) => {
            const rowBackgroundColour = alternateRowColour(idx);

            return (
              <tr key={idx} className={rowBackgroundColour}>
                {row.map(({ id, fields }) => (
                  <td key={id} className="px-6 py-4 whitespace-nowrap text-sm ">
                    {fields.name}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

const AdditionalBreakfastItems = ({ data = [] }) => {
  if (!data.length) return null;

  return (
    <ul
      role="list"
      className="border border-gray-200 divide-y divide-gray-200 rounded-md shadow-sm overflow-hidden"
    >
      {data.map((item, idx) => {
        const { id, fields } = item;
        const listBackgroundColour = alternateRowColour(idx);
        return (
          <li key={id} className={`relative ${listBackgroundColour} py-5 px-4`}>
            <div className="flex justify-between space-x-3">
              <div className="min-w-0 flex-1">
                <span className="block">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  <p className="text-sm font-bold truncate">{fields.name}</p>
                </span>
              </div>
              <span className="flex-shrink-0 whitespace-nowrap text-sm text-green-500 font-bold">
                £{fields.price}
              </span>
            </div>
            <div className="mt-1">
              <p className="line-clamp-2 text-sm text-gray-600">
                {fields.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export const Breakfast = ({ records = [] }) => {
  const data = getMenuDataByCategory(records, MENU_API_CATEGORIES.breakfast);
  const breakfast = chunkArray(data);
  const additionalBreakfastItems = getMenuDataByCategory(
    records,
    MENU_API_CATEGORIES.additionalBreakfast
  );

  return (
    <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-16 py-8 md:py-16">
      <aside>
        <TitleAndIntro
          title="Breakfast"
          intro={["8am - 11:30am: 90p per item"]}
        />

        <BreakfastItems data={breakfast} />

        <div className="text-xs text-gray-500 mt-4 [ flex items-center justify-between ]">
          <span className="block">After 11:30am</span>
          <ol className="flex gap-2 text-right">
            <li className="block text-base bg-green-500 rounded-lg text-white px-2 py-1">
              5 items <span className="font-bold">£6.45</span>
            </li>
            <li className="block text-base bg-green-500 rounded-lg text-white px-2 py-1">
              10 items <span className="font-bold">£11.45</span>
            </li>
          </ol>
        </div>
      </aside>

      <div className="col-span-2">
        <TitleAndIntro title="More Breakfast Options" />

        <AdditionalBreakfastItems data={additionalBreakfastItems} />
      </div>
    </div>
  );
};
