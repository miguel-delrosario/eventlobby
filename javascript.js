angular.module('portalApp')
angular.module('portalApp')

.controller('eventlobbyCtrl', ['$scope', '$http', '$q', 'sampleSimpleListFactory', function ($scope, $http, $q, sampleSimpleListFactory) {
	
    $scope.item = {value:''};
	
    // mock data	
    $scope.modelA = {value: [{
        title: "item 1",
        details: "item 1 details",
        category: '1'
    }, {
        title: "item 2",
        details: "item 2 details",
        category: '2'
    }, {
        title: "item 3",
        details: "item 3 details",
        category: '1'
    }, {
        title: "item 4",
        details: "item 4 details",
        category: '2'
    }, {
        title: "item 5",
        details: "item 5 details",
        category: '1'
    }, {
        title: "item 6",
        details: "item 6 details",
        category: '2'
    }]};
    
    
    $scope.items = {value: [ 
      {
         title:'Math 135 Study Group',
         tags: ['Study Group', 'Math 135', 'M3'],
         details: 'A study group for Math 135 A06',
         location: 'M3 1234',
         time: 'October 29, 6pm - 9pm',
         capacity: '2/4',
         addedby: 'fhamdullahpur'
     },
     {
         title:'Haunted Hallways',
         tags: ['Miscellaneous', 'V1', 'Halloween'],
         details: 'A pseudo haunted house put on by the E1 Quad of V1.',
         location: 'V1 E1 Quad',
         time: 'October 27, 8pm - 11pm',
         capacity: '3/6',
         addedby: 'almao'
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
         title:'Math 137 Study Group',
         tags: ['Study Group', 'Math 137', 'QNC'],
         details: 'A study group for Math 138',
         location: 'QNC 1234',
         time: 'November 5, 6pm - 9pm',
         capacity: '2/4',
         addedby: 'anica'
     }
     ]};
     
     sampleSimpleListFactory.init($scope);
     
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
}])

.factory('sampleSimpleListFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
    var initialized = {
        value: false
    };


    var sourcesLoaded = 0;

    var init = function ($scope) {
        if (initialized.value)
            return;
        initialized.value = true;
    }


    return {
        init: init
    };

}]);
