// Mock
import stars from './mock.json'

import { getOwnershipDetails } from '../starActions'

import { connect } from 'react-redux'
import StarProfile from './StarProfile'

const mapStateToProps = (state, ownProps) => {
  return {
    star: stars[0],
    ownership: state.star && state.star.ownership
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOwnershipDetails: (id) => dispatch(getOwnershipDetails(id))
  }
}

const StarProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarProfile)

export default StarProfileContainer