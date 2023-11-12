import { breakfast } from "./breakfast";
import { breakfastAdditional } from "./breakfastAdditional";
import { gourmet } from "./gourmetSandwiches";
import { kids } from "./kids";
import { lunch } from "./lunch";
import { sandwiches } from "./sandwiches";
import { sides } from "./sides";

export const data = {
  records: [
    ...breakfast,
    ...breakfastAdditional,
    ...sandwiches,
    ...gourmet,
    ...lunch,
    ...sides,
    ...kids,
  ],
};
