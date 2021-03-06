'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnderlineButton = exports.UnderlineUtils = exports.UnderlineKeyboardShortcut = exports.UnderlineMark = exports.UnderlineSchema = exports.UnderlinePlugin = undefined;

var _UnderlineSchema = require('./UnderlineSchema');

var _UnderlineSchema2 = _interopRequireDefault(_UnderlineSchema);

var _UnderlineMark = require('./UnderlineMark');

var _UnderlineMark2 = _interopRequireDefault(_UnderlineMark);

var _UnderlineKeyboardShortcut = require('./UnderlineKeyboardShortcut');

var _UnderlineKeyboardShortcut2 = _interopRequireDefault(_UnderlineKeyboardShortcut);

var _UnderlineUtils = require('./UnderlineUtils');

var UnderlineUtils = _interopRequireWildcard(_UnderlineUtils);

var _UnderlineButton = require('./UnderlineButton');

var _UnderlineButton2 = _interopRequireDefault(_UnderlineButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// External
//
var UnderlinePlugin = function UnderlinePlugin(options) {
  return {
    schema: _UnderlineSchema2.default,

    onKeyDown: function onKeyDown() {
      return _UnderlineKeyboardShortcut2.default.apply(undefined, arguments);
    }
  };
};

//
// Keyboard
//
//
// Schema
//
exports.UnderlinePlugin = UnderlinePlugin;
exports.UnderlineSchema = _UnderlineSchema2.default;
exports.UnderlineMark = _UnderlineMark2.default;
exports.UnderlineKeyboardShortcut = _UnderlineKeyboardShortcut2.default;
exports.UnderlineUtils = UnderlineUtils;
exports.UnderlineButton = _UnderlineButton2.default;