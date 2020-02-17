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

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig()

  let newConfig = {
    ...config,
    module: {
      ...config.module,
      noParse: /(mapbox-gl)\.js$/,
    },
  }

  if (stage === "build-html") {
    newConfig = {
      ...newConfig,
      module: {
        ...newConfig.module,
        rules: [
          ...newConfig.module.rules,
          {
            test: /(mapbox-gl)\.js$/,
            loader: "null-loader",
          },
        ],
      },
    }
  }

  actions.replaceWebpackConfig(newConfig)
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

  const menuPages = result.data.allMarkdownRemark.edges.filter(
    a => a.node.frontmatter.path && a.node.frontmatter.path.includes("/menu/")
  )
  const jobPages = result.data.allMarkdownRemark.edges.filter(
    a => a.node.frontmatter.path && a.node.frontmatter.path.includes("/jobs/")
  )

  console.log("Dynamic Pages")
  console.log("----")
  menuPages.map(node => console.log(node.node.frontmatter.path))
  jobPages.map(node => console.log(node.node.frontmatter.path))
  console.log("----")

  menuPages.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: menuTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  jobPages.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: jobTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
