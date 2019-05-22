import { setState, getState } from "../store";

/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

const add = (params) => {
    if (typeof(params) == 'string')
        getState().push(params);
    else if (Array.isArray(params))
        setState([...getState(), ...params]);
};

export default add;
