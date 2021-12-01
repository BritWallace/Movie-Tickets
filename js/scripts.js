// Business logic for ticket

function ticket(movie, time, type, popcorn) {
  this.movie = movie;
  this.time = time;
  this.type = type;
  this.popcorn = popcorn;
} 

ticket.prototype.price = function() {
  let price;
  price = 0;
  if (this.popcorn === "Yes") {
    price += 20;
  }

  if (this.type === "under 13") {
    price += 10;
  } else if (this.type === "Adult") {
    price += 25;
  } else if (this.type === "Senior discount") {
    price += 15;
  }
 if (this.time ===  "2:00pm") {
    price -= 10;
}

  this.ticketPrice = price;
}





