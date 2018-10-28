var express = require("express");
var fs = require("fs");
var mysql = require("mysql");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "Frontend")));

app.get("/", (req, res, next) => {
  console.log("This is Home page");
  fs.readFile("views/home.html", function(err, data) {
    if (err) {
      res.setHeader("content-type", "text/plain");
      res.send("404 Page Not Found");
    } else {
      res.setHeader("content-type", "text/html");
      res.send(data);
    }
    res.end();
  });
});

app.post("/user", function(req, res) {
  console.log("Hello I am here too");
  res.setHeader("Content-Type", "application/json");
  var connection = mysql.createConnection({
    host: "localhost",
    user: "akash",
    password: "",
    database: "info"
  });
  connection.connect(function(err) {
    if (!err) {
      var regno = req.query.regno;
      var query =
        "select firstname,midname,lastname,branch,cgpa,name,student.contactno from student,company where regno = '" +
        regno +
        "' and student.cid=company.cid";
      console.log(query);
      connection.query(query, function(err, fields) {
        if (err) console.log("There is an error");
        // if(results.length>=0)
        // {
        res.send(
          JSON.stringify({
            Name:
              results[0].firstname +
              " " +
              results[0].midname +
              " " +
              results[0].lastname,
            Branch: results[0].branch,
            CGPA: results[0].cgpa,
            "Contact No": results[0].contactno,
            Company: results[0].compname
          })
        );
        // }
        // else
        // {
        // console.log("Not Found");
        // }
      });
      connection.end();
    } else throw err;
  });
});
app.get("/admin", function(req, res) {
  console.log("i Am in admin");
  fs.readFile("views/admin.html", function(err, data) {
    if (err) {
      res.setHeader("content-type", "text/plain");
      res.send("404 Page Not Found");
    } else {
      res.setHeader("content-type", "text/html");
      res.send(data);
    }
    res.end();
  });
});

app.get("/user", function(req, res) {
  console.log("i Am in user");
  fs.readFile("views/user.html", function(err, data) {
    if (err) {
      res.setHeader("content-type", "text/plain");
      res.send("404 Page Not Found");
    } else {
      res.setHeader("content-type", "text/html");
      res.send(data);
    }
    res.end();
  });
});

