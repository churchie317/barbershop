var express    = require('express');
var path       = require('path');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');

var port = 1337;

mongoose.connect('mongodb://localhost/barbershop');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB successfully connected with server');
})

var app = express();

app.use(bodyParser.json());

app.listen(port);
console.log('Express server listening on port:', port);

app.post('/api/cohort', function(req, res){

  var createStudentPairs = function(students) {
    var allPairCombinations = [];
    for (var i = 0; i < students.length; i++) {
      for (var j = i + 1; j < students.length; j++) {
        var obj = {};
        obj[students[i]] = true;
        obj[students[j]] = true;
        allPairCombinations.push(obj);
      }
    }
    for( var i = 0; i < students.length; i++ ){
      var obj = {};
      obj[students[i]] = true;
      allPairCombinations.push(obj);
    }

    return allPairCombinations;
  }

  // INITIALIZE variables
  var cohortName = req.body.cohort;
  var students = req.body.students;
  var sprints = req.body.sprints;
  var deletedPairs = [];
  var sprintObj = {};

  var studentPairs = createStudentPairs(students);

  for( var i = 0; i < sprints.length; i++ ){
    var sprintPairs = [];
    students.forEach(function(student){
      var flag = true;
      if( flag ){
        studentPairs.forEach(function(pair, index){
          if( pair !== undefined ){
            if( student in pair ){
              var push = true;
              for( key in pair ){
                sprintPairs.forEach(function(sprintPair){
                  if( student in sprintPair || key in sprintPair ){
                    push = false;
                  }
                })
              }
              if( push ){
                sprintPairs.push(pair);
                deletedPairs.push(pair);
                studentPairs[index] = undefined;
              }
            }
          }
        })
      }
    })

    sprintObj[sprints[i]] = sprintPairs;
  }

  var cohortObj = {};
  cohortObj[cohortName] = sprintObj;

  console.log(JSON.stringify(cohortObj));

  res.send(JSON.stringify(cohortObj));
})

app.use(express.static(__dirname + '/public'));
