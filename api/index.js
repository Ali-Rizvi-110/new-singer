const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
const adminRoutes = require("./routes/adminRoutes");
const eventRouter = require("./routes/eventRoutes");
const galleryRouter = require('./routes/galleryRoutes');
const videoRouter = require("./routes/videoRoutes");
const paymentRouter = require('./routes/paymentRoutes');
const archiveRouter = require('./routes/archiveRoutes');
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost/newSinger", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// app.use('/api/blogs', blogRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/event", eventRouter);
app.use('/api/gallery', galleryRouter);
app.use("/api/video", videoRouter);
// app.use("/api/payments", paymentRouter);
// app.use('/api/admin', archiveRouter);

app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(4500, () => {
  console.log("Server started on port 4500");
});
