'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
var react_1 = __importDefault(require('react'))
function Input(props) {
  var setStatus = props.setStatus,
    label = props.label,
    placeholder = props.placeholder,
    onChange = props.onChange
  var handleSubmit = function (event) {
    event.preventDefault()
    setStatus()
  }
  return react_1.default.createElement(
    'div',
    null,
    react_1.default.createElement(
      'form',
      {onSubmit: handleSubmit},
      react_1.default.createElement(
        'label',
        null,
        label,
        react_1.default.createElement('input', {
          type: 'text',
          placeholder: placeholder,
          onChange: onChange,
        })
      ),
      react_1.default.createElement(
        'button',
        {type: 'submit', value: 'Submit'},
        'Next'
      )
    )
  )
}
exports.default = Input
