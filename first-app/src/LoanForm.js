import { useState } from "react";
import "./FormStyle.css"
import Model from "./Model";
export default function LoanForm() {
    
    const[LoanInput, setLoanInput]= useState({Name:"", 
        Phone:"", 
        Age:"",
        isEmployee:"false",
        salaryRange:""
    });
    const [isVisible, setIsVisible] = useState(false);
    let btndisabled=LoanInput.Name === ""||LoanInput.Age === ""||LoanInput.Phone ===  "";
    function handleSubmit(e){
        e.preventDefault();
        setIsVisible(true);
    }
    return (
        <div className="flex" style={{flexDirection: "column"}} onClick={()=>{
            if(isVisible){
                setIsVisible(false);
            }
        }}>
            <form className="flex" id="loan-form" style={{flexDirection: "column"}}>
                <h1>Requesting a Loan</h1>
                <hr/>
                <label>Name :</label>
                <input value={LoanInput.Name} onChange={(e)=>{
                    setLoanInput({...LoanInput,Name:e.target.value})
                }}/>
                <label>Phone Number :</label>
                <input value={LoanInput.Phone} onChange={(e)=>{
                    setLoanInput({...LoanInput, Phone: e.target.value})
                }}/>
                <label>Age :</label>
                <input value={LoanInput.Age} onChange={(e)=>{
                    setLoanInput({...LoanInput, Age: e.target.value})
                }}/>
                <label>Are you an employee ?</label>
                <input type="checkbox" value={LoanInput.isEmployee} onChange={(e)=>{
                    setLoanInput({...LoanInput, isEmployee: e.target.value})
                }}/>
                <label>Salery :</label>
                <select value={LoanInput.salaryRange} onChange={(e)=>{
                    setLoanInput({...LoanInput, salaryRange: e.target.value})
                }}>
                    <option>less than 500$</option>
                    <option>500$ - 1000$</option>
                    <option>Above 2000$</option>
                </select>
                <button
                id="submit-loan-btn" className={btndisabled ? "disabled" :""} disabled={btndisabled} onClick={handleSubmit}>Submit</button>
            </form>
            {isVisible && LoanInput.Phone.length >= 11 && LoanInput.Phone.length <= 12 && LoanInput.Age >= 18 && LoanInput.Age <= 100 && (
                <Model isVisible={isVisible} style={{color:"green"}} title={"The Form Has Been Submitted Successfully"} />
            )}

            {isVisible && (LoanInput.Phone.length < 11 || LoanInput.Phone.length > 18) && (
            <Model isVisible={isVisible} style={{color:"red"}} title={"Phone number must be from 11 to 18"} />
            )}

            {isVisible && (LoanInput.Age < 18 || LoanInput.Age > 100) && (
            <Model isVisible={isVisible} style={{color:"red"}} title={"Age must be from 18 to 100"} />
            )}

        </div>
    );
}