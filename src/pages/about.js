import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "./../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p>Im a full-stack developer</p>
      <p>
        Need a developer?{" "}
        <Link to="/contact">Want to work with me? Reach out</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
