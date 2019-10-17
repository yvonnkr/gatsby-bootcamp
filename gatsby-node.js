const path = require("path")

//#region GOAL 1 for conteful we created slug field so we dont need to generate slug
// // GOAL 1 - Generate a slug for each post ******************************************
// //for conteful we created slug field so we dont need to generate slug
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }
//#endregion

// GOAL 2 - Generate the blog post page template (which is just a  react component)*************************
// ref: src/templates/blog.js

// GOAL 3 - Generate a new page for each post *******************************************
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")

  //get markdown data
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  //create new pages
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

//#region  markdown setup
/**
 * const path = require("path")

// GOAL 1 - Generate a slug for each post ******************************************
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// GOAL 2 - Generate the blog post page template (which is just a  react component)*************************
// ref: src/templates/blog.js

// GOAL 3 - Generate a new page for each post *******************************************
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")

  //get markdown data
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  //create new pages
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}

// console.log("@@@@@@@@@@@@@@@@@@", slug)
// console.log(JSON.stringify(node, undefined, 4));
// const absPath = node.fileAbsolutePath
// path.basename(absPath,'md')
// path is a node module for extracting text from path

 */
//#endregion
