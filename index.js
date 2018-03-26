/**
Karina Ionkina and Vivien Lee
SoftDev2 pd07
K #14: You Are Smarter Than the President*
2018-03-25
 **/


document.getElementById("change").addEventListener("click", function() {if (year == 1973) { year = 1950; barUpdate = bar.data(nums2); makegraph();}});


//1973
var year = 1973;
var labels1 = ["SS, Unemployment and Labor", "Medicare and Health", "Veterans' Benefits", "Transportation", "Education Training, Employment, and Social services", "Natural Resources", "Science, space, tech", "National Defense"];
var nums1 = [302, 67.9, 46.9, 35.4, 49.6, 18.6, 15.7, 299] ;
var labels2 = ["SS, Unemployment and Labor", "Medicare and Health", "Veterans' Benefits", "Transportation", "Education Training, Employment, and Social services", "Natural Resources", "Science, space, tech", "National Defense"];
var nums2 = [814, 432, 57.7, 57.5, 66, 30.7, 22.8, 361] ;


var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(nums1);
var barEnter = barUpdate.enter().append("div");

var makegraph = function(e){

  var chart = d3.select(".chart");
  var bar = chart.selectAll("div");

    if (year == 1973){
      barUpdate = bar.data(nums1);
	     barEnter.text(function(d, i){
		       return labels1[i] + " " +  d + " billion dollars";
	    });
      barEnter.transition().duration(5000).style("width", function(d) {
        return d * 4 + "px";
    });
    }
    else {
      barUpdate = bar.data(nums2);
	     barEnter.text(function(d, i){
		       return labels2[i] + " " + d + " billion dollars";
	    });
      barEnter.transition().duration(5000).style("width", function(d) {
        return d * 4 + "px";
    });
    }
    console.log(year);
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
