"use strict";
const common_vendor = require("../common/vendor.js");
let SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 0;
const getTitleBarHight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    let { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    return height + (top - getStatusBarHeight()) * 2;
  } else {
    return 40;
  }
};
const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHight();
const getLeftIconLeft = () => {
  return 0;
};
exports.getLeftIconLeft = getLeftIconLeft;
exports.getNavBarHeight = getNavBarHeight;
exports.getStatusBarHeight = getStatusBarHeight;
exports.getTitleBarHight = getTitleBarHight;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/system.js.map
