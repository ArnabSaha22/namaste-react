import { useContext } from "react";
import userContext from "../Utils/userContext";

export const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <>
      <h1> This is a Footer </h1>
      <h3>{user.email}</h3>
    </>
  );
};
