//we use rafce to create the syntax to import an header.

// import React from "react";.u can delect not needed
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.PropType = {
  title: PropTypes.string.isRequired,
};

// CSS IN JS.3 methods using a css file, or inline styling or a const placeholder style

// const headingStyle = {
//   color: "yellow",
//   backgroundColor: "darkblue",
// };

export default Header;
