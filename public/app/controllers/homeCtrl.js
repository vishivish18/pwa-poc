angular.module('app').
controller('homeCtrl', ['$scope', function($scope) {
    $scope.countries = [{ name: "Bangladesh" }, { name: "Belgium" }, { name: "Burkina Faso" }, { name: "Bulgaria" }, { name: "Bosnia and Herzegovina" }, { name: "Barbados" }, { name: "Wallis and Futuna" }, { name: "Saint Barthelemy" }, { name: "Bermuda" }, { name: "Brunei" }, { name: "Bolivia" }, { name: "Bahrain" }, { name: "Burundi" }, { name: "Benin" }, { name: "Bhutan" }, { name: "Jamaica" }, { name: "Bouvet Island" }, { name: "Botswana" }, { name: "Samoa" }, { name: "Bonaire" }, { name: "Saint Eustatius and Saba" }, { name: "Brazil" }, { name: "Bahamas" }, { name: "Jersey" }, { name: "Belarus" }, { name: "Belize" }, { name: "Russia" }, { name: "Rwanda" }, { name: "Serbia" }, { name: "East Timor" }, { name: "Reunion" }, { name: "Turkmenistan" }, { name: "Tajikistan" }, { name: "Romania" }, { name: "Tokelau" }, { name: "Guinea-Bissau" }, { name: "Guam" }, { name: "Guatemala" }, { name: "South Georgia and the South Sandwich Islands" }, { name: "Greece" }, { name: "Equatorial Guinea" }, { name: "Guadeloupe" }, { name: "Japan" }, { name: "Guyana" }, { name: "Guernsey" }, { name: "French Guiana" }, { name: "Georgia" }, { name: "Grenada" }, { name: "United Kingdom" }, { name: "Gabon" }, { name: "El Salvador" }, { name: "Guinea" }, { name: "Gambia" }, { name: "Greenland" }, { name: "Gibraltar" }, { name: "Ghana" }, { name: "Oman" }, { name: "Tunisia" }, { name: "Jordan" }, { name: "Croatia" }, { name: "Haiti" }, { name: "Hungary" }, { name: "Hong Kong" }, { name: "Honduras" }, { name: "Heard Island and McDonald Islands" }, { name: "Venezuela" }, { name: "Puerto Rico" }, { name: "Palestinian Territory" }, { name: "Palau" }, { name: "Portugal" }, { name: "Svalbard and Jan Mayen" }, { name: "Paraguay" }, { name: "Iraq" }, { name: "Panama" }, { name: "French Polynesia" }, { name: "Papua New Guinea" }, { name: "Peru" }, { name: "Pakistan" }, { name: "Philippines" }, { name: "Pitcairn" }, { name: "Poland" }, { name: "Saint Pierre and Miquelon" }, { name: "Zambia" }, { name: "Western Sahara" }, { name: "Estonia" }, { name: "Egypt" }, { name: "South Africa" }, { name: "Ecuador" }, { name: "Italy" }, { name: "Vietnam" }, { name: "Solomon Islands" }, { name: "Ethiopia" }, { name: "Somalia" }, { name: "Zimbabwe" }, { name: "Saudi Arabia" }, { name: "Spain" }, { name: "Eritrea" }, { name: "Montenegro" }, { name: "Moldova" }, { name: "Madagascar" }, { name: "Saint Martin" }, { name: "Morocco" }, { name: "Monaco" }, { name: "Uzbekistan" }, { name: "Myanmar" }, { name: "Mali" }, { name: "Macao" }, { name: "Mongolia" }, { name: "Marshall Islands" }, { name: "Macedonia" }, { name: "Mauritius" }, { name: "Malta" }, { name: "Malawi" }, { name: "Maldives" }, { name: "Martinique" }, { name: "Northern Mariana Islands" }, { name: "Montserrat" }, { name: "Mauritania" }, { name: "Isle of Man" }, { name: "Uganda" }, { name: "Tanzania" }, { name: "Malaysia" }, { name: "Mexico" }, { name: "Israel" }, { name: "France" }, { name: "British Indian Ocean Territory" }, { name: "Saint Helena" }, { name: "Finland" }, { name: "Fiji" }, { name: "Falkland Islands" }, { name: "Micronesia" }, { name: "Faroe Islands" }, { name: "Nicaragua" }, { name: "Netherlands" }, { name: "Norway" }, { name: "Namibia" }, { name: "Vanuatu" }, { name: "New Caledonia" }, { name: "Niger" }, { name: "Norfolk Island" }, { name: "Nigeria" }, { name: "New Zealand" }, { name: "Nepal" }, { name: "Nauru" }, { name: "Niue" }, { name: "Cook Islands" }, { name: "Kosovo" }, { name: "Ivory Coast" }, { name: "Switzerland" }, { name: "Colombia" }, { name: "China" }, { name: "Cameroon" }, { name: "Chile" }, { name: "Cocos Islands" }, { name: "Canada" }, { name: "Congo" }, { name: "Central African Republic" }, { name: "Democratic Republic of the Congo" }, { name: "Czech Republic" }, { name: "Cyprus" }, { name: "Christmas Island" }, { name: "Costa Rica" }, { name: "Curacao" }, { name: "Cape Verde" }, { name: "Cuba" }, { name: "Swaziland" }, { name: "Syria" }, { name: "Sint Maarten" }, { name: "Kyrgyzstan" }, { name: "Kenya" }, { name: "South Sudan" }, { name: "Suriname" }, { name: "Kiribati" }, { name: "Cambodia" }, { name: "Saint Kitts and Nevis" }, { name: "Comoros" }, { name: "Sao Tome and Principe" }, { name: "Slovakia" }, { name: "South Korea" }, { name: "Slovenia" }, { name: "North Korea" }, { name: "Kuwait" }, { name: "Senegal" }, { name: "San Marino" }, { name: "Sierra Leone" }, { name: "Seychelles" }, { name: "Kazakhstan" }, { name: "Cayman Islands" }, { name: "Singapore" }, { name: "Sweden" }, { name: "Sudan" }, { name: "Dominican Republic" }, { name: "Dominica" }, { name: "Djibouti" }, { name: "Denmark" }, { name: "British Virgin Islands" }, { name: "Germany" }, { name: "Yemen" }, { name: "Algeria" }, { name: "United States" }, { name: "Uruguay" }, { name: "Mayotte" }, { name: "United States Minor Outlying Islands" }, { name: "Lebanon" }, { name: "Saint Lucia" }, { name: "Laos" }, { name: "Tuvalu" }, { name: "Taiwan" }, { name: "Trinidad and Tobago" }, { name: "Turkey" }, { name: "Sri Lanka" }, { name: "Liechtenstein" }, { name: "Latvia" }, { name: "Tonga" }, { name: "Lithuania" }, { name: "Luxembourg" }, { name: "Liberia" }, { name: "Lesotho" }, { name: "Thailand" }, { name: "French Southern Territories" }, { name: "Togo" }, { name: "Chad" }, { name: "Turks and Caicos Islands" }, { name: "Libya" }, { name: "Vatican" }, { name: "Saint Vincent and the Grenadines" }, { name: "United Arab Emirates" }, { name: "Andorra" }, { name: "Antigua and Barbuda" }, { name: "Afghanistan" }, { name: "Anguilla" }, { name: "U.S. Virgin Islands" }, { name: "Iceland" }, { name: "Iran" }, { name: "Armenia" }, { name: "Albania" }, { name: "Angola" }, { name: "Antarctica" }, { name: "American Samoa" }, { name: "Argentina" }, { name: "Australia" }, { name: "Austria" }, { name: "Aruba" }, { name: "India" }, { name: "Aland Islands" }, { name: "Azerbaijan" }, { name: "Ireland" }, { name: "Indonesia" }, { name: "Ukraine" }, { name: "Qatar" }, { name: "Mozambique" }]

    $scope.callback = function(country) {
        $scope.country = country
    }

  	$scope.selectedSection = 1

  	$scope.selectedTab = 'one'

    $scope.goto = function(section) {
		$scope.selectedSection = section;
    }

    $scope.selectTab = function(value) {
    	$scope.selectedTab = value
    }

}]);







