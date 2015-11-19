dayNames = ["Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Satturday", "Sunday"];
function DateController($scope, localStorageService){
  week ={
    days1:[],
    days2:[]
  };
  curDate = new Date();
  for (i=1;i<=4;i++)
  {
    offset = i - curDate.getDay();
    week.days1.push({
      name: dayNames[i-1],
      number: curDate.getDate()+offset,
      events:[]
    });
  }
  for (i=5;i<=7;i++)
  {
    offset = i - curDate.getDay();
    week.days2.push({
      name: dayNames[i-1],
      number: curDate.getDate()+offset,
      events:[]
    });
  }
  if(localStorageService.get("week"))
  {
    $scope.week=localStorageService.get("week");
  }
  else{
      $scope.week = week;
      localStorageService.set("week",week);
  }
}
