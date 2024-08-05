const {
  getLastDayOfTheCurrentMonth,
  getTenthDayOfTheMonth,
  getLastMonthFromNow,
  currentYear,
} = require("./dates");

const contractorName = process.env.CONTRACTOR_FULL_NAME;
const contractorEmailAddress = process.env.CONTRACTOR_EMAIL_ADDRESS;
const contractorResidence = process.env.CONTRACTOR_RESIDENCE;

const hrEmailAddress = process.env.HR_EMAIL_ADDRESS;
const hrFullName = process.env.HR_FULL_NAME;

const companyName = process.env.COMPANY_NAME;
const companySuiteNumber = process.env.COMPANY_SUITE_NUMBER;
const companyStreetAddress = process.env.COMPANY_STREET_ADDRESS;
const companyCountry = process.env.COMPANY_COUNTRY;
const companyPostalCode = process.env.COMPANY_POSTAL_CODE;
const companyEmailAddress = process.env.COMPANY_EMAIL_ADDRESS;
const companyLogo = process.env.COMPANY_LOGO;

const date = getLastDayOfTheCurrentMonth();
const dueDate = getTenthDayOfTheMonth();
const pastMonthName = getLastMonthFromNow();

const invoice = {
  logo: companyLogo,
  from: `${contractorName}\n${contractorEmailAddress}\n${contractorResidence}`,
  to: `${companyName}, ${companySuiteNumber}, ${companyStreetAddress},\n${companyCountry} (${companyPostalCode})\n${companyEmailAddress}`,
  date,
  due_date: dueDate,
  currency: "usd",
  number: "INV-0001",
  items: [
    {
      name: `${process.env.CONTRACTOR_ROLE} - ${pastMonthName}`,
      quantity: 1,
      unit_cost: Number(process.env.CONTRACTOR_SALARY),
    },
  ],
  fields: {
    tax: "%",
  },
  tax: 0,
};

const email = {
  from: contractorEmailAddress,
  to: hrEmailAddress,
  subject: `${contractorName} - Invoice ${pastMonthName} ${currentYear}`,
  html: `<!DOCTYPE html>
    <html>
      <head>
        <title>Bigger Invoices</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
          @media screen {
            @font-face {
              font-family: 'Lato';
              font-style: normal;
              font-weight: 400;
              src: local('Lato Regular'), local('Lato-Regular'),
                url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff)
                  format('woff');
            }
  
            @font-face {
              font-family: 'Lato';
              font-style: normal;
              font-weight: 700;
              src: local('Lato Bold'), local('Lato-Bold'),
                url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff)
                  format('woff');
            }
  
            @font-face {
              font-family: 'Lato';
              font-style: italic;
              font-weight: 400;
              src: local('Lato Italic'), local('Lato-Italic'),
                url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff)
                  format('woff');
            }
  
            @font-face {
              font-family: 'Lato';
              font-style: italic;
              font-weight: 700;
              src: local('Lato Bold Italic'), local('Lato-BoldItalic'),
                url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff)
                  format('woff');
            }
          }
          body,
          table,
          td,
          a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          table,
          td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
          img {
            -ms-interpolation-mode: bicubic;
          }
          img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
          }
          table {
            border-collapse: collapse !important;
          }
          body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
          @media screen and (max-width: 600px) {
            h1 {
              font-size: 32px !important;
              line-height: 32px !important;
            }
          }
          div[style*='margin: 16px 0;'] {
            margin: 0 !important;
          }
        </style>
      </head>
      <body
        style="
          background-color: #f4f4f4;
          margin: 0 !important;
          padding: 0 !important;
        "
      >
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td bgcolor="#438DD4" align="center">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 40px 10px 40px 10px"
                  ></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td bgcolor="#438DD4" align="center" style="padding: 0px 10px 0px 10px">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr style="
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                    "
                >
                  <td
                    bgcolor="#ffffff"
                    valign="top"
                    style="
                      padding: 40px 20px 20px 25px;
                      border-radius: 4px 4px 0px 0px;
                      color: #111111;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 28px;
                      font-weight: 400;
                      line-height: 48px;
                    "
                  >
                  <img src=${companyLogo} style="width: 30%">
                    <p style="margin: 0">${contractorName} - ${pastMonthName} ${currentYear} Invoice</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr>
                  <td
                    bgcolor="#ffffff"
                    align="left"
                    style="
                      padding: 20px 30px 40px 30px;
                      color: #666666;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 25px;
                    "
                  >
                    <p style="margin: 0">Hey ${hrFullName} 👋, hope you're doing well.</p>
                      <br>
                    <p style="margin: 0; font-size: 16px">
                      I've attached my invoice for <b>${pastMonthName}</b> month below, if anything is wrong about it, ping me in Slack and I will change it ASAP 🙂.
                    </p>
                    <hr>
                    <p style="margin: 0; font-size: 12px;">
                      This email is generated by a robot 🤖, if you see an error let us know.
                    </p>
                  </td>
                </tr>
                
              </table>
  
              <tr>
                <td
                  bgcolor="#f4f4f4"
                  align="center"
                  style="padding: 30px 10px 0px 10px"
                ></td>
              </tr>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
  attachments: [
    {
      filename: "invoice.pdf",
      path: process.env.INVOICE_PATH,
    },
  ],
};

module.exports = { invoice, email };
