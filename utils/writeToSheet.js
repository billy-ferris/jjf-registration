import { setupDoc } from "./helpers/setupDoc"

export const writeToSheet = async (body) => {
  const doc = await setupDoc()
  const sheetId = process.env.GOOGLE_SHEET_ID
  const { members, team } = body

  const rows = members.map((member) => {
    const formattedMember = {
      ...member,
      team,
    }
    return formattedMember
  })

  try {
    await doc.loadInfo()
    const sheet = await doc.sheetsById[sheetId]
    await sheet.addRows(rows)
  } catch (err) {
    console.error("Error: ", err)
  }
}
