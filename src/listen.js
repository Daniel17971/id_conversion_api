const app = require("./api/app.js");

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`server listening on port ${port}`);
});
