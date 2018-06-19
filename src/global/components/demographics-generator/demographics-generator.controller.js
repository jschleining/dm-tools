var app = angular.module('dmTools');

app.controller('DemographicsGeneratorController', ['$scope', '$mdComponentRegistry', '$mdSidenav', '$filter', 
    'Utilities', 'Demographics',
function ($scope, $mdComponentRegistry, $mdSidenav, $filter, Utilities, Demographics) {
  var vm_ = this;

  //---------------------------------------------------------------------- =VARS

  //#region vars
  vm_.isSidebarOpen = false;
  vm_.localSettings = vm_.config;
  vm_.localData = {
    alignmentSelection: angular.copy(Demographics.defaultAlignments),
    ageSelection: angular.copy(Demographics.defaultAgeCategories),
    authoritySelection: angular.copy(Demographics.defaultAuthorities),
    classSelection: angular.copy(Demographics.defaultClasses),
    climateSelection: angular.copy(Demographics.defaultClimates),
    monsterSelection: angular.copy(Demographics.defaultMonsters),
    powerCenterTypesSelection: angular.copy(Demographics.defaultPowerCenterTypes),
    powerCenterSelection: angular.copy(Demographics.defaultPowerCenters),
    raceSelection: angular.copy(Demographics.defaultRaces),
    racialMixSelection: angular.copy(Demographics.defaultRacialMixtures),
    raritySelection: angular.copy(Demographics.defaultRarities),
    settlementSizeSelection: angular.copy(Demographics.defaultSettlementTypes),
    terrainSelection: angular.copy(Demographics.defaultTerrainTypes),
    tagSelection: angular.copy(Demographics.defaultTagList),
    tagTypeSelection: angular.copy(Demographics.tagTypes)
  };
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
    socialClassSettings: vm_.settingsTemplateBase + 'demographics-generator-social-class-settings.view.html',
    professionSettings: vm_.settingsTemplateBase + 'demographics-generator-profession-settings.view.html',
    climateSettings: vm_.settingsTemplateBase + 'demographics-generator-climate-settings.view.html',
    terrainSettings: vm_.settingsTemplateBase + 'demographics-generator-terrain-settings.view.html'
  };
  vm_.settingsTemplate = '';
  vm_.generatorSettings = {
    settlementName: '',
    settlementType: {},
    racialMix: {}
  };
  vm_.settlement = {
    settlementType: {},
    racialMix: {},
    generated: []
  };
  vm_.editArray = [];
  vm_.filteredTags = [];
  vm_.filteredPowerCenters = [];
  vm_.filteredRaces = [];
  vm_.powerCenterFilter = 'None';
  //#endregion

  //---------------------------------------------------------------------- =DEFINITIONS

  //#region function definitions
  vm_.closeSidebar = closeSidebar_;
  vm_.openSidebar = openSidebar_;
  vm_.populateSidebarPresets = populateSidebarPresets_;
  vm_.resetConfigSettings = resetConfigSettings_;
  vm_.updateFilteredTags = updateFilteredTags_;
  vm_.updateFilteredPowerCenters = updateFilteredPowerCenters_;
  vm_.updateFilteredRaces = updateFilteredRaces_;
  vm_.generateSettlement = generateSettlement_;
  vm_.updateSettlement = updateSettlement_;
  vm_.deleteSettlement = deleteSettlement_;
  vm_.getSettlementPopulation = getSettlementPopulation_;
  vm_.getReadyCash = getReadyCash_;
  vm_.getMilitary = getMilitary_;
  vm_.getMilitia = getMilitia_;
  vm_.getPowerCenters = getPowerCenters_;
  vm_.getRacialMix = getRacialMix_;
  vm_.updateFilteredMonsterList = updateFilteredMonsterList_;
  vm_.getAgeDemographicsMix = getAgeDemographicsMix_;
  vm_.getChildCount = getChildCount_;
  vm_.calculatePopulationDivision = calculatePopulationDivision_;
  vm_.getClassDemographics = getClassDemographics_;
  // //#endregion

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
  function generateSettlement_() {
    var newSettlement = {};
    vm_.updateSettlement(newSettlement, true);
    vm_.settlement.generated.push(newSettlement);
  }

  function updateSettlement_(settlement, isNewSettlement) {
    if (isNewSettlement) {
      settlement.settlementName = angular.copy(vm_.generatorSettings.settlementName);
      vm_.generatorSettings.settlementName = '';
      settlement.settlementType = angular.copy(vm_.generatorSettings.settlementType);
      vm_.generatorSettings.settlementType = 'none';
      settlement.racialMix = angular.copy(vm_.generatorSettings.racialMix);
      vm_.generatorSettings.racialMix = 'none';
    }

    settlement.populationCount = vm_.getSettlementPopulation(settlement.settlementType.range.min,
        settlement.settlementType.range.max);
    settlement.readyCash = vm_.getReadyCash(settlement.settlementType.gpLimit, settlement.populationCount);
    settlement.military = vm_.getMilitary(settlement.populationCount);
    settlement.militia = vm_.getMilitia(settlement.populationCount);
    settlement.powerCenters = vm_.getPowerCenters(settlement.settlementType.powerCenterQuantity);
    settlement.calculatedRacialDemographics = vm_.getRacialMix(settlement.racialMix.mix, settlement.populationCount);
    settlement.calculatedClassDemographics = vm_.getClassDemographics(settlement, true);

    vm_.getAgeDemographicsMix(settlement.calculatedRacialDemographics, 'weighted', 'weighted');
  }

  /**
   * Delete a settlement.
   *
   * @param {Number} index INdex of a settlement to delete.
   */
  function deleteSettlement_(index) {
    vm_.settlement.generated.splice(index, 1);
  }

  /**
   * Get the population of the settlement.
   *
   * @param {Number} min Minimum value.
   * @param {Number} max Maximum value.
   */
  function getSettlementPopulation_(min, max) {
    return Utilities.getRandom(min, max);
  }

  /**
   * Get the ready cash or cash equivalent of the settlement.
   *
   * @param {Number} gpLimit Most expensive item available.
   * @param {Number} population Total population of the settlement.
   */
  function getReadyCash_(gpLimit, population) {
    return (Math.floor(gpLimit / 2) * Math.floor(population / 10));
  }

  /**
   * Get the total number of full time guards or soldiers in the settlement.
   *
   * @param {Number} population Total population of the settlement.
   */
  function getMilitary_(population) {
    return Math.floor(population / 100);
  }

  /**
   * Get the total number of militia members that can be raised in the settlement.
   *
   * @param {Number} population Total population of the settlement.
   */
  function getMilitia_(population) {
    return Math.floor(population / 20);
  }

  /**
   * Get the power centers of the settlement.
   *
   * @param {Number} quantity Number of power centers to generate.
   */
  function getPowerCenters_(quantity) {
    var powerCenters = [];
    for (var current = 0; current < quantity; current++) {
      var powerCenterType = angular.copy(Utilities.getItemFromWeightedObjectArray(vm_.localData.powerCenterTypesSelection,
          vm_.settlement.settlementType.powerCenterModifier));
      vm_.updateFilteredTags(vm_.localData.tagTypeSelection.POWER_CENTER_TYPE);
      var powerCenterSelection = [];
      for (var tagCounter = 0; tagCounter < powerCenterType.tags.length; tagCounter++) {
        var currentTagId = powerCenterType.tags[tagCounter];
        var currentTag = $filter('filter')(vm_.filteredTags, {id: currentTagId});
        if (currentTag.length > 0) {
          powerCenterSelection = $filter('filter')(vm_.localData.powerCenterSelection, {tags: currentTag[0].id});
        }
      }
      var powerCenter = angular.copy(Utilities.getItemFromWeightedObjectArray(powerCenterSelection));
      var alignment = angular.copy(Utilities.getItemFromWeightedObjectArray(vm_.localData.alignmentSelection));

      powerCenters.push({
        powerCenterType: powerCenterType,
        powerCenter: powerCenter,
        alignment: alignment
      });

      if (Utilities.getRandom(1, 100) <= powerCenterType.chanceForExtraMonstrous) {

        // loop through power center tags, find alignment 1 and alignment 2 tag. do following:
        // create array of the 3 choices in order (LNC, GNE). if alignment 1 matches an element in the array, set that
        // one to have a weight of 20. if it is the first element, set the second element to 30 and the third element
        // to 50. Reverse if it is the last element. If it is the middle element, set the other two to 40 each. repeat
        // this for alignemnt 2. Generate weighted values for each. Pick a random one of each. Finally, loop through the
        // alignment array and retrieve the one with both parts. Caveat: If both parts are neutral, find the one that has
        // the true neutral tag on it.

        // This will result in a monster that has a higher chance of being an opposed alignment than the power center
        // it is selected for and is a better way to do it than just using the same alignemnt weights or figuring
        // out how to change them

        var monsterAlignment = angular.copy(Utilities.getItemFromWeightedObjectArray(vm_.localData.alignmentSelection));
        vm_.updateFilteredTags(vm_.localData.tagTypeSelection.ALIGNMENT);

        vm_.filteredMonsterList = [];
        // loop through tags on alignment... find alignment type tags.
        for (var tagCount = 0; tagCount < monsterAlignment.tags.length; tagCount++) {
          var currentMonsterTagId = monsterAlignment.tags[tagCount];
          var currentMonsterTag = $filter('filter')(vm_.filteredTags, {id: currentMonsterTagId});
          if (currentMonsterTag.length > 0) {
            var filtered = [];
            var monster = 0;

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
          }
        }

        // populate monstrous power center
        Utilities.generateValueRanges(vm_.filteredMonsterList);
        powerCenters.push({
          powerCenterType: {
            name: 'Monstrous',
            tags: [
              vm_.localData.tagSelection.dflt.id,
              vm_.localData.tagSelection.dmg.id,
              vm_.localData.tagSelection.pcmn.id
            ]
          },
          powerCenter: angular.copy(Utilities.getItemFromWeightedObjectArray(vm_.filteredMonsterList)),
          alignment: monsterAlignment
        });
      }
    }
    return powerCenters;
  }

  function getRacialMix_(mix, totalPopulation, raceMethod, subraceMethod) {
    raceMethod = raceMethod || 'percent';
    subraceMethod = subraceMethod || 'weighted';
    var populationRemaining = totalPopulation;
    var calculatedDemographics = [];

    vm_.calculatePopulationDivision(mix, totalPopulation, raceMethod);
    for (var mixItem = 0; mixItem < mix.length; mixItem++) {
      if (mix[mixItem].races) {
        vm_.calculatePopulationDivision(mix[mixItem].races, mix[mixItem].population.census, raceMethod);
      }
    }

    for (var item = 0; item < mix.length; item++) {
      var race = {};
      if (!mix[item].races) {
        race = angular.copy($filter('filter')(vm_.localData.raceSelection, {id: mix[item].raceId})[0]);
        race.population = mix[item].population;
        calculatedDemographics.push(race);
      } else {
        for (var subItem = 0; subItem < mix[item].races.length; subItem++) {
          race = angular.copy($filter('filter')(vm_.localData.raceSelection, {id: mix[item].races[subItem].raceId})[0]);
          race.population = mix[item].races[subItem].population;
          calculatedDemographics.push(race);
        }
      }
    }

    for (var itm = 0; itm < calculatedDemographics.length; itm++) {
      vm_.calculatePopulationDivision(calculatedDemographics[itm].subraces, calculatedDemographics[itm].population.census, subraceMethod);
    }

    calculatedDemographics = _.sortBy(calculatedDemographics, 'population');
    return calculatedDemographics;
  }

  function updateFilteredTags_(filterBy) {
    if (!filterBy || filterBy === 'none') {
      vm_.filteredTags = [];
    } else {
      vm_.filteredTags = $filter('dictionaryFilter')(vm_.localData.tagSelection, {tagTypes: filterBy});
    }
  }

  function updateFilteredPowerCenters_(filterBy) {
    var tagArray = $filter('dictionaryToArray')(vm_.localData.tagSelection);
    vm_.filteredTags = Utilities.getMatches(tagArray, 'tagTypes', 'powerCenterType', 'contains');

    if (!filterBy || filterBy === 'none' || filterBy === {}) {
      vm_.filteredPowerCenters = [];
    } else if (filterBy === 'Monstrous') {
      vm_.filteredPowerCenters = vm_.localData.monsterSelection;
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

  function updateFilteredMonsterList_(filterBy) {
    var tagArray = $filter('dictionaryToArray')(vm_.localData.tagSelection);
    vm_.filteredTags = Utilities.getMatches(tagArray, 'tagTypes', 'alignment', 'contains');

    if (!filterBy || filterBy === 'none' || filterBy === {}) {
      vm_.filteredPowerCenters = [];
    } else {
      for (var tagCounter = 0; tagCounter < filterBy.tags.length; tagCounter++) {
        var currentTagId = filterBy.tags[tagCounter];
        var currentTag = $filter('filter')(vm_.filteredTags, {id: currentTagId});
        if (currentTag.length > 0) {
          vm_.filteredPowerCenters = $filter('filter')(vm_.localData.monsterSelection, {tags: currentTag[0].id});
        }
      }
    }
  }

  function updateFilteredRaces_(filterBy) {
    if (!filterBy || filterBy === 'none') {
      vm_.filteredRaces = [];
    } else {
      vm_.filteredRaces = $filter('filter')(vm_.localData.raceSelection, {tags: filterBy.id});
    }
  }

  function getAgeDemographicsMix_(races, raceMethod, subraceMethod) {
    raceMethod = raceMethod || 'percent';
    subraceMethod = subraceMethod || 'percent';

    for (var raceCounter = 0; raceCounter < races.length; raceCounter++) {
      races[raceCounter].ageCategories = angular.copy(vm_.localData.ageSelection);
      vm_.calculatePopulationDivision(races[raceCounter].ageCategories, races[raceCounter].population.census, raceMethod);

      for (var subraceCounter = 0; subraceCounter < races[raceCounter].subraces.length; subraceCounter++) {
        var subrace = races[raceCounter].subraces[subraceCounter];
        subrace.ageCategories = angular.copy(vm_.localData.ageSelection);
        vm_.calculatePopulationDivision(subrace.ageCategories, subrace.population.census, subraceMethod);
      }
    }

    vm_.getChildCount(races);
  }

  function getChildCount_(races) {
    for (var rn = 0; rn < races.length; rn++) {
      var race = races[rn];
      var raceChildCount = Math.floor(race.population.census * (race.percentageOfChildren / 100));
      var remainingChildCount = raceChildCount;

      race.ageCategories.unshift({
        name: 'Children',
        population: {
          census: raceChildCount,
          percent: ((raceChildCount / race.population.census) * 100).toFixed(2)
        }
      });

      race.subraces = _.chain(race.subraces).
          sortBy(function(obj) {return obj.name}).
          reverse().
          sortBy(function(obj) {return obj.weight.custom}).
          reverse().
          value();

      for (var srn = 0; srn < race.subraces.length; srn++) {
        var subrace = race.subraces[srn];
        var subraceChildCount = Math.ceil(raceChildCount * (subrace.percentOfTotalChildrenForRace / 100));
        if (subraceChildCount > remainingChildCount) {
          subraceChildCount = remainingChildCount;
        }
        remainingChildCount -= subraceChildCount;

        subrace.ageCategories.unshift({
          name: 'Children',
          population: {
            census: subraceChildCount,
            percent: ((subraceChildCount / raceChildCount) * 100).toFixed(2)
          }
        });
      }
    }
  }

  function calculatePopulationDivision_(array, totalPopulation, arrayMethod) {
    arrayMethod = arrayMethod || 'weighted';

    if (arrayMethod === 'weighted') {
      Utilities.generateValueRanges(array);

      for (var counter = 0; counter < array.length; counter++) {
        array[counter].population = {
          census: 0,
          percent: 0
        }
      }
      for (var c = 0; c < totalPopulation; c++) {
        // keep trying to get an item from the array for as long as it returns
        // an object that has either weight 0 or is not allowed.
        var arrayItem = Utilities.getItemFromWeightedObjectArray(array);
        while(arrayItem.weight.custom === 0 || !arrayItem.isAllowed) {
          arrayItem = Utilities.getItemFromWeightedObjectArray(array);
        }

        arrayItem.population.census++;
        arrayItem.population.percent = 
            ((arrayItem.population.census / totalPopulation) * 100).toFixed(2);
      }
    } else {
      var populationRemaining = totalPopulation;

      array = _.chain(array).
          sortBy(function(obj) {return obj.name}).
          reverse().
          sortBy(function(obj) {return obj.weight.custom}).
          reverse().
          value();

      // reversing it if enough population. This fixes a scenario where
      // it may populate items weirdly. if there is too low of a population,
      // it will start with the highest percentage first. Otherwise, this
      // condition occurs and it allows population from least to greatest.
      if (totalPopulation >= array.length * 4) {
        array.reverse();
      }

      for (var item = 0; item < array.length; item++) {
        //if weight > 0 and still some remaining
        if (array[item].weight.custom > 0 && populationRemaining > 0) {
          var itemPercentage = array[item].weight.custom / 100;
          var itemCount = Math.ceil(totalPopulation * itemPercentage);
          if (itemCount > populationRemaining) {
            itemCount = populationRemaining
          }
          populationRemaining -= itemCount;
          array[item].population = {
            census: itemCount,
            percent: ((itemCount / totalPopulation) * 100).toFixed(2)
          };
        } else {
          //handle weight 0 or none remaining
          array[item].population = {
            census: 0,
            percent: 0
          };
        }
      }

      // If list was initially sorted, sort back into correct order.
      if (totalPopulation >= array.length * 4) {
        // if there is a preset order, sort by it. Otherwise, reverse so that
        // it goes from highest to lowest.
        if (array[0].order) {
          array = _.sortBy(array, function(obj) {return obj.order.custom});
        } else {
          array.reverse();
        }
      }
    }
  }

  // this is going to need to be rewritten to account for not leveling NPCs, or even not having NPC classes.
  // also, as this is old code, it could stand to be cleaned up.
  //http://www.giantitp.com/forums/showthread.php?554547-5e-NPC-Classes
  //https://docs.google.com/document/d/19HORKsBEZ_RrE895usgX_iYpcAHFCL_pCdf8BIx2fCM/edit
  function getClassDemographics_(settlement, useNPCClassLevels) {
    var remaining = settlement.populationCount;
    var calculatedClasses = [];
    var npcClasses = [];

    // handle all levels for PC classes, and levels down to 2nd for NPC classes.
    // needs to update to account for not leveling NPCs
    for (var classCounter = 0; classCounter < vm_.localData.classSelection.length; classCounter++) {
      var currentClass = angular.copy(vm_.localData.classSelection[classCounter]);
      currentClass.population = {
        census: 0,
        percent: 0,
        levels: []
      };

      var die = _.findWhere(vm_.localData.raritySelection, {key: currentClass.rarity.custom.key});
      var quantity = (currentClass.isNpc) ? settlement.settlementType.classes.highLevelNPCQuantity : 1;

      // get each high level member of this class
      for (var currentHighLevel = 0; currentHighLevel < quantity; currentHighLevel++) {
        var currentHighestLevel = 0;

        // get current high level for this class
        for (var dieNum = 0; dieNum < currentClass.rolls; dieNum++) {
          currentHighestLevel += Utilities.getRandom(1, die.classInfo.dieType);
        }
        currentHighestLevel += settlement.settlementType.classes.classLevelModifier;

        // if a class might get extra levels based on the settlement
        if (settlement.settlementType.classes.chanceToAddLevelsToClass > 0) {
          // if current class exists in the array of classes that might have levels added
          if (settlement.settlementType.classes.classesToCheckForAddedLevels.indexOf(currentClass.name) > -1) {
            var rand = Utilities.getRandom(1, 100);
            // if the chance to add succeeds
            if (rand <= settlement.settlementType.classes.chanceToAddLevelsToClass) {
              currentHighestLevel += settlement.settlementType.classes.levelsToAdd;
            }
          }
        }

        // start looping through and adding members of the class
        var currentLevel = currentHighestLevel;
        var currentQuantity = 1;
        if (currentLevel > 0) {
          var currentLevelIndex = Utilities.getObjectIndex(currentClass.population.levels, 'level', currentLevel);
          if (currentLevelIndex > -1) {
            currentClass.population.levels[currentLevelIndex].quantity += currentQuantity;
          } else {
            currentClass.population.levels.push(
                {
                  level: currentLevel,
                  quantity: currentQuantity
                }
            );
          }
          remaining -= currentQuantity;
          while (Math.floor(currentLevel / 2) >= 1) {
            currentLevel = Math.floor(currentLevel / 2);
            currentQuantity *= 2;
            if (currentClass.isNpc && currentLevel === 1) {
              break;
            } else {
              remaining -= currentQuantity;
              currentLevelIndex = Utilities.getObjectIndex(currentClass.population.levels, 'level', currentLevel);
              if (currentLevelIndex > -1) {
                currentClass.population.levels[currentLevelIndex].quantity += currentQuantity;
              } else {
                currentClass.population.levels.push(
                  {
                    level: currentLevel,
                    quantity: currentQuantity
                  }
                );
              }
            }
          }
        }

        // sort by highest level
        currentClass.population.levels = _.sortBy(currentClass.population.levels, 'level').reverse();
        // add up the total number of members of this class
        for (var count = 0; count < currentClass.population.levels.length; count++) {
          currentClass.population.census += currentClass.population.levels[count].quantity;
        }
      }

      // push the class into the correct array
      if (!currentClass.isNpc) {
        calculatedClasses.push(currentClass);
      } else {
        npcClasses.push(currentClass);
      }
    }

    // handle level 1 NPCs
    var npcLevels = [];
    for (var npccls = 0; npccls < npcClasses.length; npccls++) {
      npcLevels.push({
        npcClassId: npcClasses[npccls].id,
        levels: npcClasses[npccls].population
      });
      npcClasses[npccls].population = null;
    }
    var totalNPCs = remaining;
    vm_.calculatePopulationDivision(npcClasses, totalNPCs, 'percentage');
    for (var npcClass = 0; npcClass < npcClasses.length; npcClass++) {
      var storedItem = _.findWhere(npcLevels, {npcClassId: npcClasses[npcClass].id});
      npcClasses[npcClass].population.levels = storedItem.levels.levels;

      if (_.findWhere(npcClasses[npcClass].population.levels, {level: 1})) {
        _.findWhere(npcClasses[npcClass].population.levels, {level: 1}).quantity +=
            npcClasses[npcClass].population.census;
      } else {
        npcClasses[npcClass].population.levels.push({
          level: 1,
          quantity: npcClasses[npcClass].population.census
        });
      }

      npcClasses[npcClass].population.census += storedItem.levels.census;
      npcClasses[npcClass].population.percent = 0;

      calculatedClasses.push(npcClasses[npcClass]);
    }

    return calculatedClasses;
  }
  
  /**
   * Close the sidebar. Stopped using toggle because angular material doesn't send close events. Doing it manually.
   */
  function closeSidebar_() {
    vm_.settingsTemplate = '';
  }
  
  /**
   * Reset Settings options that are specific to setting configs.
   */
  function resetConfigSettings_() {
    
  }
  
  /**
   * Open the sidebar. Stopped using toggle because angular material doesn't send close events. Doing it manually.
   *
   * @param {object} params Object containing parameters for an action to be executed on open.
   */
  function openSidebar_(template, params) {
    if (params) {
      vm_.populateSidebarPresets(params);
    }
    vm_.settingsTemplate = vm_.settingsTemplates[template];
    vm_.isSidebarOpen = !$mdSidenav('md-sidenav-right').isOpen();
    if(vm_.isSidebarOpen) {
      $mdSidenav('md-sidenav-right').open();
    }
  }

  function populateSidebarPresets_(params) {
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

  //---------------------------------------------------------------------- =WATCHERS

  //#region Watchers
  // Watching the sidebar. Toggle doesn't send close events, so this was implemented.
  $scope.$watch(function(){
    return $mdComponentRegistry.get('md-sidenav-right') ? $mdSidenav('md-sidenav-right').isOpen() : false;
  }, function(newVal){
    vm_.isSidebarOpen = newVal;
    if (!vm_.isSidebarOpen) {
      vm_.closeSidebar();
    }
  });
  //#endregion

}]);
