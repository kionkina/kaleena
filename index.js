/**
Karina Ionkina and Vivien Lee
SoftDev2 pd07
K #14: You Are Smarter Than the President*
2018-03-25
 **/


document.getElementById("change").addEventListener("click", function() {if (year == 1973) { year = 1950; makegraph();}});


//1973
var year = 1973
    var labels1 = ["SS, Unemployment and Labor", "Medicare and Health", "Veterans' Benefits", "Transportation", "Education Training, Employment, and Social services", "Natural Resources", "Science, space, tech", "National Defense"];
var nums1 = [302, 67.9, 46.9, 35.4, 49.6, 18.6, 15.7, 229] ; 


var chart = d3.select(".chart");
var bar = chart.selectAll("div");

if (year == 1973){
barUpdate = bar.data(nums1);
}
else {
    barUpdate = bar.data(nums2);
}


var barEnter = barUpdate.enter().append("div");

var makegraph = function(e){

    if (year == 1973){
	barEnter.text(function(d, i){
		return labels1[i] + " " +  d + " trillion dollars";
	    });
    }
    else {
	barEnter.text(function(d, i){
		return labels2[i] + d;
	    });
    }

    barEnter.transition().duration(5000).style("width", function(d) {
	    return d * 4 + "px";
	});
};


//instant transition:


//barEnter.style("width", function(labels, i) {
//  return i; });

  /*
//5s transition:
barEnter.transition().duration(5000).style("width", function(d) {
  return d * 10 + "px"; });

//trans time prop to bar width
barEnter.transition().duration( function(d){ return d*1000; } )
  .style("width", function(d) {
    return d * 10 + "px"; });
 */

makegraph();
