import React from 'react';
import Layout from '../../../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function (props) {
  console.log('Je suis làààààà');
  const art_info = props.data.allMongodbStanGenerativeArtists.edges;
  const art_visual = props.data.allFile.edges;
  return (
    <div>
      <div>
        <Layout
          title="Liste non-exhaustive d'artistes génératif"
          to="/back"
        ></Layout>
      </div>
      <div>
        {art_info.map(art => (
          <div>
            {art_visual.map(img => (
              <Show {...art.node}>{img}</Show>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const Show = ({ children, ...props }) => {
  if (children.node.relativePath.includes(props.file_name)) {
    return (
      <div>
        <h2>{props.title}</h2>
        <Img fluid={children.node.childImageSharp.fluid} />
      </div>
    );
  }
  return null;
};

export const pageQuery = graphql`
  query {
    allMongodbStanGenerativeArtists {
      edges {
        node {
          id
          title
          url_path
          file_name
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "artistes" } }) {
      edges {
        node {
          extension
          relativePath
          sourceInstanceName
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
