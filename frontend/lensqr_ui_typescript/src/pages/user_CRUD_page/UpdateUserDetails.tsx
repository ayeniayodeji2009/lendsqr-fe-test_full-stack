import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from "../../components/Logo";
import NavBack from '../../components/NavBack';
import { environ } from '../../context_API/baseURLmode'
import axios from 'axios';

// Define types for the expected shape of the props
interface User {
  personalInfo: {
    picture?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    userName?: string;
    fullName?: string;
    gender?: string;
    bvn?: string;
    maritalStatus?: string;
    children?: string;
    resident?: string;
  };
  education_and_employment: {
    eduQualification?: string;
    employmentStatus?: string;
    sector?: string;
    officialEmail?: string;
    income?: string;
    loanPayment?: string;
    durationOfEmployment?: string;
  };
  socialMedia: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  guarantor1: {
    fullName?: string;
    phoneNumber?: string;
    email?: string;
    relationship?: string;
  };
  guarantor2: {
    fullName?: string;
    phoneNumber?: string;
    email?: string;
    relationship?: string;
  };
  organization?: string;
  dateJoined?: string;
  status?: string;
  document?: string;
  bankDetails?: string;
  loan?: string;
  saving?: string;
  tierStar?: string;
  appAndSystem?: string;
  customerCode?: string;
  id?: number;
}

