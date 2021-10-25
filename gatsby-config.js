require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = "https://sentinelwarren.science",
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
    siteMetadata: {
        name: "SentinelWarren's Portfolio",
        description: "A blog and portfolio site for Warren Kalolo",
        keywords: ["tech", "blog", "computer scientist", "fullstack developer", "data scientist", "frontend dev", "sentinelwarren", "Warren Kalolo", "vue dev", "react dev", "python dev", "javascript dev", "typescript dev"],
        siteUrl,
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
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                resolveEnv: () => NETLIFY_ENV,
                env: {
                    production: {
                        policy: [{ userAgent: '*' }],
                    },
                    'branch-deploy': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap : null , 
                        host: null,
                    },
                    'deploy-preview': {
                        policy:[{ userAgent:'*', disallow:['/']}],    
                        sitemap : null , 
                        host:null, 
                    },
                },
            },
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
               siteUrl: `https://sentinelwarren.science`,
           }
        },
        `gatsby-plugin-advanced-sitemap`,
        `gatsby-plugin-offline`
    ]
};