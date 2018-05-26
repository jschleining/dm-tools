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
    socialClassSettings: vm_.settingsTemplateBase + 'demographics-generator-social-class-settings.view.html',
    professionSettings: vm_.settingsTemplateBase + 'demographics-generator-profession-settings.view.html',
    climateSettings: vm_.settingsTemplateBase + 'demographics-generator-climate-settings.view.html',
    terrainSettings: vm_.settingsTemplateBase + 'demographics-generator-terrain-settings.view.html'
  };
  vm_.settingsTemplate = '';
  //#endregion

  //#region Temporary Items for editing
  vm_.newObject = {};
  vm_.editObject = {};
  vm_.tempObject = {};
  vm_.editArray = [];
  //#endregion

  //#region App Config Vars
  // vm_.appConfigSettings = {
  //   global: {
  //     useSubraces: false,
  //     useAgeCategories: false,
  //     useSocialClass: false,
  //     useProfessions: false
  //   },
  //   ageSettings: {
  //     editMode: false,
  //     editType: 'individual'
  //   }
  // };
  // vm_.tagSelection = angular.copy(Demographics.defaultTagList);
  //#endregion

  //#region Tag Vars
  vm_.filteredTags = [];
  //#endregion


  //#region Settlement Vars
  // vm_.settlementSelection = angular.copy(Demographics.defaultSettlementTypes);
  // //TODO: This doesnt work. Passing an object array into a directive was failing so I did it the crappy way. FIX!!!
  // vm_.settlementCustomFields = [
  //   {
  //     name: 'GP Limit',
  //     property: 'gpLimit',
  //     checks: ['min-1']
  //   },
  //   {
  //     name: 'Power Centers',
  //     property: 'powerCenterQuantity',
  //     checks: ['min-1']
  //   },
  //   {
  //     name: 'P.C. Modifier',
  //     property: 'powerCenterModifier',
  //     checks: []
  //   }
  // ];
  //#endregion

  //#region Power Center Vars
  vm_.filteredPowerCenters = [];
  //#endregion

  //#region Authority Vars
  // vm_.authoritySelection = angular.copy(Demographics.defaultAuthorities);
  //#endregion

  //#region Race Vars
  // vm_.raceSelection = angular.copy(Demographics.defaultRaces);
  // vm_.selectedRaces = [];
  vm_.filteredRaces = [];
  //#endregion

  //#region Racial Mixture Vars
  // vm_.racialMixSelection = angular.copy(Demographics.defaultRacialMixtures);
  //#endregion

  //#region Age Vars INCOMPLETE
  // vm_.ageSelection = angular.copy(Demographics.defaultAgeCategories);
  // vm_.ageSettingsMode = 'Individual';
  //#endregion

  //#region Social Class Vars
  // vm_.socialClassSelection = [];
  //#endregion

  //#region Profession Vars
  // vm_.professionSelection = [];
  //#endregion

  //#endregion

  //#endregion

  //---------------------------------------------------------------------- =DEFINITIONS

  // //#region function definitions
  //
  //#region General Functions
  // vm_.checkForCustomObjects = checkForCustomObjects_;
  // vm_.checkForButtonDisabled = checkForButtonDisabled_;
  // vm_.clearEdits = clearEdits_;
  vm_.closeSettingsSidebar = closeSettingsSidebar_;
  // vm_.populateArrayList = populateArrayList_;
  vm_.resetConfigSettings = resetConfigSettings_;
  // vm_.setEditArray = setEditArray_;
  // vm_.setEditObject = setEditObject_;
  vm_.openSettingsSidebar = openSettingsSidebar_;
  //#endregion
  //
  // //#region Object Functions
  // vm_.addNewObject = addNewObject_;
  // vm_.createNewObject = createNewObject_;
  // vm_.deleteCustomObject = deleteCustomObject_;
  // vm_.deleteCustomObjectGlobal = deleteCustomObjectGlobal_;
  // vm_.resetNewObject = resetNewObject_;
  // vm_.updateAllowedObjects = updateAllowedObjects_;
  // vm_.updateCustomArray = updateCustomArray_;
  // vm_.updateCustomObject = updateCustomObject_;
  // vm_.updateCustomObjectGlobal = updateCustomObjectGlobal_;
  // vm_.updateObjectWeight = updateObjectWeight_;
  // vm_.updateRemovedWeightInArrayList = updateRemovedWeightInArrayList_;
  // //#endregion

  //#region Tag Functions
  vm_.updateFilteredTags = updateFilteredTags_;
  //#endregion

  //#region Power Center Functions
  vm_.updateFilteredPowerCenters = updateFilteredPowerCenters_;
  //#endregion

  // //#region Authority Functions
  // vm_.addCustomAuthority = addCustomAuthority_;
  // //#endregion

  // //#region Race Functions
  vm_.updateFilteredRaces = updateFilteredRaces_;
  // vm_.addCustomRace = addCustomRace_;
  // vm_.addCustomSubRace = addCustomSubRace_;
  // vm_.getDefaultAllowedRaces = getDefaultAllowedRaces_;
  // vm_.populateDefaultSelectedRaces = populateDefaultSelectedRaces_;
  // vm_.resetObjectWeight = resetObjectWeight_;
  // vm_.updateAllowedRaces = updateAllowedRaces_;
  // //#endregion

  // //#region Age Functions
  // vm_.updateGlobalDefaultAges = updateGlobalDefaultAges_;
  // vm_.updateAges = updateAges_;
  // vm_.updateAge = updateAge_;
  // vm_.updateAgeConfigs = updateAgeConfigs_;
  // //#endregion
  //
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

  vm_.generateSettlement = generateSettlement_;
  function generateSettlement_() {
    var newSettlement = {};
    vm_.updateSettlement(newSettlement, true);
    vm_.settlement.generated.push(newSettlement);
  }

  vm_.updateSettlement = updateSettlement_;
  function updateSettlement_(settlement, isNewSettlement) {
    if (isNewSettlement) {
      settlement.settlementName = angular.copy(vm_.generatorSettings.settlementName);
      vm_.generatorSettings.settlementName = '';
      settlement.settlementType = angular.copy(vm_.generatorSettings.settlementType);
      vm_.generatorSettings.settlementType = 'none';
      settlement.racialMix = angular.copy(vm_.generatorSettings.racialMix);
      vm_.generatorSettings.racialMix = 'none';
    }

    settlement.populationCount = vm_.getPopulationCount(settlement.settlementType.range.min,
        settlement.settlementType.range.max);
    settlement.readyCash = vm_.getReadyCash(settlement.settlementType.gpLimit, settlement.populationCount);
    settlement.military = vm_.getMilitary(settlement.populationCount);
    settlement.militia = vm_.getMilitia(settlement.populationCount);
    settlement.powerCenters = vm_.getPowerCenters(settlement.settlementType.powerCenterQuantity);
    settlement.calculatedRacialDemographics = vm_.getRacialMix(settlement.racialMix, settlement.populationCount);

    vm_.getAgeDemographicsMix(settlement.calculatedRacialDemographics);

    // do not need to populate here. prepopulated in service.
    // vm_.populateAgeCategories(settlement.calculatedRacialDemographics);
  }

  vm_.deleteSettlement = deleteSettlement_;
  function deleteSettlement_(index) {
    vm_.settlement.generated.splice(index, 1);
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
        // need to tweak so that monstrous alignment weights don't correspond to other power center alignment weights.
        // maybe make it so that the monstrous alignment has a higher chance of being opposing alignment
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

  vm_.getRacialMix = getRacialMix_;
  function getRacialMix_(mix, population, generationMethod) {
    generationMethod = generationMethod || 'percent';
    var mixList = mix.mix;
    var remaining = population;
    var calculatedDemographics = [];
    if (generationMethod === 'percent') {
      mixList = _.sortBy(mixList, 'weight.custom').reverse();
      for (var race = 0; race < mixList.length; race++) {
        // Handle 'Other' Races
        if (mixList[race].races && mixList[race].races.length > 0 && mixList[race].weight.custom > 0) {
          var otherPercentage = mixList[race].weight.custom / 100;
          var otherPopCount = Math.ceil(population * otherPercentage);
          remaining -= otherPopCount;

          mixList[race].races = _.sortBy(mixList[race].races, 'weight.custom').reverse();
          var otherRemaining = otherPopCount;
          for (var otherRace = 0; otherRace < mixList[race].races.length; otherRace++) {
            if (otherRemaining > 0) {
              var otherRacesPercentage = mixList[race].races[otherRace].weight.custom / 100;
              var otherRacesPopCount = Math.ceil(otherPopCount * otherRacesPercentage);
              if (otherRacesPopCount > otherRemaining) {
                otherRacesPopCount = otherRemaining;
              }
              otherRemaining -= otherRacesPopCount;

              var other = angular.copy($filter('filter')(vm_.localData.raceSelection, {id: mixList[race].races[otherRace].raceId})[0]);
              other.population = {
                census: otherRacesPopCount,
                percent: ((otherRacesPopCount / population) * 100).toFixed(2)
              };
              calculatedDemographics.push(other);

              vm_.getSubraceMix(other.subraces, other.population.census);
            } else {
              break;
            }
          }
        }

        if (!mixList[race].races) {
          if (mixList[race].weight.custom > 0) {
            var percentage = mixList[race].weight.custom / 100;
            var popCount = Math.ceil(population * percentage);
            if (popCount > remaining) {
              popCount = remaining;
            }
            remaining -= popCount;

            var preset = angular.copy($filter('filter')(vm_.localData.raceSelection, {id: mixList[race].raceId})[0]);
            preset.population = {
              census: popCount,
              percent: ((popCount / population) * 100).toFixed(2)
            };
            calculatedDemographics.push(preset);

            vm_.getSubraceMix(preset.subraces, preset.population.census);
          }
        }
      }
    } else {
      // using weighted instead of percentage
    }
    calculatedDemographics = _.sortBy(calculatedDemographics, 'population').reverse();
    return calculatedDemographics;
  }

  vm_.getSubraceMix = getSubraceMix_;
  function getSubraceMix_(subraces, raceCensus, generationMethod) {
    generationMethod = generationMethod || 'percent';

    var remaining = raceCensus;
    if (generationMethod === 'percent') {
      // loop through all subraces. skip if !isActive or weight === 0
      for (var subrace = 0; subrace < subraces.length; subrace++) {
        if (subraces[subrace].isAllowed && subraces[subrace].weight.custom > 0 && remaining > 0) {

          // need to update. currently goes top to bottom until running out 
          // automatically. need to modify / give options. preferred method here
          // SHOULD be weighted random instead of percentage, at least if there arent
          // enough to guarantee at least one of each age.
          var percentage = subraces[subrace].weight.custom / 100;
          var popCount = Math.ceil(raceCensus * percentage);

          if (popCount > remaining) {
            popCount = remaining;
          }
          remaining -= popCount;

          subraces[subrace].population = {
            census: popCount,
            percent: ((popCount / raceCensus) * 100).toFixed(2)
          };
        }
      }
    } else {
      // use weighted method
    }
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
  vm_.powerCenterFilter = 'None';
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

  vm_.updateFilteredMonsterList = updateFilteredMonsterList_;
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

  vm_.getAgeDemographicsMix = getAgeDemographicsMix_;
  // need to update. currently goes top to bottom until running out 
  // automatically. need to modify / give options. preferred method here
  // SHOULD be weighted random instead of percentage, at least if there arent
  // enough to guarantee at least one of each age.
  function getAgeDemographicsMix_(races, raceMethod, subraceMethod) {
    raceMethod = raceMethod || 'percent';
    subraceMethod = subraceMethod || 'percent';

    // handle races
    for (var race = 0; race < races.length; race++) {
      races[race].ageCategories = angular.copy(vm_.localData.ageSelection);
      var racePopulation = races[race].population.census;

      if (raceMethod === 'percent') {
        var raceRemaining = racePopulation;

        // sort the list low to high if there are enough
        if (racePopulation >= (races[race].ageCategories.length * 4)) {
          _.sortBy(races[race].ageCategories, 'weight.custom');
        }

        for (var raceAge = 0; raceAge < races[race].ageCategories.length; raceAge++) {
          if (races[race].ageCategories[raceAge].weight.custom > 0 && raceRemaining > 0) {
            // if weight > 0 and still some remaining
            var racePercentage = races[race].ageCategories[raceAge].weight.custom / 100;
            var raceCount = Math.ceil(racePopulation * racePercentage);

            if (raceCount > raceRemaining) {
              raceCount = raceRemaining;
            }
            raceRemaining -= raceCount;

            races[race].ageCategories[raceAge].population = {
              census: raceCount,
              percent: ((raceCount / racePopulation) * 100).toFixed(2)
            };
          } else {
            // handle weight 0 or none remaining
            races[race].ageCategories[raceAge].population = {
              census: 0,
              percent: (0).toFixed(2)
            };
          }
        }

        // sort the list back into correct order if it was reversed
        if (racePopulation >= (races[race].ageCategories.length * 4)) {
          _.sortBy(races[race].ageCategories, 'order');
        }

      } else {
        // use weighted method
      }

      // add children count
      var raceChildCount = Math.floor(racePopulation * (races[race].percentageOfChildren / 100));
      races[race].ageCategories.unshift({
        name: 'Child',
        population: {
          census: raceChildCount,
          percent: ((raceChildCount / racePopulation) * 100).toFixed(2)
        }
      });

    }

    // handle subraces
    for (var race = 0; race < races.length; race++) {
      for (var subrace = 0; subrace < races[race].subraces.length; subrace++) {
        var subrace = races[race].subraces[subrace];
        subrace.ageCategories = angular.copy(vm_.localData.ageSelection);
        var subracePopulation = subrace.population.census;

        if (subraceMethod === 'percent') {
          var subraceRemaining = subracePopulation;

          // sort the list low to high if there are enough
          if (subracePopulation >= (subrace.ageCategories.length * 4)) {
            _.sortBy(subrace.ageCategories, 'weight.custom');
          }

          for (var subraceAge = 0; subraceAge < subrace.ageCategories.length; subraceAge++) {
            if (subrace.ageCategories[subraceAge].weight.custom > 0 && subraceRemaining > 0) {
              // if weight > 0 and still some remaining
              var subracePercentage = subrace.ageCategories[subraceAge].weight.custom / 100;
              var subraceCount = Math.ceil(subracePopulation * subracePercentage);

              if (subraceCount > subraceRemaining) {
                subraceCount = subraceRemaining;
              }
              subraceRemaining -= subraceCount;

              subrace.ageCategories[subraceAge].population = {
                census: subraceCount,
                percent: ((subraceCount / subracePopulation) * 100).toFixed(2)
              };
            } else {
              // handle weight 0 or none remaining
              subrace.ageCategories[subraceAge].population = {
                census: 0,
                percent: (0).toFixed(2)
              };
            }
          }

          // sort the list back into correct order if it was reversed
          if (subracePopulation >= (subrace.ageCategories.length * 4)) {
            _.sortBy(subrace.ageCategories, 'order');
          }

        } else {
          // use weighted method
        }

        // add children count
        var subraceChildCount = Math.floor(subracePopulation * (subrace.percentageOfChildren / 100));
        subrace.ageCategories.unshift({
          name: 'Child',
          population: {
            census: subraceChildCount,
            percent: ((subraceChildCount / subracePopulation) * 100).toFixed(2)
          }
        });

      }
    }

  }







  // OLD WAY
  // function getAgeDemographics_(racialDemographics) {
  //   var ageDemographics = racialDemographics;
  //
  //   // TODO: Update to account for 'Other'
  //   for (var race = 0; race < ageDemographics.length; race++) {
  //     // get the index of the current race from the races list
  //     var raceIndex = Utilities.getObjectIndex(vm_.raceSelection, 'name', ageDemographics[race].name);
  //     // add the number of children
  //     ageDemographics[race].ageCategories = [{
  //       age: 'Children',
  //       population: Math.floor(ageDemographics[race].population * (vm_.raceSelection[raceIndex].percentageOfChildren / 100))
  //     }];
  //     // populate the age categories with defaults
  //     for (var age = 0; age < vm_.raceSelection[raceIndex].ageCategories.length; age++) {
  //       ageDemographics[race].ageCategories.push({
  //         age: vm_.raceSelection[raceIndex].ageCategories[age].age,
  //         population: 0,
  //         percentage: 0
  //       });
  //     }
  //     // loop through each person of this race, randomly determine their age, and add them to the appropriate object
  //     for (var person = 0; person < ageDemographics[race].population; person++) {
  //       var age = Utilities.getItemFromWeightedObjectArray(vm_.raceSelection[raceIndex].ageCategories);
  //       var ageIndex = Utilities.getObjectIndex(ageDemographics[race].ageCategories, 'age', age.age);
  //       ageDemographics[race].ageCategories[ageIndex].population++;
  //       ageDemographics[race].ageCategories[ageIndex].percentage = ((ageDemographics[race].ageCategories[ageIndex].population / ageDemographics[race].population) * 100).toFixed(2);
  //     }
  //   }
  //
  //   return ageDemographics;
  // }

  // /**
  //  * Populate all races with the age selection default.
  //  */
  // vm_.populateAgeCategories = populateAgeCategories_;
  // function populateAgeCategories_(races) {
  //   for (var race = 0; race < races.length; race++) {
  //     races[race].ageCategories = angular.copy(vm_.localData.ageSelection);
  //   }
  // }




  //#region General Functions
  // /**
  //  * Check an array to see if any custom objects exist.
  //  *
  //  * @param {Array} array The array to look through.
  //  * @returns {Boolean} Whether or not any custom objects exist in the array.
  //  */
  // function checkForCustomObjects_(array) {
  //   return Utilities.getObjectIndex(array, 'id', 'cust', 'contains') > -1;
  // }
  //
  // /**
  //  * Check to see if a given button or button in a set should be disabled.
  //  *
  //  * @param {Array} objectArray The array of objects to be checked.
  //  * @param {string} property Property to be matched against.
  //  * @param {*} value The value to be matched against.
  //  * @param {object} params Object containing up to 2 parameters:
  //  *        matchType Whether it should look for a match or no match. 'exact', 'contains'
  //  *        object The object to have the toggle disabled for.
  //  */
  // function checkForButtonDisabled_(objectArray, property, value, params) {
  //   var toggleDisabled = false;
  //   var matchingObjects = Utilities.findMatches(objectArray, property, value, params.matchType);
  //   var disabledItems = matchingObjects.length;
  //   // if there is an object, then this is disabling a specific button or switch.
  //   // In this case, it will return true if this is the only enabled button left in the set.
  //   if ((params.object && params.object.isAllowed) && disabledItems === objectArray.length - 1) {
  //     toggleDisabled = true;
  //   }
  //   // if there is not an object, this is disabling a save/update all button.
  //   if (!params.object && disabledItems > 0) {
  //     toggleDisabled = true;
  //   }
  //   return toggleDisabled;
  // }
  //
  // /**
  //  * Clear out all temporary objects.
  //  */
  // function clearEdits_() {
  //   vm_.editObject = {};
  //   vm_.tempObject = {};
  //   vm_.editArray = [];
  // }
  
  /**
   * Close the sidebar. Stopped using toggle because angular material doesn't send close events. Doing it manually.
   */
  function closeSettingsSidebar_() {
    vm_.settingsTemplate = '';
    // vm_.clearEdits();
  }
  
  /**
   * Reset Settings options that are specific to setting configs.
   */
  function resetConfigSettings_() {
    // vm_.resetNewObject();
    // vm_.clearEdits();
  }
  
  // /**
  //  * Sets a temporary object to be edited.
  //  *
  //  * @param {object} arrayToEdit Array being edited.
  //  */
  // function setEditArray_(arrayToEdit) {
  //   vm_.editArray = angular.copy(arrayToEdit);
  // }
  //
  // /**
  //  * Sets a temporary object to be edited.
  //  *
  //  * @param {object} objectToEdit Object being edited.
  //  */
  // function setEditObject_(objectToEdit) {
  //   vm_.editObject = angular.copy(objectToEdit);
  // }
  
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

  // //#region General Object Functions
  // /**
  //  * Adds a new Custom Object to a list of arrays.
  //  *
  //  * @param {object} baseObject Base object to be added on to.
  //  * @param {object} objectParams Object containing parameters to be added to the customObject.
  //  * @param {Array} arrayList The list of arrays to add the customObject to.
  //  */
  // function addNewObject_(baseObject, objectParams, arrayList) {
  //   var customObject = vm_.createNewObject(baseObject, objectParams);
  //   for (var array = 0; array < arrayList.length; array++) {
  //     var objectIndex = Utilities.getObjectIndex(arrayList[array], 'id', customObject.id);
  //     if (objectIndex === -1) {
  //       arrayList[array].push(angular.copy(customObject));
  //     }
  //   }
  // }
  //
  // /**
  //  * Create a new Custom Object to be put into an array.
  //  *
  //  * @param {object} baseObject Base object to be added on to.
  //  * @param {object} params Object containing parameters to be added to the customObject.
  //  * @returns {customObject} The Custom Object to be returned.
  //  */
  // function createNewObject_(baseObject, params) {
  //   var customObject = angular.copy(baseObject);
  //   angular.forEach(params, function(value, key) {
  //     customObject[key] = angular.copy(value);
  //   });
  //   customObject.id = Demographics.getCustomId();
  //   return customObject;
  // }
  //
  // /**
  //  * Remove a custom object, including all peripheral requirements.
  //  *
  //  * @param {object} object The object to be deleted.
  //  * @param {object} parentObject The parent of the object to be deleted.
  //  * @param {Boolean} clearEdits Whether to clear the temp objects or not.
  //  */
  // function deleteCustomObject_(object, parentObject, clearEdits) {
  //   var arrayList = vm_.populateArrayList(object, parentObject);
  //   vm_.updateRemovedWeightInArrayList(arrayList, object);
  //   vm_.deleteCustomObjectGlobal(object, arrayList);
  //   if (clearEdits) {
  //     vm_.clearEdits();
  //   }
  // }
  //
  // /**
  //  * Delete a custom object.
  //  *
  //  * @param {object} object The object to be deleted.
  //  * @param {Array} arrayList The list of arrays to remove the object from.
  //  */
  // function deleteCustomObjectGlobal_(object, arrayList) {
  //   for (var array = 0; array < arrayList.length; array++) {
  //     var objectIndex = Utilities.getObjectIndex(arrayList[array], 'id', object.id);
  //     if (objectIndex > -1) {
  //       arrayList[array].splice(objectIndex, 1);
  //     }
  //   }
  // }
  //
  // /**
  //  * Populate a list of arrays to edit, based on type of edits being made.
  //  *
  //  * @param {object} object The object to check against.
  //  * @param {object} parentObject The parent of the object to check against.
  //  */
  // function populateArrayList_(object, parentObject) {
  //   var arrayList = [];
  //   switch (object.type) {
  //     case 'race':
  //       arrayList = [
  //         vm_.raceSelection,
  //         vm_.selectedRaces
  //       ];
  //       break;
  //     case 'subrace':
  //       var raceSelectionIndex = Utilities.getObjectIndex(vm_.raceSelection, 'id', parentObject.id);
  //       var selectedRacesIndex = Utilities.getObjectIndex(vm_.selectedRaces, 'id', parentObject.id);
  //       arrayList = [
  //         vm_.raceSelection[raceSelectionIndex].subraces,
  //         vm_.selectedRaces[selectedRacesIndex].subraces,
  //         vm_.editObject.subraces
  //       ];
  //       break;
  //     case 'authority':
  //       arrayList = [
  //         vm_.authoritySelection,
  //         vm_.editArray
  //       ];
  //       break;
  //   }
  //   return arrayList;
  // }
  
  /**
   * Reset newObject to its default settings.
   */
  function resetNewObject_() {
    vm_.newObject = {
      isAllowed: false,
      name: '',
      type: ''
    };
  }
  
  // /**
  //  * Reset the weight of an object by toggling it.
  //  *
  //  * @param {Array} objectArray The array of objects to be checked.
  //  * @param {object} object The object to be updated.
  //  */
  // function resetObjectWeight_(objectArray, object) {
  //   var object_ = angular.copy(object);
  //   var modifier = (object_.isAllowed) ? object_.weight.default : object_.weight.custom * -1;
  //   vm_.updateObjectWeight(objectArray, object_, modifier, 'custom', true);
  // }
  //
  // /**
  //  * Update allowed objects in a list of arrays. This updates isAllowed in every object in each array to true or false.
  //  *
  //  * @param {Array} objectArray The array of objects that are allowed.
  //  * @param {Array} arrayList The list of arrays to update the isAllowed property on each object in each array.
  //  */
  // function updateAllowedObjects_(objectArray, arrayList) {
  //   for (var allowedItem = 0; allowedItem < objectArray.length; allowedItem++) {
  //     objectArray[allowedItem].isAllowed = true;
  //   }
  //   for (var array = 0; array < arrayList.length; array++) {
  //     for (var arrayItem = 0; arrayItem < arrayList[array].length; arrayItem++) {
  //       var objectIndex = Utilities.getObjectIndex(objectArray, 'id', arrayList[array][arrayItem].id);
  //       if (objectIndex > -1) {
  //         arrayList[array][arrayItem].isAllowed = true;
  //       } else {
  //         arrayList[array][arrayItem].isAllowed = false;
  //       }
  //     }
  //   }
  // }
  //
  // /**
  //  * Update an array of objects.
  //  *
  //  * @param {string} type A key to use for populateArray.
  //  * @param {Array} array The modified array.
  //  * @param {Boolean} clearEdits Whether to clear the temp objects or not.
  //  */
  // function updateCustomArray_(type, array, clearEdits) {
  //   var object = {type: type};
  //   var arrayList = vm_.populateArrayList(object, null);
  //   for (var arrayCounter = 0; arrayCounter < arrayList.length; arrayCounter++) {
  //     for (var obj = 0; obj < arrayList[arrayCounter].length; obj++) {
  //       var objIndex = Utilities.getObjectIndex(array, 'id', arrayList[arrayCounter][obj].id);
  //       arrayList[arrayCounter][obj] = angular.copy(array[objIndex]);
  //     }
  //   }
  //   if (clearEdits) {
  //     vm_.clearEdits();
  //   }
  // }
  //
  // /**
  //  * Update a Custom Object.
  //  *
  //  * @param {object} object Object to update.
  //  * @param {object} parentObject Parent of the object to update.
  //  * @param {Boolean} clearEdits Whether to clear the temp objects or not.
  //  */
  // function updateCustomObject_(object, parentObject, clearEdits) {
  //   var arrayList = vm_.populateArrayList(object, parentObject);
  //   vm_.updateCustomObjectGlobal(object, arrayList);
  //   if (clearEdits) {
  //     vm_.clearEdits();
  //   }
  // }
  //
  // /**
  //  * Update a custom object across all arrays it exists in.
  //  *
  //  * @param {object} object The object to be updated.
  //  * @param {Array} arrayList The list of arrays to update the object in.
  //  */
  // function updateCustomObjectGlobal_(object, arrayList) {
  //   for (var array = 0; array < arrayList.length; array++) {
  //     var objectIndex = Utilities.getObjectIndex(arrayList[array], 'id', object.id);
  //     if (objectIndex > -1) {
  //       arrayList[array][objectIndex] = angular.copy(object);
  //     }
  //   }
  // }
  //
  // /**
  //  * Update a specific weight setting in a passed in array. This update forces the total sum of weight points
  //  * available to be the same, no matter what it started at.
  //  *
  //  * @param {Array} array The array to loop through to update weight values.
  //  * @param {object} object The current object to update the weight on.
  //  * @param {Number} modifier The amount to modify weight by.
  //  * @param {string} setting Whether it is 'custom' or 'default' to update.
  //  * @param {Boolean} customOnly If true, do not modify any value currently at its default weight.
  //  */
  // function updateObjectWeight_(array, object, modifier, setting, customOnly) {
  //   // potentially configurable way of setting the total possible weight of an array
  //   var maxWeight = 100;
  //   // get the index of the object being modified, as well as the index of the next object
  //   var objectIndex = Utilities.getObjectIndex(array, 'id', object.id);
  //   var nextIndex = (objectIndex === 0) ? array.length - 1 : objectIndex - 1;
  //   // if the setting being updated will be within the allowed parameters, update it.
  //   if (array[objectIndex].weight[setting] + modifier >= 0 && array[objectIndex].weight[setting] + modifier <= maxWeight) {
  //     array[objectIndex].weight[setting] += modifier;
  //   }
  //   // if defaultOnly is set, do not allow nextIndex to be an object with its default weight.
  //   // get the next available setting in the array that is within allowed parameters.
  //   while (array[nextIndex].weight[setting] - modifier < 0 ||
  //       array[nextIndex].weight[setting] - modifier > maxWeight ||
  //       array[nextIndex].isAllowed === false ||
  //       (array[objectIndex].isAllowed && customOnly &&
  //           array[nextIndex].weight.custom === array[nextIndex].weight.default)  ) {
  //     if (nextIndex === 0) {
  //       nextIndex = array.length - 1;
  //     } else {
  //       nextIndex--;
  //     }
  //   }
  //   // if the next available setting in the array is NOT the current setting, update it.
  //   if (nextIndex !== objectIndex) {
  //     array[nextIndex].weight[setting] -= modifier;
  //   }
  // }
  //
  // /**
  //  * Update weights across all arrays the object exists in when deleted.
  //  *
  //  * @param {Array} arrayList The list of arrays to update the weight in.
  //  * @param {object} object The object to be deleted.
  //  */
  // function updateRemovedWeightInArrayList_(arrayList, object) {
  //   for (var array = 0; array < arrayList.length; array++) {
  //     var objectIndex = Utilities.getObjectIndex(arrayList[array], 'id', object.id);
  //     if (objectIndex > -1) {
  //       arrayList[array][objectIndex].isAllowed = false;
  //       vm_.resetObjectWeight(arrayList[array],arrayList[array][objectIndex]);
  //     }
  //   }
  // }
  // //#endregion

  // //#region Settlement Functions
  // vm_.addCustomSettlement = addCustomSettlement_;
  // /**
  //  * Add a new settlement to the list of settlements.
  //  */
  // function addCustomSettlement_() {
  //   var name_ = angular.copy(vm_.newObject.name);
  //   vm_.newObject.type = 'race';
  //   var params = {
  //     tags: [
  //       vm_.tagSelection.cust
  //     ],
  //     weight: {
  //       default: 0,
  //       custom: 0
  //     },
  //     ageCategories: angular.copy(vm_.ageSelection),
  //     percentageOfChildren: 10,
  //     subraces: []
  //   };
  //   var arrayList = [vm_.raceSelection];
  //   if (vm_.newObject.isAllowed) {
  //     arrayList.push(vm_.selectedRaces);
  //   }
  //   vm_.addNewObject(vm_.newObject, params, arrayList);
  //   vm_.resetNewObject();
  //
  //   for (var array = 0; array < arrayList.length; array++) {
  //     var raceIndex = Utilities.getObjectIndex(arrayList[array], 'name', name_);
  //     // Add Default Subrace
  //     if (Utilities.getObjectIndex(arrayList[array][raceIndex].subraces, 'name', 'Default') < 0) {
  //       vm_.addCustomSubRace(arrayList[array][raceIndex], {
  //         defaultName: 'Default',
  //         tags: [],
  //         isAllowed: true
  //       });
  //     }
  //
  //     // Add Revenant Subrace
  //     if (Utilities.getObjectIndex(arrayList[array][raceIndex].tags, 'id', vm_.tagSelection.uagh.id) < 0) {
  //       arrayList[array][raceIndex].tags.push(vm_.tagSelection.uagh);
  //     }
  //     if (Utilities.getObjectIndex(arrayList[array][raceIndex].subraces, 'name', 'Revenant') < 0) {
  //       vm_.addCustomSubRace(arrayList[array][raceIndex], {
  //         defaultName: 'Revenant',
  //         tags: [
  //           vm_.tagSelection.uagh
  //         ]
  //       });
  //     }
  //   }
  // }
  // //#endregion

  // //#region Authority Figure Functions
  // /**
  //  * Add a new authority figure to the list of authorities.
  //  */
  // function addCustomAuthority_() {
  //   vm_.newObject.type = 'authority';
  //   vm_.newObject.isAllowed = true;
  //   var params = {
  //     tags: [
  //       vm_.tagSelection.cust
  //     ],
  //     weight: {
  //       default: 0,
  //       custom: 0
  //     }
  //   };
  //   var arrayList = [vm_.authoritySelection, vm_.editArray];
  //   vm_.addNewObject(vm_.newObject, params, arrayList);
  //   vm_.resetNewObject();
  // }
  // //#endregion

  // //#region Race Functions
  // /**
  //  * Add a new race to the list of races.
  //  */
  // function addCustomRace_() {
  //   var name_ = angular.copy(vm_.newObject.name);
  //   vm_.newObject.type = 'race';
  //   var params = {
  //     tags: [
  //       vm_.tagSelection.cust
  //     ],
  //     weight: {
  //       default: 0,
  //       custom: 0
  //     },
  //     ageCategories: angular.copy(vm_.ageSelection),
  //     percentageOfChildren: 10,
  //     subraces: []
  //   };
  //   var arrayList = [vm_.raceSelection];
  //   if (vm_.newObject.isAllowed) {
  //     arrayList.push(vm_.selectedRaces);
  //   }
  //   vm_.addNewObject(vm_.newObject, params, arrayList);
  //   vm_.resetNewObject();
  //
  //   for (var array = 0; array < arrayList.length; array++) {
  //     var raceIndex = Utilities.getObjectIndex(arrayList[array], 'name', name_);
  //     // Add Default Subrace
  //     if (Utilities.getObjectIndex(arrayList[array][raceIndex].subraces, 'name', 'Default') < 0) {
  //       vm_.addCustomSubRace(arrayList[array][raceIndex], {
  //         defaultName: 'Default',
  //         tags: [],
  //         isAllowed: true
  //       });
  //     }
  //
  //     // Add Revenant Subrace
  //     if (Utilities.getObjectIndex(arrayList[array][raceIndex].tags, 'id', vm_.tagSelection.uagh.id) < 0) {
  //       arrayList[array][raceIndex].tags.push(vm_.tagSelection.uagh);
  //     }
  //     if (Utilities.getObjectIndex(arrayList[array][raceIndex].subraces, 'name', 'Revenant') < 0) {
  //       vm_.addCustomSubRace(arrayList[array][raceIndex], {
  //         defaultName: 'Revenant',
  //         tags: [
  //           vm_.tagSelection.uagh
  //         ]
  //       });
  //     }
  //   }
  // }
  //
  // /**
  //  * Add a new subrace to a race.
  //  *
  //  * @param {object} race Race to add the subrace to.
  //  * @param {object} params_ Extra options for adding a default subrace. Name (string), Tags (array)
  //  */
  // function addCustomSubRace_(race, params_) {
  //   if (params_ && params_.defaultName) {
  //     vm_.newObject.name = params_.defaultName;
  //   }
  //   vm_.newObject.isAllowed = (params_ && params_.hasOwnProperty('isAllowed')) ? params_.isAllowed : race.isAllowed;
  //   vm_.newObject.type = 'subrace';
  //   var params = {
  //     tags: [
  //       vm_.tagSelection.cust
  //     ],
  //     weight: {
  //       default: 0,
  //       custom: 0
  //     },
  //     ageCategories: angular.copy(vm_.ageSelection),
  //     percentOfTotalChildrenForRace: 0,
  //     owner: race.id
  //   };
  //   if (params_ && params_.tags && params_.tags.length > 0) {
  //     for (var tag = 0; tag < params_.tags.length; tag++) {
  //       params.tags.push(params_.tags[tag]);
  //     }
  //   }
  //   if (race.subraces.length === 0) {
  //     params.weight.default = 0;
  //     params.weight.custom = 100;
  //     params.percentOfTotalChildrenForRace = 100;
  //   }
  //   var raceSelectionIndex = Utilities.getObjectIndex(vm_.raceSelection, 'id', race.id);
  //   var arrayList = [
  //     vm_.raceSelection[raceSelectionIndex].subraces,
  //     race.subraces
  //   ];
  //   if (race.isAllowed) {
  //     var selectedRacesIndex = Utilities.getObjectIndex(vm_.selectedRaces, 'id', race.id);
  //     arrayList.push(vm_.selectedRaces[selectedRacesIndex].subraces);
  //   }
  //   vm_.addNewObject(vm_.newObject, params, arrayList);
  //   vm_.resetNewObject();
  // }
  //
  // /**
  //  * Get the default set of allowed races.
  //  *
  //  * @param {Array} defaultArray The array of default races.
  //  * @returns {Array} The default allowed object array.
  //  */
  // function getDefaultAllowedRaces_(defaultArray) {
  //   var allowedRaces = [];
  //   for (var race = 0; race < defaultArray.length; race++) {
  //     if (defaultArray[race].isAllowed) {
  //       if (Utilities.getObjectIndex(allowedRaces, 'id', defaultArray[race].id) === -1) {
  //         allowedRaces.push(defaultArray[race]);
  //       }
  //     }
  //   }
  //   return allowedRaces;
  // }
  //
  // /**
  //  * Populate the selectedRaces array
  //  */
  // function populateDefaultSelectedRaces_(defaultArray) {
  //   var selectedRaces = [];
  //   for (var race = 0; race < defaultArray.length; race++) {
  //     if (defaultArray[race].isAllowed) {
  //       if (Utilities.getObjectIndex(selectedRaces, 'id', defaultArray[race].id) === -1) {
  //         selectedRaces.push(defaultArray[race]);
  //       }
  //     }
  //   }
  //   return selectedRaces;
  // }
  //
  // /**
  //  * Get the default set of allowed races.
  //  *
  //  * @param {Array} defaultArray The array of default races.
  //  */
  // function updateAllowedRaces_(objectArray) {
  //   if (!objectArray) {
  //     var defaultArray = angular.copy(Demographics.defaultRaces);
  //     objectArray = vm_.getDefaultAllowedRaces(defaultArray);
  //     vm_.selectedRaces = vm_.populateDefaultSelectedRaces(objectArray);
  //   }
  //   var arrayList = [
  //     vm_.raceSelection,
  //     vm_.selectedRaces
  //   ];
  //   vm_.updateAllowedObjects(objectArray, arrayList);
  // }
  // //#endregion

  // //#region Racial Mixture Functions
  //
  // //#endregion

  // //#region Age Functions
  // function updateGlobalDefaultAges_(ageArray) {
  //   var startingArray = [
  //       vm_.raceSelection,
  //       vm_.selectedRaces
  //   ];
  //   var arrayList = [];
  //
  //   // loop through starting array
  //   for (var array = 0; array < startingArray.length; array++) {
  //
  //     // loop through individual race array
  //     for (var race = 0; race < startingArray[array].length; race++) {
  //       arrayList.push(startingArray[array][race].ageCategories);
  //       if (startingArray[array][race].subraces.length > 0) {
  //
  //         for (var subrace = 0; subrace < startingArray[array][race].subraces.length; subrace++) {
  //           arrayList.push(startingArray[array][race].subraces[subrace].ageCategories);
  //         }
  //       }
  //     }
  //   }
  //
  //   // loop through array list
  //   for (var arrayItem = 0; arrayItem < arrayList.length; arrayItem++) {
  //     // loop though age items in each array in the array list
  //     for (var age = 0; age < arrayList[arrayItem].length; age++) {
  //       // get the corresponding index of the current age item from the ageArray
  //       var ageIndex = Utilities.getObjectIndex(ageArray, 'id', arrayList[arrayItem][age].id);
  //       // update the item in the arrayList
  //       arrayList[arrayItem][age].weight.default = ageArray[ageIndex].weight.default;
  //     }
  //   }
  // }
  //
  // function updateAgeConfigs_(settingsMode) {
  //   if (settingsMode === 'Global') {
  //     vm_.setEditArray(vm_.ageSelection);
  //   } else {
  //     vm_.clearEdits();
  //   }
  // }
  //
  // /**
  //  * Populate all races with the age selection default.
  //  */
  // function updateAges_() {
  //   for (var race = 0; race < vm_.raceSelection.length; race++) {
  //     vm_.raceSelection[race].ageCategories = angular.copy(vm_.ageSelection);
  //   }
  // }
  //
  // /**
  //  * Update a specific age setting in a passed in age categories array. This is by reference, so it will affect the
  //  * race that owns it. This update forces the total sum of points available to be the same, no matter what it
  //  * started at.
  //  */
  // function updateAge_(ageCategories, index, modifier) {
  //   // get the index of the next age setting in the list.
  //   var nextIndex = (index === ageCategories.length - 1) ? 0 : index + 1;
  //   // if the setting being updated will be within the allowed parameters, update it.
  //   if (ageCategories[index].weight + modifier >= 0 && ageCategories[index].weight + modifier <= 100) {
  //     ageCategories[index].weight += modifier;
  //   }
  //   // get the next available setting in the array that is within allowed parameters.
  //   while (ageCategories[nextIndex].weight - modifier < 0 || ageCategories[nextIndex].weight - modifier > 100) {
  //     if (nextIndex === ageCategories.length - 1) {
  //       nextIndex = 0;
  //     } else {
  //       nextIndex++;
  //     }
  //   }
  //   // if the next available setting in the array is NOT the current setting, update it.
  //   if (nextIndex !== index) {
  //     ageCategories[nextIndex].weight -= modifier;
  //   }
  // }
  //
  // //#endregion

  // //#endregion

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
