import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../Header"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Main>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${tw`bg-purple-900 sm:p-4 lg:p-6 relative`}
`

const Main = styled.main`
  ${tw`
    bg-white shadow sm:rounded-lg mx-auto
  `}
  max-width: 1600px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
