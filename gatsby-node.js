/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig()
  config.node = {
    fs: "empty",
  }
}

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const menuTemplate = path.resolve(`src/templates/menu/template.js`)
  const jobTemplate = path.resolve(`src/templates/jobs/template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const jobPages = result.data.allMarkdownRemark.edges.filter(
    a => a.node.frontmatter.path && a.node.frontmatter.path.includes("/jobs/")
  )

  console.log("Dynamic Pages")
  console.log("----")
  jobPages.map(node => console.log(node.node.frontmatter.path))
  console.log("----")

  jobPages.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: jobTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
