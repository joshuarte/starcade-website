import Mailchimp from 'mailchimp-api-v3'

const apiKey = process.env.MAILCHIMP_API_KEY
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX
const mailchimp = new Mailchimp(apiKey)

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body) 
    try {
        const response = await mailchimp.request({
            method: 'post',
            path: `/lists/${audienceId}/members`,
            body: body,
        })
        console.log("ciao")
        console.log(response)
        return { data: response.data }

    } catch (err) {
        console.log("error", err)
        // res.status(err.status).send(err.detail);
        return { err }
    }
})