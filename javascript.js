angular.module('portalApp')
.controller('eventlobbyCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			title:'Math 135 Study Group',
			tags: ['Study Group', 'Math 135', 'QNC'],
            details: 'A study group for the Math 135 A06',
            location: 'QNC XXXX',
            time: '5pm - 7pm',
            capacity: '2/4'
		},
		{
			title:'Hug a Goose, Break a Record',
			tags: ['Miscellaneous', 'Campus-Wide'],
            details: 'Waterloo is attempting the world record for the most hugs given to a large stuffed toy in an 8 HOUR ACTION PACKED GOOSE HUGGING MARATHON!!!',
            location: 'Campus-Wide',
            time: '11am - 7pm',
            capacity: null
		}
	];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('eventlobbyMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('eventlobbyDetails.html', 2);
	}
}]);