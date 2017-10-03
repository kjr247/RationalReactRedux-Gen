/** Recommended tooling:
 * import { expectTrue, expectNotEqual, expectEqual, exists, contains, doesNotExist, hasValue } from 'e-utils/lib/test';
 * You can also validate test strength with Stryker-mutator.js.
 * It can automatically impose mutations on your code and if tests still pass then they are weak.
 */

import * as actionTypes from "client/store/actionTypes";
import { {{ reducerName }} } from "client/store/reducers/models/{{ reducerName }}";

/**
 * Best Practices
 * - Isolated: Each Unit Test Should Be Able to Run Independently(1 min + time tables are unacceptable)
 * - Test Only One Condition at a Time
 * - Repeatable: should render the same outputs for the same inputs.
 * - Quality over quantity: 100% code coverage testing that a setter accidentally sets null or undefined is a waste of time and efforts.
 * - Mock External References: Testing external references should be done separately or as regression tests.
 *
 */

/**
 *  Do: Try to test complicated parts that you expect will confuse someone.
 *  Do: Try to leave at least one test that best explains what the feature wants to accomplish.
 *  Do: Make tests simple. 1 input, 1 output.
 *  Do: Be explicit and rewrite functions and definitions. We don't care about file size as much as being explicit here.
 *      This is self documenting code in the truest form.
 *  Don't: Try to test the implementation details which will change.
 *  Don't: Try to test all of the other plumbing. The reducer should test the output based on an input. Don't test the actions.
 *  Don't: Make tests complicated. 1 input, 1 output.
 */

describe("{{reducerName}} reducer", () => {
    const init = {{reducerName}}(undefined, { type: INIT });

    // using your imported actionTypes you can build calls in the following pattern
    // const data = { /* put your payload here */}
    // const addTwo = { type: actionTypes.blah, payload: data }; /* {<--- data = payload } */

    describe("featureName featureName or actionName", () => {
        /* Test each feature with a separate describe and it's own it functions' */
        it("should /* replace this comment with what it should do. */ ", () => {
            /* Test only one action type per it() function. */

        });
    });

    describe("featureName featureName or actionName", () => {
        /* Test each feature with a separate describe and it's own it functions' */
        it("should /* replace this comment with what it should do. */ ", () => {
            /* Test only one action type per it() function. */

        });
    });
});
