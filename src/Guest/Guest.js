import React, { Component } from "react";
import "./Guest.scss";

class Guest extends Component {
  constructor(props) {
    super(props)
    this.state = {
// do we need it to be a class?
    }
  }

  // getTotalMoneySpent() {
  //   let totalBookingsExpenditures = this.allBookings.reduce((totalSpent, booking) => {
  //     totalSpent += booking.cost;
  //     return totalSpent;
  //   }, 0).toFixed(2);
  //   return `$${totalBookingsExpenditures}`;
  // }

  // getBookingInfo(todaysDate, type) {
  //   if (type === 'Current') {
  //     return this.getCurrentBooking(todaysDate);
  //   }
  //   if (type === 'Past') {
  //     return this.getPastBookings(todaysDate);
  //   }
  //   if (type === 'Upcoming') {
  //     return this.getUpcomingBookings(todaysDate);
  //   }
  // }

  // getCurrentBooking(todaysDate) {
  //   return this.allBookings.find(booking => booking.date = todaysDate);
  // }

  // getPastBookings(todaysDate) {
  //   let pastBookings = this.allBookings.filter(booking => booking.date  < todaysDate);
  //   return pastBookings.sort((a, b) => {
  //     if (a.date < b.date) {
  //       return 1
  //     }
  //     if (a.date > b.date) {
  //       return -1
  //     }
  //     return 0;
  //   })
  // }

  // getUpcomingBookings(todaysDate) {
  //   let futureBookings = this.allBookings.filter(booking => booking.date > todaysDate);
  //   return futureBookings.sort((a, b) => {
  //     if (a.date > b.date) {
  //       return 1;
  //     }
  //     if (a.date < b.date) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  // }
  // ^^ requires fetch

}

export default Guest