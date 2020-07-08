import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostList from "../components/postList";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>
    <p>Welcome to my little corner of the world wide web dedicated to sharing my passion for the night sky, and tracking my progress as a hobby astronomer.</p>
    <h2>Recent Posts</h2>
    <PostList />
  </Layout>
)

export default IndexPage
