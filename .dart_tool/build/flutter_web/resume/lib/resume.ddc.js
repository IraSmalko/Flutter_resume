define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/resume/custom_icons', 'packages/flutter/src/rendering/animated_size', 'packages/resume/util'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__resume__custom_icons, packages__flutter__src__rendering__animated_size, packages__resume__util) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const text$ = packages__flutter__src__widgets__actions.src__widgets__text;
  const visibility = packages__flutter__src__widgets__actions.src__widgets__visibility;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const card = packages__flutter__material.src__material__card;
  const icons = packages__flutter__material.src__material__icons;
  const theme = packages__flutter__material.src__material__theme;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const inline_span = packages__flutter__src__painting___network_image_web.src__painting__inline_span;
  const custom_icons = packages__resume__custom_icons.custom_icons;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const wrap = packages__flutter__src__rendering__animated_size.src__rendering__wrap;
  const util = packages__resume__util.util;
  const resume = Object.create(dart.library);
  const $add = dartx.add;
  const $isNotEmpty = dartx.isNotEmpty;
  const $open = dartx.open;
  const $join = dartx.join;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfLink = () => (JSArrayOfLink = dart.constFn(_interceptors.JSArray$(resume.Link)))();
  let BuildContextAndBoxConstraintsToColumn = () => (BuildContextAndBoxConstraintsToColumn = dart.constFn(dart.fnType(basic.Column, [framework.BuildContext, box.BoxConstraints])))();
  let VoidToWindowBase = () => (VoidToWindowBase = dart.constFn(dart.fnType(html.WindowBase, [])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let StringAndListOfWidgetToWidget = () => (StringAndListOfWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [core.String, ListOfWidget()])))();
  let JSArrayOfInlineSpan = () => (JSArrayOfInlineSpan = dart.constFn(_interceptors.JSArray$(inline_span.InlineSpan)))();
  let StringAndStringToWidget = () => (StringAndStringToWidget = dart.constFn(dart.fnType(framework.Widget, [core.String, core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 18,
        [EdgeInsets_right]: 18,
        [EdgeInsets_top]: 18,
        [EdgeInsets_left]: 18
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 24,
        [EdgeInsets_left]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isMobile",
        [_Location_column]: 26,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C6() {
      return C6 = dart.constList([], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 29,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 33,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 48,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 29,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 29,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isMobile",
        [_Location_column]: 23,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contacts",
        [_Location_column]: 23,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 24,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 24
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isMobile",
        [_Location_column]: 23,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "firstColumn",
        [_Location_column]: 23,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondColumn",
        [_Location_column]: 23,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 28,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 13,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "skills",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 24,
        [SizedBox_width]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duties",
        [_Location_column]: 9,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 13,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "from",
        [_Location_column]: 13,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "to",
        [_Location_column]: 13,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "url",
        [_Location_column]: 13,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 13,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "from",
        [_Location_column]: 13,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "to",
        [_Location_column]: 13,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93, C94 || CT.C94, C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 17,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "from",
        [_Location_column]: 17,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "to",
        [_Location_column]: 17,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 17,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "from",
        [_Location_column]: 17,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "to",
        [_Location_column]: 17,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 13,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "from",
        [_Location_column]: 13,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "to",
        [_Location_column]: 13,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "description",
        [_Location_column]: 13,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "role",
        [_Location_column]: 13,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "technologies",
        [_Location_column]: 13,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "links",
        [_Location_column]: 13,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124, C125 || CT.C125, C126 || CT.C126, C127 || CT.C127, C128 || CT.C128, C129 || CT.C129], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 20,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 13,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "from",
        [_Location_column]: 13,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "to",
        [_Location_column]: 13,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "description",
        [_Location_column]: 13,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "role",
        [_Location_column]: 13,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "technologies",
        [_Location_column]: 13,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "links",
        [_Location_column]: 13,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136, C137 || CT.C137, C138 || CT.C138, C139 || CT.C139, C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 20,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 13,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "from",
        [_Location_column]: 13,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "to",
        [_Location_column]: 13,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "description",
        [_Location_column]: 13,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "role",
        [_Location_column]: 13,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "technologies",
        [_Location_column]: 13,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "links",
        [_Location_column]: 13,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147, C148 || CT.C148, C149 || CT.C149, C150 || CT.C150, C151 || CT.C151, C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 34,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 274,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164, C165 || CT.C165], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 271,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168], widget_inspector._Location);
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C167 || CT.C167,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 270,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 20,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 277,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 284,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 28,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 286,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278209856.0
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 287,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 28,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.constList([C186 || CT.C186], widget_inspector._Location);
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C185 || CT.C185,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 294,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189], widget_inspector._Location);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C188 || CT.C188,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 297,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192, C193 || CT.C193], widget_inspector._Location);
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C191 || CT.C191,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 295,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196, C197 || CT.C197], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C195 || CT.C195,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 281,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 17,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.constList([C200 || CT.C200], widget_inspector._Location);
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C199 || CT.C199,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.constList([C203 || CT.C203], widget_inspector._Location);
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C202 || CT.C202,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 278,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.constList([C209 || CT.C209, C210 || CT.C210], widget_inspector._Location);
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C208 || CT.C208,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 262,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 20,
        [_Location_line]: 334,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.constList([C213 || CT.C213], widget_inspector._Location);
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C212 || CT.C212,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 334,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278221163.0
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 336,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 337,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.constList([C217 || CT.C217, C218 || CT.C218], widget_inspector._Location);
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C216 || CT.C216,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 335,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 20,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.constList([C221 || CT.C221], widget_inspector._Location);
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C220 || CT.C220,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 343,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 331,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.constList([C224 || CT.C224, C225 || CT.C225, C226 || CT.C226], widget_inspector._Location);
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C223 || CT.C223,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 330,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.constList([C229 || CT.C229, C230 || CT.C230], widget_inspector._Location);
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C228 || CT.C228,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 328,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.constList([C233 || CT.C233, C234 || CT.C234], widget_inspector._Location);
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C232 || CT.C232,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 373,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 18,
        [_Location_line]: 380,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.constList([C237 || CT.C237], widget_inspector._Location);
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C236 || CT.C236,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 380,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 387,
        [_Location_file]: null
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 388,
        [_Location_file]: null
      });
    },
    get C239() {
      return C239 = dart.constList([C240 || CT.C240, C241 || CT.C241], widget_inspector._Location);
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C239 || CT.C239,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 386,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C243() {
      return C243 = dart.constList([C244 || CT.C244], widget_inspector._Location);
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C243 || CT.C243,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 392,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "url",
        [_Location_column]: 41,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.constList([C248 || CT.C248], widget_inspector._Location);
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C247 || CT.C247,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 395,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 394,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.constList([C251 || CT.C251, C252 || CT.C252], widget_inspector._Location);
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C250 || CT.C250,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 393,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.constList([C255 || CT.C255, C256 || CT.C256], widget_inspector._Location);
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C254 || CT.C254,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 383,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "visible",
        [_Location_column]: 11,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 383,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.constList([C259 || CT.C259, C260 || CT.C260], widget_inspector._Location);
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C258 || CT.C258,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 381,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 18,
        [_Location_line]: 400,
        [_Location_file]: null
      });
    },
    get C262() {
      return C262 = dart.constList([C263 || CT.C263], widget_inspector._Location);
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C262 || CT.C262,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 400,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 401,
        [_Location_file]: null
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 401,
        [_Location_file]: null
      });
    },
    get C265() {
      return C265 = dart.constList([C266 || CT.C266, C267 || CT.C267], widget_inspector._Location);
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C265 || CT.C265,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 401,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 371,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 372,
        [_Location_file]: null
      });
    },
    get C269() {
      return C269 = dart.constList([C270 || CT.C270, C271 || CT.C271], widget_inspector._Location);
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C269 || CT.C269,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 423,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 424,
        [_Location_file]: null
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 425,
        [_Location_file]: null
      });
    },
    get C273() {
      return C273 = dart.constList([C274 || CT.C274, C275 || CT.C275, C276 || CT.C276], widget_inspector._Location);
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C273 || CT.C273,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 422,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 433,
        [_Location_file]: null
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 435,
        [_Location_file]: null
      });
    },
    get C278() {
      return C278 = dart.constList([C279 || CT.C279, C280 || CT.C280, C281 || CT.C281], widget_inspector._Location);
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C278 || CT.C278,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 432,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 432,
        [_Location_file]: null
      });
    },
    get C283() {
      return C283 = dart.constList([C284 || CT.C284], widget_inspector._Location);
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C283 || CT.C283,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 431,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 440,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C286() {
      return C286 = dart.constList([C287 || CT.C287, C288 || CT.C288, C289 || CT.C289], widget_inspector._Location);
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C286 || CT.C286,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 439,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 439,
        [_Location_file]: null
      });
    },
    get C291() {
      return C291 = dart.constList([C292 || CT.C292], widget_inspector._Location);
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C291 || CT.C291,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 438,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 428,
        [_Location_file]: null
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 429,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 430,
        [_Location_file]: null
      });
    },
    get C294() {
      return C294 = dart.constList([C295 || CT.C295, C296 || CT.C296, C297 || CT.C297], widget_inspector._Location);
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C294 || CT.C294,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 427,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 12,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 12
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 464,
        [_Location_file]: null
      });
    },
    get C300() {
      return C300 = dart.constList([C301 || CT.C301], widget_inspector._Location);
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C300 || CT.C300,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 464,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 463,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 464,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.constList([C304 || CT.C304, C305 || CT.C305], widget_inspector._Location);
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C303 || CT.C303,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 462,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 467,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 468,
        [_Location_file]: null
      });
    },
    get C307() {
      return C307 = dart.constList([C308 || CT.C308, C309 || CT.C309], widget_inspector._Location);
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C307 || CT.C307,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 466,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 4
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 492,
        [_Location_file]: null
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 13,
        [_Location_line]: 493,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 494,
        [_Location_file]: null
      });
    },
    get C313() {
      return C313 = dart.constList([C314 || CT.C314, C315 || CT.C315, C316 || CT.C316], widget_inspector._Location);
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C313 || CT.C313,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 491,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 490,
        [_Location_file]: null
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 491,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.constList([C319 || CT.C319, C320 || CT.C320], widget_inspector._Location);
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C318 || CT.C318,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 489,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 18,
        [_Location_line]: 497,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.constList([C323 || CT.C323], widget_inspector._Location);
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C322 || CT.C322,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 497,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 499,
        [_Location_file]: null
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 500,
        [_Location_file]: null
      });
    },
    get C325() {
      return C325 = dart.constList([C326 || CT.C326, C327 || CT.C327], widget_inspector._Location);
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C325 || CT.C325,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 498,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 18,
        [_Location_line]: 488,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.constList([C330 || CT.C330], widget_inspector._Location);
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C329 || CT.C329,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 488,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 487,
        [_Location_file]: null
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 488,
        [_Location_file]: null
      });
    },
    get C332() {
      return C332 = dart.constList([C333 || CT.C333, C334 || CT.C334], widget_inspector._Location);
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C332 || CT.C332,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 486,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 8
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278217052.0
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 529,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 530,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.constList([C339 || CT.C339, C340 || CT.C340], widget_inspector._Location);
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C338 || CT.C338,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 528,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 523,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 527,
        [_Location_file]: null
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 528,
        [_Location_file]: null
      });
    },
    get C342() {
      return C342 = dart.constList([C343 || CT.C343, C344 || CT.C344, C345 || CT.C345], widget_inspector._Location);
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C342 || CT.C342,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 522,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 521,
        [_Location_file]: null
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 522,
        [_Location_file]: null
      });
    },
    get C347() {
      return C347 = dart.constList([C348 || CT.C348, C349 || CT.C349], widget_inspector._Location);
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C347 || CT.C347,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 520,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 518,
        [_Location_file]: null
      });
    },
    get C351() {
      return C351 = dart.constList([C352 || CT.C352], widget_inspector._Location);
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C351 || CT.C351,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 517,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 556,
        [_Location_file]: null
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 557,
        [_Location_file]: null
      });
    },
    get C354() {
      return C354 = dart.constList([C355 || CT.C355, C356 || CT.C356], widget_inspector._Location);
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C354 || CT.C354,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 555,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 565,
        [_Location_file]: null
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 566,
        [_Location_file]: null
      });
    },
    get C358() {
      return C358 = dart.constList([C359 || CT.C359, C360 || CT.C360], widget_inspector._Location);
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C358 || CT.C358,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 564,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 552,
        [_Location_file]: null
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 553,
        [_Location_file]: null
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 554,
        [_Location_file]: null
      });
    },
    get C362() {
      return C362 = dart.constList([C363 || CT.C363, C364 || CT.C364, C365 || CT.C365], widget_inspector._Location);
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C362 || CT.C362,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 551,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 597,
        [_Location_file]: null
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 597,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.constList([C368 || CT.C368, C369 || CT.C369], widget_inspector._Location);
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C367 || CT.C367,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 597,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 596,
        [_Location_file]: null
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 597,
        [_Location_file]: null
      });
    },
    get C371() {
      return C371 = dart.constList([C372 || CT.C372, C373 || CT.C373], widget_inspector._Location);
    },
    get C370() {
      return C370 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C371 || CT.C371,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 595,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 629,
        [_Location_file]: null
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 630,
        [_Location_file]: null
      });
    },
    get C375() {
      return C375 = dart.constList([C376 || CT.C376, C377 || CT.C377], widget_inspector._Location);
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C375 || CT.C375,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 628,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: text$.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: ", "
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 636,
        [_Location_file]: null
      });
    },
    get C380() {
      return C380 = dart.constList([C381 || CT.C381], widget_inspector._Location);
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C380 || CT.C380,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 635,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 627,
        [_Location_file]: null
      });
    },
    get C383() {
      return C383 = dart.constList([C384 || CT.C384], widget_inspector._Location);
    },
    get C382() {
      return C382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C383 || CT.C383,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 626,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 643,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 9,
        [_Location_line]: 649,
        [_Location_file]: null
      });
    },
    get C387() {
      return C387 = dart.constList([C388 || CT.C388], widget_inspector._Location);
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C387 || CT.C387,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 648,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 666,
        [_Location_file]: null
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 11,
        [_Location_line]: 667,
        [_Location_file]: null
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "from",
        [_Location_column]: 11,
        [_Location_line]: 668,
        [_Location_file]: null
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "to",
        [_Location_column]: 11,
        [_Location_line]: 669,
        [_Location_file]: null
      });
    },
    get C390() {
      return C390 = dart.constList([C391 || CT.C391, C392 || CT.C392, C393 || CT.C393, C394 || CT.C394], widget_inspector._Location);
    },
    get C389() {
      return C389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C390 || CT.C390,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 665,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 18,
        [_Location_line]: 671,
        [_Location_file]: null
      });
    },
    get C396() {
      return C396 = dart.constList([C397 || CT.C397], widget_inspector._Location);
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C396 || CT.C396,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 671,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    },
    get C400() {
      return C400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 663,
        [_Location_file]: null
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 664,
        [_Location_file]: null
      });
    },
    get C399() {
      return C399 = dart.constList([C400 || CT.C400, C401 || CT.C401], widget_inspector._Location);
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C399 || CT.C399,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 662,
        [_Location_file]: "org-dartlang-app:///packages/resume/resume.dart"
      });
    }
  });
  resume.Resume = class Resume extends framework.StatefulWidget {
    createState() {
      return new resume._ResumeState.new();
    }
  };
  (resume.Resume.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    resume.Resume.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Resume.prototype;
  dart.addTypeTests(resume.Resume);
  dart.setMethodSignature(resume.Resume, () => ({
    __proto__: dart.getMethods(resume.Resume.__proto__),
    createState: dart.fnType(resume._ResumeState, [])
  }));
  dart.setLibraryUri(resume.Resume, "package:resume/resume.dart");
  const _screenWidth = dart.privateName(resume, "_screenWidth");
  const _isMobile = dart.privateName(resume, "_isMobile");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C0;
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C3;
  let C2;
  let C6;
  let C5;
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C20;
  let C19;
  let C23;
  let C26;
  let C27;
  let C25;
  let C24;
  let C30;
  let C31;
  let C29;
  let C28;
  let C32;
  const _firstColumn = dart.privateName(resume, "_firstColumn");
  const _secondColumn = dart.privateName(resume, "_secondColumn");
  let C35;
  let C36;
  let C37;
  let C34;
  let C33;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C43;
  let C42;
  let C47;
  let C46;
  let C45;
  let C50;
  let C51;
  let C49;
  let C48;
  let C54;
  let C55;
  let C56;
  let C57;
  let C53;
  let C52;
  let C60;
  let C59;
  let C58;
  let C63;
  let C64;
  let C62;
  let C61;
  let C67;
  let C68;
  let C66;
  let C65;
  let C71;
  let C70;
  let C69;
  let C74;
  let C75;
  let C73;
  let C72;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C76;
  let C79;
  let C78;
  let C77;
  let C82;
  let C83;
  let C84;
  let C85;
  let C81;
  let C80;
  let C88;
  let C89;
  let C87;
  let C86;
  let C92;
  let C93;
  let C94;
  let C95;
  let C96;
  let C91;
  let C90;
  let C99;
  let C100;
  let C98;
  let C97;
  let C103;
  let C104;
  let C105;
  let C106;
  let C102;
  let C101;
  let C109;
  let C110;
  let C111;
  let C112;
  let C108;
  let C107;
  let C115;
  let C116;
  let C114;
  let C113;
  let C119;
  let C120;
  let C118;
  let C117;
  let C123;
  let C124;
  let C125;
  let C126;
  let C127;
  let C128;
  let C129;
  let C122;
  let C121;
  let C132;
  let C131;
  let C130;
  let C135;
  let C136;
  let C137;
  let C138;
  let C139;
  let C140;
  let C141;
  let C134;
  let C133;
  let C144;
  let C143;
  let C142;
  let C147;
  let C148;
  let C149;
  let C150;
  let C151;
  let C152;
  let C153;
  let C146;
  let C145;
  let C156;
  let C157;
  let C155;
  let C154;
  resume._ResumeState = class _ResumeState extends framework.State$(resume.Resume) {
    build(context) {
      let queryData = media_query.MediaQuery.of(context);
      let screenHeight = queryData.size.height;
      let screenWidth = 799.0;
      this[_isMobile] = dart.notNull(screenWidth) < 800;
      if (this[_screenWidth] != null && dart.notNull(screenWidth) < dart.notNull(this[_screenWidth])) screenWidth = this[_screenWidth];
      this[_screenWidth] = screenWidth;
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.black54, body: new single_child_scroll_view.SingleChildScrollView.new({padding: C0 || CT.C0, child: new basic.Center.new({child: new card.Card.new({elevation: 10.0, margin: C1 || CT.C1, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(2.0)}), child: new container.Container.new({width: dart.notNull(screenWidth) / 2, child: new basic.Column.new({children: JSArrayOfWidget().of([new resume.Header.new(this[_isMobile], {$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), new container.Container.new({color: colors.Colors.black12, child: new resume.ContactsContainer.new(this[_isMobile], {contacts: JSArrayOfWidget().of([new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new resume.Contact.new({title: "smalko.irina.s@gmail.com", icon: icons.Icons.email, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new resume.Contact.new({title: "Kyiv", icon: icons.Icons.pin_drop, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new resume.Contact.new({title: "+38 068 033 63 79", icon: icons.Icons.phone_android, $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new resume.Contact.new({title: "linkedin.com/in/iryna-smalko", icon: custom_icons.CustomIcons.linkdin, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C23 || CT.C23})]), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new basic.Padding.new({padding: C32 || CT.C32, child: new resume.ColumnContainer.new(this[_isMobile], {firstColumn: this[_firstColumn], secondColumn: this[_secondColumn], $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), new basic.SizedBox.new({height: 42.0, $creationLocationd_0dea112b090073317d4: C42 || CT.C42})]), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65});
    }
    get [_firstColumn]() {
      return JSArrayOfWidget().of([new resume.Section.new({title: "Professional Skills", children: JSArrayOfWidget().of([new resume.SkillsContainer.new({skills: JSArrayOfString().of(["Kotlin", "Java", "Dart", "Android SDK", "OOP", "Databinding", "OkHttp", "Retroit", "Realm", "Architecture components", "RxJava2", "Branch", "Firebase", "Google pay", "Crashlytics", "Git", "Internationalization", "IOS app distribution", "Git flow", "Testflight", "Jira", "Figma", "Provider"]), $creationLocationd_0dea112b090073317d4: C69 || CT.C69})]), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), C76 || CT.C76, new resume.DutiesContainer.new({duties: JSArrayOfString().of(["Implementation of new features", "Prototyping, design and technical implementation discussions", "Code review", "Improving the design of existing code", "Supporting the QA team during the testing phase", "Contribution of mobile apps"]), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new resume.Section.new({title: "Education", children: JSArrayOfWidget().of([new resume.TimePeriod.new({title: "Bachelor's in Accounting and audit", subtitle: "The Kremenchuk Mykhailo Ostrohradskyi National University", from: "September 2012", to: "June 2016", $creationLocationd_0dea112b090073317d4: C80 || CT.C80})]), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), new resume.Section.new({title: "Courses", children: JSArrayOfWidget().of([new resume.TimePeriod.new({title: "Android development", url: "http://geekhub.ck.ua", subtitle: "GeekHub", from: "October 2016", to: "April 2017", $creationLocationd_0dea112b090073317d4: C90 || CT.C90})]), $creationLocationd_0dea112b090073317d4: C97 || CT.C97})]);
    }
    get [_secondColumn]() {
      return JSArrayOfWidget().of([new resume.Section.new({title: "WORK EXPERIENCE", children: JSArrayOfWidget().of([new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new resume.TimePeriod.new({title: "Flutter developer", subtitle: "YouDigital, Kyiv, Ukraine", from: "August 2019", to: "Present", $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), C76 || CT.C76, new resume.TimePeriod.new({title: "Android Developer", subtitle: "Master of Code Global, Cherkasy, Ukraine", from: "May 2017", to: "April 2019", $creationLocationd_0dea112b090073317d4: C107 || CT.C107})]), $creationLocationd_0dea112b090073317d4: C113 || CT.C113})]), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), new resume.Section.new({title: "Main projects", children: JSArrayOfWidget().of([new resume.Project.new({name: "Apps for making deposits and loans", from: "August 2019", to: "Present", description: "The mobile applications for comfortable and quick admittance to the client’s personal deposits and Loans cryptocurrency accounts", role: "Flutter developer", technologies: JSArrayOfString().of(["Dart", "Internationalization", "Provider"]), links: JSArrayOfLink().of([]), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), new basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: C130 || CT.C130}), new resume.Project.new({name: "Domestic services app", from: "September 2017", to: "April 2019", description: "App for matching clients with proven technicians to solve common household problems oriented for Arabian countries", role: "Android Developer", technologies: JSArrayOfString().of(["Kotlin", "Android framework", "Architecture components", "DataBinding", "RxJava2", "ObjectBox", "Retrofit", "Firebase"]), links: JSArrayOfLink().of([]), $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), new basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), new resume.Project.new({name: "Silent auction app", from: "May 2017", to: "September 2018", description: "Silent Auction service. This client allows bidders who are invited to silent auctions to bid on items from their mobile device and manage bids.", role: "Android Developer", technologies: JSArrayOfString().of(["Java", "Android framework", "Realm", "Socket", "Glide", "Branch", "OkHttp", "Google Maps", "Firebase"]), links: JSArrayOfLink().of([]), $creationLocationd_0dea112b090073317d4: C145 || CT.C145})]), $creationLocationd_0dea112b090073317d4: C154 || CT.C154})]);
    }
    createState() {
    }
  };
  (resume._ResumeState.new = function() {
    this[_screenWidth] = null;
    this[_isMobile] = false;
    resume._ResumeState.__proto__.new.call(this);
    ;
  }).prototype = resume._ResumeState.prototype;
  dart.addTypeTests(resume._ResumeState);
  dart.setMethodSignature(resume._ResumeState, () => ({
    __proto__: dart.getMethods(resume._ResumeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setGetterSignature(resume._ResumeState, () => ({
    __proto__: dart.getGetters(resume._ResumeState.__proto__),
    [_firstColumn]: core.List$(framework.Widget),
    [_secondColumn]: core.List$(framework.Widget)
  }));
  dart.setLibraryUri(resume._ResumeState, "package:resume/resume.dart");
  dart.setFieldSignature(resume._ResumeState, () => ({
    __proto__: dart.getFields(resume._ResumeState.__proto__),
    [_screenWidth]: dart.fieldType(core.double),
    [_isMobile]: dart.fieldType(core.bool)
  }));
  let C160;
  let C159;
  let C158;
  let C163;
  let C164;
  let C165;
  let C162;
  let C161;
  let C168;
  let C167;
  let C166;
  let C171;
  let C170;
  let C169;
  let C174;
  let C175;
  let C173;
  let C172;
  let C178;
  let C177;
  let C176;
  const Color_value = dart.privateName(ui, "Color.value");
  let C179;
  let C182;
  let C183;
  let C181;
  let C180;
  let C186;
  let C185;
  let C184;
  let C189;
  let C188;
  let C187;
  let C192;
  let C193;
  let C191;
  let C190;
  let C196;
  let C197;
  let C195;
  let C194;
  let C200;
  let C199;
  let C198;
  let C203;
  let C202;
  let C201;
  let C206;
  let C205;
  let C204;
  let C209;
  let C210;
  let C208;
  let C207;
  const isMobile$ = dart.privateName(resume, "Header.isMobile");
  resume.Header = class Header extends framework.StatelessWidget {
    get isMobile() {
      return this[isMobile$];
    }
    set isMobile(value) {
      super.isMobile = value;
    }
    build(context) {
      let basePadding = dart.test(this.isMobile) ? 12.0 : 32.0;
      let textTheme = theme.Theme.of(context).textTheme;
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: basePadding, right: basePadding, top: basePadding, bottom: 24.0}), child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.ClipOval.new({child: new basic.SizedBox.new({width: dart.test(this.isMobile) ? 100.0 : 120.0, height: dart.test(this.isMobile) ? 100.0 : 120.0, child: new image.Image.asset("assets/image.jpg", {$creationLocationd_0dea112b090073317d4: C158 || CT.C158}), $creationLocationd_0dea112b090073317d4: C161 || CT.C161}), $creationLocationd_0dea112b090073317d4: C166 || CT.C166}), new basic.SizedBox.new({width: 24.0, $creationLocationd_0dea112b090073317d4: C169 || CT.C169}), new basic.Expanded.new({child: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new text$.Text.new("Iryna Smalko", {style: textTheme.headline.copyWith({color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C172 || CT.C172}), new basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: C176 || CT.C176}), new text$.Text.new("Flutter developer", {style: new text_style.TextStyle.new({color: C179 || CT.C179, fontSize: 18.0, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C180 || CT.C180}), new basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: C184 || CT.C184}), new basic.SizedBox.new({width: constraints.maxWidth, child: new text$.Text.new("Dedicated Android developer with two years of experience in mobile app development. Strong creative and analytical skills. Team player with an eye for detail.", {$creationLocationd_0dea112b090073317d4: C187 || CT.C187}), $creationLocationd_0dea112b090073317d4: C190 || CT.C190})]), $creationLocationd_0dea112b090073317d4: C194 || CT.C194}), BuildContextAndBoxConstraintsToColumn()), $creationLocationd_0dea112b090073317d4: C198 || CT.C198}), $creationLocationd_0dea112b090073317d4: C201 || CT.C201})]), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), $creationLocationd_0dea112b090073317d4: C207 || CT.C207});
    }
  };
  (resume.Header.new = function(isMobile, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[isMobile$] = isMobile;
    resume.Header.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Header.prototype;
  dart.addTypeTests(resume.Header);
  dart.setMethodSignature(resume.Header, () => ({
    __proto__: dart.getMethods(resume.Header.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resume.Header, "package:resume/resume.dart");
  dart.setFieldSignature(resume.Header, () => ({
    __proto__: dart.getFields(resume.Header.__proto__),
    isMobile: dart.finalFieldType(core.bool)
  }));
  let C213;
  let C212;
  let C211;
  let C214;
  let C217;
  let C218;
  let C216;
  let C215;
  let C221;
  let C220;
  let C219;
  let C224;
  let C225;
  let C226;
  let C223;
  let C222;
  let C229;
  let C230;
  let C228;
  let C227;
  const width$ = dart.privateName(resume, "Section.width");
  const title$ = dart.privateName(resume, "Section.title");
  const link$ = dart.privateName(resume, "Section.link");
  const children$ = dart.privateName(resume, "Section.children");
  resume.Section = class Section extends framework.StatelessWidget {
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get link() {
      return this[link$];
    }
    set link(value) {
      super.link = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    build(context) {
      return new container.Container.new({width: this.width, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisAlignment: flex.MainAxisAlignment.start, children: (() => {
            let t0 = JSArrayOfWidget().of([]);
            t0[$add](new basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: C211 || CT.C211}));
            t0[$add](new text$.Text.new(this.title, {style: new text_style.TextStyle.new({color: C214 || CT.C214, fontSize: 20.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C215 || CT.C215}));
            t0[$add](new basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: C219 || CT.C219}));
            for (let t1 of this.children)
              t0[$add](t1);
            return t0;
          })(), $creationLocationd_0dea112b090073317d4: C222 || CT.C222}), $creationLocationd_0dea112b090073317d4: C227 || CT.C227});
    }
  };
  (resume.Section.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let link = opts && 'link' in opts ? opts.link : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[link$] = link;
    this[title$] = title;
    this[children$] = children;
    this[width$] = width;
    resume.Section.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Section.prototype;
  dart.addTypeTests(resume.Section);
  dart.setMethodSignature(resume.Section, () => ({
    __proto__: dart.getMethods(resume.Section.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resume.Section, "package:resume/resume.dart");
  dart.setFieldSignature(resume.Section, () => ({
    __proto__: dart.getFields(resume.Section.__proto__),
    width: dart.finalFieldType(core.double),
    title: dart.finalFieldType(core.String),
    link: dart.finalFieldType(core.String),
    children: dart.finalFieldType(core.List$(framework.Widget))
  }));
  let C233;
  let C234;
  let C232;
  let C231;
  let C237;
  let C236;
  let C235;
  let C240;
  let C241;
  let C239;
  let C238;
  let C244;
  let C243;
  let C242;
  let C245;
  let C248;
  let C247;
  let C246;
  let C251;
  let C252;
  let C250;
  let C249;
  let C255;
  let C256;
  let C254;
  let C253;
  let C259;
  let C260;
  let C258;
  let C257;
  let C263;
  let C262;
  let C261;
  let C266;
  let C267;
  let C265;
  let C264;
  let C270;
  let C271;
  let C269;
  let C268;
  const title$0 = dart.privateName(resume, "TimePeriod.title");
  const subtitle$ = dart.privateName(resume, "TimePeriod.subtitle");
  const url$ = dart.privateName(resume, "TimePeriod.url");
  const from$ = dart.privateName(resume, "TimePeriod.from");
  const to$ = dart.privateName(resume, "TimePeriod.to");
  resume.TimePeriod = class TimePeriod extends framework.StatelessWidget {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get subtitle() {
      return this[subtitle$];
    }
    set subtitle(value) {
      super.subtitle = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
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
      let textTheme = theme.Theme.of(context).textTheme;
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new text$.Text.new(this.title, {style: new text_style.TextStyle.new({fontSize: 18.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C231 || CT.C231}), new basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: C235 || CT.C235}), new visibility.Visibility.new({visible: this.subtitle[$isNotEmpty], child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: JSArrayOfWidget().of([new text$.Text.new(this.subtitle, {style: new text_style.TextStyle.new({fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: C238 || CT.C238}), new basic.SizedBox.new({width: 4.0, $creationLocationd_0dea112b090073317d4: C242 || CT.C242}), new basic.Padding.new({padding: C245 || CT.C245, child: new resume.Link.new(this.url != null ? this.url : "", {$creationLocationd_0dea112b090073317d4: C246 || CT.C246}), $creationLocationd_0dea112b090073317d4: C249 || CT.C249})]), $creationLocationd_0dea112b090073317d4: C253 || CT.C253}), $creationLocationd_0dea112b090073317d4: C257 || CT.C257}), new basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: C261 || CT.C261}), new text$.Text.new(dart.str(this.from) + " – " + dart.str(this.to), {style: textTheme.caption, $creationLocationd_0dea112b090073317d4: C264 || CT.C264})]), $creationLocationd_0dea112b090073317d4: C268 || CT.C268});
    }
  };
  (resume.TimePeriod.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let url = opts && 'url' in opts ? opts.url : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let from = opts && 'from' in opts ? opts.from : null;
    let to = opts && 'to' in opts ? opts.to : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$0] = title;
    this[url$] = url;
    this[subtitle$] = subtitle;
    this[from$] = from;
    this[to$] = to;
    resume.TimePeriod.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.TimePeriod.prototype;
  dart.addTypeTests(resume.TimePeriod);
  dart.setMethodSignature(resume.TimePeriod, () => ({
    __proto__: dart.getMethods(resume.TimePeriod.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resume.TimePeriod, "package:resume/resume.dart");
  dart.setFieldSignature(resume.TimePeriod, () => ({
    __proto__: dart.getFields(resume.TimePeriod.__proto__),
    title: dart.finalFieldType(core.String),
    subtitle: dart.finalFieldType(core.String),
    url: dart.finalFieldType(core.String),
    from: dart.finalFieldType(core.String),
    to: dart.finalFieldType(core.String)
  }));
  let C274;
  let C275;
  let C276;
  let C273;
  let C272;
  let C279;
  let C280;
  let C281;
  let C278;
  let C277;
  let C284;
  let C283;
  let C282;
  let C287;
  let C288;
  let C289;
  let C286;
  let C285;
  let C292;
  let C291;
  let C290;
  let C295;
  let C296;
  let C297;
  let C294;
  let C293;
  const isMobile$0 = dart.privateName(resume, "ColumnContainer.isMobile");
  const firstColumn$ = dart.privateName(resume, "ColumnContainer.firstColumn");
  const secondColumn$ = dart.privateName(resume, "ColumnContainer.secondColumn");
  resume.ColumnContainer = class ColumnContainer extends framework.StatelessWidget {
    get isMobile() {
      return this[isMobile$0];
    }
    set isMobile(value) {
      super.isMobile = value;
    }
    get firstColumn() {
      return this[firstColumn$];
    }
    set firstColumn(value) {
      super.firstColumn = value;
    }
    get secondColumn() {
      return this[secondColumn$];
    }
    set secondColumn(value) {
      super.secondColumn = value;
    }
    build(context) {
      return dart.test(this.isMobile) ? new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: (() => {
          let t2 = JSArrayOfWidget().of([]);
          for (let t3 of this.firstColumn)
            t2[$add](t3);
          for (let t4 of this.secondColumn)
            t2[$add](t4);
          return t2;
        })(), $creationLocationd_0dea112b090073317d4: C272 || CT.C272}) : new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: this.firstColumn, $creationLocationd_0dea112b090073317d4: C277 || CT.C277}), $creationLocationd_0dea112b090073317d4: C282 || CT.C282}), new basic.Expanded.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: this.secondColumn, $creationLocationd_0dea112b090073317d4: C285 || CT.C285}), $creationLocationd_0dea112b090073317d4: C290 || CT.C290})]), $creationLocationd_0dea112b090073317d4: C293 || CT.C293});
    }
  };
  (resume.ColumnContainer.new = function(isMobile, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let firstColumn = opts && 'firstColumn' in opts ? opts.firstColumn : null;
    let secondColumn = opts && 'secondColumn' in opts ? opts.secondColumn : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[isMobile$0] = isMobile;
    this[firstColumn$] = firstColumn;
    this[secondColumn$] = secondColumn;
    resume.ColumnContainer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.ColumnContainer.prototype;
  dart.addTypeTests(resume.ColumnContainer);
  dart.setMethodSignature(resume.ColumnContainer, () => ({
    __proto__: dart.getMethods(resume.ColumnContainer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resume.ColumnContainer, "package:resume/resume.dart");
  dart.setFieldSignature(resume.ColumnContainer, () => ({
    __proto__: dart.getFields(resume.ColumnContainer.__proto__),
    isMobile: dart.finalFieldType(core.bool),
    firstColumn: dart.finalFieldType(core.List$(framework.Widget)),
    secondColumn: dart.finalFieldType(core.List$(framework.Widget))
  }));
  let C298;
  let C301;
  let C300;
  let C299;
  let C304;
  let C305;
  let C303;
  let C302;
  let C308;
  let C309;
  let C307;
  let C306;
  const contacts$ = dart.privateName(resume, "ContactsContainer.contacts");
  const isMobile$1 = dart.privateName(resume, "ContactsContainer.isMobile");
  resume.ContactsContainer = class ContactsContainer extends framework.StatelessWidget {
    get contacts() {
      return this[contacts$];
    }
    set contacts(value) {
      super.contacts = value;
    }
    get isMobile() {
      return this[isMobile$1];
    }
    set isMobile(value) {
      super.isMobile = value;
    }
    build(context) {
      return dart.test(this.isMobile) ? new basic.Padding.new({padding: C298 || CT.C298, child: new basic.Column.new({children: this.contacts, $creationLocationd_0dea112b090073317d4: C299 || CT.C299}), $creationLocationd_0dea112b090073317d4: C302 || CT.C302}) : new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: this.contacts, $creationLocationd_0dea112b090073317d4: C306 || CT.C306});
    }
  };
  (resume.ContactsContainer.new = function(isMobile, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let contacts = opts && 'contacts' in opts ? opts.contacts : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[isMobile$1] = isMobile;
    this[contacts$] = contacts;
    resume.ContactsContainer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.ContactsContainer.prototype;
  dart.addTypeTests(resume.ContactsContainer);
  dart.setMethodSignature(resume.ContactsContainer, () => ({
    __proto__: dart.getMethods(resume.ContactsContainer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resume.ContactsContainer, "package:resume/resume.dart");
  dart.setFieldSignature(resume.ContactsContainer, () => ({
    __proto__: dart.getFields(resume.ContactsContainer.__proto__),
    contacts: dart.finalFieldType(core.List$(framework.Widget)),
    isMobile: dart.finalFieldType(core.bool)
  }));
  let C310;
  let C311;
  let C314;
  let C315;
  let C316;
  let C313;
  let C312;
  let C319;
  let C320;
  let C318;
  let C317;
  let C323;
  let C322;
  let C321;
  let C326;
  let C327;
  let C325;
  let C324;
  let C330;
  let C329;
  let C328;
  let C333;
  let C334;
  let C332;
  let C331;
  const title$1 = dart.privateName(resume, "Contact.title");
  const icon$ = dart.privateName(resume, "Contact.icon");
  resume.Contact = class Contact extends framework.StatelessWidget {
    get title() {
      return this[title$1];
    }
    set title(value) {
      super.title = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    build(context) {
      let textTheme = theme.Theme.of(context).textTheme;
      return new basic.Padding.new({padding: C310 || CT.C310, child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C311 || CT.C311, child: new icon.Icon.new(this.icon, {size: 16.0, color: C214 || CT.C214, $creationLocationd_0dea112b090073317d4: C312 || CT.C312}), $creationLocationd_0dea112b090073317d4: C317 || CT.C317}), new basic.SizedBox.new({width: 4.0, $creationLocationd_0dea112b090073317d4: C321 || CT.C321}), new text$.Text.new(this.title, {style: new text_style.TextStyle.new({fontSize: 12.0}), $creationLocationd_0dea112b090073317d4: C324 || CT.C324})]), $creationLocationd_0dea112b090073317d4: C328 || CT.C328}), $creationLocationd_0dea112b090073317d4: C331 || CT.C331});
    }
  };
  (resume.Contact.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$1] = title;
    this[icon$] = icon;
    resume.Contact.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Contact.prototype;
  dart.addTypeTests(resume.Contact);
  dart.setMethodSignature(resume.Contact, () => ({
    __proto__: dart.getMethods(resume.Contact.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resume.Contact, "package:resume/resume.dart");
  dart.setFieldSignature(resume.Contact, () => ({
    __proto__: dart.getFields(resume.Contact.__proto__),
    title: dart.finalFieldType(core.String),
    icon: dart.finalFieldType(icon_data.IconData)
  }));
  let C335;
  let C336;
  let C339;
  let C340;
  let C338;
  let C337;
  let C343;
  let C344;
  let C345;
  let C342;
  let C341;
  let C348;
  let C349;
  let C347;
  let C346;
  let C352;
  let C351;
  let C350;
  const skills$ = dart.privateName(resume, "SkillsContainer.skills");
  resume.SkillsContainer = class SkillsContainer extends framework.StatelessWidget {
    get skills() {
      return this[skills$];
    }
    set skills(value) {
      super.skills = value;
    }
    build(context) {
      return new basic.Wrap.new({children: (() => {
          let t5 = JSArrayOfWidget().of([]);
          for (let skill of this.skills)
            t5[$add](new basic.Padding.new({padding: C335 || CT.C335, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: (C336 || CT.C336).withOpacity(0.8), borderRadius: new border_radius.BorderRadius.circular(6.0)}), padding: C310 || CT.C310, child: new text$.Text.new(dart.str(skill), {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C337 || CT.C337}), $creationLocationd_0dea112b090073317d4: C341 || CT.C341}), $creationLocationd_0dea112b090073317d4: C346 || CT.C346}));
          return t5;
        })(), $creationLocationd_0dea112b090073317d4: C350 || CT.C350});
    }
  };
  (resume.SkillsContainer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let skills = opts && 'skills' in opts ? opts.skills : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[skills$] = skills;
    resume.SkillsContainer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.SkillsContainer.prototype;
  dart.addTypeTests(resume.SkillsContainer);
  dart.setMethodSignature(resume.SkillsContainer, () => ({
    __proto__: dart.getMethods(resume.SkillsContainer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resume.SkillsContainer, "package:resume/resume.dart");
  dart.setFieldSignature(resume.SkillsContainer, () => ({
    __proto__: dart.getFields(resume.SkillsContainer.__proto__),
    skills: dart.finalFieldType(core.List$(core.String))
  }));
  let C355;
  let C356;
  let C354;
  let C353;
  let C359;
  let C360;
  let C358;
  let C357;
  let C363;
  let C364;
  let C365;
  let C362;
  let C361;
  const duties$ = dart.privateName(resume, "DutiesContainer.duties");
  resume.DutiesContainer = class DutiesContainer extends framework.StatelessWidget {
    get duties() {
      return this[duties$];
    }
    set duties(value) {
      super.duties = value;
    }
    build(context) {
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: (() => {
          let t6 = JSArrayOfWidget().of([]);
          t6[$add](new text$.Text.new("Duties: ", {style: new text_style.TextStyle.new({color: C214 || CT.C214, fontSize: 20.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C353 || CT.C353}));
          for (let duty of this.duties)
            t6[$add](new text$.Text.new("  •  " + dart.str(duty), {style: new text_style.TextStyle.new({fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C357 || CT.C357}));
          return t6;
        })(), $creationLocationd_0dea112b090073317d4: C361 || CT.C361});
    }
  };
  (resume.DutiesContainer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let duties = opts && 'duties' in opts ? opts.duties : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[duties$] = duties;
    resume.DutiesContainer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.DutiesContainer.prototype;
  dart.addTypeTests(resume.DutiesContainer);
  dart.setMethodSignature(resume.DutiesContainer, () => ({
    __proto__: dart.getMethods(resume.DutiesContainer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resume.DutiesContainer, "package:resume/resume.dart");
  dart.setFieldSignature(resume.DutiesContainer, () => ({
    __proto__: dart.getFields(resume.DutiesContainer.__proto__),
    duties: dart.finalFieldType(core.List$(core.String))
  }));
  let C368;
  let C369;
  let C367;
  let C366;
  let C372;
  let C373;
  let C371;
  let C370;
  const url$0 = dart.privateName(resume, "Link.url");
  const title$2 = dart.privateName(resume, "Link.title");
  const colorize$ = dart.privateName(resume, "Link.colorize");
  resume.Link = class Link extends framework.StatelessWidget {
    get url() {
      return this[url$0];
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
      let t7, t7$, t7$0;
      let themeStyle = (t7$ = (t7 = text$.DefaultTextStyle.of(context), t7 == null ? null : t7.style), t7$ == null ? theme.Theme.of(context).textTheme.body1 : t7$);
      let style = themeStyle.copyWith({decoration: ui.TextDecoration.underline});
      if (dart.test(this.colorize)) {
        style = style.copyWith({color: colors.Colors.blue});
      }
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => html.window[$open](this.url, "_blank"), VoidToWindowBase()), child: new text$.Text.new((t7$0 = this.title, t7$0 == null ? this.url : t7$0), {style: style, $creationLocationd_0dea112b090073317d4: C366 || CT.C366}), $creationLocationd_0dea112b090073317d4: C370 || CT.C370});
    }
  };
  (resume.Link.new = function(url, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let colorize = opts && 'colorize' in opts ? opts.colorize : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[url$0] = url;
    this[title$2] = title;
    this[colorize$] = colorize;
    resume.Link.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Link.prototype;
  dart.addTypeTests(resume.Link);
  dart.setMethodSignature(resume.Link, () => ({
    __proto__: dart.getMethods(resume.Link.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resume.Link, "package:resume/resume.dart");
  dart.setFieldSignature(resume.Link, () => ({
    __proto__: dart.getFields(resume.Link.__proto__),
    url: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String),
    colorize: dart.finalFieldType(core.bool)
  }));
  let C376;
  let C377;
  let C375;
  let C374;
  const Text_textWidthBasis = dart.privateName(text$, "Text.textWidthBasis");
  const Text_semanticsLabel = dart.privateName(text$, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text$, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text$, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text$, "Text.overflow");
  const Text_softWrap = dart.privateName(text$, "Text.softWrap");
  const Text_locale = dart.privateName(text$, "Text.locale");
  const Text_textDirection = dart.privateName(text$, "Text.textDirection");
  const Text_textAlign = dart.privateName(text$, "Text.textAlign");
  const Text_strutStyle = dart.privateName(text$, "Text.strutStyle");
  const Text_style = dart.privateName(text$, "Text.style");
  const Text_textSpan = dart.privateName(text$, "Text.textSpan");
  const Text_data = dart.privateName(text$, "Text.data");
  let C378;
  let C381;
  let C380;
  let C379;
  let C384;
  let C383;
  let C382;
  let C385;
  let C388;
  let C387;
  let C386;
  let C391;
  let C392;
  let C393;
  let C394;
  let C390;
  let C389;
  let C397;
  let C396;
  let C395;
  let C400;
  let C401;
  let C399;
  let C398;
  const name$ = dart.privateName(resume, "Project.name");
  const from$0 = dart.privateName(resume, "Project.from");
  const to$0 = dart.privateName(resume, "Project.to");
  const description$ = dart.privateName(resume, "Project.description");
  const role$ = dart.privateName(resume, "Project.role");
  const technologies$ = dart.privateName(resume, "Project.technologies");
  const links$ = dart.privateName(resume, "Project.links");
  resume.Project = class Project extends framework.StatelessWidget {
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
          return new basic.Row.new({children: JSArrayOfWidget().of([new text$.Text.new(dart.str(name) + ": ", {style: theme.Theme.of(context).textTheme.body1.copyWith({fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C374 || CT.C374}), new basic.Wrap.new({children: (() => {
                  let t7 = JSArrayOfWidget().of([]);
                  for (let t8 of util.join(framework.Widget, children, C378 || CT.C378))
                    t7[$add](t8);
                  return t7;
                })(), $creationLocationd_0dea112b090073317d4: C379 || CT.C379})]), $creationLocationd_0dea112b090073317d4: C382 || CT.C382});
        } else {
          return new basic.SizedBox.shrink({$creationLocationd_0dea112b090073317d4: C385 || CT.C385});
        }
      }
      dart.fn(_row, StringAndListOfWidgetToWidget());
      function _textRow(name, text) {
        return new basic.RichText.new({text: new text_span.TextSpan.new({style: text$.DefaultTextStyle.of(context).style.copyWith({fontSize: 16.0}), children: JSArrayOfInlineSpan().of([new text_span.TextSpan.new({text: dart.str(name) + ": ", style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold})}), new text_span.TextSpan.new({text: text})])}), $creationLocationd_0dea112b090073317d4: C386 || CT.C386});
      }
      dart.fn(_textRow, StringAndStringToWidget());
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new resume.TimePeriod.new({title: this.name, subtitle: "", from: this.from, to: this.to, $creationLocationd_0dea112b090073317d4: C389 || CT.C389}), new basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: C395 || CT.C395}), _textRow("Description", this.description), _textRow("Role", this.role), _textRow("Technologies", this.technologies[$join](", ")), _row("Links", this.links)]), $creationLocationd_0dea112b090073317d4: C398 || CT.C398});
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
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[name$] = name;
    this[from$0] = from;
    this[to$0] = to;
    this[description$] = description;
    this[role$] = role;
    this[technologies$] = technologies;
    this[links$] = links;
    resume.Project.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume.Project.prototype;
  dart.addTypeTests(resume.Project);
  dart.setMethodSignature(resume.Project, () => ({
    __proto__: dart.getMethods(resume.Project.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resume.Project, "package:resume/resume.dart");
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
  dart.trackLibraries("packages/resume/resume", {
    "package:resume/resume.dart": resume
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["resume.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYgC;IAAc;;;QAH1B;;AAAQ,iDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAWf;AACT,sBAAuB,0BAAG,OAAO;AACzC,yBAAe,AAAU,AAAK,SAAN;AACxB,wBAAc;AACQ,MAA7B,kBAAwB,aAAZ,WAAW,IAAG;AAE1B,UAAI,sBAAgB,QAAoB,aAAZ,WAAW,iBAAG,qBACxC,AAA0B,cAAZ;AACU,MAA1B,qBAAe,WAAW;AAE1B,YAAO,6CACmB,6BAClB,qFAEG,6BACE,8BACM,kCAEJ,uEACsB,wCAAS,eAE/B,oCACc,aAAZ,WAAW,IAAG,UACd,gCACa,sBAChB,sBAAO,yEACP,oCACgB,8BACP,iCACL,4BACkB,sBAChB,+EACA,+BACW,kCACK,0EAChB,+BAAe,cAAoB,+EACnC,+BACW,2BACK,oFAChB,+BACW,sCACW,2FACtB,qMAIN,sDAES,+BACL,+BACa,kCACC,uIAGlB,gCAAiB;IAQjC;;AAGE,YAAO,uBACL,+BACS,iCACG,sBACR,wCACU,sBACN,UACA,QACA,QACA,eACA,OACA,eACA,UACA,WACA,SACA,2BACA,WACA,UACA,YACA,cACA,eACA,OACA,wBACA,wBACA,YACA,cACA,QACA,SACA,iJAMR,wCACU,sBACN,kCACA,gEACA,eACA,yCACA,mDACA,0FAGJ,+BACS,uBACG,sBACR,kCACS,gDAEH,mEACE,sBACF,iIAIV,+BACS,qBACG,sBACR,kCACS,4BACF,kCACK,iBACJ,oBACF;IAKd;;AAGE,YAAO,uBACL,+BACS,6BACG,sBACR,0CACyC,yCACrB,sBAChB,kCACS,+BACG,mCACJ,mBACF,qFAGN,kCACS,+BACG,kDACJ,gBACF,mMAMd,+BACS,2BACG,sBACR,8BACQ,4CACA,mBACF,wBAEA,0IACE,mCACQ,sBACZ,QACA,wBACA,qBAEK,mFAET,gCAAiB,iEACjB,8BACQ,+BACA,sBACF,2BAEA,4HACE,mCACQ,sBACZ,UACA,qBACA,2BACA,eACA,WACA,aACA,YACA,qBAEK,mFAET,gCAAiB,iEACjB,8BACQ,4BACA,gBACF,+BAEA,yJACE,mCACQ,sBACZ,QACA,qBACA,SACA,UACA,SACA,UACA,UACA,eACA,qBAEK;IAKjB;;IAGqC;;;IArO9B;IACF,kBAAY;;;EAqOnB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGa;;;;;;UAQe;AACjB,kCAAc,iBAAW,OAAK;AAE/B,sBAAkB,AAAY,eAAT,OAAO;AAClC,YAAO,iCACe,uCACV,WAAW,SACV,WAAW,OACb,WAAW,UACR,eACL,6BACa,sBAChB,+BACS,yCACE,iBAAW,QAAM,yBAChB,iBAAW,QAAM,cACZ,sBAAM,sMAGvB,+BAAgB,iEAChB,+BACS,+CACM,SAAc,SAAwB,gBAC1C,0CACkC,yCACrB,sBAChB,mBAAK,wBACM,AAAU,AAAS,SAAV,2BAAiC,kFACrD,gCAAiB,gEACjB,mBACE,6BACO,gEAEO,kBACa,iFAE7B,gCAAiB,gEACjB,+BACS,AAAY,WAAD,kBACX,mBACL;IAUpB;;gCAvDO;QACD;;IADC;AAEF,iDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyDP;;;;;;IAEA;;;;;;IACA;;;;;;IACM;;;;;;UAWO;AACxB,YAAO,qCACE,mBACA,0CACkC,kDACF,wCACnB;;AAChB,qDAAiB;AACjB,wCACE,oBACO,gEAEK,kBACa;AAG3B,qDAAiB;AACjB,0BAAG;AAAH;;;IAIR;;;QA7BM;QACC;QACU;QACA;QACA;;IAHV;IACU;IACA;IACA;AACZ,kDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4BP;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;UAYa;AAClB,sBAAkB,AAAY,eAAT,OAAO;AAClC,YAAO,2CACkC,yCACrB,sBAChB,mBACE,oBACO,wCACK,kBACa,iFAG3B,gCAAiB,gEACjB,wCACW,AAAS,mCACX,wCACkC,0CAC7B,sBACR,mBACE,uBACO,wCACK,mEAGd,+BAAgB,gEAChB,wDAES,oBAAK,AAAI,YAAG,OAAO,WAAM,mPAKxC,gCAAiB,gEACjB,mBAAkB,SAAX,aAAI,iBAAI,kBAAY,AAAU,SAAD;IAG1C;;;QA7CM;QACW;QACV;QACU;QACA;QACA;;IAJA;IACV;IACU;IACA;IACA;AACZ,qDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2CT;;;;;;IACQ;;;;;;IACA;;;;;;UAUO;AACxB,uBAAO,iBACD,yCACuC,kDACE,yCAC7B;;AAAC,wBAAG;AAAH;AAAgB,wBAAG;AAAH;;0EAE7B,sCACuC,kDACE,yCAC7B,sBACN,+BACS,yCACgC,kDACE,yCAC7B,wIAGd,+BACS,yCACgC,kDACE,yCAC7B;IAI5B;;yCAjCO;QACD;QACW;QACA;;IAHV;IAEU;IACA;AACZ,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiCD;;;;;;IACR;;;;;;UASe;AACxB,uBAAO,iBACD,wDAES,gCAAiB,sIAE1B,sCACuC,+CAC3B;IAEpB;;2CAhBO;QACD;QACC;;IAFA;IAEA;AACF,4DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiBP;;;;;;IACE;;;;;;UASW;AAClB,sBAAkB,AAAY,eAAT,OAAO;AAClC,YAAO,yDAEE,6BAAsB,sBAC3B,wDAES,kBACL,kBACM,oJAIV,+BAAgB,gEAChB,mBACE,oBACO,wCAAoB;IAInC;;;QA1BM;QACW;QACA;;IADA;IACA;AACZ,kDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2BD;;;;;;UAQO;AACxB,YAAO,+BACa;;AAChB,mBAAW,QAAS;AAClB,6EAES,yCACO,6CACqB,8BAAY,oBAChB,wCAAS,yCAG/B,mBACG,SAAN,KAAK,WACA,qCACS;;;IAO9B;;;QA3BM;QACC;;;AACF,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;IA6BD;;;;;;UAQO;AACxB,YAAO,2CACkC,kDACF,+CACnB;;AAChB,sCACE,oBACO,gEAEK,kBACa;AAG3B,mBAAW,OAAQ;AACjB,wCACE,AAAY,mBAAL,IAAI,WACJ,wCACK;;;IAKtB;;;QA3BM;QACC;;;AACF,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;IA6BP;;;;;;IACA;;;;;;IACF;;;;;;UAUe;;AAClB,wBAAiD,YAAnB,0BAAG,OAAO,gBAAV,OAAa,kBAAb,OAC1B,AAAY,AAAU,eAAnB,OAAO;AACV,kBAAQ,AAAW,UAAD,uBAAqC;AACjE,oBAAI;AACwC,QAA1C,QAAQ,AAAM,KAAD,kBAAwB;;AAEvC,YAAO,kDACE,cAAM,AAAO,mBAAK,UAAK,uCACvB,oBAAW,2BAAN,OAAS,0BAAY,KAAK;IAE1C;;8BAlBO;QACD;QACC;QACA;;IAHA;IAEA;IACA;AACF,+CAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBP;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACM;;;;;;IACF;;;;;;UAcS;AACxB,eAAO,KAAY,MAAmB;AACpC,sBAAI,AAAS,QAAD;AACV,gBAAO,8BACa,sBAChB,mBACa,SAAR,IAAI,IAAC,cACK,AACR,AACA,AACA,eAHW,OAAO,wCAGc,iFAEvC,8BACoB;;AAChB,gCAAG,6BAAK,QAAQ;AAAhB;;;;AAMR,gBAAgB;;;;AAIpB,eAAO,SAAgB,MAAa;AAClC,cAAO,+BACC,mCACoB,AAAY,AAAM,0BAAf,OAAO,4BAA2B,kBACnD,0BACR,kCACmB,SAAR,IAAI,IAAC,aACP,0CAAiC,wBAE1C,kCAAe,IAAI;;;AAM3B,YAAO,2CACkC,yCACrB,sBAChB,kCACS,qBACG,UACJ,eACF,oEAEN,gCAAiB,gEACjB,AAAQ,QAAA,CAAC,eAAe,mBACxB,AAAQ,QAAA,CAAC,QAAQ,YACjB,AAAQ,QAAA,CAAC,gBAAgB,AAAa,yBAAK,QAC3C,AAAI,IAAA,CAAC,SAAS;IAGpB;;;QAlEM;QACW;QACA;QACA;QACA;QACA;QACA;QACA;;IANA;IACA;IACA;IACA;IACA;IACA;IACA;AACZ,kDAAW,GAAG;;EAAC","file":"resume.ddc.js"}');
  // Exports:
  return {
    resume: resume
  };
});

//# sourceMappingURL=resume.ddc.js.map
