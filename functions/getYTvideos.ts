import { Handler } from '@netlify/functions'
import fetch from 'node-fetch'




const API_ENDPOINT = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3Rvdgj_8AfmrqWfZ9Lwh8w&maxResults=10&order=date&type=video&key=${process.env.YT_SECRET}`



const handler: Handler = async (event, context) => {
  let response
  try {
    response = await fetch(API_ENDPOINT)
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
}

export { handler }

