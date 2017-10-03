/** Create a stubbed Reducer and stubbed unit test
 *  Guaranteed documentation as comments, unit tests, and all best practices and conventions are followed.
 *  Best practices: typescript interfaces, getInitialState, etc...
 *  Conventions: naming, file types, placement, import * as, etc...
 */

/** How To:
 *  (Recommended optional step: Read through the generator to see what it does.)
 *  (Strongly recommended: add/stage any working files you have in order to keep a clear separation of what is generated/injected.)
 *  1. Run: 'npm run plop' | This will give you a list of generators to run.
 *  2. Select your generator from the list.
 *  3. Answer the questions.
 *  4. Go celebrate with a fresh cup of coffee and stare out the window for the 10-20 mins you saved.
 */

/** Files:
 *  Templates are located in client/generator/plop-templates.
 *  Note: Some inline text templates are inline in the generator itself.
 */

var reducerPlop = ( plop ) => {

  plop.setGenerator("reducer", { /* We declare a new generator called 'reducer' */

    description: "Create a new reducer", /* Succintly describes what generator does. */

    prompts: [ /* It gets the inputs from the user or else it gets the hose again. */
      {
        type: "input",
        name: "reducerName",
        message: "What is your reducer name?",
      },
      { // TODO: It would be nice to provide a dropdown select list of the HOC files here.
        type: "input",
        name: "componentName",
        message: "What is the React component name you want to connect to your redux store? (If left empty nothing will be connected for you.)",
      },
    ],

    // List of sequential actions to take.
    // Here we 'add' new files or modify existing ones from our templates.
    actions: (data) => {
        var actions = [
            {
                type: "add",
                path: "./client/store/reducers/{{camelCase reducerName}}.ts",
                templateFile: "generator/plop-templates/reducer.js",
            }
            , {
                type: "add",
                path: "client/tests/reducers/{{camelCase reducerName}}.test.js",
                templateFile: "generator/plop-templates/reducerSpec.js",
            }
            // index.js injections only so far
            , { // import
                type: "modify",
                path: "./client/store/reducers/index.ts",
                pattern: /(from 'redux')/,
                template: `$1\nimport {{reducerName}} from 'client/store/reducers/{{reducerName}}';`,
            }
            , { // @reduxReducerInjector
                type: "modify",
                path: "./client/store/reducers/index.ts",
                pattern: /(@reduxReducerInjector)/,
                template: "$1\n    {{reducerName}}: state.{{reducerName}}",
            }
            , { // export
                type: "modify",
                path: "./client/store/reducers/index.ts",
                pattern: /(export {)/,
                template: `$1{{reducerName}},`,
            }
            , { // export defaults
                type: "modify",
                path: "./client/store/reducers/index.ts",
                pattern: /(export default {)/,
                template: "$1\n    {{reducerName}}: {{reducerName}},",
            },
        ];

        console.log("actions1", actions);
        var componentActions = [
            // TODO: programmatically create this file if needed
            // TODO: for now this requires React to be imported where you want to inject redux imports
            // Highest Order Component
            { // redux imports
                type: "modify",
                path: "client/components/containers/{{componentName}}/{{componentName}}.tsx",
                pattern: /(from 'react';|from "react";|from 'react|from "react|from"react|from'react)/g,
                template: `$1\n\n/\* Redux imports */\ \nimport { connect } from 'react-redux';
        \nimport { bindActionCreators } from 'redux';
        \nimport actionCreators from 'client/store/actioncreators/{{reducerName}}.ts'; `,
            },
            { // redux imports
                type: "modify",
                path: "client/components/containers/{{componentName}}/{{componentName}}.tsx",
                pattern: /(render() {)/g,
                template: `$1\n console.log('expected: {{reducerName}}', this.props.{{reducerName}})`,
            },
            { // reduxConnector
                type: "modify",
                path: "client/components/containers/{{componentName}}/{{componentName}}.tsx",
                pattern: /((.|\n)*)/,
                template: "$1\n" + reduxConnector,
            },
        ];
        data.componentName.length > 0 && componentActions.forEach(x => actions.push(x));
        console.log("data", data, data.componentName.length);

        console.log("actions2", actions);
        return actions;
    },
  });
};

// Temporary inline text template
const reduxConnector = `
/* Description: Maps the redux state to props that are passed to component */
const mapStateToProps = (state, ownProps) => {
    return {
    // @reduxStateInjector
        {{reducerName}}: state.{{reducerName}}
    }
};

/* Description: Maps the action creators to this.actions to allow us to execute action creators to make api calls, etc. */
const mapDispatchToProps = (dispatch, ownProps) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
};

/* Description: Connects to the Redux Store. */
export default connect< {}, Props, State>(
    mapStateToProps,
    mapDispatchToProps
)({{componentName}});`;

module.exports = reducerPlop;

// TODO: add this to an injector generator
// ,{ // @reduxStateInjector
//   type: 'modify',
//   path: 'client/components/containers/{{componentName}}/{{componentName}}.tsx',
//   pattern: /(/\/\ @reduxStateInjector)/,
//   template: '$1\n{{reducerName}}: state.{{reducerName}}'
// }
