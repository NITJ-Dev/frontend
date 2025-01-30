import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./Pages/HomePage/Homepage";
import HostelAllotmentTable from "./Pages/Allotment Layout/Allotmentlayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import SignIn1styr from "./Pages/SignIn/SignIn1styr";
import RegistrationForm from "./Pages/RegistrationForm/RegistrationForm";
import DocumentUpload from "./Pages/Upload Documents/UploadDocs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedPath/ProtectedRoute";
import { SessionProvider } from "./components/ProtectedPath/SessionContext";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import SetNewPassword from "./Pages/ForgotPassword/SetNewPassword";
import EmailVerify from "./Pages/Email Verification/EmailVerify";
import RoomMate from "./Pages/RoomMate/RoomMate";
import Hostels from "./Pages/Hostels/BoysHostels";
import MBHA from "./Pages/HostelDetails/detailsMBHA";
import MBHB from "./Pages/HostelDetails/detailsMBHB";
import MBHF from "./Pages/HostelDetails/detailsMBHF";
import BH3 from "./Pages/HostelDetails/detailsBH3";
import BH4 from "./Pages/HostelDetails/detailsBH4";
import BH5 from "./Pages/HostelDetails/detailsBH5";
import BH6 from "./Pages/HostelDetails/detailsBH6";
import BH7 from "./Pages/HostelDetails/detailsBH7";
import BH7E from "./Pages/HostelDetails/detailsBH7E";
import GH1 from "./Pages/HostelDetails/detailsGH1";
import GH2 from "./Pages/HostelDetails/detailsGH2";
import MGHP1 from "./Pages/HostelDetails/detailsMGHP1";
import MGHP2 from "./Pages/HostelDetails/detailsMGHP2";



import HostelTab from "./Pages/Hostels/HostelTab";
import AdminPanel from "./Pages/Admin/AdminPanel";
import Sdtdet from "./Pages/Admin/Sdtdet";
import Footer from "./components/Footer/Footer";
import AdminSignIn from "./Pages/SignIn/AdminSignIn";
import SelfVerification from "./components/SelfVerification/SelfVerification";
import FinalVerification from "./components/FinalVerification/FinalVerification";
import SelfVerificationTable from "./components/SelfVerification/SelfVerificationTable";
import HostelSummary from "./Pages/Admin/Hostel";
import DocumentVerification from "./Pages/Admin/DocumentVerification";
import Rmedt from "./Pages/Admin/Rmedt/Rmedt";
import Search from "./Pages/Admin/SearchRoll/Search";
import Allhostels from "./Pages/Admin/Room Status Layout/RoomStatuslayout";
import Header from "./components/Header/Header";
import Changepassword from "./Pages/Changepassword/Changepassword";
import FirstYearChangePassword from "./Pages/Changepassword/FirstYearChangePassword";
import Otp from "./Pages/OTP/Otp";
import { ThumbUpOffAltSharp } from "@mui/icons-material";


function App() {
  return (<>

    <Router>
      <SessionProvider>
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/Allotment" element={<HostelAllotmentTable />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/SignIn2" element={<SignIn />} /> 2,3,4th year
          <Route path="/SignIn" element={<SignIn1styr />} />
          <Route path="/AdminSignIn" element={<AdminSignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/NewPassword/:code" element={<SetNewPassword />} />
          <Route path="/Verify/:code" element={<EmailVerify />} />
          <Route path="/Profile" element={<SignUp />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/FirstYearChangePassword" element={<FirstYearChangePassword />} />

          <Route path="/HostelDetails/MBH-A" element={<MBHA />} />
          <Route path="/HostelDetails/MBH-B" element={<MBHB />} />
          <Route path="/HostelDetails/MBH-F" element={<MBHF />} />
          <Route path="/HostelDetails/BH-3" element={<BH3 />} />
          <Route path="/HostelDetails/BH-4" element={<BH4 />} />
          <Route path="/HostelDetails/BH-5" element={<BH5 />} />
          <Route path="/HostelDetails/BH-6" element={<BH6 />} />
          <Route path="/HostelDetails/BH-7" element={<BH7 />} />
          <Route path="/HostelDetails/BH-7E" element={<BH7E />} />
          <Route path="/HostelDetails/GH-1" element={<GH1 />} />
          <Route path="/HostelDetails/GH-2" element={<GH2 />} />
          <Route path="/HostelDetails/MGH-P1" element={<MGHP1 />} />
          <Route path="/HostelDetails/MGH-P2" element={<MGHP2 />} />


          <Route path="/Hostels" element={<HostelTab />} />
          <Route path="/HostelSummary" element={<HostelSummary />} />


          {/* Protected routes */}
          <Route element={<ProtectedRoute role={["user"]} />}>

            <Route path="/Changepassword" element={<Changepassword />} />
            {/* <Route path="/Dashboard" element={<Dashboard />} /> */}

            <Route path="/RoomMate" element={<RoomMate />} />
            <Route path="/RegistrationForm" element={<RegistrationForm />} />
            <Route path="/DocumentUpload" element={<DocumentUpload />} />
            <Route path="/SelfVerification" element={<SelfVerification />} />
            <Route path="/SelfVerificationTable" element={<SelfVerificationTable />} />
            <Route path="/confirmationPage" element={<FinalVerification />} />
          </Route>

          <Route element={<ProtectedRoute role={["clerk", "warden", "admin"]} />}>
            <Route path="/DocumentVerification" element={<DocumentVerification />} />
            <Route path="/AdminPanel" element={<AdminPanel />} />
            <Route path="/Sdtdet/:rollno" element={<Sdtdet />} />
            <Route path="/Rmedt" element={<Rmedt />} />
            <Route path="/Allhostels" element={<Allhostels />} />
            <Route path="/Search" element={<Search />} />
          </Route>
        </Routes>
        <Footer />
      </SessionProvider>
    </Router></>
  );
}

export default App;


