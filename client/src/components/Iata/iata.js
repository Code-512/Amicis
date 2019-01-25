import React from 'react';
import IC from 'iatacodes';
 
const ic = new IC('b4fec11e-f63a-4e53-8985-0053024e2201');

ic.api('airports', {code: 'CDG'}, function(error, response) {
  console.log(response);
});
 
ic.api('cities', {code: 'PAR'}, function(error, response) {
  console.log(response);
});
 

function iata(code) {
 ic.api('airlines', {code}, function(error, response) {
  return response.code
});
 }
 iata();
 
 
ic.api('autocomplete', {query: 'madrid'}, function(error, response) {
  console.log(response);
});
 
ic.api('nearby', {lat: -6.1744, lng: 106.8294, distance: 1000}, function(error, response) {
  console.log(response);
});

//write a function to take in iata code and spit out airline name

export default Iata
 