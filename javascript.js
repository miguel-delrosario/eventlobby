angular.module('portalApp')
.controller('eventlobbyCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			title:'Math 135 Study Group',
			tags: ['Study Group', 'Math 135', 'QNC'],
            details: 'A study group for Math 135 A06',
            location: 'M3 1234',
            time: 'October 30, 5pm - 7pm',
            capacity: '2/4'
		},
		{
			title:'Hug a Goose, Break a Record',
			tags: ['Miscellaneous', 'Campus-Wide', 'Mr.Goose'],
            details: 'Waterloo is attempting the world record for the most hugs given to a large stuffed toy in an 8 HOUR ACTION PACKED GOOSE HUGGING MARATHON!!!',
            location: 'Campus-Wide',
            time: 'November 4, 11am - 7pm',
            capacity: 'Unlimited'
		},
        {
			title:'Mass Migration 2k16',
			tags: ['Migration', 'Geese', 'Too cold in loo'],
            details: 'The annual mass migration event led by Mr. Goose.',
            location: 'Anywhere but here',
            time: 'October-April',
            capacity: '>=0 geese'
		}
	];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('eventlobbyMain.html', 1);
	
    $scope.showInColumnOne = function (viewname) {
        // Show view in column one1
        $scope.portalHelpers.showView(viewname, 1)
    };
    
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('eventlobbyDetails.html', 2);
	}
}]);