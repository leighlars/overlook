const rootURL = "https://fe-apps.herokuapp.com/api/v1/overlook/1904/";

    //  needs to be changed to async
class API  {

 fetchData() {
  let userData = this.getUserData();
  let roomsData = this.getRoomsData();
  let bookingsData = this.getBookingsData();

  return Promise.all([userData, roomsData, bookingsData]).then((data) => {
   let allData = {};
   allData.userData = data[0];
   allData.roomsData = data[1];
   allData.bookingsData = data[2];
   return allData;
  });
 }


 getUserData() {
  let userData = fetch(`${rootURL}users/users`)
   .then((response) => response.json())
   .then((data) => {
    return data.users;
   })
   .catch((err) => console.log(err.message));
  return userData;
 }

 getRoomsData() {
  let roomsData = fetch(`${rootURL}rooms/rooms`)
   .then((response) => response.json())
   .then((data) => {
    return data.rooms;
   })
   .catch((err) => console.log(err.message));
  return roomsData;
 }

 getBookingsData() {
  let bookingsData = fetch(`${rootURL}bookings/bookings`)
   .then((response) => response.json())
   .then((data) => {
    return data.bookings;
   })
   .catch((err) => console.log(err.message));
  return bookingsData;
 }


 postNewBooking(newBooking) {
  fetch(`${rootURL}bookings/bookings`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(newBooking),
  })
   .then((response) => response.json())
   .then((data) => {
    console.log("Success:", data);
   })
   .catch((error) => {
    console.log("Failed:", error);
   });
 }

 deleteBooking(deletedBooking) {
  fetch(`${rootURL}bookings/bookings`, {
   method: "DELETE",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(deletedBooking),
  })
   .then((res) => res.json())
   .then((data) => {
    console.log("Success", data);
   })
   .catch((err) => console.log(err));
 }
}

export default API