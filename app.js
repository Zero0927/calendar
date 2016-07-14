var app = angular.module('testApp', ['pickadate','ngAnimate', 'ui.bootstrap']);


function TestController($scope, dateFilter) {

	$scope.freq="Daily";
	$scope.mySwitch = "Each";

	$scope.range = function(min, max, step) {
		step = step || 1;
		var input = [];
		for (var i = min; i <= max; i += step) {
			input.push(i);
		}
		return input;
	};

	$scope.selectedDays = [];

	$scope.selectDay = function(val,swit){
		console.log(swit);
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
		}
	};

	$scope.emptyDay = function(){
		$scope.selectedDays.splice(0,$scope.selectedDays.length);
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
	};

	$scope.selectedWeeks=[];

	$scope.selectedYears=[];

	$scope.selectYear = function(val){
		var itemIndex = $scope.selectedYears.indexOf(val);
		var len = $scope.selectedYears.length;
		if(itemIndex != -1){
			if(len != 1){
				$scope.selectedYears.splice(itemIndex,1);
			}
		}else{
			$scope.selectedYears.push(val);
		}
	};

}

app.controller('TestController', ['$scope', 'dateFilter', TestController]);

app.controller('DropdownCtrl', ['$scope',function ($scope) {


  $scope.selectedItem = 0;
  $scope.choices = ["first","second","third","fourth","fifth","last"];
  $scope.status = {
    isopen: false
  };
  $scope.week =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","day","weekday","weekend day"];
  $scope.index = 0;
  $scope.selectIndex = function(n) {
  	$scope.index = n;
  }
  $scope.callSelect = function(num){
    $scope.selectedItem = num;
  }

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
}]);




