// GET route to survey page
// =============================================================
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"))
});

// Catch-all route that displays the homepage
// =============================================================
app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});