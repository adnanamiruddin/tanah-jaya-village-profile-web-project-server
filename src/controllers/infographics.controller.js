import { addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { InfographicsTable } from "../config/firebase-config.js";
import Infographic from "../models/Infographic.js";
import responseHandler from "../handlers/response.handler.js";

export const getInfographic = async (req, res) => {
  try {
    const infographicDocs = await getDoc(
      doc(InfographicsTable, "9KgkN30VXDWH3Es7MJHF")
    );
    responseHandler.ok(res, Infographic.getData(infographicDocs));
  } catch (error) {
    responseHandler.error(res);
  }
};

export const saveInfographic = async (req, res) => {
  try {
    const dataReq = req.body;
    dataReq.updatedAt = new Date();

    const infographicRef = doc(InfographicsTable, "9KgkN30VXDWH3Es7MJHF");
    await updateDoc(infographicRef, dataReq);

    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};
