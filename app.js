var app = angular.module('testApp', ['pickadate','ngAnimate', 'ui.bootstrap']);


function TestController($scope, dateFilter) {
	$scope.monthFlag = true;
	$scope.freq="Daily";
	$scope.mySwitch = "Each";
	$scope.input = {};
	$scope.selectedDays = [];
	$scope.selectedWeeks=[];
	$scope.selectedYears=[];
	$scope.leftIndex = 0;
	$scope.rightIndex = 0;
	$scope.text = "";
	$scope.weeks =[];
	
	$scope.optionsChange = function(){
		switch($scope.freq){
			case 'Daily':
			var rR =  new RRule({
				freq: RRule.DAILY,
				interval : $scope.input.day
			});
			break;
			case 'Weekly':
			var rR =  new RRule({
				freq: RRule.WEEKLY,
				interval : $scope.input.week,
				byweekday: $scope.weeks
			});
			break;
			case 'Monthly':
			var rR =  new RRule({
				freq: RRule.MONTHLY,
				interval : $scope.input.month
			});
			break;
			case 'Yearly':
			var rR =  new RRule({
				freq: RRule.YEARLY,
				interval : $scope.input.year
			});
			break; 
		} 
		$scope.text = rR.toText();
	}

	$scope.weekTransfer = function(){
		$scope.weeks = [];
		for(i = 0; i < $scope.selectedWeeks.length; i++) {
			switch($scope.selectedWeeks[i]){
				case 'Mon':
				$scope.weeks.push(RRule.MO);
				break;
				case 'Tue':
				$scope.weeks.push(RRule.TU);
				break;
				case 'Wed':
				$scope.weeks.push(RRule.WE);
				break;
				case 'Thu':
				$scope.weeks.push(RRule.TH);
				break;
				case 'Fri':
				$scope.weeks.push(RRule.FR);
				break;
				case 'Sat':
				$scope.weeks.push(RRule.SA);
				break;
				case 'Sun':
				$scope.weeks.push(RRule.SU);
				break;
			}
		}
	}

	

	$scope.setLeft = function(n) {
		$scope.leftIndex = n;
	}

	$scope.setRight = function(n) {
		$scope.rightIndex = n;
	}

	$scope.setFlag = function(n) {
		if (n == 1) {
			$scope.monthFlag = true;
		} else {
			$scope.monthFlag = false;
		}
	};

	$scope.range = function(min, max, step) {
		step = step || 1;
		var input = [];
		for (var i = min; i <= max; i += step) {
			input.push(i);
		}
		return input;
	};

	$scope.selectDay = function(val,swit){
		if(swit != 'Each'){
			return;
		}
		var itemIndex = $scope.selectedDays.indexOf(val);
		var len = $scope.selectedDays.length;
		if(itemIndex != -1){
			if(len != 1){
				$scope.selectedDays.splice(itemIndex,1);
			}
		}else{
			$scope.selectedDays.push(val);
			$scope.selectedDays.sort();
		}
	};

	$scope.selectWeek = function(val){
		var itemIndex = $scope.selectedWeeks.indexOf(val);
		var len = $scope.selectedWeeks.length;
		if(itemIndex != -1){
			if(len != 1){
				$scope.selectedWeeks.splice(itemIndex,1);
			}
		}else{
			$scope.selectedWeeks.push(val);
		}
		$scope.weekTransfer();
		$scope.optionsChange();
	};

	$scope.selectYear = function(val){
		var itemIndex = $scope.selectedYears.indexOf(val);
		var len = $scope.selectedYears.length;
		if(itemIndex != -1){
			if(len != 1){
				$scope.selectedYears.splice(itemIndex,1);
			}
		}else{
			$scope.selectedYears.push(val);
			$scope.selectedYears.sort();
		}
	};


	$scope.selectedItem = 0;
	$scope.choices = ["first","second","third","fourth","fifth","last"];
	$scope.week =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","day","weekday","weekend day"];
	$scope.index = 0;
	$scope.isCollapsed = false;
	$scope.yearSwitch = false;

	$scope.changeSwitch = function(){
		$scope.yearSwitch = !$scope.yearSwitch;
	}

	$scope.selectIndex = function(n) {
		$scope.index = n;
	}
	$scope.callSelect = function(num){
		$scope.selectedItem = num;
	}
}

app.controller('TestController', ['$scope', 'dateFilter', TestController]);





