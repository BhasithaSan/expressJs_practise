const { type } = require("os");
const {registerStudent,getStudent}=require("../Services/StudentService.js");


const registerStudentHandler=async (req,res,next) => {

    const studentData = req.body;

    console.log(`Received request to register student: ${JSON.stringify(studentData)}`);

    return registerStudent(studentData);
}


const getStudentHandler=async (req,res,next) => {

    var studentId = req.params.id;
    
   
    

    console.log(`Received request to register student: ${JSON.stringify(studentId)}`);
    try {
        
        rows=await getStudent(studentId);   

        if(rows.length===0){
            return res.status(404).json({ error: "Student not found" });
        }else{
            return res.status(200).json({ student: rows });
        }

    }catch(error){
            console.error("Error fetching student:", error);
            return res.status(500).json({ error: "Internal server error" });    
    }

    
}




module.exports = { registerStudentHandler,getStudentHandler };