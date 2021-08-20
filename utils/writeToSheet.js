import { setupDoc } from "./helpers/setupDoc"

export const writeToSheet = async (entry) => {
  const doc = await setupDoc()
  const sheetId = process.env.GOOGLE_SHEET_ID

  const { firstName, lastName, teamName, email, note } = entry
  const row = {
    Name: `${firstName} ${lastName}`,
    Email: email,
    Team: teamName,
    Note: note,
  }

  try {
    await doc.loadInfo()
    const sheet = await doc.sheetsById[sheetId]
    await sheet.addRow(row)
  } catch (err) {
    console.error("Error: ", err)
  }
}
