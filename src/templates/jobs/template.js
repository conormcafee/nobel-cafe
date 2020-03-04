import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import { Layout, Container } from "../../components/Layout"
import { Heading } from "../../components/Typography"
import { Button } from "../../components/Button"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import JobIcon from "../../svg/job.svg"

export default function JobsTemplate({ path, data }) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const { frontmatter } = markdownRemark
  const { intro, jobTitle, fullTime } = frontmatter
  return (
    <Layout>
      <SEO title={jobTitle} />

      <Fragment>
        <Introduction>
          <Container>
            <Heading as="h2" fontBold={true}>
              {jobTitle}
            </Heading>

            <Intro>{intro}</Intro>
            <Button
              external
              url="mailto:info@nobel-cafe.co.uk?Subject=Job Application"
            >
              Apply Now
            </Button>
          </Container>
        </Introduction>

        <Container>
          <Wrapper>
            <JobIntro>
              <img src={JobIcon} alt={jobTitle} />
              <div>
                <Heading as="h4">{jobTitle}</Heading>
                <Heading as="h5" textColor="purple" upperCase={true}>
                  {fullTime ? "Full Time" : "Part Time"}
                </Heading>
              </div>
            </JobIntro>

            <JobContent dangerouslySetInnerHTML={{ __html: html }} />
            <JobActions>
              <Button url="/jobs" ghostButton={true}>
                Back to Jobs
              </Button>
              <Button
                external
                url="mailto:info@nobel-cafe.co.uk?Subject=Job Application"
              >
                Apply Now
              </Button>
            </JobActions>
          </Wrapper>
        </Container>
      </Fragment>
    </Layout>
  )
}

const Introduction = styled.section`
  ${tw`bg-purple-100 text-center py-10`}
`

const Intro = styled.p`
  ${tw`
    tracking-wide font-light block my-4 max-w-lg text-center mx-auto
  `}
`

const Wrapper = styled.section`
  ${tw`
    py-10 max-w-lg mx-auto
  `}
`

const JobIntro = styled.div`
  ${tw`
    flex items-center mb-6
  `}

  img {
    ${tw`
      w-16 mr-5
    `}
  }
`

const JobContent = styled.div`
  ${tw`
    mt-6
  `}

  p {
    ${tw`
      mb-6
    `}
  }

  h2,
  h3,
  h4,
  h5 {
    ${tw`
      font-black uppercase tracking-wide text-purple-700
    `}
  }

  ul {
    ${tw`
      ml-4 pl-4 list-disc my-4
    `}
  }

  li {
    ${tw`
      mb-2
    `}
  }
`

const JobActions = styled.footer`
  ${tw`
    flex items-center justify-between my-8
  `}
`

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        intro
        path
        jobTitle
        fullTime
      }
    }
  }
`
