import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const [user, setUser] = useState(false)
  return user ? <Outlet/> : <Navigate to="/login"/>
};

export default PrivateRouter;
