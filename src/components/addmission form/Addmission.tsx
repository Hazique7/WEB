import {Form,Button,Input,Select,UploadFile, Upload} from 'antd'
import './admissionfForm.css';
import {useState} from 'react'
import React from 'react';
import { HashLink as Link} from 'react-router-hash-link'

function Addmission(){
  
  return(
<ShowForm />
  )
}

function ShowForm(){
 const Option = Select.Option;

  const [user,setUser]  = useState({
    FullName : "",
    FatherName : "",
    CNIC: "",
    EMAIL:"",
    ContactNo :"",
    Gender:"",
    Course:"",
    Education:""
  });
let name,value: React.SetStateAction<{ Gender: string; }>;
 const getUserData = (event:any) =>{
   name = event.target.name;
   value = event.target.value;
   setUser({...user,[name]:value})
 };
 const postData = async(e:any) =>{
e.preventDefault();
const {FullName, FatherName, CNIC,EMAIL, ContactNo, Gender, Course, Education} = user;
  if(FullName&& FatherName&& CNIC&&EMAIL&& ContactNo){
const response = await fetch("https://smit1-d6510-default-rtdb.firebaseio.com//smit1.json",{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body: JSON.stringify({ FullName ,
  FatherName ,
  CNIC,
  EMAIL,
  ContactNo ,
  Gender,
  Course,
  Education,})
});

if(response){
  setUser({
    FullName : "",
    FatherName : "",
    CNIC: "",
    EMAIL:"",
    ContactNo :"",
    Gender:"",
    Course:"",
    Education:""
  });
  alert("Data Stored")
  document.getElementById("FORM")!.style.display="none";
  console.log(user.Education);
  console.log(user.Course);
  console.log(user.Gender);
}

 }

 }
  return(
    <div className='div-form' id='FORM'>
 
  <header className='app-form' >
    <h1>Addmission Form</h1>
    <Form layout='horizontal'method='POST' >
      <Form.Item name= "full name" label = "Full Name" style={{color: "#2f4f4f"}} rules={[{required: true, message:"Please Enter Your Name", min:4,whitespace:true}]}>
        <Input name='FullName' 
        value={user.FullName}
        onChange={getUserData}
        placeholder=' ENTER FULL NAME' style={{textAlign:"center",width: "230px"}} autoComplete="off" required />
      </Form.Item>
      <Form.Item name= "father name" label = "Father Name"style={{color: "#2f4f4f"}} required  rules={[{required: true, message:"Please Enter Your Father's Name", min:4,whitespace:true}]} >
        <Input
        name='FatherName'
        value={user.FatherName}
        onChange={getUserData}
        placeholder='ENTER FATHER NAME'style={{textAlign:"center",width: "230px",marginLeft:"-20px"}} autoComplete="off" required/>
      </Form.Item>
      <Form.Item name= "cnic" label = "CNIC"style={{color: "#2f4f4f"}}  rules={[{required: true, message:"Please Enter Your Cnic", min:13,whitespace:true}]}>
        <Input
        name='CNIC'
        value={user.CNIC}
        onChange={getUserData}
        placeholder='XXXXX-XXXXXXX-X' style={{textAlign:"center",width: "230px",marginRight:"-29px"}} autoComplete="off" required/>
      </Form.Item>
      <Form.Item name= "EMAIL" label = "EMAIL"style={{color: "#2f4f4f"}}  rules={[{required: true, message:"Please Enter Your Email",whitespace:true}]}>
        <Input
        name='EMAIL'
        value={user.EMAIL}
        onChange={getUserData}
        placeholder='abcd123@gamil.com' style={{textAlign:"center",width: "230px",marginLeft:"20px"}} autoComplete="off" required/>
      </Form.Item>
      <Form.Item name= "contact" label = "CONTACT NO :"style={{color: "#2f4f4f"}}  rules={[{required: true, message:"Please Enter Your Contact Number", min:11,whitespace:true}]}>
        <Input
        name='ContactNo'
        value={user.ContactNo}
        onChange={getUserData}
        placeholder='+92345444098' style={{textAlign:"center",width: "230px",marginLeft:"-30px"}} autoComplete="off" required />
      </Form.Item>
    </Form>
    <Form.Item name='Gender' label = "GENDER"style={{color: "#2f4f4f"}}  required={true}   >
      <Select
      value={user.Gender}
      onChange={getUserData}
   
      placeholder = "Select Your Gender">
        
        <Option  value = "male">MALE</Option>
        <Option value = "female">FEMALE</Option>
        <Option value = "other">Other</Option>
      </Select>

    
    </Form.Item>
     <Form.Item name='Course' label="COURSES"style={{color: "#2f4f4f"}}  required={true} >
<Select 
onChange={getUserData}
value= {user.Course}

placeholder="SELECT COURSE">
  
  <Option value = "WEB AND MOBILE APP DEVELOPMENT" name="Course">WEB AND MOBILE APP DEVELOPMENT</Option>
  <Option value = "ARTIFICIAL INTELLIGENCE AND CHATBOT DEVELOPMENT" name="Course">
  ARTIFICIAL INTELLIGENCE AND CHATBOT DEVELOPMENT
  </Option>
  <Option value = "MARKETING" name="Course">
  MARKETING
  </Option>
  <Option value = "MOBILE REPAIREING" name="Course">
  MOBILE REPAIREING
  </Option>
  <Option value = "NETWORKING" name = "Course">
  NETWORKING
    </Option>
</Select>
     </Form.Item>
     <Form.Item name='Education' label="EDUCATION"style={{color: "#2f4f4f"}} required={true}>
<Select
 value={user.Education}
 onChange={getUserData}
placeholder="SELECT">
  
  <Option value = "Matricuation">
    Matricuation
  </Option>
  <Option value = "Intermediate">
    Intermediate
  </Option>
  <Option value = "Bachelors"> 
    Bachelors
  </Option>
</Select>
     </Form.Item>
     <Form.Item>
       <Upload>
        <Button >UPLOAD IMAGE</Button> 
       </Upload>
     </Form.Item>
     <Form.Item>
       <Link to="#HOME" ><Button type='primary' onClick={postData}>SUMBIT</Button></Link>
     </Form.Item>
  </header>
  
</div>

  )
  
  
}
export default Addmission;