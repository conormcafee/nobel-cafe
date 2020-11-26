import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Layout } from "../components/Layout"
// import { Layout, Container } from "../components/Layout"
// import { Heading } from "../components/Typography"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
// import { Button } from "../components/Button"
// import JobIcon from "../svg/job.svg"
import Takeaway from "../components/Takeaway/Takeaway"

const description = `We are always on the look out for great talent to add to the Nobel Cafe team`

export default function Video({ data }) {
  const { allFile } = data
  const { nodes } = allFile
  return (
    <Layout>
      <SEO title="Jobs" description={description} />
      {/* REMOVE GLOBAL TAKEAWAY */}
      <Takeaway />
      {/* <Introduction>
        <Container>
          <Heading as="h2" fontBold={true}>
            Jobs
          </Heading>

          <Intro>{description}</Intro>
        </Container>
      </Introduction>

      <Container>
        {nodes.length > 0 ? (
          <Wrapper>
            {nodes.map((job, index) => (
              <Job key={index}>
                <Header>
                  <img
                    src={JobIcon}
                    alt={job.childMarkdownRemark.frontmatter.jobTitle}
                  />
                  <div>
                    <Heading as="h4" fontBold={true}>
                      {job.childMarkdownRemark.frontmatter.jobTitle}
                    </Heading>
                    <Heading
                      as="h5"
                      textColor="purple"
                      fontBold={true}
                      upperCase={true}
                    >
                      Full & Part Time
                    </Heading>
                  </div>
                </Header>

                <p>{job.childMarkdownRemark.frontmatter.intro}</p>

                <Button
                  ghostButton={true}
                  url={job.childMarkdownRemark.frontmatter.path}
                >
                  Go to Job
                </Button>
              </Job>
            ))}
          </Wrapper>
        ) : (
          <NoJobs>
            <img src={JobIcon} alt="No jobs currently available" />
            <Heading as="h3" upperCase={true}>
              Nothing at the minute
            </Heading>
            <p>
              Currently we do not have any jobs going at the minute. Keep an eye
              out on here or on our social media channels in the future
            </p>
          </NoJobs>
        )}
      </Container> */}
    </Layout>
  )
}

// const Wrapper = styled.section`
//   ${tw`
//     py-10 -mx-10 flex flex-wrap
//   `}
// `

// const NoJobs = styled.section`
//   ${tw`
//     py-16 flex flex-col text-center max-w-sm mx-auto
//   `}

//   img {
//     ${tw`
//       w-16 mb-4 opacity-50 mx-auto
//     `}
//   }
// `

// const Header = styled.header`
//   ${tw`
//     flex items-center mb-6
//   `}

//   img {
//     ${tw`
//       w-16 mr-5
//     `}
//   }
// `

// const Introduction = styled.section`
//   ${tw`bg-gray-200 text-center py-10`}
// `

// const Intro = styled.p`
//   ${tw`
//     tracking-wide font-light block my-4 max-w-lg text-center mx-auto
//   `}
// `

// const Job = styled.aside`
//   ${tw`
//     w-full md:w-1/3 p-10
//   `}

//   p {
//     ${tw`
//       my-4
//     `}
//   }
// `

export const pageQuery = graphql`
  query Jobs {
    allFile(filter: { sourceInstanceName: { eq: "jobs" } }) {
      nodes {
        childMarkdownRemark {
          html
          frontmatter {
            title
            path
            jobTitle
            intro
          }
        }
      }
    }
  }
`
