import React, { useState } from 'react';
import NavBack from '../../components/NavBack';
import axios from 'axios';

// Define the type for the customer data
interface Customer {
  customerCode: string;
  picture: string;
  firstName: string;
  lastName: string;
  userName: string;
  fullName: string;
  gender: string;
  email: string;
  phoneNumber: string;
  bvn: string;
  maritalStatus: string;
  children: string;
  resident: string;
  eduQualification: string;
  employmentStatus: string;
  sector: string;
  officialEmail: string;
  income: string;
  loanPayment: string;
  durationOfEmployment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantor1FullName: string;
  guarantor1PhoneNumber: string;
  guarantor1Email: string;
  guarantor1Relationship: string;
  guarantor2FullName: string;
  guarantor2PhoneNumber: string;
  guarantor2Email: string;
  guarantor2Relationship: string;
  organization: string;
  dateJoined: string;
  status: string;
  document: string;
  bankDetails: string;
  loan: string;
  saving: any;
  tierStar: string;
  appAndSystem: string;
}

const CreateUser: React.FC = () => {
  const [newCustomer, setNewCustomer] = useState<Customer>({
    customerCode: '',
    picture: '',
    firstName: '',
    lastName: '',
    userName: '',
    fullName: '',
    gender: '',
    email: '',
    phoneNumber: '',
    bvn: '',
    maritalStatus: '',
    children: '',
    resident: '',
    eduQualification: '',
    employmentStatus: '',
    sector: '',
    officialEmail: '',
    income: '',
    loanPayment: '',
    durationOfEmployment: '',
    twitter: '',
    facebook: '',
    instagram: '',
    guarantor1FullName: '',
    guarantor1PhoneNumber: '',
    guarantor1Email: '',
    guarantor1Relationship: '',
    guarantor2FullName: '',
    guarantor2PhoneNumber: '',
    guarantor2Email: '',
    guarantor2Relationship: '',
    organization: '',
    dateJoined: '',
    status: '',
    document: '',
    bankDetails: '',
    loan: '',
    saving: '',
    tierStar: '',
    appAndSystem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/api/customers/add', newCustomer);
      setNewCustomer({
        customerCode: '',
        picture: '',
        firstName: '',
        lastName: '',
        userName: '',
        fullName: '',
        gender: '',
        email: '',
        phoneNumber: '',
        bvn: '',
        maritalStatus: '',
        children: '',
        resident: '',
        eduQualification: '',
        employmentStatus: '',
        sector: '',
        officialEmail: '',
        income: '',
        loanPayment: '',
        durationOfEmployment: '',
        twitter: '',
        facebook: '',
        instagram: '',
        guarantor1FullName: '',
        guarantor1PhoneNumber: '',
        guarantor1Email: '',
        guarantor1Relationship: '',
        guarantor2FullName: '',
        guarantor2PhoneNumber: '',
        guarantor2Email: '',
        guarantor2Relationship: '',
        organization: '',
        dateJoined: '',
        status: '',
        document: '',
        bankDetails: '',
        loan: '',
        saving: '',
        tierStar: '',
        appAndSystem: '',
      });
      alert('Successfully added ' + newCustomer.fullName + ' to the database');
    } catch (error) {
      console.error('Error adding new customer:', error);
      alert('Error adding new customer: ' + error);
    }
  };

  // Auto-fill derived fields
  newCustomer.userName = newCustomer.firstName;
  newCustomer.fullName = `${newCustomer.firstName} ${newCustomer.lastName}`;
  newCustomer.saving = (Number(newCustomer.income) * 20) / 100;
  newCustomer.officialEmail = newCustomer.email;

  return (
    <div>
      <h2>Add User</h2>
      <NavBack> Back to Dashboard</NavBack>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerCode"
          placeholder="Customer Code"
          value={newCustomer.customerCode}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="picture"
          placeholder="Picture"
          value={newCustomer.picture}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={newCustomer.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={newCustomer.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="userName"
          placeholder={newCustomer.userName}
          value={newCustomer.userName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="fullName"
          placeholder={newCustomer.fullName}
          value={newCustomer.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={newCustomer.gender}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newCustomer.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone"
          value={newCustomer.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bvn"
          placeholder="BVN"
          value={newCustomer.bvn}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="maritalStatus"
          placeholder="Marital Status"
          value={newCustomer.maritalStatus}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="children"
          placeholder="No of Children"
          value={newCustomer.children}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="resident"
          placeholder="Resident"
          value={newCustomer.resident}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="eduQualification"
          placeholder="Education Qualification"
          value={newCustomer.eduQualification}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="employmentStatus"
          placeholder="Employment Status"
          value={newCustomer.employmentStatus}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="sector"
          placeholder="Sector"
          value={newCustomer.sector}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="officialEmail"
          placeholder="Official Email"
          value={newCustomer.officialEmail}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="income"
          placeholder="Income"
          value={newCustomer.income}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="loanPayment"
          placeholder="Loan Payment"
          value={newCustomer.loanPayment}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="durationOfEmployment"
          placeholder="Duration of Employment"
          value={newCustomer.durationOfEmployment}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="twitter"
          placeholder="Twitter"
          value={newCustomer.twitter}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="facebook"
          placeholder="Facebook"
          value={newCustomer.facebook}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="instagram"
          placeholder="Instagram"
          value={newCustomer.instagram}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="guarantor1FullName"
          placeholder="Guarantor 1 Full Name"
          value={newCustomer.guarantor1FullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="guarantor1PhoneNumber"
          placeholder="Guarantor 1 Phone Number"
          value={newCustomer.guarantor1PhoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="guarantor1Email"
          placeholder="Guarantor 1 Email"
          value={newCustomer.guarantor1Email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="guarantor1Relationship"
          placeholder="Guarantor 1 Relationship"
          value={newCustomer.guarantor1Relationship}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="guarantor2FullName"
          placeholder="Guarantor 2 Full Name"
          value={newCustomer.guarantor2FullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="guarantor2PhoneNumber"
          placeholder="Guarantor 2 Phone Number"
          value={newCustomer.guarantor2PhoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="guarantor2Email"
          placeholder="Guarantor 2 Email"
          value={newCustomer.guarantor2Email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="guarantor2Relationship"
          placeholder="Guarantor 2 Relationship"
          value={newCustomer.guarantor2Relationship}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="organization"
          placeholder="Organization"
          value={newCustomer.organization}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dateJoined"
          placeholder="Date Joined"
          value={newCustomer.dateJoined}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={newCustomer.status}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="document"
          placeholder="Document"
          value={newCustomer.document}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bankDetails"
          placeholder="Bank Details"
          value={newCustomer.bankDetails}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="loan"
          placeholder="Loan"
          value={newCustomer.loan}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="saving"
          placeholder="Saving"
          value={newCustomer.saving}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tierStar"
          placeholder="Tier Star"
          value={newCustomer.tierStar}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="appAndSystem"
          placeholder="App and System"
          value={newCustomer.appAndSystem}
          onChange={handleChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default CreateUser;







































































































































// // import React, { /*useEffect,*/ useState } from 'react';
// import React, {/*useEffect,*/ useState} from 'react'
// import NavBack from '../../components/NavBack';
// import axios from 'axios';





// export default function CreateUser() {

//     const [newCustomer, setNewCustomer] = useState({
//         customerCode: '',
//         picture: '',
//         firstName: '', 
//         lastName: '',
//         userName: '',
//         fullName: '',
//         gender: '',
//         email: '',
//         phoneNumber: '',
//         bvn: '',
//         maritalStatus: '', 
//         children: '',
//         resident: '',
//         eduQualification: '', 
//         employmentStatus: '',
//         sector: '',
//         officialEmail: '',
//         income: '',
//         loanPayment: '',
//         durationOfEmployment: '', 
//         twitter: '',
//         facebook: '',
//         instagram: '',
//         guarantor1FullName: '', 
//         guarantor1PhoneNumber: '',
//         guarantor1Email: '',
//         guarantor1Relationship: '',
//         guarantor2FullName: '',
//         guarantor2PhoneNumber: '',
//         guarantor2Email: '',
//         guarantor2Relationship: '',
//         organization: '',
//         dateJoined: '',
//         status: '',
//         document: '',
//         bankDetails: '',
//         loan: '',
//         saving: '',
//         tierStar: '',
//         appAndSystem: ''
//     });
  
//     const handleChange = (e) => {
//       e.preventDefault();
  
//       const { name, value } = e.target;
//       setNewCustomer({
//         ...newCustomer,
//         [name]: value
//       });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         await axios.post('http://127.0.0.1:5000/api/customers/add', newCustomer);
//         setNewCustomer({ 
//             customerCode: '',
//             picture: '',
//             firstName: '', 
//             lastName: '',
//             userName: '',
//             fullName: '',
//             gender: '',
//             email: '',
//             phoneNumber: '',
//             bvn: '',
//             maritalStatus: '', 
//             children: '',
//             resident: '',
//             eduQualification: '', 
//             employmentStatus: '',
//             sector: '',
//             officialEmail: '',
//             income: '',
//             loanPayment: '',
//             durationOfEmployment: '', 
//             twitter: '',
//             facebook: '',
//             instagram: '',
//             guarantor1FullName: '', 
//             guarantor1PhoneNumber: '',
//             guarantor1Email: '',
//             guarantor1Relationship: '',
//             guarantor2FullName: '',
//             guarantor2PhoneNumber: '',
//             guarantor2Email: '',
//             guarantor2Relationship: '',
//             organization: '',
//             dateJoined: '',
//             status: '',
//             document: '',
//             bankDetails: '',
//             loan: '',
//             saving: '',
//             tierStar: '',
//             appAndSystem: ''
//          });
//         alert("Successful added "+newCustomer.fullName+" to database")
//       } catch (error) {
//         console.error('Error adding new Customer:', error);
//         alert('Error adding new Customer: '+ error)
//       }
//     };
  
  
  
//     newCustomer.userName = newCustomer.firstName
//     newCustomer.fullName = `${newCustomer.firstName} ${newCustomer.lastName}`
//     newCustomer.saving = (newCustomer.income * 20) / 100
//     newCustomer.officialEmail = newCustomer.email 
    
  
//     return (
//       <div>
//         <h2>Add User</h2>
//         <NavBack> Back to Dashboard</NavBack>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="customerCode" placeholder="Customer Code" value={newCustomer.customerCode} onChange={handleChange} required />
//           <input type="text" name="picture" placeholder="picture" value={newCustomer.picture} onChange={handleChange} required />
//           <input type="text" name="firstName" placeholder="First Name" value={newCustomer.firstName} onChange={handleChange} required />
//           <input type="text" name="lastName" placeholder="Last Name" value={newCustomer.lastName} onChange={handleChange} required />
//           <input type="text" name="userName" placeholder={newCustomer.userName} value={newCustomer.userName} onChange={handleChange} required />
//           <input type="text" name="fullName" placeholder={newCustomer.fullName} value={newCustomer.fullName} onChange={handleChange} required />
//           <input type="text" name="gender" placeholder="gender" value={newCustomer.gender} onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email" value={newCustomer.email} onChange={handleChange} required />
//           <input type="text" name="phoneNumber" placeholder="Phone" value={newCustomer.phoneNumber} onChange={handleChange} required />
//           <input type="text" name="bvn" placeholder="BVN" value={newCustomer.bvn} onChange={handleChange} required />
//           <input type="text" name="maritalStatus" placeholder="Marital Status" value={newCustomer.maritalStatus} onChange={handleChange} required />
//           <input type="text" name="children" placeholder="No of Children" value={newCustomer.children} onChange={handleChange} required />
//           <input type="text" name="resident" placeholder="Resident" value={newCustomer.resident} onChange={handleChange} required />
//           <input type="text" name="eduQualification" placeholder="Edu Qualification" value={newCustomer.eduQualification} onChange={handleChange} required />
//           <input type="text" name="employmentStatus" placeholder="Employment Status" value={newCustomer.employmentStatus} onChange={handleChange} required />
//           <input type="text" name="sector" placeholder="Sector" value={newCustomer.sector} onChange={handleChange} required />
//           <input type="email" name="officialEmail" placeholder="Official Email" value={newCustomer.officialEmail} onChange={handleChange} required />
//           <input type="text" name="income" placeholder="Income" value={newCustomer.income} onChange={handleChange} required />
//           <input type="text" name="loanPayment" placeholder="LoanPayment" value={newCustomer.loanPayment} onChange={handleChange} required />
//           <input type="number" name="durationOfEmployment" placeholder="Duration of Employment" value={newCustomer.durationOfEmployment} onChange={handleChange} required />
//           <input type="text" name="officialEmail" placeholder="Official Email" value={newCustomer.officialEmail} onChange={handleChange} required />
  
  
  
  
  
  
  
//           <input type="text" name="twitter" placeholder="twitter" value={newCustomer.twitter} onChange={handleChange} required />
//           <input type="text" name="facebook" placeholder="facebook" value={newCustomer.facebook} onChange={handleChange} required />
//           <input type="text" name="instagram" placeholder="instagram" value={newCustomer.instagram} onChange={handleChange} required />
//           <input type="text" name="guarantor1FullName" placeholder="Guarantor 1 FullName" value={newCustomer.guarantor1FullName} onChange={handleChange} required />
//           <input type="text" name="guarantor1PhoneNumber" placeholder="Guarantor 1 PhoneNumber" value={newCustomer.guarantor1PhoneNumber} onChange={handleChange} required />
//           <input type="email" name="guarantor1Email" placeholder="Guarantor 1 Email" value={newCustomer.guarantor1Email} onChange={handleChange} required />
//           <input type="text" name="guarantor1Relationship" placeholder="Guarantor 1 Relationship" value={newCustomer.guarantor1Relationship} onChange={handleChange} required />
//           <input type="text" name="guarantor2FullName" placeholder="Guarantor 2 FullName" value={newCustomer.guarantor2FullName} onChange={handleChange} required />
//           <input type="text" name="guarantor2PhoneNumber" placeholder="Guarantor 2 PhoneNumber" value={newCustomer.guarantor2PhoneNumber} onChange={handleChange} required />
//           <input type="email" name="guarantor2Email" placeholder="Guarantor 2 Email" value={newCustomer.guarantor2Email} onChange={handleChange} required />
//           <input type="text" name="guarantor2Relationship" placeholder="Guarantor 2 Relationship" value={newCustomer.guarantor2Relationship} onChange={handleChange} required />
  
  
  
  
  
//           <input type="text" name="organization" placeholder="Organization" value={newCustomer.organization} onChange={handleChange} required />
//           <input type="text" name="dateJoined" placeholder="Date Joined" value={newCustomer.dateJoined} onChange={handleChange} required />
//           <input type="text" name="status" placeholder="Status" value={newCustomer.status} onChange={handleChange} required />
//           <input type="text" name="document" placeholder="Document" value={newCustomer.document} onChange={handleChange} required />
//           <input type="text" name="bankDetails" placeholder="Bank Details" value={newCustomer.bankDetails} onChange={handleChange} required />
//           <input type="number" name="loan" placeholder="Loan" value={newCustomer.loan} onChange={handleChange} required />
//           <input type="number" name="saving" placeholder="Saving" value={newCustomer.saving} onChange={handleChange} required />
//           <input type="text" name="tierStar" placeholder="tierStar" value={newCustomer.tierStar} onChange={handleChange} required />
//           <input type="text" name="appAndSystem" placeholder="App and System" value={newCustomer.appAndSystem} onChange={handleChange} required />
//           <button type="submit">Add User</button>
//         </form>
//       </div>
//     )
// }







