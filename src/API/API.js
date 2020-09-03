const root = "https://fe-apps.herokuapp.com/api/v1/overlook/1904/";

  class API {
   static postData = async (info, id) => {
    const path = this.findPostPath(info, id);
    try {
     const response = await fetch(path, {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
     });
     return response;
    } catch (error) {
     return error;
    }
   };

   static findPostPath = (info, id) => {
    const acceptableUserInfo = ["userName", "password"];
    const infoValues = Object.keys(info);
    if (infoValues.every((value) => acceptableUserInfo.includes(value))) {
     return `${root}/users/users`;
    } else {
     throw new Error("Something is wrong with the data for POST");
    }
   };

   //  static getData = async (location, path) => {
   //   const pathAndData = this.findRelevantPathAndData(location, id)
   //   try {
   //    const response = await fetch(`${root}`/);

   //   } catch (error) {
   //     return error
   //   }
   //  };

   //  static findRelevantPathAndData = (location, id) => {
   //   const pathAndData = { path: "", data: "" };
   //   if (location === "user") {
   //    pathAndData.path = `${root}/movies/${id ? id : ""}`;
   //    pathAndData.data = id ? `movie` : `movies`;
   //   } else if (location === "videos" && id) {
   //    pathAndData.path = `${apiHead}/movies/${id}/videos`;
   //    pathAndData.data = `videos`;
   //   } else if (location === `ratings` && id) {
   //    pathAndData.path = `${apiHead}/users/${id}/ratings`;
   //    pathAndData.data = `ratings`;
   //   }
   //   } else {
   //    throw new Error("A bad path was provided for fetching data");
   //   }
   //   return pathAndData;
   //  };
  };

export default API