import apisauce from "apisauce";
import _ from "lodash";
const baseUrl = 'http://localhost:4000/api';
const create = (baseURL = baseUrl) => {
  const apis = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache",
    },
    timeout: 200000,
  });

    const adminlogin = (data) => {
        return apis.post(
        `/auth/login/admin`,
        data
        // { headers: { Authorization: `Bearer ${data.token}` } }
        );
    };

//   const getMywallets = (data) => {
//     return apis.get(
//       `/user/getmywallets`,
//       {},
//       { headers: { Authorization: `Bearer ${data.token}` } }
//     );
//   };

//   const UpdateBranchProfileImage = (data) => {
//     return apis.patch(
//       `/user/branchManagement/editBranchImage/${data.branchId}`,
//       data.formdata,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${data.token}`,
//           Accept: "Application/json",
//         },
//       }
//     );
//   };


//   const UserCreateFiatWallet = (data) => {
//     return apis.post(
//       `/auth/user/createfiatwallet`,
//       {},
//       { headers: { Authorization: `Bearer ${data.token}` } }
//     );
//   };

  return {
    adminlogin,
  };
};
export default {
  create,
};
