import { getState } from "../store";

/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const remove = (params) => {
    if (getState().indexOf(params) != -1)
        getState().splice(getState().indexOf(params), 1);
};

export default remove;
