var PerSheet = '1_ahIWTl_xvY9pHYrl2R3BIWvsDsEkbXv-AoGdvyoZS0',
		sheetno = 1,
		PerDataurl = 'https://spreadsheets.google.com/feeds/list/' + PerSheet + '/' + sheetno + '/public/values?alt=json-in-script&callback=?';
		
var PostSheet = '1IxVajJEc67YuHeRCjbjFDYDKtBdLvtwP8FMGQQXsnGU',
		sheetno = 1,
		PostDataurl = 'https://spreadsheets.google.com/feeds/list/' + PostSheet + '/' + sheetno + '/public/values?alt=json-in-script&callback=?';
		
var AllStudentJson = [];


var allscore = 0;
var NumberOfStudents = 0;

$( document ).ready(function()
{
	$.getJSON(PerDataurl, function(json) {
		var e = json.feed.entry,
			n = e.length;
		var School = [];
		School.push("選擇學校");
		School.push("所有學校");
		$(e).each(function() {
			var n = School.includes(this.gsx$school.$t);
			
			if(n==false)
			{
				School.push(this.gsx$school.$t);
			}
		});
		
		console.log(School);
		for(var i=0;i<School.length;i++)
		{
			document.myForm.FirstSelect.options[i]=new Option(School[i]);
		}
	});
});

var selectSchool = "";

function FirstChange(school)
{
	selectSchool = school;
	$.getJSON(PerDataurl, function(json) {
		var e = json.feed.entry,
			n = e.length;
		var Student = [];
		Student.push("選擇學生");
		Student.push("所有學生");
		$(e).each(function() {
			//console.log(this);
			if(selectSchool == "所有學校")
			{
				Student.push(this.gsx$name.$t);
			}
			else
			{
				if(this.gsx$school.$t == school)
				{
					Student.push(this.gsx$name.$t);
				}
			}
		});
		console.log(Student);
		$("#SecondSelect").empty();
		for(var i=0;i<Student.length;i++)
		{
			document.myForm.SecondSelect.options[i]=new Option(Student[i]);
		}
	});
}

