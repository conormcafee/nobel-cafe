import React, { Fragment } from "react"
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
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
    </Fragment>
  )
}

const Main = styled.main`
  ${tw`
    pt-12 sm:pt-16
  `}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
