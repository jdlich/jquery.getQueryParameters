jQuery.extend({

  getQueryParameters : function(str) {		
	  return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n,i){return i=n.split("="),[i[0],i[1]]}).map(function(n){return this[n[0]]=n[1],this}.bind({}))[0];
  }
		
});
