module.exports = {
  spreadsheetId: process.env.GOOGLE_SHEET_ID,
  spreadsheetTab: 'Leaderboard Data 2',
  credentials: JSON.parse(Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIAL_BODY, 'base64'))
}
