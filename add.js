const { response } = require("../src/index")
const add = require("../src/index")
add.get("/add", (req, res) => {
    let num1=4
    let num2=8
    let sum=num1+num2
    let response=""
    if(num1==="" || num2==="")response="Invalid data type"
    else response="success"

    res.json(
        {
            status: response,
            sum: num1 + num2,
            message: `the sum of given two numbers is ${sum}`
        }

    )
})

add.post("/add",(req,res)=>{
    console.log(req.body)
    let num1=req.body.num1
    let num2=req.body.num2
    let sum=num1+num2
    let response=""
    if(Number(num1)==="" || Number(num2)==="")response="Invalid data type"
    else response="success"


    res.json({
            status: response,
            sum: num1 + num2,
            message: `the sum of given two numbers is ${sum}`
    })
})