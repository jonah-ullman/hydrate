'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
var react_1 = __importDefault(require('react'))
function Phone(props) {
  var handleSubmit = function (event) {
    event.preventDefault()
    props.setStatus('activity')
  }
  return react_1.default.createElement(
    'div',
    null,
    react_1.default.createElement('div', null, 'Enter your phone number'),
    react_1.default.createElement(
      'form',
      {onSubmit: handleSubmit},
      react_1.default.createElement('input', {
        type: 'text',
        placeholder: 'xxx-xxx-xxxx',
        onChange: function (event) {
          return props.setPhone(event.target.value)
        },
      })
    )
  )
}
exports.default = Phone
