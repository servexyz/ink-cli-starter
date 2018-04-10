import { h, Component, Text, Fragment } from 'ink';
import { withRouter } from 'ink-router';
import PropTypes from 'prop-types';

class Home extends Component {
  getChildContext() {
    return {
      name: "Alec"
    }
  }
  static propTypes = {
    delay: PropTypes.number,
    to: PropTypes.string.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func
    })
  }
  static defaultProps = {
    delay: 2000
  }
  componentDidMount() {
    this.timeout = setTimeout(this.redirect, this.props.delay)
  }
  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
  redirect = () => {
    this.props.history.replace(this.props.to)
  }
  render() {
    return (
      <Fragment>
        <Text italic>Redirecting shortly...</Text>
      </Fragment>
    );
  }
}

export default withRouter(Home)
