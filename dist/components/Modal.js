"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("../styles/main.scss");
var _cross = _interopRequireDefault(require("./assets/cross.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Modal component that displays a message and provides a button to close it.
 *
 * @param {boolean} openModal - Indicates whether the modal should be displayed or not.
 * @param {function} closeModal - Function that closes the modal.
 * @param {string} message - Message to be displayed in the modal.
 *
 * @returns {JSX.Element} - Rendered modal element.
 */
const Modal = _ref => {
  let {
    openModal,
    closeModal,
    message
  } = _ref;
  (0, _react.useEffect)(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
  }, [openModal]);
  if (!openModal) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: closeModal,
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalWrapper",
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContent"
  }, /*#__PURE__*/_react.default.createElement("span", null, message)), /*#__PURE__*/_react.default.createElement("button", {
    className: "closeModalBnt",
    onClick: closeModal
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _cross.default,
    className: "crossImage",
    alt: "cross"
  }))));
};
Modal.propTypes = {
  openModal: _propTypes.default.bool,
  closeModal: _propTypes.default.func,
  message: _propTypes.default.string
};
var _default = Modal;
exports.default = _default;