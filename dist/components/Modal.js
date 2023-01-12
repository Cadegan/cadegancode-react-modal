"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _cross = _interopRequireDefault(require("./assets/cross.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  return /*#__PURE__*/React.createElement("div", {
    onClick: closeModal,
    "data-testid": "closeModal",
    className: "modal",
    "aria-label": "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modalWrapper",
    "data-testid": "modalWrapper",
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modalContent"
  }, /*#__PURE__*/React.createElement("span", {
    "data-testid": "message"
  }, children)), /*#__PURE__*/React.createElement("button", {
    className: "closeModalBnt",
    "aria-label": "close modal button",
    onClick: closeModal,
    "data-testid": "closeModalBnt"
  }, /*#__PURE__*/React.createElement("img", {
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