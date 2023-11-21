const express = require("express");
const router = express.Router();

router.use("/admin/blogs/create",function(req, res){
  res.sendFile("admin/blog-create");
});

router.use("/admin/blogs/:blogid",function(req, res){
  res.render("admin/blog-edit");
});

router.use("/admin/blogs",function(req, res){
  res.render("admin/blog-list");
});



module.exports = router;