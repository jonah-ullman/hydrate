'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
var react_1 = __importDefault(require('react'))
function Weight(props) {
  var handleSubmit = function (event) {
    event.preventDefault()
    props.setStatus()
  }
  return react_1.default.createElement(
    'div',
    null,
    react_1.default.createElement('div', null, 'Enter your weight in pounds'),
    react_1.default.createElement(
      'form',
      {onSubmit: handleSubmit},
      react_1.default.createElement('input', {
        type: 'text',
        placeholder: 'lb',
        onChange: function (event) {
          return props.setWeight(event.target.value)
        },
      })
    )
  )
}
exports.default = Weight
