import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          Jag Resume Builder <small>(Live Edit)</small>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Choose Resume Theme
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem active>Theme 1</DropdownItem>
                <DropdownItem>Theme 2</DropdownItem>
                <DropdownItem>Theme 3</DropdownItem>
                <DropdownItem>Theme 4</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Save As
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => window.print()}>PDF</DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled>Markdown</DropdownItem>
                <DropdownItem disabled>HTML</DropdownItem>
                <DropdownItem disabled>Microsoft Word</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
