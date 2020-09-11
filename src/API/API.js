const rootURL = "https://fe-apps.herokuapp.com/api/v1/overlook/1904/";

 // should we consider using promise.race instead?

 export const getUserData = () => {
   return fetch(`${rootURL}users/users`)
     .then(response => response.json())
 } // prabably shouldn't ever use this. An individual user shouldn't be downloading every other users' info

export const getUserDataById = (userId) => {
  return fetch(`${rootURL}users/${userId}`)
  .then(response => {response.json()})
} // returns user single object
//// This was a post in a later project that checked for password

 export const getRoomsData = () => {
   return fetch(`${rootURL}rooms/rooms`)
     .then(response => response.json())
 }

 export const getBookingsData = () => {
   return fetch(`${rootURL}bookings/bookings`)
     .then(response => response.json())
 }

 export const getBookingDataById = (bookingId) => {
   return fetch(`${rootURL}bookings/${bookingId}`)
 } //returns single booking object

 export const postNewBooking = (newBooking) => {
   fetch(`${rootURL}bookings/bookings`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(newBooking),
     })
     .then((response) => response.json())
   //below code will go in appropriate component
   //  .then((data) => {
   //   console.log("Success:", data);
   //  })
   //  .catch((error) => {
   //   console.log("Failed:", error);
   //  });
 }

 export const deleteBooking = (deletedBooking) => {
   fetch(`${rootURL}bookings/bookings`, {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(deletedBooking),
     })
     .then((res) => res.json())
   //below code will go in appropriate component
   //  .then((data) => {
   //   console.log("Success", data);
   //  })
   //  .catch((err) => console.log(err));
 }
