// VerifyEmail.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import appwriteAuthService from "../appwrite/appwriteAuth.js";

function VerifyEmail() {
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                // Extract the verification token from the URL
                const queryParams = new URLSearchParams(window.location.search);
                const verificationURL = queryParams.get("verification");

                // Verify the email using the verification token
                await appwriteAuthService.verifyAccount({ url: verificationURL });

                // Email verification successful
                console.log("Email verification successful.");

                // Redirect the user to the home page or wherever you want
                navigate("/");
            } catch (error) {
                console.error("Error verifying email: ", error);
                // Handle the error, e.g., display an error message to the user
            }
        };

        verifyEmail();
    }, [navigate]);

    return (
        <div>
            <p>Verifying your email...</p>
        </div>
    );
}

export default VerifyEmail;