angular.module('app').
directive('typeahead', ['$compile', '$timeout', function($compile, $timeout) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            typeahead: '=',
            typeaheadCallback: "="
        },
        link: function(scope, elem, attrs) {
            var template = '<div class="dropdown"><ul class="dropdown-menu" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (typeahead | filter:{name:ngModel} | limitTo:5) track by $index" ng-click="click(item)" style="cursor:pointer" ng-class="{active:$index==active}" ng-mouseenter="mouseenter($index)"><a>{{item.name}}</a></li></ul></div>'

            elem.bind('blur', function() {
                $timeout(function() {
                    scope.selected = true
                }, 100)
            })

            elem.bind("keydown", function($event) {
                if ($event.keyCode == 38 && scope.active > 0) { // arrow up
                    scope.active--
                        scope.$digest()
                } else if ($event.keyCode == 40 && scope.active < scope.filitered.length - 1) { // arrow down
                    scope.active++
                        scope.$digest()
                } else if ($event.keyCode == 13) { // enter
                    scope.$apply(function() {
                        scope.click(scope.filitered[scope.active])
                    })
                }
            })

            scope.click = function(item) {
                scope.ngModel = item.name
                scope.selected = item
                if (scope.typeaheadCallback) {
                    scope.typeaheadCallback(item)
                }
                elem[0].blur()
            }

            scope.mouseenter = function($index) {
                scope.active = $index
            }

            scope.$watch('ngModel', function(input) {
                if (scope.selected && scope.selected.name == input) {
                    return
                }

                scope.active = 0
                scope.selected = false

                // if we have an exact match and there is only one item in the list, automatically select it
                if (input && scope.filitered.length == 1 && scope.filitered[0].name.toLowerCase() == input.toLowerCase()) {
                    scope.click(scope.filitered[0])
                }
            })

            elem.after($compile(template)(scope))
        }
    }
}]);
