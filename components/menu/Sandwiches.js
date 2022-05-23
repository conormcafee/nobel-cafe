import { getMenuDataByCategory } from "@utils/menu";
import { TitleAndIntro, MenuItem } from "@components/menu";
import { MENU_API_CATEGORIES } from "@constants/menu";

export const Sandwiches = ({ records = [] }) => {
  const sandwiches = getMenuDataByCategory(
    records,
    MENU_API_CATEGORIES.sandwiches
  );
  const gourmetSandwiches = getMenuDataByCategory(
    records,
    MENU_API_CATEGORIES.wrap
  );

  const openSandwiches = getMenuDataByCategory(
    records,
    MENU_API_CATEGORIES.openSandwiches
  );

  return (
    <section className="py-8 md:py-16 border-t border-gray-200">
      <div className="wrapper [ grid grid-cols-1 md:grid-cols-3 gap-8 ]">
        <div>
          <TitleAndIntro
            title="Sandwiches"
            intro={[
              "Served after 11:30am",
              "Available with Leek & Potato Soup",
            ]}
          />
          <ul
            role="list"
            className="[ grid md:grid-cols-1 gap-y-8 md:gap-16 mt-2 ][ bg-white p-4 rounded-md shadow-sm border border-gray-200 ]"
          >
            {sandwiches.map((sandwich) => (
              <MenuItem key={sandwich.id} item={sandwich} />
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <TitleAndIntro
            title="Gourmet Sandwiches"
            intro={[
              "Served after 11:30am",
              "Available with Leek & Potato Soup",
            ]}
          />
          <ul
            role="list"
            className="[ grid md:grid-cols-2 gap-y-8 md:gap-16 mt-2 ][ bg-white p-4 rounded-md shadow-sm border border-gray-200 ]"
          >
            {gourmetSandwiches.map((wrap) => (
              <MenuItem key={wrap.id} item={wrap} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
