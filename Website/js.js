var names1 = ['Jack White', 'Bob Dillan', 'Mark Lee', 'Vera Chang'];
var names2 = ['John Snow', 'Han solo', 'Darth Vader', 'Iron man'];
var names3 = ['Sonya Black', 'Carl Wilson', 'Ashly Cooper', 'Justin Bender'];
var currentNames = [];

function generateMembersList(Names) {
	document.getElementById("selName").innerHTML = "";
	Names.forEach(function (e) {
		document.getElementById("selName").innerHTML += "<option>" + e + "</option>";
	})
	document.getElementById("selName").value = '';
}

function isWrongTeamMate(member, team) {
	for (var i = 0; i < team.length; i++) {
		if (team[i] == member) {
			return false
		}
	}
	return true
}

function getTeamMembers() {
	var tmp = document.getElementById("team").value;
	switch (tmp) {
		case "Main Releases":
			currentNames = names1;
			break;
		case "Mobile":
			currentNames = names2;
			break;
		case "Web":
			currentNames = names3;
	}
	currentNames.sort();
	generateMembersList(currentNames);
}

function generateReport() {
	if (!document.getElementById("team").value) {
		var newDiv = document.createElement("div");
		newDiv.innerHTML = "<div id='errM' class='error'>Please select a team<div>";
		var my_div = document.getElementById("svTable");
		document.body.insertBefore(newDiv, my_div);
		setTimeout(function () {
			document.getElementById('errM').remove()
		}, 2000);
	} else {
		var tmpName = document.getElementById("team").value;
		if (tmpName != "Main Releases" && tmpName != "Mobile" && tmpName != "Web") {
			document.getElementById("svTable").innerHTML = "<div class='error'>No data found<div>"
		} else {
			document.getElementById("svTable").innerHTML = tmpName
		}
	}
	if (document.getElementById("selName").value) {
		var tmp = document.getElementById("selName").value;
		if (isWrongTeamMate(tmp, currentNames)) {
			document.getElementById("svTable").innerHTML = "<div class='error'>Specified team member doesn't exist in the selected team<div>"
		} else {
			if (tmp.length % 2 == 0) {
				var status = "Not avaliable";
			} else {
				var status = "Avaliable";
			}
			document.getElementById("svTable").innerHTML += "<tr><td>" + tmp + "</td><td class='status'>" + status + "</td><tr>";
		}
	} else if (!document.getElementById("selName").value) {
		currentNames.forEach(function (e) {;
			if (e.length % 2 == 0) {
				var status = "Not avaliable";
			} else {
				var status = "Avaliable";
			}
			document.getElementById("svTable").innerHTML += "<tr><td>" + e + "</td><td class='status'>" + status + "</td><tr>";
		})
	}
}
