import React from "react"
import Layout from "../components/layout"
import Head from "./../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Best way to reach me is via{" "}
        <a
          href="https://twitter.com/@NkrYvonne"
          target="_blank"
          rel="noopener noreferrer"
        >
          @my-address
        </a>{" "}
        on twitter
      </p>
    </Layout>
  )
}

export default ContactPage
