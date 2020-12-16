import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators as templateActions } from 'store/modules/template'
import TemplateComponent from 'components/template/TemplateComponent'

class TemplateContainer extends React.Component {
  // initialize
  initialize = () => {
    const { TemplateActions } = this.props
    TemplateActions.initialize()
  }

  // handle submit
  handleSubmit = async () => {
    const { TemplateActions } = this.props
    TemplateActions.setError(null)

    // submit
    try {
      TemplateActions.setPending(true)

      // submit
      // await TemplateActions.submit()

      TemplateActions.setPending(false)
    } catch (e) {
      TemplateActions.setPending(false)
    }
  }

  componentDidMount() {
    this.initialize()
  }

  render() {
    const { error, result, pending } = this.props
    const { handleSubmit } = this
    return (
      <TemplateComponent
        prop={result}
        error={error}
        pending={pending}
        onSubmit={handleSubmit}
      >
        <div onClick={handleSubmit}>Hello, Component</div>
      </TemplateComponent>
    )
  }
}

export default connect(
  ({ template }) => ({
    error: template.error,
    pending: template.pending,
    result: template.result
  }),
  dispatch => ({
    TemplateActions: bindActionCreators(templateActions, dispatch)
  })
)(TemplateContainer)
