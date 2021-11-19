import { getMenuDataByCategory } from "@utils/menu";
import { TitleAndIntro, MenuItem } from "@components/menu";
import { MENU_API_CATEGORIES } from "@constants/menu";

export const Sandwiches = ({ records = [] }) => {
  const sandwiches = getMenuDataByCategory(
    records,
    MENU_API_CATEGORIES.sandwiches
  );
  const miscLunches = getMenuDataByCategory(
    records,
    MENU_API_CATEGORIES.miscLunch
  );

  return (
    <section className="py-8 md:py-16 border-t border-gray-200">
      <div className="wrapper [ grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-8 ]">
        <div className="col-span-2">
          <TitleAndIntro title="Sandwiches" intro={["Served after 11:30am"]} />
          <ul
            role="list"
            className="[ grid md:grid-cols-3 gap-y-8 md:gap-16 mt-2 ][ bg-white p-4 rounded-md shadow-sm border border-gray-200 ]"
          >
            {sandwiches.map((sandwich) => (
              <MenuItem key={sandwich.id} item={sandwich} />
            ))}
          </ul>
        </div>

        <aside>
          <TitleAndIntro
            title="Loaded Fries"
            intro={["Served after 11:30am"]}
          />
          <ul
            role="list"
            className="[ grid gap-y-8 md:gap-8 mt-2 ][ bg-white p-4 rounded-md shadow-sm border border-gray-200 ]"
          >
            {miscLunches.map((misc) => (
              <MenuItem key={misc.id} item={misc} />
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};
