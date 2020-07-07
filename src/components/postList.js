import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PostList = () => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
        node {
          frontmatter {
              title
              path
              date
            }
            id
          }
        }
      }
    }
  `);

  return (
      <ul>
        {
          data.allMarkdownRemark.edges.map(post => (
            <li key={post.node.id}>
                <Link to={post.node.frontmatter.path}>
                    {post.node.frontmatter.title}
                </Link>
            </li>
            )
          )
        }
      </ul>
  );

}

export default PostList
