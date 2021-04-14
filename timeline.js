$(document).ready(function() {
	
	$("#Rumm").click(function () {
		
		$("#comadd").remove();
		
		var comtext = "<p style = 'text-align: left; margin: 10px ; font-size:20px;' id = 'comadd'>◆ Rummikub拉密競賽規則：<br><br>遊玩「實踐、4位玩家、不限時間、困難」，只要拿到那一場的前三名，請舉手告知老師，可以一直玩取得更好的名次。</p>";
		document.getElementById("compidis").insertAdjacentHTML('afterend', comtext);
		//$("compidis").text(comtext);
	});
});

$(document).ready(function() {
	
	$("#Robo").click(function () {
		
		$("#comadd").remove();
		
		var comtext = "<p style = 'text-align: left; margin: 10px ; font-size:20px;' id = 'comadd'>◆ Robozzle競賽規則：<br><br>可隨機從題目單中選擇題目挑戰，成功通關即可舉手通知老師登記。</p>";
		document.getElementById("compidis").insertAdjacentHTML('afterend', comtext);
		//$("compidis").text(comtext);
	});
});

$(document).ready(function() {
	
	$("#Gartic").click(function () {
		
		$("#comadd").remove();
		
		var comtext = "<p style = 'text-align: left; margin: 10px; font-size:20px;' id = 'comadd'>◆ Gartic競賽規則：<br><br>和老師分配的隊伍遊玩，一場結束後前兩名舉手通知老師。</p>";
		document.getElementById("compidis").insertAdjacentHTML('afterend', comtext);
		//$("compidis").text(comtext);
	});
});

$(document).ready(function() {
	
	$("#Little").click(function () {
		
		$("#comadd").remove();
		
		var comtext = "<p style = 'text-align: left; margin: 10px; font-size:20px;' id = 'comadd'>◆ Little Alchemy2競賽規則：<br><br>嘗試找出學習單的物品，並將找出由甚麼元素組成該物品，並填入學習單。</p>";
		document.getElementById("compidis").insertAdjacentHTML('afterend', comtext);
		//$("compidis").text(comtext);
	});
});