"use strict";

var _react = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var _react2 = _interopRequireDefault(require("react"));
var _Modal = _interopRequireDefault(require("./Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Modal", () => {
  test("calls useEffect with the correct arguments when openModal changes", () => {
    /* Spying on the useEffect hook. */
    const spy = jest.spyOn(_react2.default, "useEffect");
    /* Destructuring the `rerender` function from the `render` function. */
    const {
      rerender
    } = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_Modal.default, {
      openModal: false
    }));
    /* Re-rendering the component with the new props. */
    rerender( /*#__PURE__*/_react2.default.createElement(_Modal.default, {
      openModal: true
    }));
    /* Checking that the useEffect hook was called with the correct arguments. */
    expect(spy).toHaveBeenCalledWith(expect.any(Function), [true]);
    /* It restores the original function. */
    spy.mockRestore();
  });
  test("returns null if openModal is false", () => {
    const {
      container
    } = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_Modal.default, {
      openModal: false
    }));
    expect(container).toBeEmptyDOMElement();
  });
  test("renders the correct HTML content when openModal is true", () => {
    (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_Modal.default, {
      openModal: true
    }));
    expect(_react.screen.getByTestId("closeModal")).toBeInTheDocument();
    expect(_react.screen.getByTestId("modalWrapper")).toBeInTheDocument();
    expect(_react.screen.getByTestId("closeModalBnt")).toBeInTheDocument();
  });
  test("calls closeModal when the user clicks the Close button or the modal background area", () => {
    const closeModal = jest.fn();
    (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_Modal.default, {
      openModal: true,
      closeModal: closeModal
    }));
    _react.fireEvent.click(_react.screen.getByTestId("closeModalBnt"));
    expect(closeModal).toHaveBeenCalled();
    _react.fireEvent.click(_react.screen.getByTestId("closeModal"));
    expect(closeModal).toHaveBeenCalled();
  });
  test("correctly displays the message", () => {
    const message = "This is a test message";
    (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_Modal.default, {
      openModal: true,
      children: message
    }));
    expect(_react.screen.getByTestId("message")).toHaveTextContent(message);
  });
});