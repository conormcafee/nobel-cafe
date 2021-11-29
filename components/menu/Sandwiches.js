import { getMenuDataByCategory } from "@utils/menu";
import { TitleAndIntro, MenuItem } from "@components/menu";
import { MENU_API_CATEGORIES } from "@constants/menu";

export const Sandwiches = ({ records = [] }) => {
  const sandwiches = getMenuDataByCategory(
    records,
    MENU_API_CATEGORIES.sandwiches
  );

  return (
    <section className="py-8 md:py-16 border-t border-gray-200">
      <div className="wrapper">
        <TitleAndIntro
          title="Sandwiches"
          intro={[
            "Served after 11:30am",
            "Available with Seasonal Vegetable Broth Soup",
          ]}
        />
        <ul
          role="list"
          className="[ grid md:grid-cols-3 gap-y-8 md:gap-16 mt-2 ][ bg-white p-4 rounded-md shadow-sm border border-gray-200 ]"
        >
          {sandwiches.map((sandwich) => (
            <MenuItem key={sandwich.id} item={sandwich} />
          ))}
        </ul>
      </div>
    </section>
  );
};
