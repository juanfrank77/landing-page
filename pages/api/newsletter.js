const Mailchimp = require("mailchimp-api-v3");

const mailchimpClient = new Mailchimp(process.env.MAILCHIMP_API_KEY);
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

export default (req, res) => {
  const body = req.body;

  return mailchimpClient
    .request({
      method: "POST",
      path: "/lists" + audienceId + "/members",
      body: {
        email_address: body.email,
        status: "pending",
      },
    })
    .then((result) => {
      res.send({ status: "success" });
    })
    .catch((error) => {
      console.log("newsletter error", error);

      if(error.title === "Member Exists") {
        return res.send({ status: "success" });
      }

      res.send({ status: "error" });
    });
};
