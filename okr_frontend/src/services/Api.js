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

    const signup = (data) => {
        return apis.post(
        `/admin/add-user`,
        data
        // { headers: { Authorization: `Bearer ${data.token}` } }
        );
    };

    const createTeam = (data) => {
        return apis.post(
        `/admin/create-team`,
        data
        // { headers: { Authorization: `Bearer ${data.token}` } }
        );
    };

    const getTeams = (data) => {
        return apis.get(
        `/admin/view-teams`,
        {}
        // { headers: { Authorization: `Bearer ${data.token}` } }
        );
    };

    const createObjective = (data) => {
        return apis.post(
        `/admin/add-objective`,
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
    signup,
    createTeam,
    getTeams,
    createObjective
  };
};
export default {
  create,
};
