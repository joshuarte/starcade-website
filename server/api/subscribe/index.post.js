import Mailchimp from 'mailchimp-api-v3'

const apiKey = process.env.MAILCHIMP_API_KEY
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
const mailchimp = new Mailchimp(apiKey)

export default defineEventHandler(async (req, res) => {
    const { email: email } = req
    console.log(req)
    try {
        const response = await mailchimp.request({
            method: 'post',
            path: `/lists/${audienceId}/members`,
            body: {
                email,
                status: "subscribed"
            }
        })
        const { _links, ...result } = response
        res.status(result.statusCode).json(result)
        console.log("ciao")
        return { response }

    } catch (err) {
        console.log("error", err)
        res.status(err.status).send(err.detail);
        return { err }
    }
})
