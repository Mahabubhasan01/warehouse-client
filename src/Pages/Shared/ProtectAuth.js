import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "./Loading";

const ProtectAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  /* const [sendEmailVerification, sending] = useSendEmailVerification(auth); */
  const location = useLocation();
  /* console.log(user.providerData); */
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  /* if (user?.providerData[0]?.providerId === "password" && !user?.emailVerified) {
    return (
      <div className="single-card mt-5">
        <h3 className="text-danger">Email is not verified</h3>
        <h5 className="text-success"> Please Verify email </h5>
        <button
          className="btn-product"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Send Verification Email Again
        </button>
      </div>
    );
  } */

  return children;
};

export default ProtectAuth;
