'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
var react_1 = __importDefault(require('react'))
function Activity(props) {
  var handleSubmit = function (event) {
    event.preventDefault()
    props.setStatus('texts')
  }
  return react_1.default.createElement(
    'div',
    null,
    react_1.default.createElement(
      'div',
      null,
      "'How much do you exercise per day on average, in minutes?'"
    ),
    react_1.default.createElement(
      'form',
      {onSubmit: handleSubmit},
      react_1.default.createElement('input', {
        type: 'text',
        placeholder: '#',
        onChange: function (event) {
          return props.setActivity(event.target.value)
        },
      })
    )
  )
}
exports.default = Activity
