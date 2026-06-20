// // import {pool} from "../database/db.js";
// // export const findbyemail= async(email)=>{
// //     const [row]=await pool.query(`select * from user where email = ?`,[email])
// //     return row[0]
// // }
// // export const createcustomer = async(first_name,last_name,email,phone,password)=>{
// //     const [result] = await pool.query(
// //         `
// //         INSERT INTO user
// //         (
// //             first_name,
// //             last_name,
// //             email,
// //             phone,
// //             password,
// //             user_type,
// //             status
// //         )
// //         VALUES (?, ?, ?, ?, ?, 'customer', 'active')
// //         `,
// //         [first_name, last_name, email, phone, password]
// //     );
// //         return result.insertId;
// // }

// import User from "../models/user.js";

// export const findByEmail = async (email) => {
//   return await User.findOne({
//     where: {
//       email,
//     },
//   });
// };

// export const createCustomer = async (
//   full_name,
//   email,
//   phone,
//   password_hash
// ) => {
//   const user = await User.create({
//     full_name,
//     email,
//     phone,
//     password_hash,
//     role: "customer",
//   });

//   return user;
// };