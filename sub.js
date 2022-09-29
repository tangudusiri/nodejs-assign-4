const sub = require("../src/index")
sub.get("/sub", (req, res) => {
    let num1=14
    let num2=8
    let sub=num1-num2
    let response=""
    if(sub)response="success"
    else response="error"

    res.json(
        {
            status: response,
            sub: num1 - num2,
            message: `the difference of given two numbers is ${sub}`
        }

    )
})

sub.post("/sub",(req,res)=>{
    let num1=req.body.num1
    let num2=req.body.num2
    let sub=num1-num2
    let response=""
    if(sub)response="success"
    else response="error"
    res.json(
        {
            status: response,
            sub: num1 - num2,
            message: `the difference of given two numbers is ${sub}`
        }
    )
})