export default function UpdateUserDetails() {
  const location = useLocation();
  const allDataForCustomer = location.state as User;

  const [updatedUser, setUpdatedUser] = useState<User>(allDataForCustomer);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });
  };

  updatedUser.personalInfo.userName = updatedUser.personalInfo.firstName || '';

  if (
    updatedUser.personalInfo.firstName === undefined ||
    updatedUser.personalInfo.lastName === undefined
  ) {
    updatedUser.personalInfo.firstName = '';
    updatedUser.personalInfo.lastName = '';
  } else {
    updatedUser.personalInfo.fullName = `${updatedUser.personalInfo.firstName} ${updatedUser.personalInfo.lastName}`;
  }



  console.log(environ.currentBackendAppEnvironmentStatus)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${environ.baseURL}/customers/update`, updatedUser);
      alert('Successful update user ID ' + updatedUser.id + ' in database');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error adding user: ' + error);
    }
  };

  return (
    <>
      <br />
      <Logo />
      <h1>Update User</h1>
      <NavBack>Back to Dashboard</NavBack>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Picture</label>
        <input
          type="text"
          name="picture"
          placeholder={allDataForCustomer.personalInfo.picture}
          value={updatedUser.personalInfo.picture || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder={allDataForCustomer.personalInfo.firstName}
          value={updatedUser.personalInfo.firstName || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder={allDataForCustomer.personalInfo.lastName}
          value={updatedUser.personalInfo.lastName || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder={allDataForCustomer.personalInfo.email}
          value={updatedUser.personalInfo.email || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder={allDataForCustomer.personalInfo.phoneNumber}
          value={updatedUser.personalInfo.phoneNumber || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Username</label>
        <input
          type="text"
          name="userName"
          placeholder={allDataForCustomer.personalInfo.userName}
          value={updatedUser.personalInfo.userName || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder={allDataForCustomer.personalInfo.fullName}
          value={updatedUser.personalInfo.fullName || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Gender</label>
        <input
          type="text"
          name="gender"
          placeholder={allDataForCustomer.personalInfo.gender}
          value={updatedUser.personalInfo.gender || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>BVN</label>
        <input
          type="text"
          name="bvn"
          placeholder={allDataForCustomer.personalInfo.bvn}
          value={updatedUser.personalInfo.bvn || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Marital Status</label>
        <input
          type="text"
          name="maritalStatus"
          placeholder={allDataForCustomer.personalInfo.maritalStatus}
          value={updatedUser.personalInfo.maritalStatus || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Children</label>
        <input
          type="text"
          name="children"
          placeholder={allDataForCustomer.personalInfo.children}
          value={updatedUser.personalInfo.children || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Resident</label>
        <input
          type="text"
          name="resident"
          placeholder={allDataForCustomer.personalInfo.resident}
          value={updatedUser.personalInfo.resident || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Educational Qualification</label>
        <input
          type="text"
          name="eduQualification"
          placeholder={allDataForCustomer.education_and_employment.eduQualification}
          value={updatedUser.education_and_employment.eduQualification || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Employment Status</label>
        <input
          type="text"
          name="employmentStatus"
          placeholder={allDataForCustomer.education_and_employment.employmentStatus}
          value={updatedUser.education_and_employment.employmentStatus || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Sector</label>
        <input
          type="text"
          name="sector"
          placeholder={allDataForCustomer.education_and_employment.sector}
          value={updatedUser.education_and_employment.sector || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Official Email</label>
        <input
          type="email"
          name="officialEmail"
          placeholder={allDataForCustomer.education_and_employment.officialEmail}
          value={updatedUser.education_and_employment.officialEmail || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Income</label>
        <input
          type="text"
          name="income"
          placeholder={allDataForCustomer.education_and_employment.income}
          value={updatedUser.education_and_employment.income || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Loan Payment</label>
        <input
          type="text"
          name="loanPayment"
          placeholder={allDataForCustomer.education_and_employment.loanPayment}
          value={updatedUser.education_and_employment.loanPayment || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Duration Of Employment</label>
        <input
          type="number"
          name="durationOfEmployment"
          placeholder={allDataForCustomer.education_and_employment.durationOfEmployment}
          value={updatedUser.education_and_employment.durationOfEmployment || 0}
          onChange={handleChange}
          required
        />
        <br />
        <label>Twitter</label>
        <input
          type="text"
          name="twitter"
          placeholder={allDataForCustomer.socialMedia.twitter}
          value={updatedUser.socialMedia.twitter || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Facebook</label>
        <input
          type="text"
          name="facebook"
          placeholder={allDataForCustomer.socialMedia.facebook}
          value={updatedUser.socialMedia.facebook || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Instagram</label>
        <input
          type="text"
          name="instagram"
          placeholder={allDataForCustomer.socialMedia.instagram}
          value={updatedUser.socialMedia.instagram || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Guarantor 1 Full Name</label>
        <input
          type="text"
          name="guarantor1FullName"
          placeholder={allDataForCustomer.guarantor1.fullName}
          value={updatedUser.guarantor1.fullName || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Guarantor 1 Phone Number</label>
        <input
          type="text"
          name="guarantor1PhoneNumber"
          placeholder={allDataForCustomer.guarantor1.phoneNumber}
          value={updatedUser.guarantor1.phoneNumber || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Guarantor 1 Email</label>
        <input
          type="email"
          name="guarantor1Email"
          placeholder={allDataForCustomer.guarantor1.email}
          value={updatedUser.guarantor1.email || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Guarantor 1 Relationship</label>
        <input
          type="text"
          name="guarantor1Relationship"
          placeholder={allDataForCustomer.guarantor1.relationship}
          value={updatedUser.guarantor1.relationship || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Guarantor 2 Full Name</label>
        <input
          type="text"
          name="guarantor2FullName"
          placeholder={allDataForCustomer.guarantor2.fullName}
          value={updatedUser.guarantor2.fullName || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Guarantor 2 Phone Number</label>
        <input
          type="text"
          name="guarantor2PhoneNumber"
          placeholder={allDataForCustomer.guarantor2.phoneNumber}
          value={updatedUser.guarantor2.phoneNumber || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Guarantor 2 Email</label>
        <input
          type="email"
          name="guarantor2Email"
          placeholder={allDataForCustomer.guarantor2.email}
          value={updatedUser.guarantor2.email || ''}
          onChange={handleChange}
          required
        />
        <br />
        <label>Guarantor 2 Relationship</label>
        <input
          type="text"
          name="guarantor2Relationship"
          placeholder={allDataForCustomer.guarantor2.relationship}
          value={updatedUser.guarantor2.relationship || ''}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}























































































































































































// import React, { useState } from 'react';
// import { /*BrowserRouter as Router, Route, Link, , Switch, useParams useNavigate,*/ useLocation} from "react-router-dom";
// import Logo from "../../components/Logo";
// import NavBack from '../../components/NavBack';
// import axios from 'axios';




// export default function UpdateUserDetails() {

//     // users Props recieved from dashboard by using useLocation in router
//     const location = useLocation();
//     const allDataForCutomer = location.state;

//     const [updatedUser, setUpdatedUser] = useState(allDataForCutomer);
  
//     const handleChange = (e) => {
//       e.preventDefault();
  
//       const { name, value } = e.target;
  
//       console.log(name, value)
  
//       setUpdatedUser({
//         ...updatedUser,
//         [name]: value
//       });
//     };
  


//     // Updating some inputs automatically
//     updatedUser.userName = updatedUser.firstName

    
//     if (updatedUser.firstName === undefined || updatedUser.lastName === undefined) {
//         updatedUser.firstName = ""
//         updatedUser.lastName = ""
//      } else {
//          updatedUser.fullName = `${updatedUser.firstName} ${updatedUser.lastName}`
//      }
  

        
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         await axios.put('http://127.0.0.1:5000/api/customers/update', updatedUser);
    
//         alert("Successful update user ID "+updatedUser.id+" in database")
//       } catch (error) {
//         console.error('Error updating user:', error);
//         alert('Error adding user: '+ error)
//       }
//     };
  
  
//     console.log(updatedUser)
//     console.log(updatedUser.firstName)

//     return (

//         <>
//           <br />
//           <Logo />
//           <h1>Update User</h1>
//           <NavBack> Back to Dashboard</NavBack>
//           <br />
//           <form onSubmit={handleSubmit}>
//             <label>picture</label>
//             <input type="text" name="picture" placeholder={allDataForCutomer.personalInfo.picture} value={updatedUser.picture || ''} onChange={handleChange} required />
//             <br />
//             <label>First Name</label>
//             <input type="text" name="firstName" placeholder={allDataForCutomer.personalInfo.firstName} value={updatedUser.firstName || ''} onChange={handleChange} required />
//             <br />
//             <label>Last Name</label>
//             <input type="text" name="lastName" placeholder={allDataForCutomer.personalInfo.lastName} value={updatedUser.lastName || ''} onChange={handleChange} required />
//             <br />
//             <label>Email</label>
//             <input type="email" name="email" placeholder={allDataForCutomer.personalInfo.email} value={updatedUser.email || ''} onChange={handleChange} required />
//             <br />
//             <label>Phone</label>
//             <input type="text" name="phoneNumber" placeholder={allDataForCutomer.personalInfo.phoneNumber} value={updatedUser.phoneNumber || ''} onChange={handleChange} required />
//             <br />
//             {/* <label>Address</label>
//             <input type="text" name="address" value={updatedUser.address || ''} onChange={handleChange} />
//             <label>Country</label>
//             <input type="text" name="country" value={updatedUser.country || ''} onChange={handleChange} /> */}
//             <label>Username</label>
//             <input type="text" name="userName" placeholder={allDataForCutomer.personalInfo.userName} value={updatedUser.userName || ''} onChange={handleChange} required />
//             <br />
//             <label>Full name</label>
//             <input type="text" name="fullName" placeholder={allDataForCutomer.personalInfo.fullName} value={updatedUser.fullName || ''} onChange={handleChange} required />
//             <br />
  
//           <label>gender</label>
//           <input type="text" name="gender" placeholder={allDataForCutomer.personalInfo.gender} value={updatedUser.gender || ''} onChange={handleChange} required />
//           <br />
//           <label>email</label>
//           <input type="email" name="email" placeholder={allDataForCutomer.personalInfo.email} value={updatedUser.email || ''} onChange={handleChange} required />
//           <br />
//           <label>Phone Number</label>
//           <input type="text" name="phoneNumber" placeholder={allDataForCutomer.personalInfo.phoneNumber} value={updatedUser.phoneNumber || ''} onChange={handleChange} required />
//           <br />
//           <label>BVN</label>
//           <input type="text" name="bvn" placeholder={allDataForCutomer.personalInfo.bvn} value={updatedUser.bvn || ''} onChange={handleChange} required />
//           <br />
//           <label>Marital Status</label>
//           <input type="text" name="maritalStatus" placeholder={allDataForCutomer.personalInfo.maritalStatus} value={updatedUser.maritalStatus || ''} onChange={handleChange} required />
//           <br />
//           <label>children</label>
//           <input type="text" name="children" placeholder={allDataForCutomer.personalInfo.children} value={updatedUser.children || ''} onChange={handleChange} required />
//           <br />
//           <label>resident</label>
//           <input type="text" name="resident" placeholder={allDataForCutomer.personalInfo.resident} value={updatedUser.resident || ''} onChange={handleChange} required />
//           <br />



//           <label>edu Qualification</label>
//           <input type="text" name="eduQualification" placeholder={allDataForCutomer.education_and_employment.eduQualification} value={updatedUser.eduQualification || ''} onChange={handleChange} required />
//           <br />
//           <label>employment Status</label>
//           <input type="text" name="employmentStatus" placeholder={allDataForCutomer.education_and_employment.employmentStatus} value={updatedUser.employmentStatus || ''} onChange={handleChange} required />
//           <br />
//           <label>sector</label>
//           <input type="text" name="sector" placeholder={allDataForCutomer.education_and_employment.sector} value={updatedUser.sector || ''} onChange={handleChange} required />
//           <br />
//           <label>official Email</label>
//           <input type="email" name="officialEmail" placeholder={allDataForCutomer.education_and_employment.officialEmail} value={updatedUser.officialEmail || ''} onChange={handleChange} required />
//           <br />
//           <label>income</label>
//           <input type="text" name="income" placeholder={allDataForCutomer.education_and_employment.income} value={updatedUser.income || ''} onChange={handleChange} required />
//           <br />
//           <label>loan Payment</label>
//           <input type="text" name="loanPayment" placeholder={allDataForCutomer.education_and_employment.loanPayment} value={updatedUser.loanPayment || ''} onChange={handleChange} required />
//           <br />
//           <label>duration Of Employment</label>
//           <input type="number" name="durationOfEmployment" placeholder={allDataForCutomer.education_and_employment.durationOfEmployment} value={updatedUser.durationOfEmployment || ''} onChange={handleChange} required />
//           <br />
         
  
  
          
  
  
  
  
  
  
//           <label>twitter</label>
//           <input type="text" name="twitter" placeholder={allDataForCutomer.socialMedia.twitter} value={updatedUser.twitter || ''} onChange={handleChange} required />
//           <br />
//           <label>facebook</label>
//           <input type="text" name="facebook" placeholder={allDataForCutomer.socialMedia.facebook} value={updatedUser.facebook || ''} onChange={handleChange} required />
//           <br />
//           <label>instagram</label>
//           <input type="text" name="instagram" placeholder={allDataForCutomer.socialMedia.instagram} value={updatedUser.instagram || ''} onChange={handleChange} required />
//           <br />
//           <label>Guarantor 1 FullName</label>
//           <input type="text" name="guarantor1FullName"  placeholder={allDataForCutomer.guarantor1.fullName} value={updatedUser.guarantor1FullName || ''} onChange={handleChange} required />
//           <br />
//           <label>Guarantor 1 PhoneNumber</label>
//           <input type="text" name="guarantor1PhoneNumber" placeholder={allDataForCutomer.guarantor1.phoneNumber} value={updatedUser.guarantor1PhoneNumber || ''} onChange={handleChange} required />
//           <br />
//           <label>Guarantor 1 Email</label>
//           <input type="email" name="guarantor1Email" placeholder={allDataForCutomer.guarantor1.email} value={updatedUser.guarantor1Email || ''} onChange={handleChange} required />
//           <br />
//           <label>Guarantor 1 Relationship</label>
//           <input type="text" name="guarantor1Relationship" placeholder={allDataForCutomer.guarantor1.relationship} value={updatedUser.guarantor1Relationship || ''} onChange={handleChange} required />
//           <br />
//           <label>Guarantor 2 FullName</label>
//           <input type="text" name="guarantor2FullName" placeholder={allDataForCutomer.guarantor2.fullName} value={updatedUser.guarantor2FullName || ''} onChange={handleChange} required />
//           <br />
//           <label>Guarantor 2 PhoneNumber</label>
//           <input type="text" name="guarantor2PhoneNumber" placeholder={allDataForCutomer.guarantor2.phoneNumber} value={updatedUser.guarantor2PhoneNumber || ''} onChange={handleChange} required />
//           <br />
//           <label>Guarantor 2 Email</label>
//           <input type="email" name="guarantor2Email" placeholder={allDataForCutomer.guarantor2.email} value={updatedUser.guarantor2Email || ''} onChange={handleChange} required />
//           <br />
//           <label>Guarantor 2 Relationship</label>
//           <input type="text" name="guarantor2Relationship" placeholder={allDataForCutomer.guarantor2.relationship} value={updatedUser.guarantor2Relationship || ''} onChange={handleChange} required />
//           <br />
  
  
  
  
  
  
  
  
//           <label>organization</label>
//           <input type="text" name="organization"  placeholder={allDataForCutomer.organization} value={updatedUser.organization || ''} onChange={handleChange} required />
//           <br />
//           <label>dateJoined</label>
//           <input type="text" name="dateJoined" placeholder={allDataForCutomer.dateJoined} value={updatedUser.dateJoined || ''} onChange={handleChange} required />
//           <br />
//           <label>status</label>
//           <input type="text" name="status" placeholder={allDataForCutomer.status} value={updatedUser.status || ''} onChange={handleChange} required />
//           <br />
//           <label>document</label>
//           <input type="text" name="document" placeholder={allDataForCutomer.document} value={updatedUser.document || ''} onChange={handleChange} required />
//           <br />
//           <label>bankDetails</label>
//           <input type="text" name="bankDetails" placeholder={allDataForCutomer.bankDetails} value={updatedUser.bankDetails || ''} onChange={handleChange} required />
//           <br />
//            <label>loan</label>
//           <input type="text" name="loan" placeholder={allDataForCutomer.loan} value={updatedUser.loan || ''} onChange={handleChange} required />
//           <br />
//           <label>saving</label>
//           <input type="text" name="saving" placeholder={allDataForCutomer.saving} value={updatedUser.saving || ''} onChange={handleChange} required />
//           <br />
//           <label>tierStar</label>
//           <input type="text" name="tierStar" placeholder={allDataForCutomer.tierStar} value={updatedUser.tierStar || ''} onChange={handleChange} required />
//           <br />
//           <label>appAndSystem</label>
//           <input type="text" name="appAndSystem" placeholder={allDataForCutomer.appAndSystem} value={updatedUser.appAndSystem || ''} onChange={handleChange} required />
//           <br />
  
  
  
  
  
  
//             <label>Customer Code</label>
//             <input type="text" name="customerCode" placeholder={allDataForCutomer.personalInfo.guarantor2Relationship} value={updatedUser.customerCode || ''} onChange={handleChange} required /> 
//             <br />
//             <label>ID_num</label>
//             <input type="number" name="id" placeholder={allDataForCutomer.personalInfo.guarantor2Relationship} value={updatedUser.id || ''} onChange={handleChange} required />
//             <br />
//             <button type="submit">Update User</button>
//           </form>
//           </>
//     )

// }












