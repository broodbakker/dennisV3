import { Handler } from '@netlify/functions'
import axios from 'axios'


const API_ENDPOINT = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3Rvdgj_8AfmrqWfZ9Lwh8w&maxResults=10&order=date&type=video&key=${process.env.YT_SECRET}`




const handler: Handler = async (event, context) => {
  const youtubeData = await axios
    .get(API_ENDPOINT)
    .catch((err) => {
      console.error(err.response);
      return err.response;
    });

  if (youtubeData.status != 200) {
    return {
      statusCode: youtubeData.statusCode,
      body: JSON.stringify(youtubeData.statusText),
    };
  }

  return { statusCode: 200, body: JSON.stringify(youtubeData.data) };
}

export { handler }

