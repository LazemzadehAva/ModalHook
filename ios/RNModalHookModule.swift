//
//  RNModalHookModule.swift
//  RNModalHookModule
//
//  Copyright © 2022 Ava Lazemzadeh. All rights reserved.
//

import Foundation

@objc(RNModalHookModule)
class RNModalHookModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