function SecondChange(name)
{
	var PerScore = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	var StudentPerTest = [
							[0, 0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0, 0],
							[0, 0, 0, 0, 0, 0, 0, 0]
						 ];
	var StudentPerScore = 0;
	$.getJSON(PerDataurl, function(json) {
		var e = json.feed.entry,
			n = e.length;
		//var PerScore = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		
		$(e).each(function() {
			var per = this;
			//console.log(name);
			if(name == "所有學生")
			{
				//console.log(name);
				
				if(per.gsx$school.$t == selectSchool)
				{
					PerScore[Number(per.gsx$score.$t)]++;
					
					//document.getElementById("results").innerHTML = 'allstudent';
					//console.log("all");	
				}
				if(selectSchool == "所有學校")
				{
					PerScore[Number(per.gsx$score.$t)]++;
					
					//document.getElementById("results").innerHTML = 'allstudent';
					//console.log("all");	
				}
			}
			else
			{
				//console.log(this.gsx$name);
				if(per.gsx$name.$t == name)
				{
					console.log(per);
					//document.getElementById("results").innerHTML = '<div class="data"><p>' + "分數: " + per.gsx$score.$t + "  姓名: " + per.gsx$name.$t + '</p></div>';
					/*var test = '<div class="data" id = "studentname"><p>姓名: ' + per.gsx$name.$t + '</p></div><div class="data" id = "perscore"><p>前測分數: ' + per.gsx$score.$t + '</p></div>';
					document.getElementById("results").insertAdjacentHTML('afterend', test);*/
					
					if(per.gsx$f1.$t == "LRRLRL")
					{
						StudentPerTest[0][0] = 1;
						//StudentPerTest[1][0] = 1;
						StudentPerTest[2][0] = 1;
						//StudentPerTest[3][0] = 1;
						StudentPerTest[4][0] = 1;
					}
					if(per.gsx$f2.$t == "1. 伯朗先生、2. 格林太太、3. 蘋可小姐")
					{
						StudentPerTest[0][1] = 1;
						StudentPerTest[1][1] = 1;
						//StudentPerTest[2][1] = 1;
						StudentPerTest[3][1] = 1;
						//StudentPerTest[4][1] = 1;
					}
					if(per.gsx$f3.$t == "4-0")
					{
						StudentPerTest[0][2] = 1;
						StudentPerTest[1][2] = 1;
						//StudentPerTest[2][2] = 1;
						//StudentPerTest[3][2] = 1;
						//StudentPerTest[4][2] = 1;
					}
					if(per.gsx$f4.$t == "##RedM3rgan-2688")
					{
						StudentPerTest[0][3] = 1;
						//StudentPerTest[1][3] = 1;
						//StudentPerTest[2][3] = 1;
						//StudentPerTest[3][3] = 1;
						StudentPerTest[4][3] = 1;
					}
					if(per.gsx$f5.$t == "D")
					{
						StudentPerTest[0][4] = 1;
						StudentPerTest[1][4] = 1;
						StudentPerTest[2][4] = 1;
						StudentPerTest[3][4] = 1;
						//StudentPerTest[4][4] = 1;
					}
					if(per.gsx$f6.$t == "A")
					{
						StudentPerTest[0][5] = 1;
						//StudentPerTest[1][5] = 1;
						StudentPerTest[2][5] = 1;
						//StudentPerTest[3][5] = 1;
						StudentPerTest[4][5] = 1;
					}
					if(per.gsx$f7.$t == "EFFEA")
					{
						StudentPerTest[0][6] = 1;
						//StudentPerTest[1][6] = 1;
						StudentPerTest[2][6] = 1;
						//StudentPerTest[3][6] = 1;
						//StudentPerTest[4][6] = 1;
					}
					if(per.gsx$f8.$t == "5")
					{
						StudentPerTest[0][7] = 1;
						//StudentPerTest[1][7] = 1;
						StudentPerTest[2][7] = 1;
						//StudentPerTest[3][7] = 1;
						//StudentPerTest[4][7] = 1;
					}
					StudentPerScore = per.gsx$score.$t;
				}
			}
		});
		if(name != "所有學生" && name != "選擇學生")
			StudentTable(StudentPerScore, name, "Pertest", StudentPerTest);
		
		$.getJSON(PostDataurl, function(json) {
			var ee = json.feed.entry,
				nn = ee.length;
			var PostScore = [0, 0, 0, 0, 0, 0, 0, 0, 0];
			var StudentPostTest = [
									[0, 0, 0, 0, 0, 0, 0, 0],
									[0, 0, 0, 0, 0, 0, 0, 0],
									[0, 0, 0, 0, 0, 0, 0, 0],
									[0, 0, 0, 0, 0, 0, 0, 0],
									[0, 0, 0, 0, 0, 0, 0, 0]
								  ];
			var StudentPostScore = 0;
			
			$(ee).each(function() {
				//console.log(this.gsx$score.$t);
				//PostScore[Number(this.gsx$score.$t)]++;
				
				var post = this;
				//console.log(name);
				if(name == "所有學生")
				{
					//console.log(name);
					
					if(post.gsx$school.$t == selectSchool)
					{
						PostScore[Number(post.gsx$score.$t)]++;
						document.getElementById("results").innerHTML = ' ';
					}
					if(selectSchool == "所有學校")
					{
						PostScore[Number(post.gsx$score.$t)]++;
						
						//document.getElementById("results").innerHTML = 'allstudent';
						//console.log("all");	
					}
				}
				else
				{
					//console.log(this.gsx$name);
					if(post.gsx$name.$t == name)
					{
						//console.log(name);
						//document.getElementById("results").innerHTML = '<div class="data"><p>' + "分數: " + post.gsx$score.$t + "  姓名: " + post.gsx$name.$t + '</p></div>';
						/*var test = '<div class="data" id = "postscore"><p>' + "後測分數: " + post.gsx$score.$t +'</p></div>';
						document.getElementById("Pertest").insertAdjacentHTML('afterend', test);*/
						if(post.gsx$b1.$t == "A")
						{
							StudentPostTest[0][0] = 1;
							//StudentPostTest[1][0] = 1;
							StudentPostTest[2][0] = 1;
							//StudentPostTest[3][0] = 1;
							StudentPostTest[4][0] = 1;
						}
						if(post.gsx$b2.$t == "1,3,7,4")
						{
							StudentPostTest[0][1] = 1;
							StudentPostTest[1][1] = 1;
							StudentPostTest[2][1] = 1;
							StudentPostTest[3][1] = 1;
							//StudentPostTest[4][1] = 1;
						}
						if(post.gsx$b3.$t == "B")
						{
							StudentPostTest[0][2] = 1;
							StudentPostTest[1][2] = 1;
							StudentPostTest[2][2] = 1;
							StudentPostTest[3][2] = 1;
							//StudentPostTest[4][2] = 1;
						}
						if(post.gsx$b4.$t == "4")
						{
							StudentPostTest[0][3] = 1;
							StudentPostTest[1][3] = 1;
							//StudentPostTest[2][3] = 1;
							//StudentPostTest[3][3] = 1;
							StudentPostTest[4][3] = 1;
						}
						if(post.gsx$b5.$t == "bs 3[sT sS bT] sT bS")
						{
							StudentPostTest[0][4] = 1;
							StudentPostTest[1][4] = 1;
							StudentPostTest[2][4] = 1;
							StudentPostTest[3][4] = 1;
							//StudentPostTest[4][4] = 1;
						}
						if(post.gsx$b6.$t == "OKIWILLBETHERE!")
						{
							StudentPostTest[0][5] = 1;
							//StudentPostTest[1][5] = 1;
							StudentPostTest[2][5] = 1;
							StudentPostTest[3][5] = 1;
							StudentPostTest[4][5] = 1;
						}
						if(post.gsx$b7.$t == "15分鐘")
						{
							StudentPostTest[0][6] = 1;
							StudentPostTest[1][6] = 1;
							//StudentPostTest[2][6] = 1;
							StudentPostTest[3][6] = 1;
							StudentPostTest[4][6] = 1;
						}
						if(post.gsx$b8.$t == "4")
						{
							StudentPostTest[0][7] = 1;
							StudentPostTest[1][7] = 1;
							StudentPostTest[2][7] = 1;
							StudentPostTest[3][7] = 1;
							//StudentPostTest[4][7] = 1;
						}
						StudentPostScore = post.gsx$score.$t;
					}
				}
			});
			if(name != "所有學生" && name != "選擇學生")
				StudentTable(StudentPostScore, name, "Posttest", StudentPostTest);
			
			//console.log(selectSchool);
			if(name == "所有學生")
			{
				graph(selectSchool, "PerScore", PerScore);
				graph(selectSchool, "PostScore", PostScore);
			}
		});
		
		console.log(PerScore);
		
		/*for(var i=0;i<Student.length;i++)
		{
			document.myForm.SecondSelect.options[i]=new Option(Student[i]);
		}*/
	});
	
	/*$.getJSON(PostDataurl, function(json) {
		var ee = json.feed.entry,
			nn = ee.length;
		var PostScore = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		
		$(ee).each(function() {
			//console.log(this.gsx$score.$t);
			PostScore[Number(this.gsx$score.$t)]++;
		});
		
		console.log(PostScore);
	});
	console.log(PerScore);*/
}

