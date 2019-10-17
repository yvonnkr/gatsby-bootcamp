import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  //overide how component is rendered for documentToReactComponents()
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }
  const { title, publishedDate, body } = props.data.contentfulBlogPost

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default Blog

//   <div dangerouslySetInnerHTML={{ __html: html }} />

//#region using markdow
/**
 * import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from './../components/head';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  const { frontmatter, html } = props.data.markdownRemark

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Blog

 */
//#endregion
