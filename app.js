/* eslint-disable no-console */
import express from 'express'
const app = express()

// get the port from env variable
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use('dist')

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
