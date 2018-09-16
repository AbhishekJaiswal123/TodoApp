import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions';
import Link from '../../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownprops) => ({
    onClick: dispatch(setVisibilityFilter(ownprops.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)