app.post("/update", function(req, res) {
  var username = req.body.Username;
  var password = req.body.Password;
  console.log("/admin/update");
  if (username === "1" && password === "") {
    connection = mysql.createConnection({
      host: "localhost",
      user: username,
      password: password,
      database: "info"
    });
    connection.connect(function(err) {
      if (!err) {
        console.log("Connection Successful!!");
        fs.readFile("views/update.html", function(err, data) {
          if (err) {
            res.send("404 Page Not found");
          } else {
            res.setHeader("content-type", "text/html");
            res.send(data);
          }
          res.end();
        });
      } else {
        console.log("Check");
      }
    });
  }
});
app.post("/update/abc", function(req, res) {
  console.log("I am in update part!");
  res.setHeader("content-type", "text/plain");
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bhavya1234",
    database: "info"
  });

  connection.connect(function(err) {
    if (!err) {
      var regno = req.body.regno,
        firstname = req.body.firstname,
        midname = req.body.midname,
        lastname = req.body.lastname,
        contactno = req.body.contactno,
        street = req.body.street;
      var city = req.body.city,
        pincode = req.body.pincode,
        branch = req.body.branch,
        cgpa = req.body.cgpa,
        cid = req.body.cid,
        arrear = req.body.arrear,
        package = req.body.package;
      var year = req.body.year,
        compname = req.body.compname,
        Type = req.body.Type,
        compstreet = req.body.compstreet,
        compcity = req.body.compcity,
        compzip = req.body.compzip;
      var compcontact = req.body.compcontact,
        cutoff = req.body.cutoff,
        coordId = req.body.coordId,
        coordfname = req.body.coordfname,
        coordmname = req.body.coordmname;
      var coordlname = req.body.coordlname,
        coordContact = req.body.coordContact,
        result = req.body.result,
        date = req.body.date;
      var courseCode = req.body.courseCode,
        courseName = req.body.courseName;
      console.log("input taken");
      if (arrear == "No" || arrear == "no" || arrear == "") {
        console.log("if satisfied");
        if (midname.length === 0) midname = "";
        console.log("midname is:");
        console.log(midname);
        // var q1="select fname from student where regno='17BCI0115'";
        // var q2="select name from comany where CID='111'";
        // connection.query(q1,function(err,result,fields){
        // console.log(result);
        // connection.query(q2,function(err,results,fields){
        // console.log(results);
        // res.send("updated");
        // });
        // });
        var query3 =
          "insert into student values('" +
          regno +
          "','" +
          firstname +
          "','" +
          midname +
          "','" +
          lastname +
          "','" +
          contactno +
          "','" +
          street +
          "','" +
          city +
          "','" +
          pincode +
          "','" +
          branch +
          "'," +
          cgpa +
          ",'" +
          cid +
          "'," +
          package +
          "," +
          year +
          ")";
        var query1 =
          "insert into coordinator values('" +
          coordId +
          "','" +
          coordfname +
          "','" +
          coordmname +
          "','" +
          coordlname +
          "','" +
          coordContact +
          "')";
        var query2 =
          "insert into company values('" +
          cid +
          "','" +
          compname +
          "','" +
          Type +
          "','" +
          compstreet +
          company;
        "','" +
          compcity +
          "','" +
          compzip +
          "','" +
          compcontact +
          "'," +
          cutoff +
          ",'" +
          coordId +
          "')";
        var query4 =
          "insert into sitsfor values('" +
          cid +
          "','" +
          regno +
          "','" +
          result +
          "','" +
          date +
          "')";
        var q2 = "select regno from student where regno='" + regno + "'";
        var q1 = "select CID from company where CID='" + cid + "'";
        var q0 =
          "select coordId from coordinator where coordId='" + coordId + "'";
        var q3 = "select regno from sitsfor where regno='" + regno + "'";
        console.log(query1);
        console.log(query2);
        console.log(query3);
        connection.query(q0, function(err, results, fields) {
          if (err) throw err;
          console.log("reached coordinator");
          if (results.length === 0) {
            connection.query(query1, function(err, results) {
              if (err) throw err;
              console.log("Inserting in coordinator...");
            });
            connection.query(q1, function(err, results, fields) {
              if (err) throw err;
              console.log("reached company");
              if (results.length === 0) {
                connection.query(query2, function(err, results) {
                  if (err) throw err;
                  console.log("inserting in company..");
                });
                connection.query(q2, function(err, reults, fields) {
                  if (err) throw err;
                  console.log("reached company");
                  if (results.length == 0) {
                    connection.query(query3, function(err, reults) {
                      if (err) throw err;
                      console.log("Inserting into student..");
                      connection.query(query4, function(err, result) {
                        if (err) throw err;
                        console.log("Inserting into sitsfor");
                        res.send("Updated Succesfully");
                      });
                    });
                  } else {
                    console.log("student details already present");
                  }
                });
              } else {
                console.log("company details already present.");
                connection.query(q2, function(err, reults, fields) {
                  if (err) throw err;
                  console.log("reached student");
                  if (results.length == 0) {
                    connection.query(query3, function(err, reults) {
                      if (err) throw err;
                      console.log("Inserting into student..");
                      connection.query(query4, function(err, result) {
                        if (err) throw err;
                        console.log("Inserting into sitsfor");
                        res.send("Updated Succesfully");
                      });
                    });
                  } else {
                    console.log("Company details already Present");
                    res.send("Updated Succesfully");
                  }
                });
              }
            });
          } else {
            console.log("Coordinator details already present");
            connection.query(q1, function(err, results, fields) {
              if (err) throw err;
              console.log("reached company");
              if (results.length === 0) {
                connection.query(query2, function(err, results) {
                  if (err) throw err;
                  console.log("inserting in company..");
                });
                connection.query(q2, function(err, reults, fields) {
                  if (err) throw err;
                  console.log("reached company");
                  if (results.length == 0) {
                    connection.query(query3, function(err, reults) {
                      if (err) throw err;
                      console.log("Inserting into student..");
                      connection.query(query4, function(err, result) {
                        if (err) throw err;
                        console.log("Inserting into sitsfor");
                        res.send("Updated Succesfully");
                      });
                    });
                  } else {
                    console.log("student details already present");
                  }
                });
              } else {
                console.log("company details already present.");
                connection.query(q2, function(err, reults, fields) {
                  if (err) throw err;
                  console.log("reached student");
                  if (results.length == 0) {
                    connection.query(query3, function(err, reults) {
                      if (err) throw err;
                      console.log("Inserting into student..");
                      connection.query(query4, function(err, result) {
                        if (err) throw err;
                        console.log("Inserting into sitsfor");
                        res.send("Updated Succesfully");
                      });
                    });
                  } else {
                    console.log("Company details already Present");
                    res.send("Updated Succesfully");
                  }
                });
              }
            });
          }
        });
      } else {
        Package = Year = null;
        CID = null;
        var query3 =
          "insert into student values('" +
          regno +
          "','" +
          firstname +
          "','" +
          midname +
          "','" +
          lastname +
          "','" +
          contactno +
          "','" +
          street +
          "','" +
          city +
          "','" +
          pincode +
          "','" +
          branch +
          "'," +
          cgpa +
          "," +
          cid +
          "," +
          package +
          "," +
          year +
          ")";
        var query1 =
          "insert into arear values('" +
          courseCode +
          "','" +
          regno +
          "','" +
          courseName +
          "')";
        var q2 = "select regno from student where regno='" + regno + "'";
        var query4 =
          "insert into sitsfor values('" +
          cid +
          "','" +
          regno +
          "','" +
          result +
          "','" +
          date +
          "')";
        connection.query(q2, function(err, results, fields) {
          if (err) throw err;
          if (results.length === 0) {
            console.log("Reached Student");
            connection.query(query3, function(err, result) {
              if (err) throw err;
              console.log("Inserting into Student");
              connection.query(query1, function(err, results) {
                if (err) throw err;
                console.log("Inserting into arrear");
                res.send("Updated Succesfully");
              });
            });
          } else {
            console.log("Result already there");
            res.send("Already Present");
          }
        });
      }
    }
  });
});
app.post("/delete/abc", function(req, res) {
  var regno = req.body.regno;
  res.setHeader("content-type", "text/plain");
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bhavya1234",
    database: "info"
  });
  var query0 = "select regno from student where regno='" + regno + "'";
  var query1 = "delete from student where regno='" + regno + "'";
  var query2 = "select regno from arear where regno='" + regno + "'";
  var query3 = "select regno from sitsfor where regno='" + regno + "'";
  var query4 = "delete from arear where regno='" + regno + "'";
  var query5 = "delete from sitsfor where regno='" + regno + "'";
  connection.query(query0, function(err, results, fields) {
    if (err) throw err;
    if (results.length > 0) {
      console.log("reached student");
      connection.query(query2, function(err, results, fields) {
        if (err) throw err;
        if (results.length > 0) {
          console.log("reached arear");
          connection.query(query4, function(err, result) {
            console.log("deleting from arear");
          });
          connection.query(query1, function(err, results) {
            console.log("delting from student");
            res.send("Record deleted");
          });
        } else {
          connection.query(query3, function(err, results, fileds) {
            if (err) throw err;
            if (results.length > 0) {
              console.log("reached sits for");
              connection.query(query5, function(err, result) {
                console.log("deleting from sitsfor");
              });
              connection.query(query1, function(err, results) {
                console.log("delting from student");
                res.send("Record deleted");
              });
            }
          });
        }
      });
    } else {
      console.log("Record not found");
      res.send("record not found");
    }
  });
});
app.get("/delete", function(req, res) {
  fs.readFile("views/delete.html", function(err, data) {
    if (err) {
      console.log("Unable to read the file");
    } else {
      res.setHeader("content-type", "text/html");
      res.send(data);
    }
  });
});
app.listen(3000, function() {
  console.log("Server is running.");
});
