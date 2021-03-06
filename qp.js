/*
 *  getQueryParameters.js
 *  Copyright (c) 2014 Nicholas Ortenzio
 *  The MIT License (MIT)
 *
 */

window.getQueryParameters = function(str) {
  var str = (str || document.location.search);
  return str == "" ? {} : str.replace(/(^\?)/,'').split("&").map(function(n){return n=n.split("="),this[decodeURIComponent(n[0])]=decodeURIComponent(n[1]),this;}.bind({}))[0];
};
