const app = require("./api/index.js");

const port = 3000;

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`server listening on port ${port}`);
});
