'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', {enumerable: true, value: v})
      }
    : function (o, v) {
        o.default = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
Object.defineProperty(exports, '__esModule', {value: true})
var react_1 = __importStar(require('react'))
function TimeSelect(props) {
  var hours = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ]
  var minutes = ['00', '15', '30', '45']
  var _a = react_1.useState('01'),
    hour = _a[0],
    setHour = _a[1]
  var _b = react_1.useState('00'),
    minute = _b[0],
    setMinute = _b[1]
  var _c = react_1.useState('AM'),
    meridiem = _c[0],
    setMeridiem = _c[1]
  var handleChange = function (event, localStateCallback) {
    localStateCallback(event.target.value)
  }
  var time = hour + ':' + minute + ' ' + meridiem
  return react_1.default.createElement(
    'div',
    null,
    react_1.default.createElement(
      'form',
      {
        onSubmit: function (event) {
          props.handleSubmit(event, time)
        },
      },
      react_1.default.createElement(
        'label',
        null,
        props.label,
        react_1.default.createElement(
          'select',
          {
            onChange: function (event) {
              return handleChange(event, setHour)
            },
          },
          hours.map(function (element) {
            return react_1.default.createElement(
              'option',
              {key: element, value: element},
              element
            )
          })
        ),
        react_1.default.createElement(
          'select',
          {
            onChange: function (event) {
              return handleChange(event, setMinute)
            },
          },
          minutes.map(function (element) {
            return react_1.default.createElement(
              'option',
              {key: element, value: element},
              element
            )
          })
        ),
        react_1.default.createElement(
          'select',
          {
            onChange: function (event) {
              return handleChange(event, setMeridiem)
            },
          },
          react_1.default.createElement('option', {value: 'AM'}, 'AM'),
          react_1.default.createElement('option', {value: 'PM'}, 'PM')
        )
      ),
      react_1.default.createElement(
        'button',
        {type: 'submit', value: 'Submit'},
        'Next'
      )
    )
  )
}
exports.default = TimeSelect