function StudentTable(score, name, Test, StudentTest)
{
	$("svg").remove();
	
	console.log(StudentTest);
	/*<table style="width:100%">
	  <tr>
		<th>Name</th>
		<th colspan="2">Telephone</th>
	  </tr>
	  <tr>
		<td>Bill Gates</td>
		<td>55577854</td>
		<td>55577855</td>
	  </tr>
	</table>*/
	if(Test == "Pertest")
	{
		var Title = "前測結果  分數: " + score;
		var add = "results";
		var TName = '<div class="ScoreTable" id = ' + Test + '><p>姓名: ' + name + '</p>';
		$("#Posttest").remove();
		$("#Pertest").remove();
	}
	if(Test == "Posttest")
	{
		var Title = "後測結果  分數: " + score;
		var add = "Pertest";
		var TName = '<div class="ScoreTable" id = ' + Test + '>';
	}
	
	var Name = TName + '<p>' + Title + '</p>';
	var TestTableTitle = '<Table><tr><th>題目</th><th>正確</th><th>拆解</th><th>找出規律</th><th>抽象化</th><th>演算法</th></tr>';
	var td = "", tr = "";
	for (var i = 0; i < 8; i++)
	{
		var t = parseInt(i) + parseInt(1);
		td += '<td>' + '第' + t + '題' + '</td>';
		for (var j = 0; j < 5; j++)
		{
			if(StudentTest[j][i] == 1)
				td += '<td>' + 'V' + '</td>';
			else
				td += '<td>' + " " + '</td>';
		}
		
		tr += '<tr>' + td + '</tr>';
		td = "";
	}
	td += '<td>' + '總和' + '</td>';
	for (var j = 0; j < 5; j++)
	{
		const add = arr => arr.reduce((a, b) => a + b, 0);
		var sum = add(StudentTest[j]);
		td += '<td>' + sum + '</td>';
	}
	tr += '<tr>' + td + '</tr>';
	var Table = Name + TestTableTitle + tr + '</table></div>';
	document.getElementById(add).insertAdjacentHTML('afterend', Table);
}

