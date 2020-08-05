import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <p>Hello from the examples page</p>
      <Header />
      <HeaderStatic />
      <h5>Author: {author}</h5>
    </Layout>
  )
}
export const data = graphql`
  query {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`

export default examples
