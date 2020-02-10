import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import NCLogo from "../../images/logo.png"
import CallIcon from "../../svg/call.svg"
import { Button } from "../Button"

const menu = [
  { title: "Menu", to: "/menu" },
  { title: "Videos", to: "/videos" },
  { title: "Jobs", to: "/jobs" },
  { title: "Find Us", to: "/find-us" },
]

const Header = ({ siteTitle }) => (
  <Fragment>
    <Wrapper>
      <InnerWrapper>
        <Link to="/" title="Go to Homepage">
          <HeaderLogo src={NCLogo} alt={`${siteTitle} Logo`} />
        </Link>

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
        </Nav>
      </InnerWrapper>
    </Wrapper>
    <HeaderButton>
      <Button>
        <img src={CallIcon} alt="Call Nobel Cafe" />
        Order Now
      </Button>
    </HeaderButton>
  </Fragment>
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
    fixed
    top-0 
    right-0
    left-0
    z-20 
    border-b 
    border-gray-300 
    shadow
  `}
`

const InnerWrapper = styled.div`
  ${tw`
      flex items-center justify-between 
      mx-auto
      px-4
  `}
  max-width: 1200px;
`

const HeaderLogo = styled.img`
  ${tw`
    w-20 sm:w-40 md:w-48
  `}
`

const HiddenMobile = styled.span`
  ${props =>
    props.isHiddenMobile ? tw`hidden sm:inline-block` : tw`inline-block`}
`

const Nav = styled.nav`
  ${tw`
    flex items-center justify-between
    font-heading font-bold
  `}
`

const NavLink = styled(Link)`
  ${tw`
    text-sm sm:text-base 
    text-gray-700 hover:text-green-600 
    mr-4 md:mr-8
  `}
`
const HeaderButton = styled.div`
  ${tw`
    p-10 z-50 fixed bottom-0 right-0
  `}
`
