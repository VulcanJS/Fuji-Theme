import { getActions,} from 'meteor/vulcan:lib';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ ui: state.ui, });
const mapDispatchToProps = dispatch => bindActionCreators(getActions().ui, dispatch);

const withUI = (component) => connect(mapStateToProps, mapDispatchToProps)(component);

export default withUI;
