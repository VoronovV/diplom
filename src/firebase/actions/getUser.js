import { doc, getDoc } from "firebase/firestore";
import { USERS_COLLECTION } from "../collections";
import { database } from "..";

const getUser = async (userId) => {
  const userRef = doc(database, USERS_COLLECTION, userId);
  const userData = await getDoc(userRef);

  return {
    id: userData.id,
    data: userData.data(),
  };
};

export default getUser;
