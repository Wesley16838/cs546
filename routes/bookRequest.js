const express = require("express");
const router = express.Router();

router.get("/",(req, res) => {
  res.status(200).render("Component/bookRequest", {
    title:"Book Request Page"
  });
});



module.exports = router;
