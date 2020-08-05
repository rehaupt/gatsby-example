import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
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
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>title: {data.site.siteMetadata.title}</h1> */}
      {/* <h3>name: {data.site.siteMetadata.person.name}</h3> */}
      <h1>title: {title}</h1>
      <h2>name: {name}</h2>
    </div>
  )
}

export default Header
