angular.module('portalApp')
.controller('eventlobbyCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			title:'Math 135 Study Group',
			tags: ['Study Group', 'Math 135', 'M3'],
            details: 'A study group for Math 135 A06',
            location: 'M3 1234',
            time: 'October 30, 5pm - 7pm',
            capacity: '2/4',
            addedby: 'fhamdullahpur'
		},
		{
			title:'Hug a Goose, Break a Record',
			tags: ['Miscellaneous', 'Campus-Wide', 'Mr.Goose'],
            details: 'Waterloo is attempting the world record for the most hugs given to a large stuffed toy in an 8 HOUR ACTION PACKED GOOSE HUGGING MARATHON!!!',
            location: 'Campus-Wide',
            time: 'November 4, 11am - 7pm',
            capacity: 'Unlimited',
            addedby: 'mgoose'
		},
        {
			title:'Haunted Hallways',
			tags: ['Miscellaneous', 'V1', 'Halloween'],
            details: 'A pseudo haunted house put on by the E1 Quad of V1.',
            location: 'V1 E1 Quad',
            time: 'October 27, 8pm - 11pm',
            capacity: '3/6',
            addedby: 'mpanino'
		},
        {
			title:'CS 135 Study Group',
			tags: ['Study Group', 'CS 135', 'QNC'],
            details: 'A study group for CS 135 Mid Term 2',
            location: 'QNC 1234',
            time: 'October 31, 4pm - 7pm',
            capacity: '3/6',
            addedby: 'mpanino'
		},
        {
			title:'Humans vs. Zombies',
			tags: ['Miscellaneous', 'Campus-Wide', 'Halloween'],
            details: 'WatSFiC is proud to present Humans versus Zombies at the University of Waterloo. It is essentially a giant game of tag consisting of two teams, one steadily losing members that join the other side. Humans win if they survive the week and complete their final mission whereas the zombies win if they thwart the humans.',
            location: 'Campus-Wide',
            time: 'October 31 - November 4',
            capacity: 'Unlimited',
            addedby: 'Sci-Fi Club'
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