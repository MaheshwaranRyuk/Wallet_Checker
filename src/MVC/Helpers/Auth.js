// var jwt = require("jsonwebtoken");
// const { reject } = require("lodash");
// require("dotenv").config();
// var TableUserDetails = require("../Collections//UserCollection");

// async function login(req) {
//   console.log("checking", 9);
//   try {
//     console.log("checking", 10);
//     var userToken = jwt.sign(
//       { email: req.emailAddress, fullName: req.fullName, status: req.status },
//       process.env.KEY_FOR_AUTH
//     );
//     console.log("checking", 11);
//     return userToken;
//   } catch {
//     err;
//   }
//   {
//     console.log("ERROR", err);
//     return false;
//   }
// }

// async function verify(req, res) {
//   var Bearer = req.headers.authorization;
//   if (typeof Bearer !== "undefined") {
//     var token = Bearer.split(" ");
//     var AuthToken = typeof token[1] !== "undefined" ? token[1] : token;
//     var DATA = false;
//     try {
//       DATA = await new Promise((ret, rej) => {
//         jwt.verify(
//           AuthToken,
//           process.env.KEY_FOR_AUTH,
//           function (errJwt, responseJwt) {
//             if (errJwt) {
//               returndata = { msg: "jwt token error", error: errJwt };
//               ret(false);
//             } else {
//               ret(true);
//             }
//           }
//         );
//       });
//     } catch (Err) {
//       DATA = false;
//     }

//     console.log("JWT", DATA);

//     return DATA;
//   } else {
//     return false;
//   }
// }

// const authorizer = async (req, res, next) => {
//   try {
//     const { authorization } = req.headers;
//     if (authorization) {
//       const token =
//         authorization.split(" ")[0] != "Bearer"
//           ? authorization.split(" ")[0]
//           : authorization.split(" ")[1];
//       const decodeToken = jwt.verify(token, process.env.KEY_FOR_AUTH);
//       let data = null;

//       if (decodeToken) {
//         data = await TableUserDetails.findOne({
//           is_delete: false,
//           walletId: decodeToken?.walletId,
//         });
//       } 
//       if (data) {
//         req.headers.user = { decodeToken, authorization, user: data };
//         return true;
//       } else {
//         return res
//           .header({
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//           })
//           .status(404)
//           .send({
//             statusCode: 404,
//             data: null,
//             message: "User not found",
//             err: {
//               message: "User not found",
//             },
//           });
//       }
//     } else {
//       res
//         .header({
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         })
//         .status(401)
//         .send({
//           statusCode: 401,
//           data: null,
//           message: "Token is in-valid",
//           err: {
//             message: "Token is required",
//           },
//         });
//       return;
//     }
//   } catch (error) {
//     return false;
//   }
// };

// //customer handling

// async function loginCustomers(req) {
//   try {
//     console.log("checking");
//     var customerToken = jwt.sign(
//       {
//         email: req.emailAddress,
//         firstName: req.firstName,
//         status: req.status,
//       },
//       process.env.KEY_FOR_CUS
//     );
//     return customerToken;
//   } catch {
//     console.log("ERROR", err);
//     return false;
//   }
// }

// async function verifyCustomers(req, res) {
//   var Bearer = req.headers.authorization;
//   if (typeof Bearer !== "undefined") {
//     var token = Bearer.split(" ");
//     var AuthToken = typeof token[1] !== "undefined" ? token[1] : token;
//     var DATA = false;
//     try {
//       DATA = await new Promise((ret, rej) => {
//         jwt.verify(
//           AuthToken,
//           process.env.KEY_FOR_CUS,
//           function (errJwt, responseJwt) {
//             if (errJwt) {
//               returndata = { msg: "jwt token error", error: errJwt };
//               ret(false);
//             } else {
//               ret(true);
//             }
//           }
//         );
//       });
//     } catch (Err) {
//       DATA = false;
//     }

//     console.log("JWT", DATA);

//     return DATA;
//   } else {
//     return false;
//   }
// }

// module.exports = { login, verify, authorizer, loginCustomers, verifyCustomers };
