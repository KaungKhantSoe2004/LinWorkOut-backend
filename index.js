const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

// /!\ Bind the router db to the app
app.db = router.db;
const rules = auth.rewriter({
  // Permission rules
});

// You must apply the auth middleware before the router
app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
//port
app.listen(3007);
/*    {
      "email": "kaungkhants892@gmail.com",
      "password": "$2a$10$G6s/YeGJAfxxsnbHIOwo4.jBMx1ybbyjTUcAlggBytaKiKFZaurfa",
      "id": 1
    }*/
