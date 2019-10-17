import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "./../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            # publishedDate(fromNow: true)
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, index) => {
          const { title, publishedDate, slug } = edge.node
          return (
            <li key={index} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

//*****using data from markdown */
/**
 *  # query {
    #   allMarkdownRemark {
    #     edges {
    #       node {
    #         frontmatter {
    #           title
    #           date
    #         }
    #         fields {
    #           slug
    #         }
    #       }
    #     }
    #   }
    # }

    // const { title, date } = edge.node.frontmatter
    // const { slug } = edge.node.fields
 */
