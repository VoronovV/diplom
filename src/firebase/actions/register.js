import { setActiveUser } from "@/store/slices/activeUserSlice";

import { createUser } from "../index";

import addUserToFirestore from "./addUserToFirestore";

const register = async ({ login, email, password }, dispatch) => {
  console.log("register");
  const userData = await addUserToFirestore({ login, email });
  dispatch(setActiveUser(userData));

  await createUser(email, password);
};

export default register;
