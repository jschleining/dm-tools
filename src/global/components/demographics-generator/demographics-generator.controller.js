var app = angular.module('dmTools');

app.controller('DemographicsGeneratorController', ['$scope', '$mdComponentRegistry', '$mdSidenav', '$filter', 
    'Utilities', 'Demographics',
function ($scope, $mdComponentRegistry, $mdSidenav, $filter, Utilities, Demographics) {
  var vm_ = this;

  //---------------------------------------------------------------------- =VARS

  //#region vars

  //#region Passed in Settings
  vm_.localSettings = vm_.config;
  //#endregion

  //#region Local Settings
  vm_.isSideNavOpened = false;

  //#region Local Data
  vm_.localData = {
    alignmentSelection: angular.copy(Demographics.defaultAlignments),
    ageSelection: angular.copy(Demographics.defaultAgeCategories),
    authoritySelection: angular.copy(Demographics.defaultAuthorities),
    climateSelection: angular.copy(Demographics.defaultClimates),
    monsterSelection: angular.copy(Demographics.defaultMonsters),
    powerCenterTypesSelection: angular.copy(Demographics.defaultPowerCenterTypes),
    powerCenterSelection: angular.copy(Demographics.defaultPowerCenters),
    raceSelection: angular.copy(Demographics.defaultRaces),
    racialMixSelection: angular.copy(Demographics.defaultRacialMixtures),
    settlementSizeSelection: angular.copy(Demographics.defaultSettlementTypes),
    terrainSelection: angular.copy(Demographics.defaultTerrainTypes),
    tagSelection: angular.copy(Demographics.defaultTagList),
    tagTypeSelection: angular.copy(Demographics.tagTypes)
  };
  vm_.test = [
    'alignmentSelection',
    'ageSelection',
    'authoritySelection',
    'climateSelection',
    'monsterSelection',
    'powerCenterTypesSelection',
    'powerCenterSelection',
    'raceSelection',
    'racialMixSelection',
    'settlementSizeSelection',
    'terrainSelection',
    'tagSelection'
  ];
  vm_.testDisplay = '';
  vm_.getTag = function(tagKey) {
    var array = (vm_.testDisplay === 'tagSelection') ? vm_.localData.tagTypeSelection : vm_.localData.tagSelection;
    return _.find(array, function (o) { return o.id === tagKey; });
  };

  vm_.settlement = {
    settlementType: {},
    racialMix: {},
    generated: []
  };
  //#endregion

  //#region Templates
  vm_.settingsTemplateBase = 'global/components/demographics-generator/settings/';
  vm_.settingsTemplates = {
    globalSettings: vm_.settingsTemplateBase + 'demographics-generator-global-settings.view.html',
    tagSettings: vm_.settingsTemplateBase + 'demographics-generator-tag-settings.view.html',
    settlementSettings: vm_.settingsTemplateBase + 'demographics-generator-settlement-settings.view.html',
    powerCenterSettings: vm_.settingsTemplateBase + 'demographics-generator-power-center-settings.view.html',
    authoritySettings: vm_.settingsTemplateBase + 'demographics-generator-authority-settings.view.html',
    raceSettings: vm_.settingsTemplateBase + 'demographics-generator-race-settings.view.html',
    alignmentSettings: vm_.settingsTemplateBase + 'demographics-generator-alignment-settings.view.html',
    subraceSettings: vm_.settingsTemplateBase + 'demographics-generator-subrace-settings.view.html',
    racialMixSettings: vm_.settingsTemplateBase + 'demographics-generator-racial-mix-settings.view.html',
    ageSettings: vm_.settingsTemplateBase + 'demographics-generator-age-settings.view.html',
    climateSettings: vm_.settingsTemplateBase + 'demographics-generator-climate-settings.view.html',
    terrainSettings: vm_.settingsTemplateBase + 'demographics-generator-terrain-settings.view.html',
    socialClassSettings: vm_.settingsTemplateBase + 'demographics-generator-social-class-settings.view.html',
    professionSettings: vm_.settingsTemplateBase + 'demographics-generator-profession-settings.view.html'
  };
  vm_.settingsTemplate = '';
  //#endregion

  //#region Tag Vars
  vm_.filteredTags = [];
  //#endregion

  //#region Power Center Vars
  vm_.filteredPowerCenters = [];
  //#endregion

  //#region Race Vars
  vm_.filteredRaces = [];
  //#endregion

  //#endregion

  //#endregion

  //---------------------------------------------------------------------- =DEFINITIONS

  //#region function definitions

  //#region General Functions
  vm_.closeSettingsSidebar = closeSettingsSidebar_;
  vm_.openSettingsSidebar = openSettingsSidebar_;
  //#endregion

  //#region Tag Functions
  vm_.updateFilteredTags = updateFilteredTags_;
  //#endregion

  //#region Power Center Functions
  vm_.updateFilteredPowerCenters = updateFilteredPowerCenters_;
  //#endregion

  //#region Race Functions
  vm_.updateFilteredRaces = updateFilteredRaces_;
  //#endregion

  //#endregion

  //---------------------------------------------------------------------- =INIT

  /**
   * Initial activation of Controller.
   */
  vm_.$onInit = function() {
    vm_.localData.alignmentSelection = Utilities.generateValueRanges(vm_.localData.alignmentSelection);
    vm_.localData.powerCenterTypesSelection = Utilities.generateValueRanges(vm_.localData.powerCenterTypesSelection);
    vm_.localData.powerCenterSelection = Utilities.generateValueRanges(vm_.localData.powerCenterSelection);
  };

  //---------------------------------------------------------------------- =FUNCTIONS

  //#region Functions

  vm_.generateSettlement = generateSettlement_;
  function generateSettlement_() {
    var newSettlement = {};
    newSettlement.settlementName = vm_.settlement.settlementName;
    newSettlement.settlementType = vm_.settlement.settlementType;
    newSettlement.populationCount = vm_.getPopulationCount(newSettlement.settlementType.range.min,
        newSettlement.settlementType.range.max);
    newSettlement.readyCash = vm_.getReadyCash(newSettlement.settlementType.gpLimit, newSettlement.populationCount);
    newSettlement.military = vm_.getMilitary(newSettlement.populationCount);
    newSettlement.militia = vm_.getMilitia(newSettlement.populationCount);
    newSettlement.powerCenters = vm_.getPowerCenters(newSettlement.settlementType.powerCenterQuantity);

    vm_.settlement.generated.push(newSettlement);
  }

  vm_.updateSettlement = updateSettlement_;
  function updateSettlement_(settlement) {
    settlement.settlementName = vm_.settlement.settlementName;
    settlement.settlementType = vm_.settlement.settlementType;
    settlement.populationCount = vm_.getPopulationCount(settlement.settlementType.range.min,
        settlement.settlementType.range.max);
    settlement.readyCash = vm_.getReadyCash(settlement.settlementType.gpLimit, settlement.populationCount);
    settlement.military = vm_.getMilitary(settlement.populationCount);
    settlement.militia = vm_.getMilitia(settlement.populationCount);
    settlement.powerCenters = vm_.getPowerCenters(settlement.settlementType.powerCenterQuantity);
  }

  /**
   * Get the population of the settlement.
   *
   * @param {Number} min Minimum value.
   * @param {Number} max Maximum value.
   */
  vm_.getPopulationCount = getPopulationCount_;
  function getPopulationCount_(min, max) {
    return Utilities.getRandom(min, max);
  }

  /**
   * Get the ready cash or cash equivalent of the settlement.
   *
   * @param {Number} gpLimit Most expensive item available.
   * @param {Number} population Total population of the settlement.
   */
  vm_.getReadyCash = getReadyCash_;
  function getReadyCash_(gpLimit, population) {
    return (Math.floor(gpLimit / 2) * Math.floor(population / 10));
  }

  /**
   * Get the total number of full time guards or soldiers in the settlement.
   *
   * @param {Number} population Total population of the settlement.
   */
  vm_.getMilitary = getMilitary_;
  function getMilitary_(population) {
    return Math.floor(population / 100);
  }

  /**
   * Get the total number of militia members that can be raised in the settlement.
   *
   * @param {Number} population Total population of the settlement.
   */
  vm_.getMilitia = getMilitia_;
  function getMilitia_(population) {
    return Math.floor(population / 20);
  }

  /**
   * Get the power centers of the settlement.
   *
   * @param {Number} quantity Number of power centers to generate.
   */
  vm_.getPowerCenters = getPowerCenters_;
  function getPowerCenters_(quantity) {
    var powerCenters = [];
    for (var current = 0; current < quantity; current++) {
      var powerCenterType = Utilities.getItemFromWeightedObjectArray(vm_.localData.powerCenterTypesSelection,
          vm_.settlement.settlementType.powerCenterModifier);
      vm_.updateFilteredTags(vm_.localData.tagTypeSelection.POWER_CENTER_TYPE);
      var powerCenterSelection = [];
      for (var tagCounter = 0; tagCounter < powerCenterType.tags.length; tagCounter++) {
        var currentTagId = powerCenterType.tags[tagCounter];
        var currentTag = $filter('filter')(vm_.filteredTags, {id: currentTagId});
        if (currentTag.length > 0) {
          powerCenterSelection = $filter('filter')(vm_.localData.powerCenterSelection, {tags: currentTag[0].id});
        }
      }
      var powerCenter = Utilities.getItemFromWeightedObjectArray(powerCenterSelection);
      var alignment = Utilities.getItemFromWeightedObjectArray(vm_.localData.alignmentSelection);

      powerCenters.push({
        powerCenterType: powerCenterType,
        powerCenter: powerCenter,
        alignment: alignment
      });

      if (Utilities.getRandom(1, 100) <= powerCenterType.chanceForExtraMonstrous) {
        // need to tweak so that monstrous alignment weights don't correspond to other power center alignment weights.
        // maybe make it so that the monstrous alignment has a higher chance of being opposing alignment
        var monsterAlignment = Utilities.getItemFromWeightedObjectArray(vm_.localData.alignmentSelection);
        vm_.updateFilteredTags(vm_.localData.tagTypeSelection.ALIGNMENT);

        vm_.filteredMonsterList = [];
        // loop through tags on alignment... find alignment type tags.
        for (var tagCount = 0; tagCount < monsterAlignment.tags.length; tagCount++) {
          var currentMonsterTagId = monsterAlignment.tags[tagCount];
          var currentMonsterTag = $filter('filter')(vm_.filteredTags, {id: currentMonsterTagId});
          if (currentMonsterTag.length > 0) {
            var filtered = [];
            var monster = 0;

            // make rarities numeric. VC = 64, C = 32, UN = 16, R = 8, VR = 4, ER = 2, L = 1
            // when calculating, just loop through monsters, generate a range of values, and keep going
            // until you run out of monsters. the high number is the highest you get to in the array, lowest is 1.
            // this breaks the 'everything adds to 100' rule, but that doesnt really matter. unless I added them all up
            // and then transformed them into percentages of the total weighted value. then i could make it 100, no
            // matter what the total value.

            // Full Alignment
            if (_.indexOf(currentMonsterTag[0].tagTypes, vm_.localData.tagTypeSelection.ALIGN_FULL) > -1) {
              // get all monsters with specific alignment
              filtered = $filter('filter')(vm_.localData.monsterSelection, {tags: currentMonsterTagId});
              for (monster = 0; monster < filtered.length; monster++) {
                if (_.indexOf(vm_.filteredMonsterList, filtered[monster].id) < 0) {
                  vm_.filteredMonsterList.push(filtered[monster]);
                }
              }
              filtered.length = 0;
              monster = 0;
            }

            // Law/Chaos
            if (_.indexOf(currentMonsterTag[0].tagTypes, vm_.localData.tagTypeSelection.ALIGN_1) > -1) {
              if (currentMonsterTag[0] === vm_.localData.tagSelection.law) {
                // get monsters with ANY LAWFUL
                filtered = $filter('filter')(vm_.localData.monsterSelection, {tags: vm_.localData.tagSelection.al.id});
                for (monster = 0; monster < filtered.length; monster++) {
                  if (_.indexOf(vm_.filteredMonsterList, filtered[monster].id) < 0) {
                    vm_.filteredMonsterList.push(filtered[monster]);
                  }
                }
              } else {
                // get monsters with ANY CHAOTIC
                filtered = $filter('filter')(vm_.localData.monsterSelection, {tags: vm_.localData.tagSelection.ac.id});
                for (monster = 0; monster < filtered.length; monster++) {
                  if (_.indexOf(vm_.filteredMonsterList, filtered[monster].id) < 0) {
                    vm_.filteredMonsterList.push(filtered[monster]);
                  }
                }
              }
              filtered.length = 0;
              monster = 0;
            }

            // Good/Evil
            if (_.indexOf(currentMonsterTag[0].tagTypes, vm_.localData.tagTypeSelection.ALIGN_2) > -1) {
              if (currentMonsterTag[0] === vm_.localData.tagSelection.god) {
                // get monsters with ANY GOOD
                filtered = $filter('filter')(vm_.localData.monsterSelection, {tags: vm_.localData.tagSelection.ag.id});
                for (monster = 0; monster < filtered.length; monster++) {
                  if (_.indexOf(vm_.filteredMonsterList, filtered[monster].id) < 0) {
                    vm_.filteredMonsterList.push(filtered[monster]);
                  }
                }
              } else {
                // get monsters with ANY EVIL
                filtered = $filter('filter')(vm_.localData.monsterSelection, {tags: vm_.localData.tagSelection.ae.id});
                for (monster = 0; monster < filtered.length; monster++) {
                  if (_.indexOf(vm_.filteredMonsterList, filtered[monster].id) < 0) {
                    vm_.filteredMonsterList.push(filtered[monster]);
                  }
                }
              }
              filtered.length = 0;
              monster = 0;
            }

            // Neutral
            if (_.indexOf(currentMonsterTag[0].tagTypes, vm_.localData.tagTypeSelection.ALIGN_3) > -1) {
              // get monsters with ANY NEUTRAL
              filtered = $filter('filter')(vm_.localData.monsterSelection, {tags: vm_.localData.tagSelection.an.id});
              for (monster = 0; monster < filtered.length; monster++) {
                if (_.indexOf(vm_.filteredMonsterList, filtered[monster].id) < 0) {
                  vm_.filteredMonsterList.push(filtered[monster]);
                }
              }
              filtered.length = 0;
              monster = {};
            }
          }
        }

        // get all monsters with ANY ALIGNMENT
        var f = $filter('filter')(vm_.localData.monsterSelection, {tags: vm_.localData.tagSelection.aa.id});
        for (var m = 0; m < f.length; m++) {
          if (_.indexOf(vm_.filteredMonsterList, f[m].id) < 0) {
            vm_.filteredMonsterList.push(f[m]);
          }
        }
        f.length = 0;

        console.log('vm_.filteredMonsterList', vm_.filteredMonsterList);
        // var monsterAlignmentTags = $filter('filter')(monsterAlignment.tags,
        //     {tagTypes: vm_.localData.tagTypeSelection.ALIGNMENT});
        // console.log('filtered tags', vm_.filteredTags);
        // console.log('monster alignment tags', monsterAlignmentTags);



        powerCenters.push({
          powerCenterType: {
            isAllowed: true,
            name: 'Monstrous',
            type: 'powerCenterType',
            tags: [
              vm_.localData.tagSelection.dflt.id,
              vm_.localData.tagSelection.dmg.id,
              vm_.localData.tagSelection.pcmn.id
            ],
            weight: {
              default: 0,
              custom: 0
            },
            chanceForExtraMonstrous: 0,
            key: 'monstrous',
            id: 'pctr-004'
          },
          powerCenter: {
            name: 'Monster'
          },
          alignment: monsterAlignment
        });
      }

      // if (Utilities.getRandom(1, 100) <= powerCenter.chanceForExtraMonstrous) {
      //   var customAlignmentSelection = angular.copy(vm_.powerCenterAlignmentSelection);
      //   for (var align = 0; align < customAlignmentSelection.length; align++) {
      //     align.weight = (align.alignment === 'True Neutral') ? 12 : 11;
      //   }
      //   var monsterAlignment = Utilities.getItemFromWeightedObjectArray(customAlignmentSelection);
      //   var monsterType = Utilities.getItemFromWeightedObjectArray(monsterAlignment.monstrous);
      //   powerCenters.push({
      //     type: 'Monstrous: ' + monsterType.type,
      //     alignment: monsterAlignment.alignment
      //   });
      // }
    }
    return powerCenters;
  }

  //#region Tag Functions
  function updateFilteredTags_(filterBy) {
    if (!filterBy || filterBy === 'none') {
      vm_.filteredTags = [];
    } else {
      vm_.filteredTags = $filter('dictionaryFilter')(vm_.localData.tagSelection, {tagTypes: filterBy});
    }
  }
  //#endregion

  //#region PowerCenter Functions
  function updateFilteredPowerCenters_(filterBy) {
    if (!filterBy || filterBy === 'none' || filterBy === {}) {
      vm_.filteredPowerCenters = [];
    } else {
      for (var tagCounter = 0; tagCounter < filterBy.tags.length; tagCounter++) {
        var currentTagId = filterBy.tags[tagCounter];
        var currentTag = $filter('filter')(vm_.filteredTags, {id: currentTagId});
        if (currentTag.length > 0) {
          vm_.filteredPowerCenters = $filter('filter')(vm_.localData.powerCenterSelection, {tags: currentTag[0].id});
        }
      }
    }
  }
  //#endregion

  //#region Race Functions
  function updateFilteredRaces_(filterBy) {
    if (!filterBy || filterBy === 'none') {
      vm_.filteredRaces = [];
    } else {
      vm_.filteredRaces = $filter('filter')(vm_.localData.raceSelection, {tags: filterBy.id});
    }
  }
  //#endregion

  //#region Sidebar Functions
  /**
   * Close the sidebar. Stopped using toggle because angular material doesn't send close events. Doing it manually.
   */
  function closeSettingsSidebar_() {
    vm_.settingsTemplate = '';
  }

  /**
   * Open the sidebar. Stopped using toggle because angular material doesn't send close events. Doing it manually.
   *
   * @param {object} params Object containing parameters for an action to be executed on open.
   */
  function openSettingsSidebar_(template, params) {
    if (params) {
      vm_.populateSideBarPresets(params);
      // switch(params.action) {
      //   case 'populateEditArray':
      //     vm_.editArray = angular.copy(params.object);
      //     break;
      // }
    }
    vm_.settingsTemplate = vm_.settingsTemplates[template];
    vm_.isSideNavOpened = !$mdSidenav('md-sidenav-right').isOpen();
    if(vm_.isSideNavOpened) {
      $mdSidenav('md-sidenav-right').open();
    }
  }

  vm_.populateSideBarPresets = populateSideBarPresets_;
  function populateSideBarPresets_(params) {
    switch (params.action) {
      case 'populateEditArray':
        vm_.editArray = angular.copy(params.object);
        break;
      case 'populateTagFilter':
        var tagArray = $filter('dictionaryToArray')(vm_.localData.tagSelection);
        vm_.filteredTags = Utilities.getMatches(tagArray, 'tagTypes', params.tagType, 'contains');
        break;
    }
  }
  //#endregion

  //#endregion

  //---------------------------------------------------------------------- =WATCHERS

  //#region Watchers

  // Watching the sidebar. Toggle doesn't send close events, so this was implemented.
  $scope.$watch(function(){
    return $mdComponentRegistry.get('md-sidenav-right') ? $mdSidenav('md-sidenav-right').isOpen() : false;
  }, function(newVal){
    vm_.isSideNavOpened = newVal;
    if (!vm_.isSideNavOpened) {
      vm_.closeSettingsSidebar();
    }
  });

  //#endregion

}]);
