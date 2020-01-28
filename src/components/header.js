import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import NCLogo from "../images/logo.png"
import CallIcon from "../svg/call.svg"
import Button from "./button"

const menu = [
  { title: "Menu", to: "/" },
  { title: "Videos", to: "/videos" },
  { title: "Jobs", to: "/" },
  { title: "Find Us", to: "/" },
]

const Header = ({ siteTitle }) => (
  <Wrapper>
    <InnerWrapper>
      <HeaderLogo src={NCLogo} alt={`${siteTitle} Logo`} />

      <Nav>
        <ul>
          {menu.map((a, index) => (
            <HiddenMobile
              as="li"
              key={index}
              isHiddenMobile={a.title === "Videos"}
            >
              <NavLink to={a.to} title="Go to">
                {a.title}
              </NavLink>
            </HiddenMobile>
          ))}
        </ul>
        <Button>
          <img src={CallIcon} alt="Call Nobel Cafe" />
          <HiddenMobile isHiddenMobile={true}>Order Now</HiddenMobile>
        </Button>
      </Nav>
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
    pt-4 pb-4 
    mb-8 
    bg-white 
    fixed w-full z-40 
    border-b border-gray-300 
    shadow
  `}
`

const InnerWrapper = styled.div`
  ${tw`
      flex flex-col md:flex-row flex-wrap items-start md:items-center md:justify-between 
      mx-auto
      px-4
  `}
  max-width: 1200px;
`

const HeaderLogo = styled.img`
  ${tw`
    w-40 md:w-48
  `}
`

const HiddenMobile = styled.span`
  ${props =>
    props.isHiddenMobile ? tw`hidden sm:inline-block` : tw`inline-block`}
`

const Nav = styled.nav`
  ${tw`
    w-full sm:w-auto
    flex items-center justify-between
    font-heading font-bold
    mt-2 md:mt-0
  `}
`

const NavLink = styled(Link)`
  ${tw`
    text-sm sm:text-base 
    text-gray-700 hover:text-purple-600 
    mr-4 md:mr-8
  `}
`
