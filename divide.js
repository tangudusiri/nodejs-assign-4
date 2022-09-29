const divide = require("../src/index")
divide.get("/divide", (req, res) => {
    let num1=4
    let num2=0
    let result=num1/num2
    let response=""
    if(num2==0)response="Cannot divide by zero"
    else response="success"
    
    

    res.json(
        {
            status: response,
            result: num1 / num2,
            message: `the result of given two numbers is ${result}`
        }

    )
})

divide.post("/divide",(req,res)=>{
    let num1=req.body.num1
    let num2=req.body.num2
    let result=num1/num2
    let response="",status1=""
    if(num2==0)response="Cannot divide by zero",status1="error"
    else response="success"
    res.json(
        {
            status:status1,
            result: num1 / num2,
            message: response
        }
    )
})