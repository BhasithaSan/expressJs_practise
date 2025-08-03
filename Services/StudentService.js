 
const db = require('../Config/dbConfig.js');

const registerStudent=async ( {id,email,password,course_id} ) => {  
            const timeStamp =new Date().toISOString();

                try{
                    await db.query('INSERT INTO Student VALUES(?,?,?,?,?)', [id, email, password,timeStamp, course_id])

                    return res.status(201).json({ message: "Student registered successfully", studentId: id });

                }catch(error){
                    console.error("Error registering student:", error);
                    return res.status(500).json({ error: "Internal server error" });
                }


            }


const getStudent=async (studentId) => {
    const [rows] = await db.query('SELECT * FROM Student WHERE id = ?', [studentId]);

    console.log(`Fetched student data: ${JSON.stringify(rows)}`);

    return rows;
}

module.exports = { registerStudent,getStudent };