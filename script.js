var timeIn, timeInms, timeOut, timeOutms, timeParked, timeParkedms;
var table = document.getElementById("Parking-Table");
var row;
var plateNumberCell, timeInCell, timeOutCell;
var parkingChargeCell = 35;

var pnArr = [];
var tiArr = [];
var pcArr = [];
var toArr = [];


//loading service worker file
if('serviceWorker' in navigator){
	try {
		navigator.serviceWorker.register(/sw.js);
		console.log('SW REGISTERED')
	} catch (error) {
		console.log('SW REG failed')
	}
}

function getTimeParked(){
	//timeIn = new Date("March 31, 2018 11:25:10");
	//timeOut = new Date("March 31, 2018 11:25:18");	

	var diff = timeOutms - timeInms;
	var seconds = 1000;
	var minutes = seconds*60;
	var hours = minutes*60;

	console.log(timeIn);
	console.log(timeOut);

	//timeParked = formatNum((Math.trunc(diff/hours))%60) +":" + formatNum((Math.trunc(diff/minutes))%60) +":" + formatNum((Math.trunc(diff/seconds))%60);
	//parkingChargeCell.innerHTML;
	
	if (diff < ((1000*60*60)+60)){
		console.log(charge);
	} else {
		console.log(setInterval("addPay()", 10000));
	}
	
	//table.deleteRow(1);
	
}

function addPay() {
	var parkingChargeCell += 10;
}

function getTimeIn() {
	timeIn = new Date();
	timeInms= timeIn.getTime(timeIn);
	//setInterval("increment()", (1000 * 60 * 60));
	row = table.insertRow(1);
	
	//insert row cells
	var plateNumberCell = row.insertCell(0);
	plateNumberCell.style.textAlign = 'center';
	var timeInCell = row.insertCell(1);
	timeInCell.style.textAlign = 'center';
	parkingChargeCell = row.insertCell(2);
	parkingChargeCell.style.textAlign = 'center';
	var timeOutCell = row.insertCell(3);
	timeOutCell.style.textAlign = 'center';
	
	//insert row values
	plateNumberCell.innerHTML = document.getElementById("Enter-Plate-Number").value;
	pnArr.unshift(plateNumberCell.innerHTML);
	timeInCell.innerHTML = formatNum(timeIn.getHours()) +":" + formatNum(timeIn.getMinutes()) +":" + formatNum(timeIn.getSeconds());
	tiArr.unshift(timeInCell.innerHTML);
	parkingChargeCell.innerHTML = " ";
	
	var btn = document.createElement('input');
	btn.setAttribute('type', 'button');
	btn.setAttribute('name', 'ewan');
	btn.setAttribute('value', 'Time Out');
	btn.onclick = function() {
		getTimeOut();
		getTimeParked();
	}
	timeOutCell.appendChild(btn);
}

function getTimeOut() {
    timeOut = new Date();
	timeOutms= timeOut.getTime(timeOut);
    var t = formatNum(timeOut.getHours()) +":" + formatNum(timeOut.getMinutes()) +":" + formatNum(timeOut.getSeconds());
	toArr.unshift(t);
}

function formatNum(num){
	if((num+"").length == 1){
		return "0"+num;
	}else{
		return num;
	}	
}

function searchPlateNumber() {
	var plateNumber = document.getElementById("Search-Plate-Number").value;
	var result = pnArr.filter(pn => pn == plateNumber);
	if (result == plateNumber){alert('Existing plate number')} else { alert('Plate number does not exist')};
}