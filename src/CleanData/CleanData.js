import moment from 'moment'
import API from '../API/API'

class CleanData {

 static matchBookingsInfoFromRooms(rawData) {
      let noNulls = rawData.bookingsData.filter(booking => booking.roomNumber !== null);
      return noNulls.reduce((bookingCost, booking) => {
        let obj = {};
        obj.id = booking.id;
        obj.userID = booking.userID;
        obj.date = booking.date;
        obj.roomNumber = booking.roomNumber;
        obj.roomType = rawData.roomsData.find(room => room.number === booking.roomNumber).roomType;
        obj.bidet = rawData.roomsData.find(room => room.number === booking.roomNumber).bidet;
        obj.bedSize = rawData.roomsData.find(room => room.number === booking.roomNumber).bedSize;
        obj.numBeds = rawData.roomsData.find(room => room.number === booking.roomNumber).numBeds;
        obj.cost = rawData.roomsData.find(room => room.number === booking.roomNumber).costPerNight;
        obj.roomServiceCharges = booking.roomServiceCharges;
        bookingCost.push(obj);
        return bookingCost;
      }, []);
    }
  
    // how do we instantiate users? 
  // static matchDataWithUsers(rawData, todaysDate) {
  //     // let instantiatedUsers = rawData.userData.map(rawUser => new Guest(rawUser, todaysDate));
  //     this.matchBookingsWithUser(instantiatedUsers, rawData);
  //     return instantiatedUsers;
  //   }
    
  //  static matchBookingsWithUser(users, rawData) {
  //     users.forEach((user) => {
  //       user.allBookings = this.matchBookingsInfoFromRooms(rawData).filter(booking => booking.userID === user.id);
  //     });
  //   }
  }

  export default CleanData