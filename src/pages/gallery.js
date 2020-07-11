import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ImageList from "../components/imageList"

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <main>
        <h1>Gallery</h1>
        <ImageList />
    </main>
  </Layout>
);

export default Gallery;
