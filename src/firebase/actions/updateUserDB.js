import { doc, updateDoc } from "firebase/firestore";

import { USERS_COLLECTION } from "../collections";
import { database } from "..";

const updateUserDB = async (
  userId,
  newLogin,
  newTelegramLink,
  newPhotoLink
) => {
  const userRef = doc(database, USERS_COLLECTION, userId);

  const updatedFileds = newPhotoLink
    ? {
        login: newLogin,
        telegramLink: newTelegramLink,
        photoLink: newPhotoLink,
      }
    : { login: newLogin, telegramLink: newTelegramLink };

  await updateDoc(userRef, updatedFileds);
};

export default updateUserDB;
