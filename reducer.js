// If needed replace the route with your app specific routes here else just uncomment and remove this instruction.
import * as actionTypes from '../actionTypes';

interface state {}; // Put your expected state shape here

// Do: Put your expected state shape in getInitialState
// Do: recommended make default values to be null (if possible) and use proper validation when consuming this data.
// States: null = instantiated, empty/undefined = not instantiated.
const getInitialState = () => null;

// Do: Return state(regardless of mutations) from every case.
// Do: Wrap every case with {} brackets
// Do: Separate mutations from computations. (Computations go elsewhere aka utilsFolder/specificUtil.ts)

// IMPORT MODULE FILES
export default function {{ reducerName }} (state = getInitialState(), actions) {
  switch (actions.type) {
    case actionTypes.{{reducerName}}_MODIFY: {
      const { payload } = actions;
      return state;
    }
    default: { return state; }
  }
}
