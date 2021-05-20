import { Handler } from '@netlify/functions'



const handler: Handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "HEllow world" })
  }
}


export { handler }

