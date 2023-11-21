import appwriteAuthService from "../appwrite/appwriteAuth.js";
import { useEffect, useState } from "react";

function VerifyEmail() {

  const [verifyStatus, setVerifyStatus] = useState(false);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    setErrors("")
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const secret = urlParams.get("secret");
        const userId = urlParams.get("userId");

    const session = appwriteAuthService.confirmVerification(userId, secret);
    console.log("Session in Verify Email is:", session);
    if (session) {
      setVerifyStatus(true);
    //   navigate("/");
    }
    } catch (error) {
        setErrors(error.message)
    }
  },[]);
  return verifyStatus ? (
    <div className="flex justify-center text-green-500 py-8 h-full text-2xl">Email verified!</div>
  ) : (
    <div className="flex justify-center text-red-500 py-8 h-full text-2xl">
      <p>{errors}</p>
    </div>
  );
}

export default VerifyEmail;
