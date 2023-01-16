"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("../styles/main.css");
var _cross = _interopRequireDefault(require("./assets/cross.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @description Modal component that displays a message in a modal window.
 *
 * @param {Object} props - The props for the component.
 * @param {boolean} props.openModal - Indicates whether the modal is open or not.
 * @param {Function} props.closeModal - Function to close the modal.
 * @param {string} props.children - The message to display in the modal.
 */
const Modal = _ref => {
  let {
    openModal,
    closeModal,
    children
  } = _ref;
  /**
   * @description This is a hook that is used to detect if the modal is open or not. If it is open, it will add a
   * style to the body of the document to hide the overflow. If it is not open, it will remove the
   * style from the body of the document.
   */
  (0, _react.useEffect)(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
  }, [openModal]);
  if (!openModal) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: closeModal,
    className: "modal",
    "data-testid": "closeModal",
    "aria-label": "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalWrapper",
    "data-testid": "modalWrapper",
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContent"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "data-testid": "message"
  }, children)), /*#__PURE__*/_react.default.createElement("button", {
    className: "closeModalBnt",
    "aria-label": "close modal button",
    onClick: closeModal,
    "data-testid": "closeModalBnt"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _cross.default,
    className: "crossImage",
    alt: "cross"
  }))));
};

/**
 * Proptypes for the Modal component.
 */
Modal.propTypes = {
  openModal: _propTypes.default.bool,
  closeModal: _propTypes.default.func,
  children: _propTypes.default.string
};
var _default = Modal;
exports.default = _default;