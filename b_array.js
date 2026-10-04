const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
  { route: "NGV-4", passengers: 51, late: false },
];

const busMessages = buses.map(
    b => `${b.route} มีผู้โดยสาร ${b.passengers} คน`
);
console.log(busMessages);

const lateBuses = buses.filter(b => b.late);
console.log(lateBuses);

const totalPassengers = buses.reduce(
    (sum, b) => sum + b.passengers,
    0
);
console.log(totalPassengers);

const lateTotal = buses
 .filter(b => b.late)
 .reduce((sum, b) => sum + b.passengers, 0);
console.log(lateTotal);