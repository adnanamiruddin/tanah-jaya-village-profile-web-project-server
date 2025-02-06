import { doc, getDoc, updateDoc } from "firebase/firestore";
import { VissionAndMissionsTable } from "../config/firebase-config.js";
import VissionAndMission from "../models/VissionAndMission.js";
import responseHandler from "../handlers/response.handler.js";

export const getVissionAndMission = async (req, res) => {
  try {
    const vissionAndMissionDocs = await getDoc(
      doc(VissionAndMissionsTable, "bG1Na520lFw40JerEbfP")
    );
    responseHandler.ok(res, VissionAndMission.getData(vissionAndMissionDocs));
  } catch (error) {
    responseHandler.error(res);
  }
};

export const saveVissionAndMission = async (req, res) => {
  try {
    const { vission, mission } = req.body;
    const vissionAndMissionRef = doc(
      VissionAndMissionsTable,
      "bG1Na520lFw40JerEbfP"
    );
    await updateDoc(vissionAndMissionRef, {
      vission,
      mission,
    });
    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};
