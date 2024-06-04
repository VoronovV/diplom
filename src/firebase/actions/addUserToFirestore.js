import { addDoc, collection } from "firebase/firestore";
import { USERS_COLLECTION } from "../collections";
import { database } from "../index";

const addUserToFirestore = async ({ login, email }) => {
  try {
    const createdUser = await addDoc(collection(database, USERS_COLLECTION), {
      login,
      email,
    });
    return { login, email, id: createdUser.id };
  } catch (error) {
    console.log(error);
    throw new Error("Error occured in addUserToFirestore()");
  }
};

export default addUserToFirestore;
