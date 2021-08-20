import { GoogleSpreadsheet } from "google-spreadsheet"

const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID
const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
const privateKey = process.env.GOOGLE_PRIVATE_KEY

export const setupDoc = async () => {
  const doc = new GoogleSpreadsheet(spreadsheetId)

  await doc.useServiceAccountAuth({
    client_email: clientEmail,
    private_key: privateKey,
  })

  return doc
}
