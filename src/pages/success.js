import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Success = () => {
  return (
    <Layout>
      <Seo title="Success" />
      <div className="success-page">
        <h3>Your submission was recieved!</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </Layout>
  )
}

export default Success
