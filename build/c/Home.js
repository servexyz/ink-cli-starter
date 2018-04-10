"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ink = require("ink");

var _inkRouter = require("ink-router");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Home extends _ink.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.redirect = () => {
      this.props.history.replace(this.props.to);
    }, _temp;
  }

  getChildContext() {
    return {
      name: "Alec"
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(this.redirect, this.props.delay);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (0, _ink.h)(_ink.Fragment, null, (0, _ink.h)(_ink.Text, {
      italic: true
    }, "Redirecting shortly..."));
  }

}

Home.propTypes = {
  delay: _propTypes.default.number,
  to: _propTypes.default.string.isRequired,
  history: _propTypes.default.shape({
    replace: _propTypes.default.func
  })
};
Home.defaultProps = {
  delay: 2000
};

var _default = (0, _inkRouter.withRouter)(Home);

exports.default = _default;