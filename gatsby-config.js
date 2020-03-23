module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog`,
        name: `blog`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-layout`,
  ],
}
