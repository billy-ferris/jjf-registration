import { writeToSheet } from "../../utils/writeToSheet"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { body } = req
    let statusCode;
    let message;
    try {
      const data = await writeToSheet(body);
      if (data) {
        statusCode = 200;
        message = "Successfully wrote to sheet";
        // eslint-disable-next-line no-underscore-dangle
        console.info("Success writing to sheet: ", data);
      }
    } catch (error) {
      statusCode = error.statusCode || 500;
      message = "Something went wrong";
      console.error("Error writing to sheet:", error);
    }

    res.json({
      statusCode,
      message,
      body,
    });
  }
}
