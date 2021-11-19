import { Fragment } from "react";
import { getMenuDataByCategory } from "@utils/menu";
import { TitleAndIntro, MenuItem } from "@components/menu";
import { MENU_API_CATEGORIES } from "@constants/menu";

const Sides = ({ data = [] }) => {
  if (!data.length) return null;

  return (
    <Fragment>
      <TitleAndIntro title="Extras" intro={["Served after 11:30am"]} />
      <ul
        role="list"
        className="[ grid gap-y-8 md:gap-8 mt-2 ][ bg-white p-4 rounded-md shadow-sm border border-gray-200 ]"
      >
        {data.map((misc) => (
          <MenuItem key={misc.id} item={misc} />
        ))}
      </ul>
    </Fragment>
  );
};

const Kids = ({ data = [] }) => {
  if (!data.length) return null;

  return (
    <div className="mt-8 md:mt-16">
      <TitleAndIntro title="Kids" intro={["Served after 11:30am"]} />
      <ul
        role="list"
        className="[ grid gap-y-8 md:gap-8 mt-2 ][ bg-white p-4 rounded-md shadow-sm border border-gray-200 ]"
      >
        {data.map((misc) => (
          <MenuItem key={misc.id} item={misc} />
        ))}
      </ul>
    </div>
  );
};

const LunchList = ({ data = [] }) => {
  if (!data.length) return null;

  return (
    <Fragment>
      <TitleAndIntro title="Lunch" intro={["Served after 11:30am"]} />
      <ul
        role="list"
        className="[ grid md:grid-cols-2 gap-y-8 md:gap-16 mt-2 ][ bg-white p-4 rounded-md shadow-sm border border-gray-200 ]"
      >
        {data.map((lunch) => (
          <MenuItem key={lunch.id} item={lunch} />
        ))}
      </ul>
    </Fragment>
  );
};

export const Lunch = ({ records = [] }) => {
  const lunch = getMenuDataByCategory(records, MENU_API_CATEGORIES.lunch);
  const sides = getMenuDataByCategory(records, MENU_API_CATEGORIES.sides);
  const kids = getMenuDataByCategory(records, MENU_API_CATEGORIES.kids);

  return (
    <section className="py-8 md:py-16 border-t border-gray-200">
      <div className="wrapper [ grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-8 ]">
        <aside className="order-2 md:order-1">
          <Sides data={sides} />

          <Kids data={kids} />
        </aside>

        <div className="col-span-2 [ order-1 md:order-2 ]">
          <LunchList data={lunch} />
        </div>
      </div>
    </section>
  );
};
