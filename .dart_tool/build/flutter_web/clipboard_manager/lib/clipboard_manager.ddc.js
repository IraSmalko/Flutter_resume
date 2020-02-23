define(['dart_sdk', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const clipboard_manager = Object.create(dart.library);
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "clipboard_manager"
      });
    }
  });
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C2;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C1;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C0;
  clipboard_manager.ClipboardManager = class ClipboardManager extends core.Object {
    static copyToClipBoard(text) {
      return async.async(core.bool, function* copyToClipBoard() {
        let result = (yield clipboard_manager.ClipboardManager._channel.invokeMethod(core.bool, "copyToClipBoard", new (IdentityMapOfString$String()).from(["text", text])));
        return result;
      });
    }
  };
  (clipboard_manager.ClipboardManager.new = function() {
    ;
  }).prototype = clipboard_manager.ClipboardManager.prototype;
  dart.addTypeTests(clipboard_manager.ClipboardManager);
  dart.setLibraryUri(clipboard_manager.ClipboardManager, "package:clipboard_manager/clipboard_manager.dart");
  dart.defineLazy(clipboard_manager.ClipboardManager, {
    /*clipboard_manager.ClipboardManager._channel*/get _channel() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/clipboard_manager/clipboard_manager", {
    "package:clipboard_manager/clipboard_manager.dart": clipboard_manager
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["clipboard_manager.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2BAQ6C;AAAR;AACtB,sBAAS,MAAM,AAAS,oEAAa,mBACjC,yCACb,QAAO,IAAI;AAEb,cAAO,OAAM;MACf;;;;;EACF;;;;MAV6B,2CAAQ","file":"clipboard_manager.ddc.js"}');
  // Exports:
  return {
    clipboard_manager: clipboard_manager
  };
});

//# sourceMappingURL=clipboard_manager.ddc.js.map
