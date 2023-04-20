const {Router, request, response} = require("express")
const router = Router()
const Main = require("./../models/Main")
const multer = require("multer")
const fs = require("fs")

const storageConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storageConfig})

router.get("/", async (request, response) => {
    let main = await Main.find()
    response.json(main)
})

router.get('/post', async (req, res) => {
    try {
        const { userId } = req.query
        const main= await Main.find({ owner: userId})
        res.json(main)
    }catch (error) {
        console.log(error)
    }
})

router.post("/addmain", upload.single("myfile"), (req, res) => {
    const newMain = new Main({
        owner: req.body.userId,
        paramA: req.body.paramA,
        paramB: req.body.paramB,
        paramC: req.body.paramC,
        paramD: req.body.paramD,
        title: req.body.title,
        author: req.body.author,
        designer: req.body.designer,
        description: req.body.description,
        img: req.file.originalname
    })
    newMain
        .save()
        .then(main => res.json("The Article ADD!!!"))
        .catch(err => res.status(400).json(`Error my: ${err}`))
})

router.delete('/deletemain/:id', async (request, response) => {
    try {
        const main = await Main.findOneAndDelete({_id: request.params.id})
        response.json(main)
        fs.unlinkSync(`./client/public/uploads/${main.img}`)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router