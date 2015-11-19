function EventsController($scope, localStorageService){
	$scope.formActive = function(number){
		$scope.formIsActive = true;
		$scope.activeDay = number;
		$scope.newEvent = null;
	};
	$scope.formNotActive = function(newEvent){

		for (i=0;i<4;i++){
			curDay = $scope.week.days1[i];
			if(curDay.number == $scope.activeDay) {
				day = curDay;
			}
		}
		for (i=0;i<3;i++){
			curDay = $scope.week.days2[i];
			if(curDay.number == $scope.activeDay) {
				day = curDay;
			}
		}
		if (day.events.indexOf(newEvent) == -1) {
			copyEvent = angular.copy(newEvent);
			day.events.push(copyEvent);
		}
		$scope.newEvent = null;
		localStorageService.set("week",$scope.week);
		//$scope.formIsActive = false;
	};
	$scope.DeleteActive = function(newEvent){
		for (i=0;i<4;i++){
			curDay = $scope.week.days1[i];
			if(curDay.number == $scope.activeDay) {
				day = curDay;
			}
		}
		for (i=0;i<3;i++){
			curDay = $scope.week.days2[i];
			if(curDay.number == $scope.activeDay) {
				day = curDay;
			}
		}
		index = day.events.indexOf(newEvent);
		day.events.splice(index,1);
		localStorageService.set("week",$scope.week);
		$scope.newEvent = null;
		//$scope.formIsActive = false;
	};
	$scope.Edit = function(editEvent, number){
			$scope.newEvent=editEvent;
		console.log(editEvent);
		$scope.activeDay = number;
		$scope.formIsActive = true;
	};
}
