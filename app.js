const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set("view engine", "ejs");

// const PORT=PROCESS.env.PORT||7000;
const PORT = 3000;
var items = [];

app.get("/", (req, res) => {
  // var today = new Date().getDay();
  var options = {
    month: "string",
    year: "numeric",
    weekday: "long",
    day: "numeric",
  };
  var today = new Date();

  // var day = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];

  var day = today.toDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
  var item = req.body.item;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log(`Server up and running at ${PORT}`);
});
