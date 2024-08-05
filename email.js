const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

async function createTransporter() {
  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    process.env.OAUTH_REDIRECT_URI
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken((token) => token)

  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      type: process.env.AUTH_TYPE,
      user: process.env.CONTRACTOR_EMAIL_ADDRESS,
      accessToken,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });
}

async function send(email) {
  try {
    const transporter = await createTransporter();
    transporter.sendMail(email);
  } catch (error) {
    console.error(error)
  }
}

module.exports = { send };