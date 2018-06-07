var app = angular.module('dmTools');

app.service('Demographics', function () {
  var service_ = this;

  /**
   * This is to help filter objects by tag or tag type. Cannot be locally customized, so it
   * is ok to use id instead of passing whole object.
   */
  service_.tagTypes = {
    'DEFAULT': 'default',
    'CUSTOM': 'custom',
    'BASIC': 'basic',
    'EDITION': 'edition',
    'SOURCE': 'source',
    'CREATURE_TYPE': 'creatureType',
    'CREATURE_SUBTYPE': 'creatureSubtype',
    'ALIGNMENT': 'alignment',
    'ALIGN_1': 'lawChaos',
    'ALIGN_2': 'goodEvil',
    'ALIGN_3': 'neutral',
    'ALIGN_FULL': 'fullAlignment',
    'CLIMATE': 'climate',
    'TERRAIN': 'terrain',
    'POWER_CENTER_TYPE': 'powerCenterType',
    'RARITY': 'rarity'
  };

  /**
   * weight is not used. These are always placed either automatically or manually. Cannot be 
   * locally customized, so it is ok to use id instead of passing whole object.
   */
  service_.defaultTagList = {
    'dflt': {
      isAllowed: false,
      name: 'Default',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.BASIC
      ],
      key: 'dflt',
      id: 'tag-dflt'
    },
    'cust': {
      isAllowed: false,
      name: 'Custom',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.BASIC
      ],
      key: 'cust',
      id: 'tag-cust'
    },
    'adnd': {
      isAllowed: true,
      name: 'Advanced Dungeons and Dragons',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.EDITION
      ],
      key: 'adnd',
      id: 'tag-edition-1'
    },
    'dnd3E': {
      isAllowed: true,
      name: 'Dungeons and Dragons 3E',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.EDITION
      ],
      key: 'dnd3E',
      id: 'tag-edition-2'
    },
    'dnd35': {
      isAllowed: true,
      name: 'Dungeons and Dragons 3.5',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.EDITION
      ],
      key: 'dnd35',
      id: 'tag-edition-3'
    },
    'dnd4E': {
      isAllowed: true,
      name: 'Dungeons and Dragons 4E',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.EDITION
      ],
      key: 'dnd4E',
      id: 'tag-edition-4'
    },
    'dnd5E': {
      isAllowed: true,
      name: 'Dungeons and Dragons 5E',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.EDITION
      ],
      key: 'dnd5E',
      id: 'tag-edition-5'
    },
    'phb': {
      isAllowed: false,
      name: 'Player\'s Handbook',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'phb',
      id: 'tag-core-1'
    },
    'mm': {
      isAllowed: false,
      name: 'Monster Manual',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'mm',
      id: 'tag-core-2'
    },
    'dmg': {
      isAllowed: false,
      name: 'Dungeon Master\'s Guide',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'dmg',
      id: 'tag-core-3'
    },
    'elm': {
      isAllowed: false,
      name: 'Elemental Evil Player\'s Companion',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'elm',
      id: 'tag-supp-01'
    },
    'scg': {
      isAllowed: false,
      name: 'Sword Coast Adventure Guide',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'scg',
      id: 'tag-supp-02'
    },
    'vol': {
      isAllowed: false,
      name: 'Volo\'s Guide to Monsters',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'vol',
      id: 'tag-supp-03'
    },
    'xan': {
      isAllowed: false,
      name: 'Xanathar\'s Guide to Everything',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'xan',
      id: 'tag-supp-04'
    },
    'psz': {
      isAllowed: false,
      name: 'Plane Shift: Zendikar',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'psz',
      id: 'tag-misc-001'
    },
    'ttp': {
      isAllowed: false,
      name: 'The Tortle Package',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'ttp',
      id: 'tag-misc-002'
    },
    'ua': {
      isAllowed: true,
      name: 'Unearthed Arcana',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'ua',
      id: 'tag-ua-001'
    },
    'uacdv': {
      isAllowed: false,
      name: 'Unearthed Arcana: Class Design Variants',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'uacdv',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA3_ClassDesignVariants.pdf',
      id: 'tag-ua-002'
    },
    'uacr': {
      isAllowed: false,
      name: 'Unearthed Arcana: Classics Revisited',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'uacr',
      src: 'http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf',
      id: 'tag-ua-003'
    },
    'uaeb': {
      isAllowed: false,
      name: 'Unearthed Arcana: Eberron',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'uaeb',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.pdf',
      id: 'tag-ua-004'
    },
    'uagh': {
      isAllowed: false,
      name: 'Unearthed Arcana: Gothic Heroes',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'uagh',
      src: 'https://dnd.wizards.com/sites/default/files/media/upload/articles/UA%20Gothic%20Characters.pdf',
      id: 'tag-ua-005'
    },
    'uamm': {
      isAllowed: false,
      name: 'Unearthed Arcana: Modern Magic',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'uamm',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA_ModernMagic.pdf',
      id: 'tag-ua-006'
    },
    'uaps': {
      isAllowed: false,
      name: 'Unearthed Arcana: Psionics & The Mystic',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'uamm',
      src: 'http://media.wizards.com/2016/downloads/Psionics_and_Mystic_V2.pdf',
      id: 'tag-ua-007'
    },
    'uarmpc': {
      isAllowed: false,
      name: 'Unearthed Arcana: Rune Magic Prestige Class',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'uarmpc',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA_Rune_Magic_Prestige_Class.pdf',
      id: 'tag-ua-008'
    },
    'uaro': {
      isAllowed: false,
      name: 'Unearthed Arcana: Ranger Options',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'uaro',
      src: 'http://media.wizards.com/2015/downloads/dnd/DX_0907_UA_RangerOptions.pdf',
      id: 'tag-ua-009'
    },
    'uatom': {
      isAllowed: false,
      name: 'Unearthed Arcana: That Old Black Magic',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'uatom',
      src: 'https://media.wizards.com/2015/downloads/dnd/07_UA_That_Old_Black_Magic.pdf',
      id: 'tag-ua-010'
    },
    'uawb': {
      isAllowed: false,
      name: 'Unearthed Arcana: Waterborne Adventures',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.SOURCE
      ],
      key: 'uawb',
      src: 'https://media.wizards.com/2015/downloads/ dnd /UA_ Waterborne_v3.pdf',
      id: 'tag-ua-011'
    },
    'abr': {
      isAllowed: true,
      name: 'Aberration',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'abr',
      id: 'tag-monstertype-01'
    },
    'bst': {
      isAllowed: true,
      name: 'Beast',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'bst',
      id: 'tag-monstertype-02'
    },
    'cel': {
      isAllowed: true,
      name: 'Celestial',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'cel',
      id: 'tag-monstertype-03'
    },
    'con': {
      isAllowed: true,
      name: 'Construct',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'con',
      id: 'tag-monstertype-04'
    },
    'dra': {
      isAllowed: true,
      name: 'Dragon',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'dra',
      id: 'tag-monstertype-05'
    },
    'ele': {
      isAllowed: true,
      name: 'Elemental',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'ele',
      id: 'tag-monstertype-06'
    },
    'fey': {
      isAllowed: true,
      name: 'Fey',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'fey',
      id: 'tag-monstertype-07'
    },
    'fnd': {
      isAllowed: true,
      name: 'Fiend',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'fnd',
      id: 'tag-monstertype-08'
    },
    'gnt': {
      isAllowed: true,
      name: 'Giant',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'gnt',
      id: 'tag-monstertype-09'
    },
    'hum': {
      isAllowed: true,
      name: 'Humanoid',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'hum',
      id: 'tag-monstertype-10'
    },
    'mon': {
      isAllowed: true,
      name: 'Monstrosity',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'mon',
      id: 'tag-monstertype-11'
    },
    'ooz': {
      isAllowed: true,
      name: 'Ooze',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'ooz',
      id: 'tag-monstertype-12'
    },
    'plt': {
      isAllowed: true,
      name: 'Plant',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'plt',
      id: 'tag-monstertype-13'
    },
    'und': {
      isAllowed: true,
      name: 'Undead',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_TYPE
      ],
      key: 'und',
      id: 'tag-monstertype-14'
    },
    'ang': {
      isAllowed: true,
      name: 'Angel',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_SUBTYPE
      ],
      key: 'ang',
      id: 'tag-subtype-01'
    },
    'dmn': {
      isAllowed: true,
      name: 'Demon',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_SUBTYPE
      ],
      key: 'dmn',
      id: 'tag-subtype-02'
    },
    'dvl': {
      isAllowed: true,
      name: 'Devil',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_SUBTYPE
      ],
      key: 'dvl',
      id: 'tag-subtype-03'
    },
    'gob': {
      isAllowed: true,
      name: 'Goblinoid',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_SUBTYPE
      ],
      key: 'gob',
      id: 'tag-subtype-04'
    },
    'rep': {
      isAllowed: true,
      name: 'Reptilian',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_SUBTYPE
      ],
      key: 'rep',
      id: 'tag-subtype-05'
    },
    'shp': {
      isAllowed: true,
      name: 'Shapechanger',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_SUBTYPE
      ],
      key: 'shp',
      id: 'tag-subtype-06'
    },
    'yug': {
      isAllowed: true,
      name: 'Yugoloth',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CREATURE_SUBTYPE
      ],
      key: 'yug',
      id: 'tag-subtype-07'
    },
    'law': {
      isAllowed: true,
      name: 'Lawful',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_1
      ],
      key: 'law',
      id: 'tag-align-01'
    },
    'ntr': {
      isAllowed: true,
      name: 'Neutral',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_3
      ],
      key: 'ntr',
      id: 'tag-align-02'
    },
    'cht': {
      isAllowed: true,
      name: 'Chaotic',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_1
      ],
      key: 'cht',
      id: 'tag-align-03'
    },
    'god': {
      isAllowed: true,
      name: 'Good',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_2
      ],
      key: 'god',
      id: 'tag-align-04'
    },
    'evl': {
      isAllowed: true,
      name: 'Evil',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_2
      ],
      key: 'evl',
      id: 'tag-align-05'
    },
    'lg': {
      isAllowed: true,
      name: 'Lawful Good',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_FULL
      ],
      key: 'lg',
      id: 'tag-align-06'
    },
    'ng': {
      isAllowed: true,
      name: 'Neutral Good',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_FULL
      ],
      key: 'ng',
      id: 'tag-align-07'
    },
    'cg': {
      isAllowed: true,
      name: 'Chaotic Good',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_FULL
      ],
      key: 'cg',
      id: 'tag-align-08'
    },
    'ln': {
      isAllowed: true,
      name: 'Lawful Neutral',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_FULL
      ],
      key: 'ln',
      id: 'tag-align-09'
    },
    'tn': {
      isAllowed: true,
      name: 'True Neutral',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_FULL
      ],
      key: 'tn',
      id: 'tag-align-10'
    },
    'cn': {
      isAllowed: true,
      name: 'Chaotic Neutral',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_FULL
      ],
      key: 'cn',
      id: 'tag-align-11'
    },
    'le': {
      isAllowed: true,
      name: 'Lawful Evil',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_FULL
      ],
      key: 'le',
      id: 'tag-align-12'
    },
    'ne': {
      isAllowed: true,
      name: 'Neutral Evil',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_FULL
      ],
      key: 'ne',
      id: 'tag-align-13'
    },
    'ce': {
      isAllowed: true,
      name: 'Chaotic Evil',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_FULL
      ],
      key: 'ce',
      id: 'tag-align-14'
    },
    'aa': {
      isAllowed: true,
      name: 'Any Alignment',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT
      ],
      key: 'aa',
      id: 'tag-align-15'
    },
    'ag': {
      isAllowed: true,
      name: 'Any Good',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_2
      ],
      key: 'ag',
      id: 'tag-align-16'
    },
    'an': {
      isAllowed: true,
      name: 'Any Neutral',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_3
      ],
      key: 'an',
      id: 'tag-align-17'
    },
    'ae': {
      isAllowed: true,
      name: 'Any Evil',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_2
      ],
      key: 'ae',
      id: 'tag-align-18'
    },
    'al': {
      isAllowed: true,
      name: 'Any Lawful',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_1
      ],
      key: 'al',
      id: 'tag-align-19'
    },
    'ac': {
      isAllowed: true,
      name: 'Any Chaotic',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.ALIGNMENT,
        service_.tagTypes.ALIGN_1
      ],
      key: 'ac',
      id: 'tag-align-20'
    },
    'cany': {
      isAllowed: true,
      name: 'Any Climate',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CLIMATE
      ],
      key: 'cany',
      id: 'tag-climate-01'
    },
    'carc': {
      isAllowed: true,
      name: 'Arctic',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CLIMATE
      ],
      key: 'carc',
      id: 'tag-climate-02'
    },
    'ccld': {
      isAllowed: true,
      name: 'Cold',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CLIMATE
      ],
      key: 'ccld',
      id: 'tag-climate-03'
    },
    'ctmp': {
      isAllowed: true,
      name: 'Temperate',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CLIMATE
      ],
      key: 'ctmp',
      id: 'tag-climate-04'
    },
    'cwrm': {
      isAllowed: true,
      name: 'Warm',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CLIMATE
      ],
      key: 'cwrm',
      id: 'tag-climate-05'
    },
    'ctrp': {
      isAllowed: true,
      name: 'Tropical',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.CLIMATE
      ],
      key: 'ctrp',
      id: 'tag-climate-06'
    },
    'tany': {
      isAllowed: true,
      name: 'Any Terrain',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tany',
      id: 'tag-terrain-01'
    },
    'taqu': {
      isAllowed: true,
      name: 'Aquatic',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'taqu',
      id: 'tag-terrain-02'
    },
    'tcst': {
      isAllowed: true,
      name: 'Coastal',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tcst',
      id: 'tag-terrain-03'
    },
    'ttun': {
      isAllowed: true,
      name: 'Tundra',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'ttun',
      id: 'tag-terrain-04'
    },
    'tpln': {
      isAllowed: true,
      name: 'Plains',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tpln',
      id: 'tag-terrain-05'
    },
    'thil': {
      isAllowed: true,
      name: 'Hills',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'thil',
      id: 'tag-terrain-06'
    },
    'tmtn': {
      isAllowed: true,
      name: 'Mountains',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tmtn',
      id: 'tag-terrain-07'
    },
    'tdst': {
      isAllowed: true,
      name: 'Desert',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tdst',
      id: 'tag-terrain-08'
    },
    'tgrs': {
      isAllowed: true,
      name: 'Grasslands',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tgrs',
      id: 'tag-terrain-09'
    },
    'tmsh': {
      isAllowed: true,
      name: 'Marsh',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tmsh',
      id: 'tag-terrain-10'
    },
    'tsvh': {
      isAllowed: true,
      name: 'Savannah',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tsvh',
      id: 'tag-terrain-11'
    },
    'tfst': {
      isAllowed: true,
      name: 'Forest',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tfst',
      id: 'tag-terrain-12'
    },
    'tswm': {
      isAllowed: true,
      name: 'Swamp',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tswm',
      id: 'tag-terrain-13'
    },
    'tjng': {
      isAllowed: true,
      name: 'Jungle',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tjng',
      id: 'tag-terrain-14'
    },
    'tudr': {
      isAllowed: true,
      name: 'Underdark',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'tudr',
      id: 'tag-terrain-15'
    },
    'turb': {
      isAllowed: true,
      name: 'Urban',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.TERRAIN
      ],
      key: 'turb',
      id: 'tag-terrain-16'
    },
    'pccn': {
      isAllowed: true,
      name: 'Conventional',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.POWER_CENTER_TYPE
      ],
      key: 'pccn',
      id: 'tag-power-center-type-01'
    },
    'pcns': {
      isAllowed: true,
      name: 'Nonstandard',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.POWER_CENTER_TYPE
      ],
      key: 'pcns',
      id: 'tag-power-center-type-02'
    },
    'pcmg': {
      isAllowed: true,
      name: 'Magical',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.POWER_CENTER_TYPE
      ],
      key: 'pcmg',
      id: 'tag-power-center-type-03'
    },
    'pcmn': {
      isAllowed: true,
      name: 'Monstrous',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.POWER_CENTER_TYPE
      ],
      key: 'pcmn',
      id: 'tag-power-center-type-04'
    },
    'rtylg': {
      isAllowed: true,
      name: 'Legendary',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.RARITY
      ],
      key: 'rtylg',
      id: 'tag-rarity-01'
    },
    'rtyer': {
      isAllowed: true,
      name: 'Extremely Rare',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.RARITY
      ],
      key: 'rtyer',
      id: 'tag-rarity-02'
    },
    'rtyvr': {
      isAllowed: true,
      name: 'Very Rare',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.RARITY
      ],
      key: 'rtyvr',
      id: 'tag-rarity-03'
    },
    'rtyr': {
      isAllowed: true,
      name: 'Rare',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.RARITY
      ],
      key: 'rtyr',
      id: 'tag-rarity-04'
    },
    'rtyun': {
      isAllowed: true,
      name: 'Uncommon',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.RARITY
      ],
      key: 'rtyun',
      id: 'tag-rarity-05'
    },
    'rtyc': {
      isAllowed: true,
      name: 'Common',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.RARITY
      ],
      key: 'rtyc',
      id: 'tag-rarity-06'
    },
    'rtyvc': {
      isAllowed: true,
      name: 'Very Common',
      type: 'tag',
      tagTypes: [
        service_.tagTypes.DEFAULT,
        service_.tagTypes.RARITY
      ],
      key: 'rtyvc',
      id: 'tag-rarity-07'
    }
  };

  // TODO: Separate all sources out into editions and update appropriate tags accordingly
  /**
   * weight is not used. These are always placed either automatically or manually.
   */
  service_.defaultSources = {
    'phb35e': {
      isAllowed: true,
      name: 'Player\'s Handbook (DnD 3.5E)',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.phb.id,
        service_.defaultTagList.dnd35.id
      ],
      key: 'phb35e',
      id: 'source-01a'
    },
    'phb5e': {
      isAllowed: true,
      name: 'Player\'s Handbook (DnD 5E)',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.phb.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'phb5e',
      id: 'source-01b'
    },
    'mm35e': {
      isAllowed: true,
      name: 'Monster Manual (DnD 3.5E)',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dnd35e.id
      ],
      key: 'mm35e',
      id: 'source-02a'
    },
    'mm5e': {
      isAllowed: true,
      name: 'Monster Manual (DnD 5E)',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'mm5e',
      id: 'source-02b'
    },
    'dmg35e': {
      isAllowed: true,
      name: 'Dungeon Master\'s Guide (DnD 3.5E)',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dmg.id,
        service_.defaultTagList.dnd35.id
      ],
      key: 'dmg35e',
      id: 'source-03a'
    },
    'dmg5e': {
      isAllowed: true,
      name: 'Dungeon Master\'s Guide (DnD 5E)',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dmg.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'dmg5e',
      id: 'source-03b'
    },
    'elm': {
      isAllowed: true,
      name: 'Elemental Evil Player\'s Companion',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.elm.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'elm',
      id: 'source-04'
    },
    'scg': {
      isAllowed: true,
      name: 'Sword Coast Adventure Guide',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.scg.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'scg',
      id: 'source-05'
    },
    'vol': {
      isAllowed: true,
      name: 'Volo\'s Guide to Monsters',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'vol',
      id: 'source-06'
    },
    'xan': {
      isAllowed: true,
      name: 'Xanathar\'s Guide to Everything',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.xan.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'xan',
      id: 'source-07'
    },
    'psz': {
      isAllowed: true,
      name: 'Plane Shift: Zendikar',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.psz.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'psz',
      id: 'source-08'
    },
    'ttp': {
      isAllowed: true,
      name: 'The Tortle Package',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.ttp.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'ttp',
      id: 'source-09'
    },
    'ua': {
      isAllowed: true,
      name: 'Unearthed Arcana',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.ua.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'ua',
      id: 'source-10'
    },
    'uacdv': {
      isAllowed: true,
      name: 'Unearthed Arcana: Class Design Variants',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uacdv.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'uacdv',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA3_ClassDesignVariants.pdf',
      id: 'source-11'
    },
    'uacr': {
      isAllowed: true,
      name: 'Unearthed Arcana: Classics Revisited',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uacr.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'uacr',
      src: 'http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf',
      id: 'source-12'
    },
    'uaeb': {
      isAllowed: true,
      name: 'Unearthed Arcana: Eberron',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uaeb.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'uaeb',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.pdf',
      id: 'source-13'
    },
    'uagh': {
      isAllowed: true,
      name: 'Unearthed Arcana: Gothic Heroes',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uagh.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'uagh',
      src: 'https://dnd.wizards.com/sites/default/files/media/upload/articles/UA%20Gothic%20Characters.pdf',
      id: 'source-14'
    },
    'uamm': {
      isAllowed: true,
      name: 'Unearthed Arcana: Modern Magic',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uamm.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'uamm',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA_ModernMagic.pdf',
      id: 'source-15'
    },
    'uaps': {
      isAllowed: true,
      name: 'Unearthed Arcana: Psionics & The Mystic',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uaps.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'uamm',
      src: 'http://media.wizards.com/2016/downloads/Psionics_and_Mystic_V2.pdf',
      id: 'source-16'
    },
    'uarmpc': {
      isAllowed: true,
      name: 'Unearthed Arcana: Rune Magic Prestige Class',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uarmpc.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'uarmpc',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA_Rune_Magic_Prestige_Class.pdf',
      id: 'source-17'
    },
    'uaro': {
      isAllowed: true,
      name: 'Unearthed Arcana: Ranger Options',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uaro.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'uaro',
      src: 'http://media.wizards.com/2015/downloads/dnd/DX_0907_UA_RangerOptions.pdf',
      id: 'source-18'
    },
    'uatom': {
      isAllowed: true,
      name: 'Unearthed Arcana: That Old Black Magic',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uatom.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'uatom',
      src: 'https://media.wizards.com/2015/downloads/dnd/07_UA_That_Old_Black_Magic.pdf',
      id: 'source-19'
    },
    'uawb': {
      isAllowed: true,
      name: 'Unearthed Arcana: Waterborne Adventures',
      type: 'source',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uawb.id,
        service_.defaultTagList.dnd5E.id
      ],
      key: 'uawb',
      src: 'https://media.wizards.com/2015/downloads/ dnd /UA_ Waterborne_v3.pdf',
      id: 'source-20'
    }
  };

  /**
   * weight is used to give weight to objects that have a rarity rating. 
   */
  service_.defaultRarities = {
    'legendary': {
      isAllowed: true,
      name: 'Legendary',
      type: 'rarity',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.rtylg.id
      ],
      weight: {
        default: 1,
        custom: 1
      },
      classInfo: {
        isAllowed: false,
        dieType: 0
      },
      key: 'legendary',
      id: 'rarity-001'
    },
    'extremelyRare': {
      isAllowed: true,
      name: 'Extremely Rare',
      type: 'rarity',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.rtyer.id
      ],
      weight: {
        default: 2,
        custom: 2
      },
      classInfo: {
        isAllowed: false,
        dieType: 0
      },
      key: 'extremelyRare',
      id: 'rarity-002'
    },
    'veryRare': {
      isAllowed: true,
      name: 'Very Rare',
      type: 'rarity',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.rtyvr.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      classInfo: {
        isAllowed: true,
        dieType: 3
      },
      key: 'veryRare',
      id: 'rarity-003'
    },
    'rare': {
      isAllowed: true,
      name: 'Rare',
      type: 'rarity',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.rtyr.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      classInfo: {
        isAllowed: true,
        dieType: 4
      },
      key: 'rare',
      id: 'rarity-004'
    },
    'uncommon': {
      isAllowed: true,
      name: 'Uncommon',
      type: 'rarity',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.rtyun.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      classInfo: {
        isAllowed: true,
        dieType: 6
      },
      key: 'uncommon',
      id: 'rarity-005'
    },
    'common': {
      isAllowed: true,
      name: 'Common',
      type: 'rarity',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.rtyc.id
      ],
      weight: {
        default: 32,
        custom: 32
      },
      classInfo: {
        isAllowed: true,
        dieType: 8
      },
      key: 'common',
      id: 'rarity-006'
    },
    'veryCommon': {
      isAllowed: true,
      name: 'Very Common',
      type: 'rarity',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.rtyvc.id
      ],
      weight: {
        default: 64,
        custom: 64
      },
      classInfo: {
        isAllowed: false,
        dieType: 0
      },
      key: 'veryCommon',
      id: 'rarity-007'
    }
  };

  /**
   * weight should add up to 100. Only used as weighted random value for determining power center alignment.
   */
  service_.defaultAlignments = [
    {
      isAllowed: true,
      name: 'Lawful Good',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.lg.id
      ],
      weight: {
        default: 35,
        custom: 35
      },
      id: 'pcal-001'
    },
    {
      isAllowed: true,
      name: 'Neutral Good',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.ng.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      id: 'pcal-002'
    },
    {
      isAllowed: true,
      name: 'Chaotic Good',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.cg.id
      ],
      weight: {
        default: 2,
        custom: 2
      },
      id: 'pcal-003'
    },
    {
      isAllowed: true,
      name: 'Lawful Neutral',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.ln.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      id: 'pcal-004'
    },
    {
      isAllowed: true,
      name: 'True Neutral',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.tn.id
      ],
      weight: {
        default: 2,
        custom: 2
      },
      id: 'pcal-005'
    },
    {
      isAllowed: true,
      name: 'Chaotic Neutral',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.cn.id
      ],
      weight: {
        default: 1,
        custom: 1
      },
      id: 'pcal-006'
    },
    {
      isAllowed: true,
      name: 'Lawful Evil',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id
      ],
      weight: {
        default: 26,
        custom: 26
      },
      id: 'pcal-007'
    },
    {
      isAllowed: true,
      name: 'Neutral Evil',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      id: 'pcal-008'
    },
    {
      isAllowed: true,
      name: 'Chaotic Evil',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id
      ],
      weight: {
        default: 2,
        custom: 2
      },
      id: 'pcal-009'
    },
    {
      isAllowed: true,
      name: 'Any Neutral',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.an.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      id: 'pcal-010'
    },
    {
      isAllowed: true,
      name: 'Any Lawful',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.al.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      id: 'pcal-011'
    },
    {
      isAllowed: true,
      name: 'Any Chaotic',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.ac.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      id: 'pcal-012'
    },
    {
      isAllowed: true,
      name: 'Any Good',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.ag.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      id: 'pcal-013'
    },
    {
      isAllowed: true,
      name: 'Any Evil',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ae.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      id: 'pcal-014'
    },
    {
      isAllowed: true,
      name: 'Any Alignment',
      type: 'alignment',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.aa.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      id: 'pcal-015'
    }
  ];

  /**
   * weight should add up to 100. They can be used as a percentage OR weighted random value.
   */
  service_.defaultAgeCategories = [
    {
      id: 'age-001',
      name: 'Adult',
      isAllowed: true,
      type: 'age',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 50,
        custom: 50
      },
      order: {
        default: 1,
        custom: 1
      }
    },
    {
      id: 'age-002',
      name: 'Middle Age',
      isAllowed: true,
      type: 'age',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 35,
        custom: 35
      },
      order: {
        default: 2,
        custom: 2
      }
    },
    {
      id: 'age-003',
      name: 'Old',
      isAllowed: true,
      type: 'age',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 13,
        custom: 13
      },
      order: {
        default: 3,
        custom: 3
      }
    },
    {
      id: 'age-004',
      name: 'Venerable',
      isAllowed: true,
      type: 'age',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 2,
        custom: 2
      },
      order: {
        default: 4,
        custom: 4
      }
    }
  ];

  /**
   * weight should add up to 100. Only used as weighted random value.
   */
  service_.defaultAuthorities = [
    {
      id: 'auth-001',
      name: 'Highest Level Warrior',
      isAllowed: true,
      type: 'authority',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 60,
        custom: 60
      }
    },
    {
      id: 'auth-002',
      name: 'Second Highest Level Fighter',
      isAllowed: true,
      type: 'authority',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 20,
        custom: 20
      }
    },
    {
      id: 'auth-003',
      name: 'Highest Level Fighter',
      isAllowed: true,
      type: 'authority',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 20,
        custom: 20
      }
    }
  ];

  /**
   * weight is not used.
   */
  service_.defaultClasses = [
    {
      isAllowed: true,
      name: 'Barbarian',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb35e.id,
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.rare,
        custom: service_.defaultRarities.rare
      },
      subclasses: [],
      isNpc: false,
      id: 'class-001'
    },
    {
      isAllowed: true,
      name: 'Bard',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb35e.id,
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.uncommon,
        custom: service_.defaultRarities.uncommon
      },
      subclasses: [],
      isNpc: false,
      id: 'class-002'
    },
    {
      isAllowed: true,
      name: 'Cleric',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb35e.id,
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.uncommon,
        custom: service_.defaultRarities.uncommon
      },
      subclasses: [],
      isNpc: false,
      id: 'class-003'
    },
    {
      isAllowed: true,
      name: 'Druid',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb35e.id,
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.uncommon,
        custom: service_.defaultRarities.uncommon
      },
      subclasses: [],
      isNpc: false,
      id: 'class-004'
    },
    {
      isAllowed: true,
      name: 'Fighter',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb35e.id,
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.common,
        custom: service_.defaultRarities.common
      },
      subclasses: [],
      isNpc: false,
      id: 'class-005'
    },
    {
      isAllowed: true,
      name: 'Monk',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb35e.id,
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.rare,
        custom: service_.defaultRarities.rare
      },
      subclasses: [],
      isNpc: false,
      id: 'class-006'
    },
    {
      isAllowed: true,
      name: 'Paladin',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb35e.id,
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.veryRare,
        custom: service_.defaultRarities.veryRare
      },
      subclasses: [],
      isNpc: false,
      id: 'class-007'
    },
    {
      isAllowed: true,
      name: 'Ranger',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb35e.id,
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.veryRare,
        custom: service_.defaultRarities.veryRare
      },
      subclasses: [],
      isNpc: false,
      id: 'class-008'
    },
    {
      isAllowed: true,
      name: 'Rogue',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb35e.id,
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.common,
        custom: service_.defaultRarities.common
      },
      subclasses: [],
      isNpc: false,
      id: 'class-009'
    },
    {
      isAllowed: true,
      name: 'Sorcerer',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb35e.id,
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.rare,
        custom: service_.defaultRarities.rare
      },
      subclasses: [],
      isNpc: false,
      id: 'class-010'
    },
    {
      isAllowed: true,
      name: 'Warlock',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.veryRare,
        custom: service_.defaultRarities.veryRare
      },
      subclasses: [],
      isNpc: false,
      id: 'class-011'
    },
    {
      isAllowed: true,
      name: 'Wizard',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id,
        service_.defaultTagList.dnd5E.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      sources: [
        service_.defaultSources.phb35e.id,
        service_.defaultSources.phb5e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.rare,
        custom: service_.defaultRarities.rare
      },
      subclasses: [],
      isNpc: false,
      id: 'class-012'
    },
    {
      isAllowed: true,
      name: 'Adept',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id
      ],
      weight: {
        default: 1,
        custom: 1
      },
      sources: [
        service_.defaultSources.dmg35e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.uncommon,
        custom: service_.defaultRarities.uncommon
      },
      subclasses: [],
      isNpc: true,
      id: 'class-013'
    },
    {
      isAllowed: true,
      name: 'Aristocrat',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id
      ],
      weight: {
        default: 1,
        custom: 1
      },
      sources: [
        service_.defaultSources.dmg35e.id
      ],
      rolls: 1,
      rarity: {
        default: service_.defaultRarities.rare,
        custom: service_.defaultRarities.rare
      },
      subclasses: [],
      isNpc: true,
      id: 'class-014'
    },
    {
      isAllowed: true,
      name: 'Commoner',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id
      ],
      weight: {
        default: 182,
        custom: 182
      },
      sources: [
        service_.defaultSources.dmg35e.id
      ],
      rolls: 4,
      rarity: {
        default: service_.defaultRarities.rare,
        custom: service_.defaultRarities.rare
      },
      subclasses: [],
      isNpc: true,
      id: 'class-015'
    },
    {
      isAllowed: true,
      name: 'Expert',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id
      ],
      weight: {
        default: 6,
        custom: 6
      },
      sources: [
        service_.defaultSources.dmg35e.id
      ],
      rolls: 3,
      rarity: {
        default: service_.defaultRarities.rare,
        custom: service_.defaultRarities.rare
      },
      subclasses: [],
      isNpc: true,
      id: 'class-016'
    },
    {
      isAllowed: true,
      name: 'Warrior',
      type: 'class',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dnd35.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      sources: [
        service_.defaultSources.dmg35e.id
      ],
      rolls: 2,
      rarity: {
        default: service_.defaultRarities.rare,
        custom: service_.defaultRarities.rare
      },
      subclasses: [],
      isNpc: true,
      id: 'class-017'
    }
  ];

  /**
   * weight should add up to 100. Only used as weighted random value.
   */
  service_.defaultClimates = [
    {
      isAllowed: true,
      name: 'Arctic',
      type: 'climate',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.carc.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      id: 'clim-001'
    },
    {
      isAllowed: true,
      name: 'Cold',
      type: 'climate',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.ccld.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      id: 'clim-002'
    },
    {
      isAllowed: true,
      name: 'Temperate',
      type: 'climate',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.ctmp.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      id: 'clim-003'
    },
    {
      isAllowed: true,
      name: 'Warm',
      type: 'climate',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.cwrm.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      id: 'clim-004'
    },
    {
      isAllowed: true,
      name: 'Tropical',
      type: 'climate',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.ctrp.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      id: 'clim-005'
    },
  ];

  // TODO: Update for Sources
  /**
   * when rolling up a monstrous power center, alignment is rolled first. monsters are 
   * divided up here by alignment, then type alphabetically.
   *
   * TODO Need to clean up rarity on each. Make it more sensible with the rarities Ive chosen.
   */
  service_.defaultMonsters = [
    {
      isAllowed: true,
      name: 'Couatyl',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.cel.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.lg.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tjng.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-001'
    },
    {
      isAllowed: true,
      name: 'Angel',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.cel.id,
        service_.defaultTagList.ang.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.lg.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-002'
    },
    {
      isAllowed: true,
      name: 'Bronze Dragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.lg.id,
        service_.defaultTagList.ctrp.id,
        service_.defaultTagList.taqu.id,
        service_.defaultTagList.tcst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-003'
    },
    {
      isAllowed: true,
      name: 'Gold Dragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.lg.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tgrs.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-004'
    },
    {
      isAllowed: true,
      name: 'Silver Dragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.lg.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.tmtn.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-005'
    },
    {
      isAllowed: true,
      name: 'Brownie',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fey.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.lg.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tpln.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-006'
    },

    {
      isAllowed: true,
      name: 'Pseudodragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.ng.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.tcst.id,
        service_.defaultTagList.tdst.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tmtn.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-007'
    },
    {
      isAllowed: true,
      name: 'Pixie',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fey.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.ng.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-008'
    },
    {
      isAllowed: true,
      name: 'Sprite',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fey.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.ng.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-009'
    },
    {
      isAllowed: true,
      name: 'Aarakocra',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.ng.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tmtn.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-010'
    },
    {
      isAllowed: true,
      name: 'Deep Gnome',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.ng.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-011'
    },
    {
      isAllowed: true,
      name: 'Centaur',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.mon.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.ng.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tgrs.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-012'
    },

    {
      isAllowed: true,
      name: 'Brass Dragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.cg.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tdst.id,
        service_.defaultTagList.tpln.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-013'
    },
    {
      isAllowed: true,
      name: 'Copper Dragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.cg.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tmtn.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-014'
    },
    {
      isAllowed: true,
      name: 'Faerie Dragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.cg.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.ctrp.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-015'
    },
    {
      isAllowed: true,
      name: 'Djinni',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.ele.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.cg.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tdst.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-016'
    },
    {
      isAllowed: true,
      name: 'Storm Giant',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.gnt.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.cg.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.taqu.id,
        service_.defaultTagList.tcst.id,
        service_.defaultTagList.tmtn.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-017'
    },
    {
      isAllowed: true,
      name: 'Treant',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.plt.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.cg.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-018'
    },

    {
      isAllowed: true,
      name: 'Azer',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.ele.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.ln.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.ctrp.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-019'
    },
    {
      isAllowed: true,
      name: 'Githzerai',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.ln.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-020'
    },
    {
      isAllowed: true,
      name: 'Sphinx',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.mon.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.ln.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tdst.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-021'
    },
    {
      isAllowed: true,
      name: 'Myconid',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.plt.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.ln.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-022'
    },

    {
      isAllowed: true,
      name: 'Galeb Duhr',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.ele.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.tn.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tmtn.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-023'
    },
    {
      isAllowed: true,
      name: 'Dryad',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fey.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.tn.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-024'
    },
    {
      isAllowed: true,
      name: 'Cloud Giant',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.gnt.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.tn.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.tmtn.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-025'
    },
    {
      isAllowed: true,
      name: 'Stone Giant',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.gnt.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.tn.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tmtn.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-026'
    },
    {
      isAllowed: true,
      name: 'Lizardfolk',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.rep.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.tn.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.ctrp.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.tswm.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-027'
    },
    {
      isAllowed: true,
      name: 'Merfolk',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.tn.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.taqu.id,
        service_.defaultTagList.tcst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-028'
    },
    {
      isAllowed: true,
      name: 'Doppelganger',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.mon.id,
        service_.defaultTagList.shp.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.tn.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tudr.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-029'
    },

    {
      isAllowed: true,
      name: 'Marid',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.ele.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.cn.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.taqu.id,
        service_.defaultTagList.tcst.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-030'
    },
    {
      isAllowed: true,
      name: 'Satyr',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fey.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.cn.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-031'
    },
    {
      isAllowed: true,
      name: 'Cyclops',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.gnt.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.cn.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tcst.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tmtn.id,
        service_.defaultTagList.tdst.id,
        service_.defaultTagList.tgrs.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-032'
    },
    {
      isAllowed: true,
      name: 'Kenku',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.cn.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-033'
    },
    {
      isAllowed: true,
      name: 'Thri-Kreen',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.cn.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tdst.id,
        service_.defaultTagList.tgrs.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-034'
    },

    {
      isAllowed: true,
      name: 'Beholder',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.abr.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.ccld.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-035'
    },
    {
      isAllowed: true,
      name: 'Mind Flayer',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.abr.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-036'
    },
    {
      isAllowed: true,
      name: 'Blue Dragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tdst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-037'
    },
    {
      isAllowed: true,
      name: 'Green Dragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-038'
    },
    {
      isAllowed: true,
      name: 'Efreeti',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.ele.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tdst.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-039'
    },
    {
      isAllowed: true,
      name: 'Devil',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fnd.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-040'
    },
    {
      isAllowed: true,
      name: 'Rahkshasa',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fnd.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-041'
    },
    {
      isAllowed: true,
      name: 'Fire Giant',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.gnt.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tmtn.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-042'
    },
    {
      isAllowed: true,
      name: 'Ogre Mage (Oni)',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.gnt.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.ccld.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-043'
    },
    {
      isAllowed: true,
      name: 'Duergar',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-044'
    },
    {
      isAllowed: true,
      name: 'Githyanki',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-045'
    },
    {
      isAllowed: true,
      name: 'Hobgoblin',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.gob.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tdst.id,
        service_.defaultTagList.tgrs.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 32,
        custom: 32
      },
      rarity: service_.defaultRarities.common,
      id: 'mnstr-046'
    },
    {
      isAllowed: true,
      name: 'Kobold',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.rep.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tcst.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tmtn.id,
        service_.defaultTagList.tdst.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.tswm.id,
        service_.defaultTagList.tudr.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 32,
        custom: 32
      },
      rarity: service_.defaultRarities.common,
      id: 'mnstr-047'
    },
    {
      isAllowed: true,
      name: 'Sahuagin',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.taqu.id,
        service_.defaultTagList.tcst.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-048'
    },
    {
      isAllowed: true,
      name: 'Medusa',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.mon.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tdst.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-049'
    },
    {
      isAllowed: true,
      name: 'Vampire',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.und.id,
        service_.defaultTagList.shp.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-050'
    },

    {
      isAllowed: true,
      name: 'Dao',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.ele.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-051'
    },
    {
      isAllowed: true,
      name: 'Green Hag',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fey.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.tswm.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-052'
    },
    {
      isAllowed: true,
      name: 'Yugoloth',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fnd.id,
        service_.defaultTagList.yug.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-053'
    },
    {
      isAllowed: true,
      name: 'Night Hag',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fnd.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-054'
    },
    {
      isAllowed: true,
      name: 'Succubus/Incubus',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fnd.id,
        service_.defaultTagList.shp.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-055'
    },
    {
      isAllowed: true,
      name: 'Frost Giant',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.gnt.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.carc.id,
        service_.defaultTagList.ccld.id,
        service_.defaultTagList.tmtn.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-056'
    },
    {
      isAllowed: true,
      name: 'Bullywug',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.tswm.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-057'
    },
    {
      isAllowed: true,
      name: 'Drow',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-058'
    },
    {
      isAllowed: true,
      name: 'Goblin',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.gob.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tgrs.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 64,
        custom: 64
      },
      rarity: service_.defaultRarities.veryCommon,
      id: 'mnstr-059'
    },
    {
      isAllowed: true,
      name: 'Grimlock',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-060'
    },
    {
      isAllowed: true,
      name: 'Kuo-toa',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-061'
    },
    {
      isAllowed: true,
      name: 'Yuan-Ti',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.mon.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.ctrp.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.tswm.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-062'
    },
    {
      isAllowed: true,
      name: 'Wight',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.und.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tdst.id,
        service_.defaultTagList.tswm.id,
        service_.defaultTagList.tudr.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-063'
    },

    {
      isAllowed: true,
      name: 'Black Dragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.ccld.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tswm.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-064'
    },
    {
      isAllowed: true,
      name: 'Red Dragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tmtn.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-065'
    },
    {
      isAllowed: true,
      name: 'White Dragon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.dra.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.carc.id,
        service_.defaultTagList.ccld.id,
        service_.defaultTagList.tmtn.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-066'
    },
    {
      isAllowed: true,
      name: 'Sea Hag',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fey.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.taqu.id,
        service_.defaultTagList.tcst.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-067'
    },
    {
      isAllowed: true,
      name: 'Quickling',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fey.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tpln.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-068'
    },
    {
      isAllowed: true,
      name: 'Demon',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.fnd.id,
        service_.defaultTagList.dmn.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-069'
    },
    {
      isAllowed: true,
      name: 'Ettin',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.gnt.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.ccld.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tmtn.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-070'
    },
    {
      isAllowed: true,
      name: 'Hill Giant',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.gnt.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.thil.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-071'
    },
    {
      isAllowed: true,
      name: 'Ogre',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.gnt.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.carc.id,
        service_.defaultTagList.ccld.id,
        service_.defaultTagList.tcst.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tmtn.id,
        service_.defaultTagList.tdst.id,
        service_.defaultTagList.tgrs.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.tswm.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-072'
    },
    {
      isAllowed: true,
      name: 'Troll',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.gnt.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.carc.id,
        service_.defaultTagList.ccld.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.tmtn.id,
        service_.defaultTagList.tswm.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-073'
    },
    {
      isAllowed: true,
      name: 'Bugbear',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.gob.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tgrs.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 32,
        custom: 32
      },
      rarity: service_.defaultRarities.common,
      id: 'mnstr-074'
    },
    {
      isAllowed: true,
      name: 'Gnoll',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tdst.id,
        service_.defaultTagList.tgrs.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 16,
        custom: 16
      },
      rarity: service_.defaultRarities.uncommon,
      id: 'mnstr-075'
    },
    {
      isAllowed: true,
      name: 'Orc',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tmtn.id,
        service_.defaultTagList.tgrs.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.tswm.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 64,
        custom: 64
      },
      rarity: service_.defaultRarities.veryCommon,
      id: 'mnstr-076'
    },
    {
      isAllowed: true,
      name: 'Troglodyte',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-077'
    },
    {
      isAllowed: true,
      name: 'Lamia',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.mon.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.tdst.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-078'
    },
    {
      isAllowed: true,
      name: 'Death Knight',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.und.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-079'
    },

    {
      isAllowed: true,
      name: 'Werebear',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.shp.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.ng.id,
        service_.defaultTagList.carc.id,
        service_.defaultTagList.ccld.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-080'
    },
    {
      isAllowed: true,
      name: 'Weretiger',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.shp.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.tn.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.ctrp.id,
        service_.defaultTagList.tdst.id,
        service_.defaultTagList.tgrs.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-081'
    },
    {
      isAllowed: true,
      name: 'Wererat',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.shp.id,
        service_.defaultTagList.law.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tfst.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-082'
    },
    {
      isAllowed: true,
      name: 'Wereboar',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.shp.id,
        service_.defaultTagList.ntr.id,
        service_.defaultTagList.god.id,
        service_.defaultTagList.ng.id,
        service_.defaultTagList.ctmp.id,
        service_.defaultTagList.cwrm.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tgrs.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-083'
    },
    {
      isAllowed: true,
      name: 'Werewolf',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.hum.id,
        service_.defaultTagList.shp.id,
        service_.defaultTagList.cht.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.thil.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-084'
    },

    {
      isAllowed: true,
      name: 'Lich',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.und.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.ae.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-085'
    },
    {
      isAllowed: true,
      name: 'Dracolich',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.und.id,
        service_.defaultTagList.evl.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.ae.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tany.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      rarity: service_.defaultRarities.veryRare,
      id: 'mnstr-086'
    },

    {
      isAllowed: true,
      name: 'Ghost',
      type: 'monster',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.mm.id,
        service_.defaultTagList.und.id,
        service_.defaultTagList.lg.id,
        service_.defaultTagList.ng.id,
        service_.defaultTagList.cg.id,
        service_.defaultTagList.ln.id,
        service_.defaultTagList.tn.id,
        service_.defaultTagList.cn.id,
        service_.defaultTagList.le.id,
        service_.defaultTagList.ne.id,
        service_.defaultTagList.ce.id,
        service_.defaultTagList.aa.id,
        service_.defaultTagList.cany.id,
        service_.defaultTagList.tudr.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 8,
        custom: 8
      },
      rarity: service_.defaultRarities.rare,
      id: 'mnstr-087'
    }
  ];

  /**
   * weight should add up to 100. Only used as weighted random value. use tags to pick out 
   * sets first! Conventional/Nonstandard/Magical. Weights will only match up within groups.
   *
   * TODO: Maybe change over method to be similar to Monsters, using rarity
   */
  service_.defaultPowerCenters = [
    {
      isAllowed: true,
      name: 'Mayor',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pccn.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      id: 'pctc-001'
    },
    {
      isAllowed: true,
      name: 'Council',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pccn.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      id: 'pctc-002'
    },
    {
      isAllowed: true,
      name: 'Noble',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pccn.id
      ],
      weight: {
        default: 40,
        custom: 40
      },
      id: 'pctc-003'
    },
    {
      isAllowed: true,
      name: 'Merchant\'s Guild',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      id: 'pctn-001'
    },
    {
      isAllowed: true,
      name: 'Craftsmen\'s Guild - General',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      id: 'pctn-002'
    },
    {
      isAllowed: true,
      name: 'Craftsmen\'s Guild - Specific',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      id: 'pctn-003'
    },
    {
      isAllowed: true,
      name: 'Profession\'s Guild - Specific',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 15,
        custom: 15
      },      id: 'pctn-004'
    },
    {
      isAllowed: true,
      name: 'Thieves\' Guild',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      id: 'pctn-005'
    },
    {
      isAllowed: true,
      name: 'Assassin\'s Guild',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'pctn-006'
    },
    {
      isAllowed: true,
      name: 'Warrior\'s Guild',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'pctn-007'
    },
    {
      isAllowed: true,
      name: 'Wealthy Aristocracy',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'pctn-008'
    },
    {
      isAllowed: true,
      name: 'Prestigious Aristocracy (Successful Adventurers)',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'pctn-009'
    },
    {
      isAllowed: true,
      name: 'Council of Elders',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      id: 'pctn-010'
    },
    {
      isAllowed: true,
      name: 'Bard College',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'pctn-011'
    },
    {
      isAllowed: true,
      name: 'Powerful Temple',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcmg.id
      ],
      weight: {
        default: 33,
        custom: 33
      },
      id: 'pctm-001'
    },
    {
      isAllowed: true,
      name: 'Powerful Arcane Caster',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcmg.id
      ],
      weight: {
        default: 34,
        custom: 34
      },
      id: 'pctm-002'
    },
    {
      isAllowed: true,
      name: 'Wizard\'s Guild/College',
      type: 'powerCenter',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcmg.id
      ],
      weight: {
        default: 33,
        custom: 33
      },
      id: 'pctm-003'
    }
  ];

  /**
   * weight should add up to 100. Only used as weighted random value.
   */
  service_.defaultPowerCenterTypes = [
    {
      isAllowed: true,
      name: 'Conventional',
      type: 'powerCenterType',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pccn.id
      ],
      weight: {
        default: 65,
        custom: 65
      },
      order: {
        default: 0,
        custom: 0
      },
      chanceForExtraMonstrous: 5,
      key: 'conventional',
      id: 'pctr-001'
    },
    {
      isAllowed: true,
      name: 'Nonstandard',
      type: 'powerCenterType',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcns.id
      ],
      weight: {
        default: 30,
        custom: 30
      },
      order: {
        default: 1,
        custom: 1
      },
      chanceForExtraMonstrous: 0,
      key: 'nonstandard',
      id: 'pctr-002'
    },
    {
      isAllowed: true,
      name: 'Magical',
      type: 'powerCenterType',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.pcmg.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      order: {
        default: 2,
        custom: 2
      },
      chanceForExtraMonstrous: 0,
      key: 'magical',
      id: 'pctr-003'
    }
  ];

  // TODO: Update for Sources
  /**
   * weight should add up to 100. They can be used as a percentage OR weighted random value.
   * this only applies to subraces, as races are selected manually.
   */
  service_.defaultRaces = [
    {
      isAllowed: true,
      name: 'Human',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.phb.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 40,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'dflt-001',
          id: 'dflt-001a'
        },
        {
          isAllowed: false,
          name: 'Variant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-001',
          id: 'dflt-001b'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-001',
          id: 'dflt-001c'
        }
      ],
      id: 'dflt-001'
    },
    {
      isAllowed: true,
      name: 'Halfling',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.phb.id,
        service_.defaultTagList.scg.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 30,
      subraces: [
        {
          isAllowed: true,
          name: 'Lightfoot',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 50,
            custom: 50
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 50,
          owner: 'dflt-002',
          id: 'dflt-002a'
        },
        {
          isAllowed: true,
          name: 'Stout',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 40,
            custom: 40
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 40,
          owner: 'dflt-002',
          id: 'dflt-002b'
        },
        {
          isAllowed: true,
          name: 'Ghostwise',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.scg.id
          ],
          weight: {
            default: 10,
            custom: 10
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-002',
          id: 'dflt-002c'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-002',
          id: 'dflt-002d'
        }
      ],
      id: 'dflt-002'
    },
    {
      isAllowed: true,
      name: 'Elf',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.phb.id,
        service_.defaultTagList.dmg.id,
        service_.defaultTagList.psz.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: true,
          name: 'Drow',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 5,
            custom: 5
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 5,
          owner: 'dflt-003',
          id: 'dflt-003a'
        },
        {
          isAllowed: true,
          name: 'Eladrin',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.dmg.id
          ],
          weight: {
            default: 5,
            custom: 5
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 5,
          owner: 'dflt-003',
          id: 'dflt-003b'
        },
        {
          isAllowed: true,
          name: 'High Elf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 50,
            custom: 50
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 50,
          owner: 'dflt-003',
          id: 'dflt-003c'
        },
        {
          isAllowed: true,
          name: 'Wood Elf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 40,
            custom: 40
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 40,
          owner: 'dflt-003',
          id: 'dflt-003d'
        },
        {
          isAllowed: false,
          name: 'Joraga',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.psz.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 4,
            custom: 4
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-003',
          id: 'dflt-003e'
        },
        {
          isAllowed: false,
          name: 'Mul Daya',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.psz.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 5,
            custom: 5
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-003',
          id: 'dflt-003f'
        },
        {
          isAllowed: false,
          name: 'Tajuru',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.psz.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 6,
            custom: 6
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-003',
          id: 'dflt-003g'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 7,
            custom: 7
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-003',
          id: 'dflt-003h'
        }
      ],
      id: 'dflt-003'
    },
    {
      isAllowed: true,
      name: 'Dwarf',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.phb.id,
        service_.defaultTagList.scg.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Hill Dwarf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 60,
            custom: 60
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 60,
          owner: 'dflt-004',
          id: 'dflt-004a'
        },
        {
          isAllowed: true,
          name: 'Mountain Dwarf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 35,
            custom: 35
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 35,
          owner: 'dflt-004',
          id: 'dflt-004b'
        },
        {
          isAllowed: true,
          name: 'Duergar',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.scg.id
          ],
          weight: {
            default: 5,
            custom: 5
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 5,
          owner: 'dflt-004',
          id: 'dflt-004c'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-004',
          id: 'dflt-004d'
        }
      ],
      id: 'dflt-004'
    },
    {
      isAllowed: true,
      name: 'Gnome',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.phb.id,
        service_.defaultTagList.elm.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Deep Gnome',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.elm.id
          ],
          weight: {
            default: 5,
            custom: 5
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 5,
          owner: 'dflt-005',
          id: 'dflt-005a'
        },
        {
          isAllowed: true,
          name: 'Forest Gnome',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 60,
            custom: 60
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 60,
          owner: 'dflt-005',
          id: 'dflt-005b'
        },
        {
          isAllowed: true,
          name: 'Rock Gnome',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 35,
            custom: 35
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 35,
          owner: 'dflt-005',
          id: 'dflt-005c'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-005',
          id: 'dflt-005d'
        }
      ],
      id: 'dflt-005'
    },
    {
      isAllowed: true,
      name: 'Half Elf',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.phb.id,
        service_.defaultTagList.scg.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.scg.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'dflt-006',
          id: 'dflt-006a'
        },
        {
          isAllowed: false,
          name: 'Half Wood Elf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.scg.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-006',
          id: 'dflt-006b'
        },
        {
          isAllowed: false,
          name: 'Half Moon/Sun Elf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.scg.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-006',
          id: 'dflt-006c'
        },
        {
          isAllowed: false,
          name: 'Half Drow Elf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.scg.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-006',
          id: 'dflt-006d'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 4,
            custom: 4
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-006',
          id: 'dflt-006e'
        }
      ],
      id: 'dflt-006'
    },
    {
      isAllowed: true,
      name: 'Half Orc',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.phb.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'dflt-007',
          id: 'dflt-007a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-007',
          id: 'dflt-007b'
        }
      ],
      id: 'dflt-007'
    },
    {
      isAllowed: false,
      name: 'Dragonborn',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.phb.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Black',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 3,
            custom: 3
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 3,
          owner: 'dflt-008',
          id: 'dflt-008a'
        },
        {
          isAllowed: true,
          name: 'Blue',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 5,
            custom: 5
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 5,
          owner: 'dflt-008',
          id: 'dflt-008b'
        },
        {
          isAllowed: true,
          name: 'Brass',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 14,
            custom: 14
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 14,
          owner: 'dflt-008',
          id: 'dflt-008c'
        },
        {
          isAllowed: true,
          name: 'Bronze',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 17,
            custom: 17
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 17,
          owner: 'dflt-008',
          id: 'dflt-008d'
        },
        {
          isAllowed: true,
          name: 'Copper',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 11,
            custom: 11
          },
          order: {
            default: 4,
            custom: 4
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 11,
          owner: 'dflt-008',
          id: 'dflt-008e'
        },
        {
          isAllowed: true,
          name: 'Gold',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 12,
            custom: 12
          },
          order: {
            default: 5,
            custom: 5
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 12,
          owner: 'dflt-008',
          id: 'dflt-008f'
        },
        {
          isAllowed: true,
          name: 'Green',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 5,
            custom: 5
          },
          order: {
            default: 6,
            custom: 6
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 5,
          owner: 'dflt-008',
          id: 'dflt-008g'
        },
        {
          isAllowed: true,
          name: 'Red',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 12,
            custom: 12
          },
          order: {
            default: 7,
            custom: 7
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 12,
          owner: 'dflt-008',
          id: 'dflt-008h'
        },
        {
          isAllowed: true,
          name: 'Silver',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 23,
            custom: 23
          },
          order: {
            default: 8,
            custom: 8
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 23,
          owner: 'dflt-008',
          id: 'dflt-008i'
        },
        {
          isAllowed: true,
          name: 'White',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 1,
            custom: 1
          },
          order: {
            default: 9,
            custom: 9
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 1,
          owner: 'dflt-008',
          id: 'dflt-008j'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-008',
          id: 'dflt-008k'
        }
      ],
      id: 'dflt-008'
    },
    {
      isAllowed: false,
      name: 'Tiefling',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.phb.id,
        service_.defaultTagList.uatom.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.phb.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'dflt-009',
          id: 'dflt-009a'
        },
        {
          isAllowed: false,
          name: 'Abyssal',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uatom.id,
            service_.defaultTagList.dmn.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-009',
          id: 'dflt-009b'
        },
        {
          isAllowed: false,
          name: 'Infernal',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uatom.id,
            service_.defaultTagList.dvl.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-009',
          id: 'dflt-009c'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-009',
          id: 'dflt-009d'
        }
      ],
      id: 'dflt-009'
    },
    {
      isAllowed: false,
      name: 'Aarakocra',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.elm.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.elm.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'elem-001',
          id: 'elem-001a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'elem-001',
          id: 'elem-001b'
        }
      ],
      id: 'elem-001'
    },
    {
      isAllowed: false,
      name: 'Genasi',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.elm.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Air Genasi',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.elm.id
          ],
          weight: {
            default: 25,
            custom: 25
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 25,
          owner: 'elem-002',
          id: 'elem-002a'
        },
        {
          isAllowed: true,
          name: 'Earth Genasi',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.elm.id
          ],
          weight: {
            default: 25,
            custom: 25
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 25,
          owner: 'elem-002',
          id: 'elem-002b'
        },
        {
          isAllowed: true,
          name: 'Fire Genasi',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.elm.id
          ],
          weight: {
            default: 25,
            custom: 25
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 25,
          owner: 'elem-002',
          id: 'elem-002c'
        },
        {
          isAllowed: true,
          name: 'Water Genasi',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.elm.id
          ],
          weight: {
            default: 25,
            custom: 25
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 25,
          owner: 'elem-002',
          id: 'elem-002d'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 4,
            custom: 4
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'elem-002',
          id: 'elem-002e'
        }
      ],
      id: 'elem-002'
    },
    {
      isAllowed: false,
      name: 'Goliath',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.elm.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.elm.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'elem-003',
          id: 'elem-003a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'elem-003',
          id: 'elem-003b'
        }
      ],
      id: 'elem-003'
    },
    {
      isAllowed: false,
      name: 'Aasimar',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.dmg.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.dmg.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-001',
          id: 'volo-001a'
        },
        {
          isAllowed: false,
          name: 'Fallen',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-001',
          id: 'volo-001b'
        },
        {
          isAllowed: false,
          name: 'Protector',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-001',
          id: 'volo-001c'
        },
        {
          isAllowed: false,
          name: 'Scourge',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-001',
          id: 'volo-001d'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 4,
            custom: 4
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-001',
          id: 'volo-001e'
        }
      ],
      id: 'volo-001'
    },
    {
      isAllowed: false,
      name: 'Bugbear',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.uagh.id,
        service_.defaultTagList.gob.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 30,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id,
            service_.defaultTagList.gob.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-002',
          id: 'volo-002a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.gob.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-002',
          id: 'volo-002b'
        }
      ],
      id: 'volo-002'
    },
    {
      isAllowed: false,
      name: 'Firbolg',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-003',
          id: 'volo-003a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-003',
          id: 'volo-003b'
        }
      ],
      id: 'volo-003'
    },
    {
      isAllowed: false,
      name: 'Goblin',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.psz.id,
        service_.defaultTagList.uagh.id,
        service_.defaultTagList.gob.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 40,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id,
            service_.defaultTagList.gob.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-004',
          id: 'volo-004a'
        },
        {
          isAllowed: false,
          name: 'Grotag',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.psz.id,
            service_.defaultTagList.gob.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-004',
          id: 'volo-004b'
        },
        {
          isAllowed: false,
          name: 'Lavastep',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.psz.id,
            service_.defaultTagList.gob.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-004',
          id: 'volo-004c'
        },
        {
          isAllowed: false,
          name: 'Tuktuk',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.psz.id,
            service_.defaultTagList.gob.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-004',
          id: 'volo-004d'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.gob.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 4,
            custom: 4
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-004',
          id: 'volo-004e'
        }
      ],
      id: 'volo-004'
    },
    {
      isAllowed: false,
      name: 'Hobgoblin',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.uagh.id,
        service_.defaultTagList.gob.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 30,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id,
            service_.defaultTagList.gob.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-005',
          id: 'volo-005a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.gob.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-005',
          id: 'volo-005b'
        }
      ],
      id: 'volo-005'
    },
    {
      isAllowed: false,
      name: 'Kenku',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-006',
          id: 'volo-006a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-006',
          id: 'volo-006b'
        }
      ],
      id: 'volo-006'
    },
    {
      isAllowed: false,
      name: 'Kobold',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 40,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-007',
          id: 'volo-007a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-007',
          id: 'volo-007b'
        }
      ],
      id: 'volo-007'
    },
    {
      isAllowed: false,
      name: 'Lizardfolk',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 30,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-008',
          id: 'volo-008a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 01
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-008',
          id: 'volo-008b'
        }
      ],
      id: 'volo-008'
    },
    {
      isAllowed: false,
      name: 'Orc',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 40,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-009',
          id: 'volo-009a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-009',
          id: 'volo-009b'
        }
      ],
      id: 'volo-009'
    },
    {
      isAllowed: false,
      name: 'Tabaxi',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 15,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-010',
          id: 'volo-010a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-010',
          id: 'volo-010b'
        }
      ],
      id: 'volo-010'
    },
    {
      isAllowed: false,
      name: 'Triton',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-011',
          id: 'volo-011a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-011',
          id: 'volo-011b'
        }
      ],
      id: 'volo-011'
    },
    {
      isAllowed: false,
      name: 'Yuan-Ti Pureblood',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.vol.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.vol.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-012',
          id: 'volo-012a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-012',
          id: 'volo-012b'
        }
      ],
      id: 'volo-012'
    },
    {
      isAllowed: false,
      name: 'Tortle',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.ttp.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.ttp.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'tort-001',
          id: 'tort-001a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'tort-001',
          id: 'tort-001b'
        }
      ],
      id: 'tort-001'
    },
    {
      isAllowed: false,
      name: 'Changeling',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uaeb.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uaeb.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'uaeb-001',
          id: 'uaeb-001a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'uaeb-001',
          id: 'uaeb-001b'
        }
      ],
      id: 'uaeb-001'
    },
    {
      isAllowed: false,
      name: 'Shifter',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uaeb.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Beasthide',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uaeb.id
          ],
          weight: {
            default: 16,
            custom: 16
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 16,
          owner: 'uaeb-002',
          id: 'uaeb-002a'
        },
        {
          isAllowed: true,
          name: 'Cliffwalk',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uaeb.id
          ],
          weight: {
            default: 16,
            custom: 16
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 16,
          owner: 'uaeb-002',
          id: 'uaeb-002b'
        },
        {
          isAllowed: true,
          name: 'Longstride',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uaeb.id
          ],
          weight: {
            default: 16,
            custom: 16
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 16,
          owner: 'uaeb-002',
          id: 'uaeb-002c'
        },
        {
          isAllowed: true,
          name: 'Longtooth',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uaeb.id
          ],
          weight: {
            default: 16,
            custom: 16
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 16,
          owner: 'uaeb-002',
          id: 'uaeb-002d'
        },
        {
          isAllowed: true,
          name: 'Razorclaw',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uaeb.id
          ],
          weight: {
            default: 16,
            custom: 16
          },
          order: {
            default: 4,
            custom: 4
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 16,
          owner: 'uaeb-002',
          id: 'uaeb-002e'
        },
        {
          isAllowed: true,
          name: 'Wildhunt',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uaeb.id
          ],
          weight: {
            default: 20,
            custom: 20
          },
          order: {
            default: 5,
            custom: 5
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 20,
          owner: 'uaeb-002',
          id: 'uaeb-002f'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 6,
            custom: 6
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'uaeb-002',
          id: 'uaeb-002g'
        }
      ],
      id: 'uaeb-002'
    },
    {
      isAllowed: false,
      name: 'Warforged',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uaeb.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 0,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uaeb.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'uaeb-003',
          id: 'uaeb-003a'
        }
      ],
      id: 'uaeb-003'
    },
    {
      isAllowed: false,
      name: 'Kor',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.psz.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.psz.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'psz-001',
          id: 'psz-001a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'psz-001',
          id: 'psz-001b'
        }
      ],
      id: 'psz-001'
    },
    {
      isAllowed: false,
      name: 'Merfolk',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.psz.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: true,
          name: 'Cosi',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.psz.id
          ],
          weight: {
            default: 33,
            custom: 33
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 33,
          owner: 'psz-002',
          id: 'psz-002a'
        },
        {
          isAllowed: true,
          name: 'Emeria',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.psz.id
          ],
          weight: {
            default: 34,
            custom: 34
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 34,
          owner: 'psz-002',
          id: 'psz-002b'
        },
        {
          isAllowed: true,
          name: 'Ula',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.psz.id
          ],
          weight: {
            default: 33,
            custom: 33
          },
          order: {
            default: 2,
            custom: 2
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 33,
          owner: 'psz-002',
          id: 'psz-002c'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 3,
            custom: 3
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'psz-002',
          id: 'psz-002d'
        }
      ],
      id: 'psz-002'
    },
    {
      isAllowed: false,
      name: 'Vampire',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.psz.id,
        service_.defaultTagList.und.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 0,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.psz.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'psz-003',
          id: 'psz-003a'
        }
      ],
      id: 'psz-003'
    },
    {
      isAllowed: false,
      name: 'Minotaur',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.uawb.id,
        service_.defaultTagList.uagh.id
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uawb.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          order: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'uawb-001',
          id: 'uawb-001a'
        },
        {
          isAllowed: false,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt.id,
            service_.defaultTagList.uagh.id,
            service_.defaultTagList.und.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          order: {
            default: 1,
            custom: 1
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'uawb-001',
          id: 'uawb-001b'
        }
      ],
      id: 'uawb-001'
    }
  ];

  /**
   * weight should add up to 100. Only used as weighted random value.
   */
  service_.defaultRacialMixtures = [
    {
      id: 'mixture-001',
      name: 'Exclusive',
      isAllowed: true,
      type: 'mixture',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      mix: [
        {
          id: 'mixture-001a',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 100,
            custom: 100
          },
          raceId: 'dflt-001'
        },
        {
          id: 'mixture-001b',
          name: 'Other',
          isAllowed: false,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 0,
            custom: 0
          },
          races: [
            {
              raceId: 'dflt-002',
              weight: {
                default: 70,
                custom: 70
              }
            },
            {
              raceId: 'dflt-003',
              weight: {
                default: 15,
                custom: 15
              }
            },
            {
              raceId: 'dflt-004',
              weight: {
                default: 5,
                custom: 5
              }
            },
            {
              raceId: 'dflt-005',
              weight: {
                default: 5,
                custom: 5
              }
            },
            {
              raceId: 'dflt-006',
              weight: {
                default: 2,
                custom: 2
              }
            },
            {
              raceId: 'dflt-007',
              weight: {
                default: 1,
                custom: 1
              }
            },
            {
              raceId: 'dflt-008',
              weight: {
                default: 1,
                custom: 1
              }
            },
            {
              raceId: 'dflt-009',
              weight: {
                default: 1,
                custom: 1
              }
            }
          ]
        }
      ]
    },
    {
      id: 'mixture-002',
      name: 'Isolated',
      isAllowed: true,
      type: 'mixture',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 25,
        custom: 25
      },
      mix: [
        {
          id: 'mixture-002a',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 96,
            custom: 96
          },
          raceId: 'dflt-001'
        },
        {
          id: 'mixture-002b',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 2,
            custom: 2
          },
          raceId: 'dflt-002'
        },
        {
          id: 'mixture-002c',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 1,
            custom: 1
          },
          raceId: 'dflt-003'
        },
        {
          id: 'mixture-002d',
          name: 'Other',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 1,
            custom: 1
          },
          races: [
            {
              raceId: 'dflt-004',
              weight: {
                default: 40,
                custom: 40
              }
            },
            {
              raceId: 'dflt-005',
              weight: {
                default: 15,
                custom: 15
              }
            },
            {
              raceId: 'dflt-006',
              weight: {
                default: 15,
                custom: 15
              }
            },
            {
              raceId: 'dflt-007',
              weight: {
                default: 10,
                custom: 10
              }
            },
            {
              raceId: 'dflt-008',
              weight: {
                default: 10,
                custom: 10
              }
            },
            {
              raceId: 'dflt-009',
              weight: {
                default: 10,
                custom: 10
              }
            }
          ]
        }
      ]
    },
    {
      id: 'mixture-003',
      name: 'Mixed',
      isAllowed: true,
      type: 'mixture',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 60,
        custom: 60
      },
      mix: [
        {
          id: 'mixture-003a',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 78,
            custom: 78
          },
          raceId: 'dflt-001'
        },
        {
          id: 'mixture-003b',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 9,
            custom: 9
          },
          raceId: 'dflt-002'
        },
        {
          id: 'mixture-003c',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 5,
            custom: 5
          },
          raceId: 'dflt-003'
        },
        {
          id: 'mixture-003d',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 3,
            custom: 3
          },
          raceId: 'dflt-004'
        },
        {
          id: 'mixture-003e',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 2,
            custom: 2
          },
          raceId: 'dflt-005'
        },
        {
          id: 'mixture-003f',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 1,
            custom: 1
          },
          raceId: 'dflt-006'
        },
        {
          id: 'mixture-003g',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 1,
            custom: 1
          },
          raceId: 'dflt-007'
        },
        {
          id: 'mixture-003h',
          name: 'Other',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 1,
            custom: 1
          },
          races: [
            {
              raceId: 'dflt-008',
              weight: {
                default: 70,
                custom: 70
              }
            },
            {
              raceId: 'dflt-009',
              weight: {
                default: 30,
                custom: 30
              }
            }
          ]
        }
      ]
    },
    {
      id: 'mixture-004',
      name: 'Integrated',
      isAllowed: true,
      type: 'mixture',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      mix: [
        {
          id: 'mixture-004a',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 36,
            custom: 36
          },
          raceId: 'dflt-001'
        },
        {
          id: 'mixture-004b',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 19,
            custom: 19
          },
          raceId: 'dflt-002'
        },
        {
          id: 'mixture-004c',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 17,
            custom: 17
          },
          raceId: 'dflt-003'
        },
        {
          id: 'mixture-004d',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 10,
            custom: 10
          },
          raceId: 'dflt-004'
        },
        {
          id: 'mixture-004e',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 7,
            custom: 7
          },
          raceId: 'dflt-005'
        },
        {
          id: 'mixture-004f',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 5,
            custom: 5
          },
          raceId: 'dflt-006'
        },
        {
          id: 'mixture-004g',
          name: 'Race',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 3,
            custom: 3
          },
          raceId: 'dflt-007'
        },
        {
          id: 'mixture-004h',
          name: 'Other',
          isAllowed: true,
          type: 'mixture',
          tags: [
            service_.defaultTagList.dflt.id
          ],
          weight: {
            default: 3,
            custom: 3
          },
          races: [
            {
              raceId: 'dflt-008',
              weight: {
                default: 65,
                custom: 65
              }
            },
            {
              raceId: 'dflt-009',
              weight: {
                default: 35,
                custom: 35
              }
            }
          ]
        }
      ]
    }
  ];

  /**
   * weight should add up to 100. Only used as weighted random value.
   */
  service_.defaultSettlementTypes = [
    {
      isAllowed: true,
      name: 'Thorp',
      type: 'settlement',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      range: {
        min: 20,
        max: 80
      },
      gpLimit: 40,
      powerCenterQuantity: 1,
      powerCenterModifier: -5,
      classes: {
        classLevelModifier: -3,
        highLevelNPCQuantity: 1,
        chanceToAddLevelsToClass: 5,
        classesToCheckForAddedLevels: ['Druid', 'Ranger'],
        levelsToAdd: 10
      },
      id: 'sett-001'
    },
    {
      isAllowed: true,
      name: 'Hamlet',
      type: 'settlement',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      range: {
        min: 81,
        max: 400
      },
      gpLimit: 100,
      powerCenterQuantity: 1,
      powerCenterModifier: 0,
      classes: {
        classLevelModifier: -2,
        highLevelNPCQuantity: 1,
        chanceToAddLevelsToClass: 5,
        classesToCheckForAddedLevels: ['Druid', 'Ranger'],
        levelsToAdd: 10
      },
      id: 'sett-002'
    },
    {
      isAllowed: true,
      name: 'Village',
      type: 'settlement',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      range: {
        min: 401,
        max: 900
      },
      gpLimit: 200,
      powerCenterQuantity: 1,
      powerCenterModifier: 5,
      classes: {
        classLevelModifier: -1,
        highLevelNPCQuantity: 1,
        chanceToAddLevelsToClass: 0,
        classesToCheckForAddedLevels: [],
        levelsToAdd: 0
      },
      id: 'sett-003'
    },
    {
      isAllowed: true,
      name: 'Small Town',
      type: 'settlement',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 20,
        custom: 20
      },
      range: {
        min: 901,
        max: 2000
      },
      gpLimit: 800,
      powerCenterQuantity: 1,
      powerCenterModifier: 10,
      classes: {
        classLevelModifier: 0,
        highLevelNPCQuantity: 1,
        chanceToAddLevelsToClass: 0,
        classesToCheckForAddedLevels: [],
        levelsToAdd: 0
      },
      id: 'sett-004'
    },
    {
      isAllowed: true,
      name: 'Large Town',
      type: 'settlement',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 15,
        custom: 15
      },
      range: {
        min: 2001,
        max: 5000
      },
      gpLimit: 3000,
      powerCenterQuantity: 1,
      powerCenterModifier: 15,
      classes: {
        classLevelModifier: 3,
        highLevelNPCQuantity: 1,
        chanceToAddLevelsToClass: 0,
        classesToCheckForAddedLevels: [],
        levelsToAdd: 0
      },
      id: 'sett-005'
    },
    {
      isAllowed: true,
      name: 'Small City',
      type: 'settlement',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      range: {
        min: 5001,
        max: 12000
      },
      gpLimit: 15000,
      powerCenterQuantity: 2,
      powerCenterModifier: 20,
      classes: {
        classLevelModifier: 6,
        highLevelNPCQuantity: 2,
        chanceToAddLevelsToClass: 0,
        classesToCheckForAddedLevels: [],
        levelsToAdd: 0
      },
      id: 'sett-006'
    },
    {
      isAllowed: true,
      name: 'Large City',
      type: 'settlement',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 4,
        custom: 4
      },
      range: {
        min: 12001,
        max: 25000
      },
      gpLimit: 40000,
      powerCenterQuantity: 3,
      powerCenterModifier: 25,
      classes: {
        classLevelModifier: 9,
        highLevelNPCQuantity: 3,
        chanceToAddLevelsToClass: 0,
        classesToCheckForAddedLevels: [],
        levelsToAdd: 0
      },
      id: 'sett-007'
    },
    {
      isAllowed: true,
      name: 'Metropolis',
      type: 'settlement',
      tags: [
        service_.defaultTagList.dflt.id
      ],
      weight: {
        default: 1,
        custom: 1
      },
      range: {
        min: 25001,
        max: 60000
      },
      gpLimit: 100000,
      powerCenterQuantity: 4,
      powerCenterModifier: 30,
      classes: {
        classLevelModifier: 12,
        highLevelNPCQuantity: 4,
        chanceToAddLevelsToClass: 0,
        classesToCheckForAddedLevels: [],
        levelsToAdd: 0
      },
      id: 'sett-008'
    }
  ];

  /**
   * weight should add up to 100. Only used as weighted random value.
   */
  service_.defaultTerrainTypes = [
    {
      isAllowed: true,
      name: 'Tundra',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.ttun.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'terr-001'
    },
    {
      isAllowed: true,
      name: 'Plains',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.tpln.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      id: 'terr-002'
    },
    {
      isAllowed: true,
      name: 'Hills',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.thil.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      id: 'terr-003'
    },
    {
      isAllowed: true,
      name: 'Mountains',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.tmtn.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'terr-004'
    },
    {
      isAllowed: true,
      name: 'Aquatic',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.taqu.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'terr-005'
    },
    {
      isAllowed: true,
      name: 'Coastal',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.tcst.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      id: 'terr-006'
    },
    {
      isAllowed: true,
      name: 'Desert',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.tdst.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'terr-007'
    },
    {
      isAllowed: true,
      name: 'Grasslands',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.tgrs.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      id: 'terr-008'
    },
    {
      isAllowed: true,
      name: 'Marsh',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.tmsh.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'terr-009'
    },
    {
      isAllowed: true,
      name: 'Savannah',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.tsvh.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'terr-010'
    },
    {
      isAllowed: true,
      name: 'Forest',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.tfst.id
      ],
      weight: {
        default: 10,
        custom: 10
      },
      id: 'terr-011'
    },
    {
      isAllowed: true,
      name: 'Swamp',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.tswm.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'terr-012'
    },
    {
      isAllowed: true,
      name: 'Jungle',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.tjng.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'terr-013'
    },
    {
      isAllowed: true,
      name: 'Underdark',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.tudr.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'terr-014'
    },
    {
      isAllowed: true,
      name: 'Urban',
      type: 'terrain',
      tags: [
        service_.defaultTagList.dflt.id,
        service_.defaultTagList.turb.id
      ],
      weight: {
        default: 5,
        custom: 5
      },
      id: 'terr-015'
    }
  ];

});
