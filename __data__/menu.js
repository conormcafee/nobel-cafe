import { breakfast } from "./breakfast";
import { breakfastAdditional } from "./breakfastAdditional";
import { lunch } from "./lunch";
import { sandwiches } from "./sandwiches";
import { sides } from "./sides";
import { wrap } from "./wrap";
import { kids } from "./kids";
import { gourmet } from "./gourmetSandwiches";

export const data = {
  records: [
    ...breakfast,
    ...breakfastAdditional,
    ...sandwiches,
    ...gourmet,
    ...wrap,
    ...lunch,
    ...sides,
    ...kids
  ],
};