function graph(school, name, score)
{
	$("#" + name).remove();
	$("#Posttest").remove();
	$("#Pertest").remove();
	
	//document.getElementById(results).insertAdjacentHTML('afterend', school);
	
	var data = [	
					{x:0, w:score[0]},
					{x:1, w:score[1]},
					{x:2, w:score[2]},
					{x:3, w:score[3]},
					{x:4, w:score[4]},
					{x:5, w:score[5]},
					{x:6, w:score[6]},
					{x:7, w:score[7]},
					{x:8, w:score[8]},
				];

	var s = d3.select('#graph')
			  .append('svg')
			  .attr("id", name)
			  .attr({
				'width':300,
				'height':300
			  });

	s.selectAll('rect')
	 .data(data)
	 .enter()
	 .append('rect')
	 .attr({
	  'fill':'#09c',
	  'width':function(d){
		return 0;
	  },
	  'height':30,
	  'x':15,
	  'y':function(d){
		return (d.x) * 35;
	  }
	 })
	 .transition()
	 .duration(1500)
	 .attr({
	  'width':function(d){
		if(selectSchool == "所有學校") 
		{
			return d.w*1.5;
		}
		else
		{
			return d.w*10;
		}
	  }
	 });
	s.selectAll('text')
	 .data(data)
	 .enter()
	 .append('text')
	 .text(function(d){
	  return 0  ;
	 })
	 .attr({
	  'fill':'#000',
	  'x':10,
	  'y':function(d){
		return d.x * 35 + 20;
	  }
	 })
	 .transition()
	 .duration(1500)
	 .attr({
	  'x':function(d){
		if(selectSchool == "所有學校") 
		{
			return d.w*1.5 + 25;
		}
		else
		{
			return d.w*10 + 25;
		}
		//return d.w*10 + 3;
	  }
	 })
	 .tween('number',function(d){
		var i = d3.interpolateRound(0, d.w);
		  return function(t) {
		  this.textContent = i(t);
		};
	 });
	 
	s.selectAll('ytext')
	 .data("X")
	 .enter()
	 .append('text')
	 .text(function(d){
	  return 0  ;
	 })
	 .attr({
	  'fill':'#000',
	  'x':0,
	  'y':function(d){
		return d.x * 35 + 20;
	  }
	 })

}

$(document).ready(function() {
	
	$("#Imworking").click(function () {
		
		$("#Imworking").remove();
	});
});

/*
function graph(school, name, score)
{
	$("#" + name).remove();
	$("#Posttest").remove();
	$("#Pertest").remove();
	
	//document.getElementById(results).insertAdjacentHTML('afterend', school);
	
	var data = [	
					{x:0, w:score[0]},
					{x:1, w:score[1]},
					{x:2, w:score[2]},
					{x:3, w:score[3]},
					{x:4, w:score[4]},
					{x:5, w:score[5]},
					{x:6, w:score[6]},
					{x:7, w:score[7]},
					{x:8, w:score[8]},
				];
	var margin = {top: 10, right: 30, bottom: 90, left: 40},
    width = 460 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;
	// append the svg object to the body of the page
	var svg = d3.select("#graph")
	  .append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	  .append("g")
		.attr("transform",
			  "translate(" + margin.left + "," + margin.top + ")");
	// X axis
	var x = d3.scaleBand()
	  .range([ 0, width ])
	  .domain(data.map(function(d) { return d.x; }))
	  .padding(0.2);
	svg.append("g")
	  .attr("transform", "translate(0," + height + ")")
	  .call(d3.axisBottom(x))
	  .selectAll("text")
		.attr("transform", "translate(-10,0)rotate(-45)")
		.style("text-anchor", "end");
	// Add Y axis
	var y = d3.scaleLinear()
	  .domain([0, 13000])
	  .range([ height, 0]);
	svg.append("g")
	  .call(d3.axisLeft(y));
	// Bars
	svg.selectAll("mybar")
	  .data(data)
	  .enter()
	  .append("rect")
		.attr("x", function(d) { return x(d.x); })
		.attr("width", x.bandwidth())
		.attr("fill", "#69b3a2")
		// no bar at the beginning thus:
		.attr("height", function(d) { return height - y(0); }) // always equal to 0
		.attr("y", function(d) { return y(0); })
}*/
