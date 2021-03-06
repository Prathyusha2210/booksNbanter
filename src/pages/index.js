import React from 'react';
import { graphql } from 'gatsby';

import PostsGrid from '../components/PostsGrid';
import Layout from '../components/Layout';
import SEO from '../components/seo';


import GithubIcon from '../../static/github.svg';
import InstagramIcon from '../../static/instagram.svg';
import linkedinIcon from '../../static/linkedin.svg';

import './style.scss';

const HomePage = ({ data, location }) => {
  const {
    site: {
      siteMetadata: {
        title, description, social: { linkedin, instagram, github },
      },
    },
  } = data;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={title}>
      <SEO title="Home" />
      <section className="about__section">
        <img src="pexels-pixabay-270694.jpg" alt="" />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={linkedin} target="__blank">
            <linkedinIcon className="about__social-links" />
          </a>
          <a href={github} target="__blank">
            <GithubIcon className="about__social-links" />
          </a>
          <a href={instagram} target="__blank">
            <InstagramIcon className="about__social-links" />
          </a>
          <a href={"https://linktr.ee/Prathyusha2000"} className="about__cta">Work with Me &#8594;</a>
        </div>
      </section>
      <PostsGrid posts={posts} />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        email
        social {
          linkedin
          instagram
          github
        }
      }
    }
    allMarkdownRemark(
      limit: 3, 
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          thumbnail
        }
      }
    }
  }
`;
