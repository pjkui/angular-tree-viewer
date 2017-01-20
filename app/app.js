/**
 * Created by quinnpan on 2017/1/20.
 */
// Define the `phonecatApp` module
var phonecatApp = angular.module('app', ['angularTreeview']);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
    $scope.phones = [
        {
            name   : 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name   : 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name   : 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];
    $scope.treedata =
        [
            {
                "label": "User", "id": "role1", "children": [
                {"label": "subUser1", "id": "role11", "children": []},
                {
                    "label": "subUser2", "id": "role12", "children": [
                    {
                        "label": "subUser2-1", "id": "role121", "children": [
                        {"label": "subUser2-1-1", "id": "role1211", "children": []},
                        {"label": "subUser2-1-2", "id": "role1212", "children": []}
                    ]
                    }
                ]
                }
            ]
            },
            {"label": "Admin", "id": "role2", "children": []},
            {"label": "Guest", "id": "role3", "children": []}
        ];

    $scope.$watch( 'abc.currentNode', function( newObj, oldObj ) {
        if( $scope.abc && angular.isObject($scope.abc.currentNode) ) {
            console.log( 'Node Selected!!' );
            console.log( $scope.abc.currentNode );
        }
    }, false);

});