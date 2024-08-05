Invoice Generator
========

Generate invoices in Node.js with the [Invoice Generator API](https://invoice-generator.com).

## Table of Contents

- [Requisites](#requisites)
- [Installation](#installation)
- [Integrations](#integrations)
- [Environment Variables](#environment-variables)
  - [Application](#application)
  - [OAuth 2.0](#oauth-20)
  - [Nodemailer](#nodemailer)
  - [Invoice Generator API](#invoice-generator-api)
- [Usage](#usage)

## Requisites

- Google Account
- Google Project

## Installation

- `npm ci` to install project dependencies.
- Create a `.env` file on the project root following the keys specified on `.env.dist`

## Environment Variables

#### Application

| Variable       | Description            |
| -------------- | ---------------------- |
| `CONTRACTOR_FULL_NAME`| Contractor Full Name. |
| `CONTRACTOR_EMAIL_ADDRESS`     | Contractor Email Address.   |
| `CONTRACTOR_RESIDENCE` | Contractor location, e.g, Argentina, Buenos Aires, CABA.    |
| `CONTRACTOR_ROLE` | Contractor Role.    |
| `CONTRACTOR_SALARY` | Contractor Salary, e.g, 2000.    |
| `HR_EMAIL_ADDRESS` | Human Resources Email Address.    |
| `HR_FULL_NAME` | Human Resources Full Name.    |
| `COMPANY_NAME` | Company Name.    |
| `COMPANY_SUITE_NUMBER` | Company Suite Number.    |
| `COMPANY_STREET_ADDRESS` | Company Street Address.    |
| `COMPANY_COUNTRY` | Company Country.    |
| `COMPANY_POSTAL_CODE` | Company Postal Code.    |
| `COMPANY_EMAIL_ADDRESS` | Company Email Address.    |
| `COMPANY_LOGO` | Company Logo.    |
| `INVOICE_PATH` | Path where invoice would be stored.    |

#### OAuth 2.0

| Variable       | Description            |
| -------------- | ---------------------- |
| `OAUTH_CLIENT_ID`| OAuth Client ID. |
| `OAUTH_CLIENT_SECRET`     | OAuth Client Secret.   |
| `OAUTH_REFRESH_TOKEN` | OAuth Refresh Token.    |
| `OAUTH_REDIRECT_URI` | OAuth Redirect URI.    |

#### Nodemailer

| Variable       | Description            |
| -------------- | ---------------------- |
| `AUTH_TYPE`| Authentication type, e.g, OAuth2. |
| `EMAIL_SERVICE`     | Email service, e.g, gmail.   |

#### Invoice Generator API

| Variable       | Description            |
| -------------- | ---------------------- |
| `INVOICE_GENERATOR_API_URL`| Invoice Generator API URL. |
| `INVOICE_GENERATOR_API_KEY`| Invoice Generator API Key. |

## Usage

After fulfilling your environment variables, customize the **Application** environment variables with the values for your invoice. Then run this command to send your invoice to HR:

	npm run send:invoice

## Resources

- [Nodemailer](https://nodemailer.com)
- [OAuth Playground](https://developers.google.com/oauthplayground)
- [Invoice Generator API](https://invoice-generator.com/developers)
- [Google Developer Console](https://console.cloud.google.com)