'use strict';

// object constructors

const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

const Run = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};


User.prototype.totalDistance = function() {
  let runs = this.runs;

  let result = 0;

  for (let i = 0; i < runs.length; i++) {
    result += runs[i].distance;
  }

  return result;
};

User.prototype.longestRun = function() {
  let runs = this.runs;

  let result = runs[0].distance;

  for (let i = 1; i < runs.length; i++) {
    if (runs[i].distance < result) {
      result = runs[i].distance;
    }
  }

  return result;
};

User.prototype.averageSpeed = function() {
  let runs = this.runs;

  let totalTime = 0;

  for (let i = 0; i < runs.length; i++) {
    totalTime += runs[i].timeTaken;
  }

  return this.totalDistance() / totalTime;
};


// There is almost DEFINITELY a better way to do this, but for now
// this is does work to add a new Run Object to the User's runs property

User.prototype.addRun = function(date, distance, timeTaken) {
  let newRun = new Run(date, distance, timeTaken);

  this.runs.push(newRun);
};


module.exports = {
  Run,
  User
};

// In node, use like so:
//
//    const runTracker = require('./lib/runs');
//    let mcFace = new runTracker.User('Person McFace', 'wdi@personmcface.com');
