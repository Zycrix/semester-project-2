import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { fetchAll } from "./modules/fetchAll.mjs";
import { removeEnded } from "./modules/filters/removeEnded.mjs";

const data = await fetchAll();

const endedRemoved = removeEnded(data);
