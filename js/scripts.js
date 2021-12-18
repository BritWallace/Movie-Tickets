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

  if (this.movie === "Code Wars") {
    price += 5;
  }
  this.ticketPrice = "$" + price + ".00";
}



// UI Logic 

function showPrice(ticket) {
  $(".ticketPricing").html(ticket.ticketPrice);
}



$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const movie = $("select#movie").val();
    const time = $("select#time").val();
    const type = $("select#tickets").val();
    const popcorn = $("select#popcorn").val();
    $("select#movie").val("")
    $("select#time").val("")
    $("select#tickets").val("")
    $("select#popcorn").val("")
    
    var newTicket = new ticket(movie, time, type, popcorn);
    newTicket.price();
    showPrice(newTicket);
    console.log(newTicket);




  });
});