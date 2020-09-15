'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
var react_1 = __importDefault(require('react'))
function Confirmation(props) {
  var handleSubmit = props.handleSubmit,
    profile = props.profile
  var weight = profile.weight,
    activity = profile.activity,
    phone = profile.phone,
    textStart = profile.textStart,
    textEnd = profile.textEnd
  return react_1.default.createElement(
    'div',
    null,
    react_1.default.createElement(
      'div',
      null,
      "You're almost ready to start hydrating. Does this look right to you?"
    ),
    react_1.default.createElement('div', null, 'Weight: ', weight),
    react_1.default.createElement(
      'div',
      null,
      'Activity per day: ',
      activity,
      ' minutes'
    ),
    react_1.default.createElement('div', null, 'Phone Number: ', phone),
    react_1.default.createElement(
      'div',
      null,
      'I want to receive text alerts starting at: ',
      textStart
    ),
    react_1.default.createElement(
      'div',
      null,
      'I want to stop receiving text alerts starting at: ',
      textEnd
    ),
    react_1.default.createElement(
      'div',
      {onClick: handleSubmit},
      "Yup, let's hydrate!"
    )
  )
}
exports.default = Confirmation
