define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/Flutter_resume/util', 'packages/flutter_web_ui/ui'], function(dart_sdk, material, animation, animation$, util, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const src__material__icons = material.src__material__icons;
  const src__material__theme = material.src__material__theme;
  const src__material__card = material.src__material__card;
  const src__material__divider = material.src__material__divider;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__painting__rounded_rectangle_border = animation.src__painting__rounded_rectangle_border;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__gesture_detector = animation.src__widgets__gesture_detector;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__widgets__icon_data = animation$.src__widgets__icon_data;
  const src__painting__text_span = animation$.src__painting__text_span;
  const src__painting__text_style = animation$.src__painting__text_style;
  const util$ = util.util;
  const ui$ = ui.ui;
  const resume = Object.create(dart.library);
  const $add = dartx.add;
  const $open = dartx.open;
  const $isNotEmpty = dartx.isNotEmpty;
  const $join = dartx.join;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfLink = () => (JSArrayOfLink = dart.constFn(_interceptors.JSArray$(resume.Link)))();
  let VoidToWindowBase = () => (VoidToWindowBase = dart.constFn(dart.fnType(html.WindowBase, [])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(src__widgets__framework.Widget)))();
  let StringAndListOfWidgetToWidget = () => (StringAndListOfWidgetToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [core.String, ListOfWidget()])))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(src__painting__text_span.TextSpan)))();
  let StringAndStringToWidget = () => (StringAndStringToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [core.String, core.String])))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  let const$100;
  let const$101;
  let const$102;
  let const$103;
  let const$104;
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  let const$110;
  let const$111;
  let const$112;
  let const$113;
  let const$114;
  let const$115;
  let const$116;
  let const$117;
  let const$118;
  let const$119;
  let const$120;
  let const$121;
  let const$122;
  let const$123;
  let const$124;
  let const$125;
  let const$126;
  let const$127;
  let const$128;
  resume.Resume = class Resume extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.white, body: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(24.0))), child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new resume.Header.new({$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$0 || (const$0 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new resume.Section.new({icon: new src__widgets__icon.Icon.new(src__material__icons.Icons.account_box, {$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 21, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 32, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), title: "Profile", children: JSArrayOfWidget().of([new src__widgets__text.Text.new("Dedicated Android developer with two years of experience in mobile app development. Strong creative and analytical skills. Team player with an eye for detail.", {$creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 17, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 15, name: "icon"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 15, name: "title"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), new resume.Section.new({icon: new src__widgets__icon.Icon.new(src__material__icons.Icons.work, {$creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 21, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 32, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), title: "Employment History", children: JSArrayOfWidget().of([new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new resume.TimePeriod.new({title: new src__widgets__text.Text.new("Android Developer at Master of Code Global, Cherkasy, Ukraine", {$creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 30, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), from: "May 2017", to: "April 2019", $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 21, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 23, name: "title"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 23, name: "from"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 23, name: "to"})))], src__widgets__widget_inspector._Location))})))}), const$27 || (const$27 = dart.const(new src__widgets__basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 27, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 36, name: "height"})))], src__widgets__widget_inspector._Location))})))}))), new resume.DutiesContainer.new({duties: JSArrayOfString().of(["Implementation of new features", "Prototyping, design and technical implementation discussions", "Code review", "Improving the design of existing code", "Supporting the QA team during the testing phase"]), $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 21, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 23, name: "duties"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 17, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$33 || (const$33 = dart.constList([const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 19, name: "crossAxisAlignment"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 19, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 15, name: "icon"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 15, name: "title"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), new resume.Section.new({icon: new src__widgets__icon.Icon.new(src__material__icons.Icons.person, {$creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 21, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 32, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), title: "Professional Skills", children: JSArrayOfWidget().of([new resume.SkillsContainer.new({skills: JSArrayOfString().of(["Kotlin, Java, Android SDK", "OOP, Databinding, Git", "Architecture components, OkHttp", "Retroit, Realm, RxJava2, Branch", "Firebase, Google pay, Crashlytics"]), $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 17, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 19, name: "skills"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 15, name: "icon"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 15, name: "title"}))), const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), new resume.Section.new({icon: new src__widgets__icon.Icon.new(src__material__icons.Icons.school, {$creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 21, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$52 || (const$52 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 32, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), title: "Education", children: JSArrayOfWidget().of([new resume.TimePeriod.new({title: new src__widgets__text.Text.new("Bachelor's in Accounting and audit, The Kremenchuk Mykhailo Ostrohradskyi National University", {$creationLocationd_0dea112b090073317d4: const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 26, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$55 || (const$55 = dart.constList([const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))}), from: "September 2012", to: "June 2016", $creationLocationd_0dea112b090073317d4: const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 17, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$60 || (const$60 = dart.constList([const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 19, name: "title"}))), const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 19, name: "from"}))), const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 19, name: "to"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$65 || (const$65 = dart.constList([const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 15, name: "icon"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 15, name: "title"}))), const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), new resume.Section.new({icon: new src__widgets__icon.Icon.new(src__material__icons.Icons.school, {$creationLocationd_0dea112b090073317d4: const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 21, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$68 || (const$68 = dart.constList([const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 32, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), title: "Courses", children: JSArrayOfWidget().of([new resume.TimePeriod.new({title: new src__widgets__basic.Wrap.new({children: JSArrayOfWidget().of([new src__widgets__text.Text.new("Android development, GeekHub (", {$creationLocationd_0dea112b090073317d4: const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 23, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$71 || (const$71 = dart.constList([const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 28, name: "data"})))], src__widgets__widget_inspector._Location))})))}), new resume.Link.new("http://geekhub.ck.ua", {$creationLocationd_0dea112b090073317d4: const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 23, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$74 || (const$74 = dart.constList([const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 28, name: "url"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new(")", {$creationLocationd_0dea112b090073317d4: const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 23, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$77 || (const$77 = dart.constList([const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 28, name: "data"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 26, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$80 || (const$80 = dart.constList([const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), from: "October 2016", to: "April 2017", $creationLocationd_0dea112b090073317d4: const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 17, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$85 || (const$85 = dart.constList([const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 19, name: "title"}))), const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 19, name: "from"}))), const$84 || (const$84 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 19, name: "to"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$90 || (const$90 = dart.constList([const$87 || (const$87 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 15, name: "icon"}))), const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 15, name: "title"}))), const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), new resume.Section.new({icon: new src__widgets__icon.Icon.new(src__material__icons.Icons.list, {$creationLocationd_0dea112b090073317d4: const$94 || (const$94 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 21, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$93 || (const$93 = dart.constList([const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 32, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), title: "Main projects", children: JSArrayOfWidget().of([new resume.Project.new({name: "Under NDA agreement ", from: "September 2017", to: "April 2019", description: "App for matching clients with proven technicians to solve common household problems oriented for Arabian countries", role: "Android Developer", technologies: JSArrayOfString().of(["Kotlin", "Android framework", "Architecture components", "DataBinding", "RxJava2", "ObjectBox", "Retrofit", "Firebase"]), links: JSArrayOfLink().of([]), $creationLocationd_0dea112b090073317d4: const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 17, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$102 || (const$102 = dart.constList([const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 19, name: "name"}))), const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 19, name: "from"}))), const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 19, name: "to"}))), const$98 || (const$98 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 19, name: "description"}))), const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 19, name: "role"}))), const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 19, name: "technologies"}))), const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 120, column: 19, name: "links"})))], src__widgets__widget_inspector._Location))})))}), new resume.Project.new({name: "Under NDA agreement ", from: "May 2017", to: "September 2018", description: "Silent Auction service. This client allows bidders who are invited to silent auctions to bid on items from their mobile device, manage bids and proxy bids, checkout, issue payment, and get a receipt.", role: "Android Developer", technologies: JSArrayOfString().of(["Java", "Android framework", "Realm", "Socket", "Glide", "Branch", "OkHttp", "Google Maps", "Firebase"]), links: JSArrayOfLink().of([]), $creationLocationd_0dea112b090073317d4: const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 17, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$111 || (const$111 = dart.constList([const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 19, name: "name"}))), const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 124, column: 19, name: "from"}))), const$106 || (const$106 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 19, name: "to"}))), const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 126, column: 19, name: "description"}))), const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 19, name: "role"}))), const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 19, name: "technologies"}))), const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 140, column: 19, name: "links"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$117 || (const$117 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$116 || (const$116 = dart.constList([const$113 || (const$113 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 15, name: "icon"}))), const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 15, name: "title"}))), const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$120 || (const$120 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 16, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$119 || (const$119 = dart.constList([const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$124 || (const$124 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$123 || (const$123 = dart.constList([const$121 || (const$121 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "padding"}))), const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$128 || (const$128 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 12, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$127 || (const$127 = dart.constList([const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 7, name: "backgroundColor"}))), const$126 || (const$126 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (resume.Resume.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    resume.Resume.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Resume.prototype;
  dart.addTypeTests(resume.Resume);
  dart.setMethodSignature(resume.Resume, () => ({
    __proto__: dart.getMethods(resume.Resume.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(resume.Resume, "package:Flutter_resume/resume.dart");
  let const$129;
  let const$130;
  let const$131;
  let const$132;
  let const$133;
  let const$134;
  let const$135;
  let const$136;
  let const$137;
  let const$138;
  let const$139;
  let const$140;
  let const$141;
  let const$142;
  let const$143;
  let const$144;
  let const$145;
  let const$146;
  let const$147;
  let const$148;
  let const$149;
  let const$150;
  let const$151;
  let const$152;
  let const$153;
  let const$154;
  let const$155;
  let const$156;
  let const$157;
  let const$158;
  let const$159;
  let const$160;
  let const$161;
  let const$162;
  let const$163;
  let const$164;
  let const$165;
  let const$166;
  resume.Header = class Header extends src__widgets__framework.StatelessWidget {
    build(context) {
      let textTheme = src__material__theme.Theme.of(context).textTheme;
      return new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.SizedBox.new({width: 128.0, height: 128.0, child: new src__material__card.Card.new({shape: new src__painting__rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new src__painting__border_radius.BorderRadius.circular(8.0)}), child: new src__widgets__image.Image.asset("photo.jpeg", {$creationLocationd_0dea112b090073317d4: const$131 || (const$131 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 26, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$130 || (const$130 = dart.constList([const$129 || (const$129 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 32, name: "name"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 164, column: 18, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$134 || (const$134 = dart.constList([const$132 || (const$132 = dart.const(new src__widgets__widget_inspector._Location.new({line: 165, column: 13, name: "shape"}))), const$133 || (const$133 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$140 || (const$140 = dart.const(new src__widgets__widget_inspector._Location.new({line: 161, column: 9, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$139 || (const$139 = dart.constList([const$136 || (const$136 = dart.const(new src__widgets__widget_inspector._Location.new({line: 162, column: 11, name: "width"}))), const$137 || (const$137 = dart.const(new src__widgets__widget_inspector._Location.new({line: 163, column: 11, name: "height"}))), const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 164, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 24.0, $creationLocationd_0dea112b090073317d4: const$143 || (const$143 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 9, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$142 || (const$142 = dart.constList([const$141 || (const$141 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 18, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("Iryna Smalko", {style: textTheme.display2.copyWith({color: src__material__colors.Colors.black}), $creationLocationd_0dea112b090073317d4: const$147 || (const$147 = dart.const(new src__widgets__widget_inspector._Location.new({line: 175, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$146 || (const$146 = dart.constList([const$144 || (const$144 = dart.const(new src__widgets__widget_inspector._Location.new({line: 175, column: 18, name: "data"}))), const$145 || (const$145 = dart.const(new src__widgets__widget_inspector._Location.new({line: 175, column: 34, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Mobile Developer", {style: textTheme.headline, $creationLocationd_0dea112b090073317d4: const$151 || (const$151 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$150 || (const$150 = dart.constList([const$148 || (const$148 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 18, name: "data"}))), const$149 || (const$149 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 38, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new resume.Contact.new({title: "+38(068)033-63-79", icon: src__material__icons.Icons.phone, $creationLocationd_0dea112b090073317d4: const$155 || (const$155 = dart.const(new src__widgets__widget_inspector._Location.new({line: 177, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$154 || (const$154 = dart.constList([const$152 || (const$152 = dart.const(new src__widgets__widget_inspector._Location.new({line: 177, column: 21, name: "title"}))), const$153 || (const$153 = dart.const(new src__widgets__widget_inspector._Location.new({line: 177, column: 49, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), new resume.Contact.new({title: "smalko.irina.s@gmail.com", icon: src__material__icons.Icons.email, $creationLocationd_0dea112b090073317d4: const$159 || (const$159 = dart.const(new src__widgets__widget_inspector._Location.new({line: 178, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$158 || (const$158 = dart.constList([const$156 || (const$156 = dart.const(new src__widgets__widget_inspector._Location.new({line: 178, column: 21, name: "title"}))), const$157 || (const$157 = dart.const(new src__widgets__widget_inspector._Location.new({line: 178, column: 56, name: "icon"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$163 || (const$163 = dart.const(new src__widgets__widget_inspector._Location.new({line: 172, column: 9, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$162 || (const$162 = dart.constList([const$160 || (const$160 = dart.const(new src__widgets__widget_inspector._Location.new({line: 173, column: 11, name: "crossAxisAlignment"}))), const$161 || (const$161 = dart.const(new src__widgets__widget_inspector._Location.new({line: 174, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$166 || (const$166 = dart.const(new src__widgets__widget_inspector._Location.new({line: 159, column: 12, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$165 || (const$165 = dart.constList([const$164 || (const$164 = dart.const(new src__widgets__widget_inspector._Location.new({line: 160, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (resume.Header.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    resume.Header.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Header.prototype;
  dart.addTypeTests(resume.Header);
  dart.setMethodSignature(resume.Header, () => ({
    __proto__: dart.getMethods(resume.Header.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(resume.Header, "package:Flutter_resume/resume.dart");
  let const$167;
  let const$168;
  let const$169;
  let const$170;
  let const$171;
  let const$172;
  let const$173;
  let const$174;
  let const$175;
  let const$176;
  let const$177;
  let const$178;
  let const$179;
  let const$180;
  let const$181;
  let const$182;
  let const$183;
  let const$184;
  let const$185;
  let const$186;
  let const$187;
  let const$188;
  let const$189;
  let const$190;
  let const$191;
  let const$192;
  let const$193;
  let const$194;
  let const$195;
  let const$196;
  let const$197;
  let const$198;
  let const$199;
  let const$200;
  let const$201;
  let const$202;
  let const$203;
  let const$204;
  resume.Section = class Section extends src__widgets__framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    build(context) {
      return new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: const$169 || (const$169 = dart.const(new src__widgets__widget_inspector._Location.new({line: 204, column: 9, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$168 || (const$168 = dart.constList([const$167 || (const$167 = dart.const(new src__widgets__widget_inspector._Location.new({line: 204, column: 18, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({width: resume.Section._iconSize, padding: new src__painting__edge_insets.EdgeInsets.only({left: 8.0}), alignment: src__painting__alignment.Alignment.centerLeft, child: this.icon, $creationLocationd_0dea112b090073317d4: const$175 || (const$175 = dart.const(new src__widgets__widget_inspector._Location.new({line: 207, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$174 || (const$174 = dart.constList([const$170 || (const$170 = dart.const(new src__widgets__widget_inspector._Location.new({line: 208, column: 15, name: "width"}))), const$171 || (const$171 = dart.const(new src__widgets__widget_inspector._Location.new({line: 209, column: 15, name: "padding"}))), const$172 || (const$172 = dart.const(new src__widgets__widget_inspector._Location.new({line: 210, column: 15, name: "alignment"}))), const$173 || (const$173 = dart.const(new src__widgets__widget_inspector._Location.new({line: 211, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new(this.title, {style: src__material__theme.Theme.of(context).textTheme.headline, $creationLocationd_0dea112b090073317d4: const$179 || (const$179 = dart.const(new src__widgets__widget_inspector._Location.new({line: 213, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$178 || (const$178 = dart.constList([const$176 || (const$176 = dart.const(new src__widgets__widget_inspector._Location.new({line: 213, column: 18, name: "data"}))), const$177 || (const$177 = dart.const(new src__widgets__widget_inspector._Location.new({line: 213, column: 25, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$182 || (const$182 = dart.const(new src__widgets__widget_inspector._Location.new({line: 205, column: 9, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$181 || (const$181 = dart.constList([const$180 || (const$180 = dart.const(new src__widgets__widget_inspector._Location.new({line: 206, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: const$185 || (const$185 = dart.const(new src__widgets__widget_inspector._Location.new({line: 216, column: 9, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$184 || (const$184 = dart.constList([const$183 || (const$183 = dart.const(new src__widgets__widget_inspector._Location.new({line: 216, column: 18, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.SizedBox.new({width: resume.Section._iconSize, $creationLocationd_0dea112b090073317d4: const$188 || (const$188 = dart.const(new src__widgets__widget_inspector._Location.new({line: 219, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$187 || (const$187 = dart.constList([const$186 || (const$186 = dart.const(new src__widgets__widget_inspector._Location.new({line: 219, column: 22, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: util$.join(src__widgets__framework.Widget, this.children, const$191 || (const$191 = dart.const(new src__material__divider.Divider.new({$creationLocationd_0dea112b090073317d4: const$190 || (const$190 = dart.const(new src__widgets__widget_inspector._Location.new({line: 223, column: 48, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$189 || (const$189 = dart.constList([], src__widgets__widget_inspector._Location))})))})))), $creationLocationd_0dea112b090073317d4: const$195 || (const$195 = dart.const(new src__widgets__widget_inspector._Location.new({line: 221, column: 22, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$194 || (const$194 = dart.constList([const$192 || (const$192 = dart.const(new src__widgets__widget_inspector._Location.new({line: 222, column: 17, name: "crossAxisAlignment"}))), const$193 || (const$193 = dart.const(new src__widgets__widget_inspector._Location.new({line: 223, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$198 || (const$198 = dart.const(new src__widgets__widget_inspector._Location.new({line: 220, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$197 || (const$197 = dart.constList([const$196 || (const$196 = dart.const(new src__widgets__widget_inspector._Location.new({line: 221, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$201 || (const$201 = dart.const(new src__widgets__widget_inspector._Location.new({line: 217, column: 9, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$200 || (const$200 = dart.constList([const$199 || (const$199 = dart.const(new src__widgets__widget_inspector._Location.new({line: 218, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$204 || (const$204 = dart.const(new src__widgets__widget_inspector._Location.new({line: 202, column: 12, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$203 || (const$203 = dart.constList([const$202 || (const$202 = dart.const(new src__widgets__widget_inspector._Location.new({line: 203, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (resume.Section.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$] = icon;
    this[title$] = title;
    this[children$] = children;
    resume.Section.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Section.prototype;
  dart.addTypeTests(resume.Section);
  const icon$ = Symbol("Section.icon");
  const title$ = Symbol("Section.title");
  const children$ = Symbol("Section.children");
  dart.setMethodSignature(resume.Section, () => ({
    __proto__: dart.getMethods(resume.Section.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(resume.Section, "package:Flutter_resume/resume.dart");
  dart.setFieldSignature(resume.Section, () => ({
    __proto__: dart.getFields(resume.Section.__proto__),
    icon: dart.finalFieldType(src__widgets__framework.Widget),
    title: dart.finalFieldType(core.String),
    children: dart.finalFieldType(core.List$(src__widgets__framework.Widget))
  }));
  dart.defineLazy(resume.Section, {
    /*resume.Section._iconSize*/get _iconSize() {
      return 48.0;
    }
  });
  let const$205;
  let const$206;
  let const$207;
  let const$208;
  let const$209;
  let const$210;
  let const$211;
  let const$212;
  resume.TimePeriod = class TimePeriod extends src__widgets__framework.StatelessWidget {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get from() {
      return this[from$];
    }
    set from(value) {
      super.from = value;
    }
    get to() {
      return this[to$];
    }
    set to(value) {
      super.to = value;
    }
    build(context) {
      let textTheme = src__material__theme.Theme.of(context).textTheme;
      return new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([src__widgets__text.DefaultTextStyle.merge({style: textTheme.title, child: this.title}), new src__widgets__text.Text.new(dart.str(this.from) + " – " + dart.str(this.to), {style: textTheme.caption, $creationLocationd_0dea112b090073317d4: const$208 || (const$208 = dart.const(new src__widgets__widget_inspector._Location.new({line: 255, column: 9, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$207 || (const$207 = dart.constList([const$205 || (const$205 = dart.const(new src__widgets__widget_inspector._Location.new({line: 255, column: 27, name: "data"}))), const$206 || (const$206 = dart.const(new src__widgets__widget_inspector._Location.new({line: 255, column: 29, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$212 || (const$212 = dart.const(new src__widgets__widget_inspector._Location.new({line: 248, column: 12, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$211 || (const$211 = dart.constList([const$209 || (const$209 = dart.const(new src__widgets__widget_inspector._Location.new({line: 249, column: 7, name: "crossAxisAlignment"}))), const$210 || (const$210 = dart.const(new src__widgets__widget_inspector._Location.new({line: 250, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (resume.TimePeriod.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let to = opts && 'to' in opts ? opts.to : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$0] = title;
    this[from$] = from;
    this[to$] = to;
    resume.TimePeriod.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.TimePeriod.prototype;
  dart.addTypeTests(resume.TimePeriod);
  const title$0 = Symbol("TimePeriod.title");
  const from$ = Symbol("TimePeriod.from");
  const to$ = Symbol("TimePeriod.to");
  dart.setMethodSignature(resume.TimePeriod, () => ({
    __proto__: dart.getMethods(resume.TimePeriod.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(resume.TimePeriod, "package:Flutter_resume/resume.dart");
  dart.setFieldSignature(resume.TimePeriod, () => ({
    __proto__: dart.getFields(resume.TimePeriod.__proto__),
    title: dart.finalFieldType(src__widgets__framework.Widget),
    from: dart.finalFieldType(core.String),
    to: dart.finalFieldType(core.String)
  }));
  let const$213;
  let const$214;
  let const$215;
  let const$216;
  let const$217;
  let const$218;
  let const$219;
  let const$220;
  let const$221;
  let const$222;
  let const$223;
  let const$224;
  let const$225;
  let const$226;
  resume.Contact = class Contact extends src__widgets__framework.StatelessWidget {
    get title() {
      return this[title$1];
    }
    set title(value) {
      super.title = value;
    }
    get icon() {
      return this[icon$0];
    }
    set icon(value) {
      super.icon = value;
    }
    build(context) {
      let textTheme = src__material__theme.Theme.of(context).textTheme;
      return new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Padding.new({padding: const$213 || (const$213 = dart.const(new src__painting__edge_insets.EdgeInsets.all(4.0))), child: new src__widgets__icon.Icon.new(this.icon, {$creationLocationd_0dea112b090073317d4: const$216 || (const$216 = dart.const(new src__widgets__widget_inspector._Location.new({line: 277, column: 16, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$215 || (const$215 = dart.constList([const$214 || (const$214 = dart.const(new src__widgets__widget_inspector._Location.new({line: 277, column: 21, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$220 || (const$220 = dart.const(new src__widgets__widget_inspector._Location.new({line: 275, column: 7, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$219 || (const$219 = dart.constList([const$217 || (const$217 = dart.const(new src__widgets__widget_inspector._Location.new({line: 276, column: 9, name: "padding"}))), const$218 || (const$218 = dart.const(new src__widgets__widget_inspector._Location.new({line: 277, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new(this.title, {$creationLocationd_0dea112b090073317d4: const$223 || (const$223 = dart.const(new src__widgets__widget_inspector._Location.new({line: 279, column: 7, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$222 || (const$222 = dart.constList([const$221 || (const$221 = dart.const(new src__widgets__widget_inspector._Location.new({line: 279, column: 12, name: "data"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$226 || (const$226 = dart.const(new src__widgets__widget_inspector._Location.new({line: 274, column: 12, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$225 || (const$225 = dart.constList([const$224 || (const$224 = dart.const(new src__widgets__widget_inspector._Location.new({line: 274, column: 16, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (resume.Contact.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$1] = title;
    this[icon$0] = icon;
    resume.Contact.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Contact.prototype;
  dart.addTypeTests(resume.Contact);
  const title$1 = Symbol("Contact.title");
  const icon$0 = Symbol("Contact.icon");
  dart.setMethodSignature(resume.Contact, () => ({
    __proto__: dart.getMethods(resume.Contact.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(resume.Contact, "package:Flutter_resume/resume.dart");
  dart.setFieldSignature(resume.Contact, () => ({
    __proto__: dart.getFields(resume.Contact.__proto__),
    title: dart.finalFieldType(core.String),
    icon: dart.finalFieldType(src__widgets__icon_data.IconData)
  }));
  let const$227;
  let const$228;
  let const$229;
  let const$230;
  let const$231;
  let const$232;
  let const$233;
  resume.SkillsContainer = class SkillsContainer extends src__widgets__framework.StatelessWidget {
    get skills() {
      return this[skills$];
    }
    set skills(value) {
      super.skills = value;
    }
    build(context) {
      return new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: (() => {
          let t0 = JSArrayOfWidget().of([]);
          for (let skill of this.skills)
            t0[$add](new src__widgets__text.Text.new(dart.str(skill), {$creationLocationd_0dea112b090073317d4: const$229 || (const$229 = dart.const(new src__widgets__widget_inspector._Location.new({line: 297, column: 37, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$228 || (const$228 = dart.constList([const$227 || (const$227 = dart.const(new src__widgets__widget_inspector._Location.new({line: 297, column: 50, name: "data"})))], src__widgets__widget_inspector._Location))})))}));
          return t0;
        })(), $creationLocationd_0dea112b090073317d4: const$233 || (const$233 = dart.const(new src__widgets__widget_inspector._Location.new({line: 294, column: 12, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$232 || (const$232 = dart.constList([const$230 || (const$230 = dart.const(new src__widgets__widget_inspector._Location.new({line: 295, column: 7, name: "crossAxisAlignment"}))), const$231 || (const$231 = dart.const(new src__widgets__widget_inspector._Location.new({line: 296, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (resume.SkillsContainer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let skills = opts && 'skills' in opts ? opts.skills : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[skills$] = skills;
    resume.SkillsContainer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.SkillsContainer.prototype;
  dart.addTypeTests(resume.SkillsContainer);
  const skills$ = Symbol("SkillsContainer.skills");
  dart.setMethodSignature(resume.SkillsContainer, () => ({
    __proto__: dart.getMethods(resume.SkillsContainer.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(resume.SkillsContainer, "package:Flutter_resume/resume.dart");
  dart.setFieldSignature(resume.SkillsContainer, () => ({
    __proto__: dart.getFields(resume.SkillsContainer.__proto__),
    skills: dart.finalFieldType(core.List$(core.String))
  }));
  let const$234;
  let const$235;
  let const$236;
  let const$237;
  let const$238;
  let const$239;
  let const$240;
  let const$241;
  let const$242;
  let const$243;
  let const$244;
  let const$245;
  resume.DutiesContainer = class DutiesContainer extends src__widgets__framework.StatelessWidget {
    get duties() {
      return this[duties$];
    }
    set duties(value) {
      super.duties = value;
    }
    build(context) {
      return new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, children: (() => {
          let t1 = JSArrayOfWidget().of([]);
          t1[$add](new src__widgets__text.Text.new("Duties: ", {style: src__material__theme.Theme.of(context).textTheme.subtitle, $creationLocationd_0dea112b090073317d4: const$237 || (const$237 = dart.const(new src__widgets__widget_inspector._Location.new({line: 317, column: 9, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$236 || (const$236 = dart.constList([const$234 || (const$234 = dart.const(new src__widgets__widget_inspector._Location.new({line: 317, column: 14, name: "data"}))), const$235 || (const$235 = dart.const(new src__widgets__widget_inspector._Location.new({line: 317, column: 26, name: "style"})))], src__widgets__widget_inspector._Location))})))}));
          for (let duty of this.duties)
            t1[$add](new src__widgets__text.Text.new("  •  " + dart.str(duty), {$creationLocationd_0dea112b090073317d4: const$240 || (const$240 = dart.const(new src__widgets__widget_inspector._Location.new({line: 318, column: 36, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$239 || (const$239 = dart.constList([const$238 || (const$238 = dart.const(new src__widgets__widget_inspector._Location.new({line: 318, column: 53, name: "data"})))], src__widgets__widget_inspector._Location))})))}));
          return t1;
        })(), $creationLocationd_0dea112b090073317d4: const$245 || (const$245 = dart.const(new src__widgets__widget_inspector._Location.new({line: 313, column: 12, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$244 || (const$244 = dart.constList([const$241 || (const$241 = dart.const(new src__widgets__widget_inspector._Location.new({line: 314, column: 7, name: "crossAxisAlignment"}))), const$242 || (const$242 = dart.const(new src__widgets__widget_inspector._Location.new({line: 315, column: 7, name: "mainAxisAlignment"}))), const$243 || (const$243 = dart.const(new src__widgets__widget_inspector._Location.new({line: 316, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (resume.DutiesContainer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let duties = opts && 'duties' in opts ? opts.duties : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[duties$] = duties;
    resume.DutiesContainer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.DutiesContainer.prototype;
  dart.addTypeTests(resume.DutiesContainer);
  const duties$ = Symbol("DutiesContainer.duties");
  dart.setMethodSignature(resume.DutiesContainer, () => ({
    __proto__: dart.getMethods(resume.DutiesContainer.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(resume.DutiesContainer, "package:Flutter_resume/resume.dart");
  dart.setFieldSignature(resume.DutiesContainer, () => ({
    __proto__: dart.getFields(resume.DutiesContainer.__proto__),
    duties: dart.finalFieldType(core.List$(core.String))
  }));
  let const$246;
  let const$247;
  let const$248;
  let const$249;
  let const$250;
  let const$251;
  let const$252;
  let const$253;
  resume.Link = class Link extends src__widgets__framework.StatelessWidget {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get title() {
      return this[title$2];
    }
    set title(value) {
      super.title = value;
    }
    get colorize() {
      return this[colorize$];
    }
    set colorize(value) {
      super.colorize = value;
    }
    build(context) {
      let t2, t2$, t2$0;
      let themeStyle = (t2$ = (t2 = src__widgets__text.DefaultTextStyle.of(context), t2 == null ? null : t2.style), t2$ == null ? src__material__theme.Theme.of(context).textTheme.body1 : t2$);
      let style = themeStyle.copyWith({decoration: ui$.TextDecoration.underline});
      if (dart.test(this.colorize)) {
        style = style.copyWith({color: src__material__colors.Colors.blue});
      }
      return new src__widgets__gesture_detector.GestureDetector.new({onTap: dart.fn(() => html.window[$open](this.url, "_blank"), VoidToWindowBase()), child: new src__widgets__text.Text.new((t2$0 = this.title, t2$0 == null ? this.url : t2$0), {style: style, $creationLocationd_0dea112b090073317d4: const$249 || (const$249 = dart.const(new src__widgets__widget_inspector._Location.new({line: 345, column: 14, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$248 || (const$248 = dart.constList([const$246 || (const$246 = dart.const(new src__widgets__widget_inspector._Location.new({line: 345, column: 25, name: "data"}))), const$247 || (const$247 = dart.const(new src__widgets__widget_inspector._Location.new({line: 345, column: 33, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$253 || (const$253 = dart.const(new src__widgets__widget_inspector._Location.new({line: 343, column: 12, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$252 || (const$252 = dart.constList([const$250 || (const$250 = dart.const(new src__widgets__widget_inspector._Location.new({line: 344, column: 7, name: "onTap"}))), const$251 || (const$251 = dart.const(new src__widgets__widget_inspector._Location.new({line: 345, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (resume.Link.new = function(url, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let colorize = opts && 'colorize' in opts ? opts.colorize : true;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[url$] = url;
    this[title$2] = title;
    this[colorize$] = colorize;
    resume.Link.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Link.prototype;
  dart.addTypeTests(resume.Link);
  const url$ = Symbol("Link.url");
  const title$2 = Symbol("Link.title");
  const colorize$ = Symbol("Link.colorize");
  dart.setMethodSignature(resume.Link, () => ({
    __proto__: dart.getMethods(resume.Link.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(resume.Link, "package:Flutter_resume/resume.dart");
  dart.setFieldSignature(resume.Link, () => ({
    __proto__: dart.getFields(resume.Link.__proto__),
    url: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String),
    colorize: dart.finalFieldType(core.bool)
  }));
  let const$254;
  let const$255;
  let const$256;
  let const$257;
  let const$258;
  let const$259;
  let const$260;
  let const$261;
  let const$262;
  let const$263;
  let const$264;
  let const$265;
  let const$266;
  let const$267;
  let const$268;
  let const$269;
  let const$270;
  let const$271;
  let const$272;
  let const$273;
  let const$274;
  let const$275;
  let const$276;
  let const$277;
  let const$278;
  let const$279;
  let const$280;
  let const$281;
  let const$282;
  let const$283;
  let const$284;
  let const$285;
  let const$286;
  let const$287;
  resume.Project = class Project extends src__widgets__framework.StatelessWidget {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get from() {
      return this[from$0];
    }
    set from(value) {
      super.from = value;
    }
    get to() {
      return this[to$0];
    }
    set to(value) {
      super.to = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
    get technologies() {
      return this[technologies$];
    }
    set technologies(value) {
      super.technologies = value;
    }
    get links() {
      return this[links$];
    }
    set links(value) {
      super.links = value;
    }
    build(context) {
      function _row(name, children) {
        if (dart.test(children[$isNotEmpty])) {
          return new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__text.Text.new(dart.str(name) + ": ", {style: src__material__theme.Theme.of(context).textTheme.body1.copyWith({fontWeight: ui$.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: const$257 || (const$257 = dart.const(new src__widgets__widget_inspector._Location.new({line: 376, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$256 || (const$256 = dart.constList([const$254 || (const$254 = dart.const(new src__widgets__widget_inspector._Location.new({line: 377, column: 26, name: "data"}))), const$255 || (const$255 = dart.const(new src__widgets__widget_inspector._Location.new({line: 378, column: 15, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Wrap.new({children: (() => {
                  let t2 = JSArrayOfWidget().of([]);
                  for (let t3 of util$.join(src__widgets__framework.Widget, children, const$261 || (const$261 = dart.const(new src__widgets__text.Text.new(", ", {$creationLocationd_0dea112b090073317d4: const$260 || (const$260 = dart.const(new src__widgets__widget_inspector._Location.new({line: 382, column: 41, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$259 || (const$259 = dart.constList([const$258 || (const$258 = dart.const(new src__widgets__widget_inspector._Location.new({line: 382, column: 46, name: "data"})))], src__widgets__widget_inspector._Location))})))})))))
                    t2[$add](t3);
                  return t2;
                })(), $creationLocationd_0dea112b090073317d4: const$264 || (const$264 = dart.const(new src__widgets__widget_inspector._Location.new({line: 380, column: 13, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$263 || (const$263 = dart.constList([const$262 || (const$262 = dart.const(new src__widgets__widget_inspector._Location.new({line: 381, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$267 || (const$267 = dart.const(new src__widgets__widget_inspector._Location.new({line: 374, column: 16, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$266 || (const$266 = dart.constList([const$265 || (const$265 = dart.const(new src__widgets__widget_inspector._Location.new({line: 375, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))});
        } else {
          return new src__widgets__basic.SizedBox.shrink({$creationLocationd_0dea112b090073317d4: const$269 || (const$269 = dart.const(new src__widgets__widget_inspector._Location.new({line: 388, column: 25, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$268 || (const$268 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
      }
      dart.fn(_row, StringAndListOfWidgetToWidget());
      function _textRow(name, text) {
        return new src__widgets__basic.RichText.new({text: new src__painting__text_span.TextSpan.new({style: src__widgets__text.DefaultTextStyle.of(context).style, children: JSArrayOfTextSpan().of([new src__painting__text_span.TextSpan.new({text: dart.str(name) + ": ", style: new src__painting__text_style.TextStyle.new({fontWeight: ui$.FontWeight.bold})}), new src__painting__text_span.TextSpan.new({text: text})])}), $creationLocationd_0dea112b090073317d4: const$272 || (const$272 = dart.const(new src__widgets__widget_inspector._Location.new({line: 393, column: 14, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$271 || (const$271 = dart.constList([const$270 || (const$270 = dart.const(new src__widgets__widget_inspector._Location.new({line: 394, column: 9, name: "text"})))], src__widgets__widget_inspector._Location))})))});
      }
      dart.fn(_textRow, StringAndStringToWidget());
      return new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new resume.TimePeriod.new({title: new src__widgets__text.Text.new(this.name, {$creationLocationd_0dea112b090073317d4: const$275 || (const$275 = dart.const(new src__widgets__widget_inspector._Location.new({line: 411, column: 18, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$274 || (const$274 = dart.constList([const$273 || (const$273 = dart.const(new src__widgets__widget_inspector._Location.new({line: 411, column: 23, name: "data"})))], src__widgets__widget_inspector._Location))})))}), from: this.from, to: this.to, $creationLocationd_0dea112b090073317d4: const$280 || (const$280 = dart.const(new src__widgets__widget_inspector._Location.new({line: 410, column: 9, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$279 || (const$279 = dart.constList([const$276 || (const$276 = dart.const(new src__widgets__widget_inspector._Location.new({line: 411, column: 11, name: "title"}))), const$277 || (const$277 = dart.const(new src__widgets__widget_inspector._Location.new({line: 412, column: 11, name: "from"}))), const$278 || (const$278 = dart.const(new src__widgets__widget_inspector._Location.new({line: 413, column: 11, name: "to"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: const$283 || (const$283 = dart.const(new src__widgets__widget_inspector._Location.new({line: 415, column: 9, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$282 || (const$282 = dart.constList([const$281 || (const$281 = dart.const(new src__widgets__widget_inspector._Location.new({line: 415, column: 18, name: "height"})))], src__widgets__widget_inspector._Location))})))}), _textRow("Description", this.description), _textRow("Role", this.role), _textRow("Technologies", this.technologies[$join](", ")), _row("Links", this.links)]), $creationLocationd_0dea112b090073317d4: const$287 || (const$287 = dart.const(new src__widgets__widget_inspector._Location.new({line: 407, column: 12, file: "org-dartlang-app:///packages/Flutter_resume/resume.dart", parameterLocations: const$286 || (const$286 = dart.constList([const$284 || (const$284 = dart.const(new src__widgets__widget_inspector._Location.new({line: 408, column: 7, name: "crossAxisAlignment"}))), const$285 || (const$285 = dart.const(new src__widgets__widget_inspector._Location.new({line: 409, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (resume.Project.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let to = opts && 'to' in opts ? opts.to : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let role = opts && 'role' in opts ? opts.role : null;
    let technologies = opts && 'technologies' in opts ? opts.technologies : null;
    let links = opts && 'links' in opts ? opts.links : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[name$] = name;
    this[from$0] = from;
    this[to$0] = to;
    this[description$] = description;
    this[role$] = role;
    this[technologies$] = technologies;
    this[links$] = links;
    resume.Project.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Project.prototype;
  dart.addTypeTests(resume.Project);
  const name$ = Symbol("Project.name");
  const from$0 = Symbol("Project.from");
  const to$0 = Symbol("Project.to");
  const description$ = Symbol("Project.description");
  const role$ = Symbol("Project.role");
  const technologies$ = Symbol("Project.technologies");
  const links$ = Symbol("Project.links");
  dart.setMethodSignature(resume.Project, () => ({
    __proto__: dart.getMethods(resume.Project.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(resume.Project, "package:Flutter_resume/resume.dart");
  dart.setFieldSignature(resume.Project, () => ({
    __proto__: dart.getFields(resume.Project.__proto__),
    name: dart.finalFieldType(core.String),
    from: dart.finalFieldType(core.String),
    to: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    role: dart.finalFieldType(core.String),
    technologies: dart.finalFieldType(core.List$(core.String)),
    links: dart.finalFieldType(core.List$(resume.Link))
  }));
  dart.trackLibraries("packages/Flutter_resume/resume", {
    "package:Flutter_resume/resume.dart": resume
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/Flutter_resume/resume.dart"],"names":[],"mappings":"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","file":"resume.ddc.js"}');
  // Exports:
  return {
    resume: resume
  };
});

//# sourceMappingURL=resume.ddc.js.map
