const { response } = require("../src/index")
const multiply = require("../src/index")
multiply.get("/multiply", (req, res) => {
    let num1=14
    let num2=-8
    let multiply=num1*num2
    let response=""
    if(multiply)response="success"
    else response="error"

    res.json(
        {
            status: response,
            multiply: num1 * num2,
            message: `the product of given two numbers is ${multiply}`
        }

    )
})

multiply.post("/multiply",(req,res)=>{
    let num1=req.body.num1
    let num2=req.body.num2
    let multiply=num1*num2
    let response=""
    if(multiply)response="success"
    else response="error"
    res.json(
        {
            status: response,
            multiply: num1 * num2,
            message: `the product of given two numbers is ${multiply}`
        }
    )
})