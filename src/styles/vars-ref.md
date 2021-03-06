# eBay DS6 Vars

[skin/src/less/variables/ds6 at master · eBay/skin · GitHub](https://github.com/eBay/skin/tree/master/src/less/variables/ds6)

## Brand Colors

https://raw.githubusercontent.com/eBay/skin/master/src/less/variables/ds6/color-variables.less

// Yellow
@color-y1: #fcf2bd;
@color-y2: #f7e376;
@color-y3: #fbcd25;
@color-y4: #f7b100;
@color-y5: #e58c02;
@color-y6: #aa5404;
@color-y7: #592e13;

// Orange
@color-o1: #ffdec7;
@color-o2: #feb786;
@color-o3: #ff8559;
@color-o4: #ff6932;
@color-o5: #db3c07;
@color-o6: #b03005;
@color-o7: #5c1b05;

// Red
@color-r1: #ffd1dd;
@color-r2: #ffa2b6;
@color-r3: #ff6383;
@color-r4: #e62048;
@color-r5: #c4003a;
@color-r6: #a00739;
@color-r7: #680226;

// Magenta
@color-m1: #fad8f0;
@color-m2: #f5a0d9;
@color-m3: #ea5fbc;
@color-m4: #d11da4;
@color-m5: #a60d8a;
@color-m6: #82187c;
@color-m7: #500750;

// Blue
@color-b1: #c5e5fb;
@color-b2: #93c9ff;
@color-b3: #659eff;
@color-b4: #3665f3;
@color-b4-dark-mode: #5192ff;
@color-b5: #382aef;
@color-b6: #2b0eaf;
@color-b7: #121258;

// Teal
@color-t1: #c2f2ef;
@color-t2: #71e3e2;
@color-t3: #1dcbca;
@color-t4: #02a2ac;
@color-t5: #01718f;
@color-t6: #0e4a6c;
@color-t7: #003147;

// Green
@color-g1: #ccfdce;
@color-g2: #9ef4a6;
@color-g3: #5ee471;
@color-g4: #36cf57;
@color-g5: #1bab49;
@color-g6: #05823f;
@color-g7: #07522c;

// Lime
@color-l1: #f4fabe;
@color-l2: #e9f577;
@color-l3: #c9e43b;
@color-l4: #accf02;
@color-l5: #86b300;
@color-l6: #4b7d06;
@color-l7: #364f03;

// Grey
@color-white: #fff;
@color-white-dark-mode: #dcdcdc;
@color-grey1: #f5f5f5;
@color-grey2: #e5e5e5;
@color-grey3: #c7c7c7;
@color-grey4: #a2a2a2;
@color-grey5: #767676;
@color-grey6: #41413f;
@color-black: #111820;
@color-black-dark-mode: #171717;

```
// PRODUCT COLORS
@color-text-default: @color-black;
@color-text-default-dark-mode: @color-white-dark-mode;
@color-text-secondary: @color-grey5;
@color-text-disabled: @color-grey3;
@color-image-border: @color-grey2;
@color-divider: @color-grey2;
@color-background-default: @color-white;
@color-background-default-dark-mode: @color-black-dark-mode;

@color-action-secondary: @color-grey5;
@color-action-primary: @color-b4;
@color-action-hover: @color-b6;
@color-action-visited: @color-m6;
@color-action-destroy: @color-r4;
@color-link-default: @color-action-primary;
@color-link-hover: @color-action-hover;
@color-link-visited: @color-action-visited;
@color-link-default-dark-mode: @color-b4-dark-mode;

@color-information-background: #f1f8fe; // secret colour
@color-information-text: @color-b4;
@color-information-icon: @color-b4;
@color-confirmation-background: #effef0; // secret colour
@color-confirmation-text: @color-g6;
@color-confirmation-icon: @color-g4;
@color-confirmation-border: @color-g4;
@color-attention-background: #fff5f8; // secret colour
@color-attention-text: @color-r4;
@color-attention-icon: @color-r4;

// MISC (candidates for deprecation)
@color-item-tile-background-visited: @color-grey1;
@color-button-disabled-background: @color-grey3;
@color-disabled: @color-grey3;
@color-star: @color-y4;
@color-badge-text: @color-white;
@color-badge-background: @color-r4;
@color-control-outline: @color-grey5;

// deprecated in v9.5 (remove in v11)
@color-badge: @color-badge-background;
@color-critical-background: @color-r1;
@color-critical-text: @color-r4;
@color-warning-background: @color-y1;

```

## Typography

[skin/typography-variables.less at master · eBay/skin · GitHub](https://github.com/eBay/skin/blob/master/src/less/variables/ds6/typography-variables.less)

```
// typography common to ds4 & ds6

@font-family-default: Arial, sans-serif;

@marketsans-url: "https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/";
@marketsans-fontname: "Market Sans";
@marketsans-filename-regular: "MarketSans-Regular-WebS";
@marketsans-filename-bold: "MarketSans-SemiBold-WebS";

@font-size-12: 0.75rem;
@font-size-16: 1rem;

@font-size-12: 0.75rem;
@font-size-13: 0.8125rem;
@font-size-14: 0.875rem;
@font-size-16: 1rem;
@font-size-18: 1.125rem;
@font-size-20: 1.25rem;
@font-size-24: 1.5rem;
@font-size-30: 1.875rem;
@font-size-36: 2.25rem;

@font-size-giant-2: @font-size-36;
@font-size-giant-1: @font-size-30;
@font-size-large-2: @font-size-24;
@font-size-large-1: @font-size-20;
@font-size-medium: @font-size-16;
@font-size-regular: @font-size-14;
@font-size-small: @font-size-12;

@font-family-custom: @marketsans-fontname, @font-family-default;

@font-size-10: 0.6125rem;
@font-size-22: 1.375rem;
@font-size-26: 1.625rem;
@font-size-28: 1.75rem;
@font-weight-bold: 700;
@font-weight-medium: @font-weight-bold;
@font-weight-regular: 500;

@typography-bold-text-font-weight: @font-weight-bold;
@typography-secondary-text-color: @color-text-secondary;
@typography-emphasis-color: @color-critical-text;
@typography-negative-color: @color-critical-text;
@typography-positive-color: @color-confirmation-text;
@typography-disabled-text-color: @color-disabled;
```
