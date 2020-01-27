import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import NCLogo from "../images/logo.png"
import Button from "./button"

const menu = [
  { title: "Menu" },
  { title: "Videos" },
  { title: "Jobs" },
  { title: "Find Us" },
]

const Header = ({ siteTitle }) => (
  <Wrapper>
    <InnerWrapper>
      <HeaderLogo src={NCLogo} alt={`${siteTitle} Logo`} />

      <Nav>
        {menu.map((a, index) => (
          <NavLink key={index} to="/" title="Go to">
            {a.title}
          </NavLink>
        ))}
      </Nav>

      <Button>Order Now</Button>
    </InnerWrapper>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Wrapper = styled.header`
  ${tw`
    px-4 pt-4 pb-4 mb-8 bg-white fixed w-full z-40 border-b border-gray-300 shadow
  `}
`

const InnerWrapper = styled.div`
  ${tw`
      flex items-center justify-between 
      mx-auto
  `}
`

const HeaderLogo = styled.img`
  ${tw`
    w-48
  `}
`

const Nav = styled.nav`
  ${tw`
    font-heading font-bold
  `}
`

const NavLink = styled(Link)`
  ${tw`
    text-gray-700 hover:text-purple-600 ml-4
  `}
`
