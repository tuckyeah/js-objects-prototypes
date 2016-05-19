'use strict';

const Run = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

User.prototype.addRun = function (date, distance, timeTaken) {
  this.runs.push(new Run(date, distance, timeTaken));
};

User.prototype.totalDistance = function () {
  let runs = this.runs;
  let result = 0;
  for (let i = 0; i < runs.length; i++) {
    result += runs[i].distance;
  }
  return result;
};

module.exports = {
  Run,
  User,
};

// In node, use like so:
//
//    const runTracker = require('./lib/runs');
//    let mcFace = new runTracker.User('Person McFace', 'wdi@personmcface.com');
