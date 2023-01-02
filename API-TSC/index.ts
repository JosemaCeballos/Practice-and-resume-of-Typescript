import express from "express"
import usersRoute from "./Users"

const app = express()
app.use(express.json())

app.use("/", usersRoute)


app.listen(3000, () => console.log('Run in port 3000'))
