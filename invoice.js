const fs = require("fs");
const axios = require("axios").default;

async function generateInvoice(invoice, filename) {
  const body = JSON.stringify(invoice);
  const apiUrl = process.env.INVOICE_GENERATOR_API_URL;

  const file = fs.createWriteStream(filename);
  
  const { data: chunk } = await axios.post(apiUrl, invoice, {
    headers: {
      Authorization: `Bearer ${process.env.INVOICE_GENERATOR_API_KEY}`,
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body),
    },
    responseType: "stream"
  });

  chunk.pipe(file)

  await new Promise((resolve, reject) => {
    file.on('finish', resolve);
    file.on('error', reject);
  });
}

module.exports = { generateInvoice };
