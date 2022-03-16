module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title: `I like Google fonts`
    },
    plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `limelight`,
            `Aleo`,
            `Mulish`,
            `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      }
    ]
}