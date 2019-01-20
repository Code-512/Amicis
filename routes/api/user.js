app.get('/login', (req, res)=> {
    console.log("Finding details");
    console.log(req.query);
    models.User.find(req.query).then(results => {
    res.send(results)
    })
})