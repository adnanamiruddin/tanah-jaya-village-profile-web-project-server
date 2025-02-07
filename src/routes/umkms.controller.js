import { UmkmsTable } from "../config/firebase-config.js";
import Umkm from "../models/Umkm.js";
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

export const createUmkm = async (req, res) => {
  try {
    const { name, slug, priceRange, description, whatsappNumber, imageURL } =
      req.body;

    // Check slug
    const umkmSlugSnap = await getDocs(
      query(UmkmsTable, where("slug", "==", slug))
    );
    if (umkmSlugSnap.size > 0) {
      return responseHandler.badRequest(
        res,
        "UMKM dengan nama tersebut sudah ada"
      );
    }

    const umkm = new Umkm(
      name,
      slug,
      priceRange,
      description,
      whatsappNumber,
      imageURL
    );
    const umkmSnap = await addDoc(UmkmsTable, umkm.toObject());

    responseHandler.created(res, {
      id: umkmSnap.id,
      ...umkm,
    });
  } catch (error) {
    responseHandler.error(res);
  }
};

export const getAllUmkms = async (req, res) => {
  try {
    const umkmsSnap = await getDocs(UmkmsTable);
    const umkms = [];

    for (const umkmDoc of umkmsSnap.docs) {
      const umkm = Umkm.getData(umkmDoc);
      umkms.push(umkm);
    }

    responseHandler.ok(res, umkms);
  } catch (error) {
    responseHandler.error(res);
  }
};

export const getUmkmBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const umkmSnap = await getDocs(
      query(UmkmsTable, where("slug", "==", slug))
    );
    if (umkmSnap.empty) return responseHandler.notFound(res);

    const umkm = Umkm.getData(umkmSnap.docs[0]);

    responseHandler.ok(res, umkm);
  } catch (error) {
    responseHandler.error(res);
  }
};

export const editUmkm = async (req, res) => {
  try {
    const { umkmId } = req.params;
    const dataReq = req.body;

    const umkmRef = doc(UmkmsTable, umkmId);
    const umkmSnap = await getDoc(umkmRef);
    if (!umkmSnap.exists()) return responseHandler.notFound(res);

    dataReq.updatedAt = new Date();
    await updateDoc(umkmRef, dataReq);

    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};

export const deleteUmkm = async (req, res) => {
  try {
    const { umkmId } = req.params;

    const umkmRef = doc(UmkmsTable, umkmId);
    const umkmSnap = await getDoc(umkmRef);
    if (!umkmSnap.exists()) return responseHandler.notFound(res);

    await deleteDoc(umkmRef);

    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};
