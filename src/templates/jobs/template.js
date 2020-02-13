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
            <Heading as="h1" upperCase={true}>
              {jobTitle}
            </Heading>

            <Intro>{intro}</Intro>
            <Button>Apply Now</Button>
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
              <Button>Apply Now</Button>
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
    flex mb-6
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
`

const JobActions = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
