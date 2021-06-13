import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Not Found" />
    <section className="error-page">
      <h1>404</h1>
      <h3>Page not found</h3>
      <Link to="/" className="btn">
        back home
      </Link>
    </section>
  </Layout>
)

export default NotFoundPage
