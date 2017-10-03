
/*
    Description: Maps the redux state to props that are passed to component
*/
const mapStateToProps = (state, ownProps) => {
    return {
        // <!--- plopjs inject new reducer ---> generation cli required
        // Put your reducers and models here
        {{reducerName}}: state.reducerName,
    }
};


/*
    Description: Maps the action creators to this.actions to allow us to execute action creators to make api calls, etc.
*/
const mapDispatchToProps = (dispatch, ownProps) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
};

/*
    Description: Connects to the Redux Store.
*/
export default connect< {}, Props, State>(
    mapStateToProps,
    mapDispatchToProps
)(BackEndAddonPage);

