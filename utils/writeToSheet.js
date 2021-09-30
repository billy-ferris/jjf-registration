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
    const sheet = doc.sheetsById[sheetId]
    const res = await sheet.addRows(rows)
    return res
  } catch (err) {
    console.error("Error: ", err)
  }
}
