import { SchedulesTable } from "../config/firebase-config.js";
import Schedule from "../models/Schedule.js";
import responseHandler from "../handlers/response.handler.js";
import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

export const createSchedule = async (req, res) => {
  try {
    const { name, date, location } = req.body;

    const schedule = new Schedule(name, date, location);
    const scheduleSnap = await addDoc(SchedulesTable, schedule.toObject());

    responseHandler.created(res, {
      id: scheduleSnap.id,
      ...schedule,
    });
  } catch (error) {
    responseHandler.error(res);
  }
};

export const getAllSchedules = async (req, res) => {
  try {
    const schedulesSnap = await getDocs(SchedulesTable);
    const schedules = [];

    for (const scheduleDoc of schedulesSnap.docs) {
      const schedule = Schedule.getData(scheduleDoc);
      schedules.push(schedule);
    }

    responseHandler.ok(res, schedules);
  } catch (error) {
    responseHandler.error(res);
  }
};

export const editSchedule = async (req, res) => {
  try {
    const { scheduleId } = req.params;
    const dataReq = req.body;

    const scheduleRef = doc(SchedulesTable, scheduleId);
    const scheduleSnap = await getDoc(scheduleRef);
    if (!scheduleSnap.exists()) return responseHandler.notFound(res);

    dataReq.updatedAt = new Date();
    await updateDoc(scheduleRef, dataReq);

    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    const { scheduleId } = req.params;

    const scheduleRef = doc(SchedulesTable, scheduleId);
    const scheduleSnap = await getDoc(scheduleRef);
    if (!scheduleSnap.exists()) return responseHandler.notFound(res);

    await deleteDoc(scheduleRef);

    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};
