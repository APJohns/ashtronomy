import { Link, graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Img from "gatsby-image"


const ImageList = () => {
    const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "gallery" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)

  return (
    <section className="gallery">
    {data.allFile.edges.map(image => (
        <Img
          fluid={image.node.childImageSharp.fluid}
          alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
        />
      ))}
    </section>
  );

}

export default ImageList;
