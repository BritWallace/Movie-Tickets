// Business logic for ticket

function ticket(movie, time, type) {
  this.movie = movie;
  this.time = time;
  this.type = type;
}

ticket.prototype.price = function() {
  let price;
  price = 0;
  //if this.type === under 18
      //price += 5
  //else if this.type === adult
      //price += 10
  //else if this.type === senior
    ///price += 7
  this.ticketPrice = price;
}




