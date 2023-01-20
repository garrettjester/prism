const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // use current UTC date - see "specifying API version"
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;