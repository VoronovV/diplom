import { collection, getDocs, query, where } from "firebase/firestore";
import { USERS_COLLECTION } from "../collections";
import { database, signIn } from "../index";

const LOGIN = "login";
// const EMAIL = 'email';

const getUserAndLogin = async (login, password) => {
  console.log("getUserAndLogin");
  const userCollection = collection(database, USERS_COLLECTION);
  const userQuery = query(userCollection, where(LOGIN, "==", login));
  const querySnapshot = await getDocs(userQuery);

  if (querySnapshot.empty) return null;

  const userData = querySnapshot.docs[0].data();
  const userEmail = userData.email;
  const userId = querySnapshot.docs[0].id;

  await signIn(userEmail, password);

  const user = {
    id: userId,
    login: userData.login,
    email: userEmail,
  };

  return user;
};

export default getUserAndLogin;
