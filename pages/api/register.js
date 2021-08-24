import { writeToSheet } from "../../utils/writeToSheet"

export default async function handler(req, res) {
  const { body } = req
  if (req.method === "POST") {
    await writeToSheet(body)
    res.json({
      statusCode: 200,
      data: {
        message: "Submission successful",
      },
      body,
    })
  }
}
