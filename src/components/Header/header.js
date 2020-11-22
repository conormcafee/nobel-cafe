import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import NCLogo from "../../images/logo.png"
import CallIcon from "../../svg/call.svg"

const menu = [
  { title: "Sit In Menu", to: "/menu" },
  { title: "Takeaway Menu", to: "/menu/takeaway-menu" },
  { title: "Videos", to: "/videos" },
  { title: "Jobs", to: "/jobs" },
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
              <HiddenMobile as="li" key={index} isHiddenMobile={false}>
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
      <a href="tel:+442825654302" alt="Call Nobel Cafe">
        <img src={CallIcon} alt="Call Nobel Cafe" />
        Takeaway: Order Now
      </a>
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
    py-4 md:py-8
    z-20 
    rounded-tr-lg
    rounded-tl-lg
  `}
`

const InnerWrapper = styled.div`
  ${tw`
      flex flex-col items-center justify-between 
      mx-auto
      px-4
  `}
  max-width: 1200px;
`

const HeaderLogo = styled.img`
  ${tw`
    w-32 sm:w-40 md:w-48
  `}
`

const HiddenMobile = styled.span`
  ${props =>
    props.isHiddenMobile ? tw`hidden sm:inline-block` : tw`inline-block`}
`

const Nav = styled.nav`
  ${tw`
    flex items-center justify-between
    font-normal
    mt-6
  `}

  li:not(:last-of-type) {
    ${tw`mr-4 md:mr-8`}
  }
`

const NavLink = styled(Link)`
  ${tw`
    text-sm sm:text-base
    text-gray-700 hover:text-green-600
  `}
`
const HeaderButton = styled.div`
  ${tw`
    p-5 md:p-10 z-50 fixed bottom-0 right-0 left-0 text-center lg:text-left lg:left-auto
  `}

  a {
    ${tw`
      inline-flex items-center justify-center 
      h-12 px-4 
      text-white bg-green-700 hover:bg-green-900
      text-sm sm:text-base
      font-black uppercase tracking-wide leading-tight 
      rounded shadow-lg
    `}
    transition: background-color 150ms ease-in-out;

    img {
      ${tw`
        w-8 mr-2
      `}
    }
  }
`
