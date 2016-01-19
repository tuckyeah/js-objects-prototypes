'use strict';

const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

const Run = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
}

module.exports = {
  'Run': Run,
  'User': User
};

// In node, use like so:
//
//    let runTracker = require('./lib/runs');
//    let jeff = new runTracker.User('Jeff', 'jeff@example.com');
