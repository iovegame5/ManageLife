const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("hello ");
})

app.get("/caldailyCalories/:sex/:weight/:height/:age", (req, res, error) =>{
    try {
        if(req.params.sex != "male"  &&  req.params.sex != "women" || !req.params.weight || !req.params.age || !req.params.height)
            throw Error("ข้อมูลไม่เพียงพอ")

        const bmrM = req.params.sex == "male" ? 655.1 + (9.563 * req.params.weight) + (1.850 * req.params.height) - (4.676 * req.params.age):null
        const bmrW = req.params.sex == "women" ? 655.1 + (9.563 * req.params.weight) + (1.850 * req.params.height) - (4.676 * req.params.age):null
        console.log("women " + bmrW, "men" + bmrM);
        bmrW ? res.send("women : "+ bmrW) : res.send("men : "+ bmrM);
    } catch (error) {
        res.status(400).json(error.toString())
    }
})

app.listen(3000, ()=> console.log("Sever start && Run in port 3000"))