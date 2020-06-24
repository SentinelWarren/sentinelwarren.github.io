require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        name: "SentinelWarren's Portfolio",
        description: "A blog and portfolio site for Warren Kalolo",
        keywords: ["tech", "blog", "computer scientist", "fullstack developer", "data scientist", "frontend dev", "sentinelwarren", "Warren Kalolo", "vue dev", "react dev", "python dev", "javascript dev", "typescript dev"],
        siteUrl: "https://sentinelwarren.tech",
        siteImage: "images/",
        profileImage: `images/`,
        lang: `en, sw`,
        config: {
            sidebarWidth: 280
        }
    },
    plugins: [
        {
            resolve: "@pauliescanlon/gatsby-theme-terminal",
            options: {
                source: ["posts", "projects"]
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GA_TRACKING_ID,
            }
        },
        {
           resolve: `gatsby-plugin-canonical-urls`,
           options: {
               siteUrl: `https://sentinelwarren.tech`,
           }
        },
        `gatsby-plugin-advanced-sitemap`
    ]
};