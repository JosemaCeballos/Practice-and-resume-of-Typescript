import express from "express"
const router = express.Router()

type Usuario = {
    id: string,
    name: string,
}

router.get("/", (req, res) => {
    res.send('Hola mundo')
})

router.post("/", async (req, res) => {
    const { id, name } = req.body as Usuario
    console.log(name);
    res.send('Ok')
})

export default router