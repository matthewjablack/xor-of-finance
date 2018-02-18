import { connect } from 'react-redux'
import CreateMarket from './CreateMarket'
import { createMarket } from './CreateMarketActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateMarket: (risk) => {
      dispatch(createMarket(risk))
    }
  }
}

const CreateMarketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMarket)

export default CreateMarketContainer
