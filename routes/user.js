const express = require("express");
const router = express.Router();

const data = {
  title: "Beliebte Schulungen",
  categories: ["Web Development", "Programming", "Mobil Applications", "Data Analys"],
  blogs: [
    {
      blogid: 1,
      title: "baslik1",
      des: "aciklama",
      img: "https://images.pexels.com/photos/4308095/pexels-photo-4308095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      homepage: true,
      onay: true
    },
    {
      blogid: 2,
      title: "baslik2",
      des: "aciklama",
      img: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      homepage: true,
      onay: true
    },
    {
      blogid: 3,
      title: "baslik3",
      des: "aciklama",
      img: "https://images.pexels.com/photos/7516381/pexels-photo-7516381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      homepage: true,
      onay: false
    },
    {
      blogid: 4,
      title: "baslik4",
      des: "aciklama",
      img: "https://images.pexels.com/photos/1325659/pexels-photo-1325659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      homepage: true,
      onay: false
    },
  ]
};

router.use("/blogs/:blogid",function(req, res){

  res.render("users/blog-details");
});

router.use("/blogs",function(req, res){
  res.render("users/blogs", data);
});

router.use("/",function(req, res){
  res.render("users/index", data);
});

module.exports = router;