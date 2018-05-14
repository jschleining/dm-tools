var app = angular.module('dmTools');

app.service('Utilities', function () {
  var service_ = this;
  service_.customIdCounter = 1000;

  service_.getCustomId = getCustomId_;
  service_.getMatches = getMatches_;
  service_.getRandom = getRandom_;

  /**
   * Return an array of items with a given value in an object array.
   *
   * @param {Array} array The object array to search through.
   * @param {String} property The property on the object to search for.
   * @param {*} value The value of the property being searched for.
   * @param {String} matchType Type of match. Can be either 'exact' or 'contains'.
   */
  function getMatches_(objectArray, property, value, matchType) {
    var objects = [];
    for (var object = 0; object < objectArray.length; object++) {
      switch(matchType) {
        case 'contains':
          if (objectArray[object][property].indexOf(value) > -1) {
            objects.push(objectArray[object]);
          }
          break;
        case 'exact':
        default:
          if (objectArray[object][property] === value) {
            objects.push(objectArray[object]);
          }
          break;
      }
    }
    return objects;
  }

  /**
   * Return a custom id.
   */
  function getCustomId_() {
    var returnId = 'cust-' + service_.customIdCounter;
    service_.customIdCounter++;
    return returnId;
  }

  /**
   * Return an inclusive random number between two integers.
   *
   * @param {Number} min The minimum value to be returned.
   * @param {Number} max The maximum value to be returned.
   */
  function getRandom_(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

});




// var app = angular.module('dmHelperApp');
//
// app.service('Utilities', function () {
//   var service_ = this;
//   service_.getRandom = getRandom_;
//   service_.getObjectIndex = getObjectIndex_;
//   service_.generateValueRanges = generateValueRanges_;
//   service_.getItemFromWeightedObjectArray = getItemFromWeightedObjectArray_;
//   service_.findMatches = findMatches_;
//
//   /**
//    * Return an array of items with a given value in an object array.
//    *
//    * @param {Array} array The object array to search through.
//    * @param {String} property The property on the object to search for.
//    * @param {*} value The value of the property being searched for.
//    * @param {String} matchType Type of match. Can be either 'exact' or 'contains'.
//    */
//   function findMatches_(objectArray, property, value, matchType) {
//     var objects = [];
//     for (var object = 0; object < objectArray.length; object++) {
//       switch(matchType) {
//         case 'contains':
//           if (objectArray[object][property].indexOf(value) > -1) {
//             objects.push(objectArray[object]);
//           }
//           break;
//         case 'exact':
//         default:
//           if (objectArray[object][property] === value) {
//             objects.push(objectArray[object]);
//           }
//           break;
//       }
//     }
//     return objects;
//   }
//
//   /**
//    * Return an inclusive random number between two integers.
//    *
//    * @param {Number} min The minimum value to be returned.
//    * @param {Number} max The maximum value to be returned.
//    */
//   function getRandom_(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//
//   /**
//    * Return the index of an item with a given value in an object array.
//    *
//    * @param {Array} array The object array to search through.
//    * @param {String} property The property on the object to search for.
//    * @param {*} value The value of the property being searched for.
//    * @param {String} matchType Type of match. Can be either 'exact' or 'contains'.
//    */
//   function getObjectIndex_(array, property, value, matchType) {
//     for (var index = 0; index < array.length; index++) {
//       if (matchType === 'contains') {
//         if (array[index][property].indexOf(value) > -1) {
//           return index;
//         }
//       } else {
//         if (array[index][property] === value) {
//           return index;
//         }
//       }
//     }
//     return -1;
//   }
//
//   /**
//    * Loop through an array of objects with a weight property and generate a range from weights.
//    * This is used for randomly picking a weighted item from an object array.
//    */
//   function generateValueRanges_(objectArray) {
//     for (var object = 0; object < objectArray.length; object++) {
//       if (object === 0) {
//         objectArray[object].weightedRange = {
//           min: 1,
//           max: objectArray[object].weight
//         };
//       } else {
//         objectArray[object].weightedRange = {
//           min: objectArray[object - 1].weightedRange.max  + 1,
//           max: objectArray[object - 1].weightedRange.max + objectArray[object].weight
//         };
//       }
//     }
//     return objectArray;
//   }
//
//   /**
//    * Return an item from a weighted object array.
//    *
//    * @param {Array} array The object array to search through.
//    * @param {Number} modifier A number to modify the random number generator by.
//    * @param {Number} preSelection Optional number to pass in, bypassing the random number generator.
//    */
//   function getItemFromWeightedObjectArray_(array, modifier, preSelection) {
//     modifier = modifier || 0;
//     var min = array[0].weightedRange.min + modifier;
//     var max = array[array.length - 1].weightedRange.max + modifier;
//     var selection;
//     var returnItem = {};
//     if (preSelection) {
//       selection = preSelection;
//     } else {
//       selection = service_.getRandom(min, max);
//     }
//     for (var item = 0; item < array.length; item++) {
//       var found = false;
//
//       if (
//           item === 0 && selection <= array[item].weightedRange.max ||
//           item === array.length - 1 && selection >= array[item].weightedRange.min ||
//           (
//               (item > 0 && item < array.length - 1) &&
//               (selection >= array[item].weightedRange.min && selection <= array[item].weightedRange.max)
//           )
//       ) {
//         found = true;
//       }
//
//       if (found) {
//         returnItem = array[item];
//         break;
//       }
//     }
//     return returnItem;
//   }
//
// });

