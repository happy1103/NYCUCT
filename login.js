
console.log("index.js");

var UserSheet = '1JrVrVXFeuXNeHioXaB0tr7qeiu1X5FEzdUwiAj8-e3s',
	sheetno = 1,
	UserDataurl = 'https://spreadsheets.google.com/feeds/list/' + UserSheet + '/' + sheetno + '/public/values?alt=json-in-script&callback=?',
	UserDataur_v4 = 'https://sheets.googleapis.com/v4/spreadsheets/' + UserSheet + '/values/Sheet1';

var Nowlogin = 0;
var UserName = "";
var UserSchool = "";
/*
$(window).scroll(function() {
	
    var winScrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var floaterHeight = $('#forteacher').outerHeight(true);
    //true so the function takes margins into account
    var fromBottom = 20;

    var bottom = winScrollTop + winHeight - floaterHeight - fromBottom;
    $('#forteacher').css({'bottom': bottom + 'px'});
});*/

$(document).ready(function() {
	
	$("#login").click(function () {
		
		$("#loginbox").attr("style","display: blank");
	});
	
	$("#loginboxbutton").click(function () {
		console.log(Nowlogin);
		var User = $("#account").val();
		var Pass = $("#password").val();
		console.log(User);
		console.log(Pass);
		
		//$.ajaxSettings.async = false;
		
		/*var script = document.createElement('script');
		script.async = false; */
		
		$.getJSON(UserDataur_v4, function(json) {
			var e = json.feed.entry,
				n = e.length;
				
			$(e).each(function() {
				console.log(this);
				if(this.gsx$帳號.$t == User && this.gsx$密碼.$t == Pass)
				{
					Nowlogin = 1;
					UserName = User;
					UserSchool = this.gsx$學校.$t;
					console.log("Login");
					logincheck();
				}
			});
			
			if(Nowlogin == 0)
			{
				loginfalse();
			}
			
		});
	});
});

function logincheck()
{
	console.log(Nowlogin);
	console.log(UserName);
	console.log(UserSchool);
	
	$("#loginbox").attr("style","display: none");
	$("#logon").attr("style","display: none");
	$("#logout").attr("style","display: block");
	$("#forteacher").attr("style","display: block");
}

function loginfalse()
{
	$("#worning").remove();
	var loginfalsetext = "<p style = 'color: red;' id = 'worning'>帳號密碼錯誤</p>";
	document.getElementById("loginboxbutton").insertAdjacentHTML('beforebegin', loginfalsetext);
}

$(document).ready(function() {
	
	$("#forteacher").click(function () {
		
		$("#teacheruse").toggle();
	});
});

$(document).ready(function() {
	
	$("#X").click(function () {
		
		$("#loginbox").toggle();
	});
});

$(document).ready(function() {
	
	$("#logout").click(function () {
		
		console.log(Nowlogin);
		console.log(UserName);
		console.log(UserSchool);
		
		Nowlogin = 0;
		UserName = "";
		UserSchool = "";
		
		console.log(Nowlogin);
		console.log(UserName);
		console.log(UserSchool);
		$("#teacheruse").attr("style","display: none");
		$("#loginbox").attr("style","display: none");
		$("#logon").attr("style","display: block");
		$("#logout").attr("style","display: none");
		$("#forteacher").attr("style","display: none");
	});
});
