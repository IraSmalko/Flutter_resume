define(['dart_sdk', 'packages/flutter_web/material', 'packages/Flutter_resume/resume', 'packages/flutter_web/animation'], function(dart_sdk, material, resume, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__colors = material.src__material__colors;
  const resume$ = resume.resume;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__binding = animation.src__widgets__binding;
  const main = Object.create(dart.library);
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({title: "Iryna Smalko", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.blue, fontFamily: "Roboto"}), home: const$1 || (const$1 = dart.const(new resume$.Resume.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 19, file: "org-dartlang-app:///packages/Flutter_resume/main.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}))), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 12, file: "org-dartlang-app:///packages/Flutter_resume/main.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 7, name: "title"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 7, name: "theme"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 7, name: "home"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:Flutter_resume/main.dart");
  let const$7;
  let const$8;
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 4, column: 23, file: "org-dartlang-app:///packages/Flutter_resume/main.dart", parameterLocations: const$7 || (const$7 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/Flutter_resume/main", {
    "package:Flutter_resume/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/Flutter_resume/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;UAO4B;AACxB,YAAO,gDACE,uBACA,wDACiB,+CACV,kBAEF;IAEhB;;;;;;EACF;;;;;;;;;;AAde,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
