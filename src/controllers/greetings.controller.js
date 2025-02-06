import { doc, getDoc, updateDoc } from "firebase/firestore";
import { GreetingsTable } from "../config/firebase-config.js";
import Greeting from "../models/Greeting.js";
import responseHandler from "../handlers/response.handler.js";

export const getGreeting = async (req, res) => {
  try {
    const greetingDocs = await getDoc(
      doc(GreetingsTable, "IH9ixTN7zF7EHiJEjtD4")
    );
    responseHandler.ok(res, Greeting.getData(greetingDocs));
  } catch (error) {
    responseHandler.error(res);
  }
};

export const saveGreeting = async (req, res) => {
  try {
    const { villageHeadName, villageHeadPhotoURL, greetingContent } = req.body;
    const greetingRef = doc(GreetingsTable, "IH9ixTN7zF7EHiJEjtD4");
    await updateDoc(greetingRef, {
      villageHeadName,
      villageHeadPhotoURL,
      greetingContent,
    });
    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};
