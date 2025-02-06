import { getDocs, query, where } from "firebase/firestore";
import jsonwebtoken from "jsonwebtoken";
import { UsersTable } from "../config/firebase-config.js";
import responseHandler from "../handlers/response.handler.js";

// export const signUp = async (req, res) => {
//   try {
//     const { userUID, firstName, lastName, email } = req.body;

//     const user = new User(userUID, firstName, lastName, email);
//     // Save additional user data
//     const userAddDoc = await addDoc(UsersTable, user.toObject());

//     user.password = undefined;
//     const token = jsonwebtoken.sign(
//       { data: userAddDoc.id },
//       process.env.SECRET_TOKEN,
//       { expiresIn: "24h" }
//     );

//     responseHandler.created(res, {
//       id: userAddDoc.id,
//       ...user,
//       token,
//     });
//   } catch (error) {
//     responseHandler.error(res);
//   }
// };

export const signIn = async (req, res) => {
  try {
    const { userUID } = req.body;

    const querySnapshot = await getDocs(
      query(UsersTable, where("userUID", "==", userUID))
    );
    if (querySnapshot.size === 0)
      return responseHandler.unauthorize(
        res,
        "Login gagal. Pastikan email dan password benar"
      );

    const user = querySnapshot.docs[0].data();
    user.password = undefined;
    const token = jsonwebtoken.sign(
      { data: querySnapshot.docs[0].id },
      process.env.SECRET_TOKEN,
      { expiresIn: "24h" }
    );

    responseHandler.created(res, {
      token,
      user: { id: querySnapshot.docs[0].id, ...user },
    });
  } catch (error) {
    responseHandler.error(res);
  }
};
