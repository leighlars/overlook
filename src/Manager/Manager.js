import React, {Component} from "react";
import "./Manager.scss";
import MgrSearchForm from '../MgrSearchForm/MgrSearchForm'

class Manager extends Component {
 constructor(props) {
  super(props);
  this.state = {};
 }

//  getAllTodaysBookings(todaysDate) {
//   return this.bookings.filter((booking) => booking.date === todaysDate);
//  }

//  getNumTodaysAvailability(todaysDate) {
//   let numberAvailable =
//    this.rooms.length - this.getAllTodaysBookings(todaysDate).length;
//   return `Available lodging: ${numberAvailable} rooms`;
//  }

//  getTodaysBookedPercentage(todaysDate) {
//   let bookedRooms = this.getAllTodaysBookings(todaysDate);
//   if (bookedRooms.length > 0) {
//    let percentage = ((bookedRooms.length / this.rooms.length) * 100).toFixed(0);
//    return `Occupied lodging: ${percentage}%`;
//   } else {
//    return `Occupied lodging: 0%`;
//   }
//  }

//  getTodaysRevenue(todaysDate) {
//   let todaysBookings = this.getAllTodaysBookings(todaysDate);
//   let revenue = todaysBookings
//    .reduce((totalRevenue, booking) => {
//     totalRevenue += Number(booking.cost);
//     return totalRevenue;
//    }, 0)
//    .toFixed(2);
//   return `Today's Revenue: $${revenue}`;
//  }

//  getGuestsByName(input) {
//   let capFirstLtr = input.charAt(0).toUpperCase() + input.slice(1);
//   return this.users.filter((user) => user.name.includes(capFirstLtr));
//  }

// for the render method, not using it now.
/* <p id='open-rooms'>${this.getNumTodaysAvailability(this.todaysDate)}</p>
<p id='booked-rooms'>${this.getTodaysBookedPercentage(this.todaysDate)}</p>
<p id='revenue'>${this.getTodaysRevenue(this.todaysDate)}</p>  */

render() {
  return (
   <>
    <div className="mgr-stats">
     <p className="open-rooms">10 rooms booked</p>
     <p className="booked-rooms">50% occupied</p>
     <p className="revenue">$100</p>
     <MgrSearchForm />
    </div>
   </>
  );
}

}
export default Manager