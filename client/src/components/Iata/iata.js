import React from 'react';

const IC = require('iatacodes');
 
const ic = new IC('b4fec11e-f63a-4e53-8985-0053024e2201');

ic.api('airports', {code: 'CDG'}, function(error, response) {
  console.log(response);
});
 
ic.api('cities', {code: 'PAR'}, function(error, response) {
  console.log(response);
});
 
 
ic.api('airlines', {code: 'AF'}, function(error, response) {
  console.log(response);
});
 
 
ic.api('autocomplete', {query: 'madrid'}, function(error, response) {
  console.log(response);
});
 
ic.api('nearby', {lat: -6.1744, lng: 106.8294, distance: 1000}, function(error, response) {
  console.log(response);
});
 