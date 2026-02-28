"use client";

import { useEffect } from "react";
 
 

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");

//     if (token) {
//       dispatch(setUser({ user: null, token }));
//     }
//   }, [dispatch]);

  return <>{children}</>;
}