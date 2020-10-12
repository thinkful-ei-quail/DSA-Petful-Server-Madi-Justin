require('dotenv').config()

const app = require('./modules/app/app')
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Petful server listening on port ${PORT}.`)
})
