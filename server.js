const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// // ✅ เสิร์ฟไฟล์ static ที่โฟลเดอร์ public (CSS, รูปภาพ)
app.use(express.static(path.join(__dirname, "public")));

// เสิร์ฟ index.html
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// เช็กว่าเซิร์ฟเวอร์ให้บริการไฟล์รูปภาพได้ไหม
app.get('/img/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'img', req.params.filename));
});

// // Redirect ไปแต่ละหน้า
// app.get("/work", (req, res) => {
//   console.log("Redirecting to #work");
//   res.redirect("/work");
// });

// app.get("/skills", (req, res) => {
//   console.log("Redirecting to #skills");
//   res.redirect("/skills");
// });

// app.get("/experience", (req, res) => {
//   console.log("Redirecting to #experience");
//   res.redirect("/experience");
// });

// app.get("/contact", (req, res) => {
//   console.log("Redirecting to #contact");
//   res.redirect("/contact");
// });

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});