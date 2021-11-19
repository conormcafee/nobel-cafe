import { TitleAndIntro } from "@components/menu";
import { getMenuDataByCategory } from "@utils/menu";
import { alternateRowColour, chunkArray } from "@utils/global";

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
  const standardBreakfast = "breakfast";
  const additionalBreakfast = "breakfast-additional";

  const data = getMenuDataByCategory(records, standardBreakfast);
  const breakfast = chunkArray(data);
  const additionalBreakfastItems = getMenuDataByCategory(
    records,
    additionalBreakfast
  );

  return (
    <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-16 py-8 md:py-16">
      <aside>
        <TitleAndIntro
          title="Breakfast"
          intro={[
            "8am - 11:30am: 70p per item",
            "11:30am - Close: £1 per item",
          ]}
        />

        <BreakfastItems data={breakfast} />
      </aside>

      <div className="col-span-2">
        <TitleAndIntro
          title="More Breakfast Options"
          intro={["Serverd until 11:30am"]}
        />

        <AdditionalBreakfastItems data={additionalBreakfastItems} />
      </div>
    </div>
  );
};
