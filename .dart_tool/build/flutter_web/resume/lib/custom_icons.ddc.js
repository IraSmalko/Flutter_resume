define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const custom_icons = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "CustomIcons",
        [IconData_codePoint]: 59434
      });
    }
  });
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C0;
  custom_icons.CustomIcons = class CustomIcons extends core.Object {};
  (custom_icons.CustomIcons.__ = function() {
    ;
  }).prototype = custom_icons.CustomIcons.prototype;
  dart.addTypeTests(custom_icons.CustomIcons);
  dart.setLibraryUri(custom_icons.CustomIcons, "package:resume/custom_icons.dart");
  dart.defineLazy(custom_icons.CustomIcons, {
    /*custom_icons.CustomIcons._kFontFam*/get _kFontFam() {
      return "CustomIcons";
    },
    /*custom_icons.CustomIcons.linkdin*/get linkdin() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/resume/custom_icons", {
    "package:resume/custom_icons.dart": custom_icons
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_icons.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;EA8BiB;;;;MAEF,kCAAS;;;MAEA,gCAAO","file":"custom_icons.ddc.js"}');
  // Exports:
  return {
    custom_icons: custom_icons
  };
});

//# sourceMappingURL=custom_icons.ddc.js.map
