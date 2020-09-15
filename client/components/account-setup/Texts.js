'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
var react_1 = __importDefault(require('react'))
function Texts(props) {
  var setStatus = props.setStatus,
    setTextAlerts = props.setTextAlerts,
    handleSubmit = props.handleSubmit
  return react_1.default.createElement(
    'div',
    null,
    react_1.default.createElement(
      'div',
      null,
      'Would you like us to remind you to stay hydrated via text?'
    ),
    react_1.default.createElement(
      'div',
      {
        onClick: function () {
          setTextAlerts(true)
          setStatus()
        },
      },
      'Yes'
    ),
    react_1.default.createElement('div', {onClick: handleSubmit}, 'No')
  )
}
exports.default = Texts
