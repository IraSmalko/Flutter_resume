define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const util = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $last = dartx.last;
  const CT = Object.create(null);
  util.join = function join(T, original, separator) {
    let result = _interceptors.JSArray$(T).of([]);
    for (let i = 0; i < dart.notNull(original[$length]) - 1; i = i + 1) {
      result[$add](original[$_get](i));
      result[$add](separator);
    }
    result[$add](original[$last]);
    return result;
  };
  dart.trackLibraries("packages/resume/util", {
    "package:resume/util.dart": util
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["util.dart"],"names":[],"mappings":";;;;;;;;;;;;+BAAwB,UAAY;AAC5B,iBAAY;AAClB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAmB,aAAhB,AAAS,QAAD,aAAU,GAAG,IAAA,AAAC,CAAA;AACjB,MAAvB,AAAO,MAAD,OAAK,AAAQ,QAAA,QAAC,CAAC;AACA,MAArB,AAAO,MAAD,OAAK,SAAS;;AAEG,IAAzB,AAAO,MAAD,OAAK,AAAS,QAAD;AACnB,UAAO,OAAM;EACf","file":"util.ddc.js"}');
  // Exports:
  return {
    util: util
  };
});

//# sourceMappingURL=util.ddc.js.map
