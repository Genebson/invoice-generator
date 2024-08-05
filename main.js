require("dotenv").config();

const { generateInvoice } = require("./invoice");
const { send } = require("./email");
const { invoice, email } = require("./constants");


(async () => {
  try {
   await generateInvoice(
      invoice,
      "invoice.pdf"
    );
    await send(email);
    console.log(`The email with the invoice was successfully sent to ${process.env.HR_EMAIL_ADDRESS}`)
  } catch (error) {
    console.error(error);
  }
})();
