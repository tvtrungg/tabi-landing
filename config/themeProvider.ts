import colors from "./colors";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  token: {
    //colors
    colorPrimary: colors["primary-dominant"],
    colorPrimaryTextHover: colors["primary-dominant-dark"],
    colorLinkHover: colors["primary-dominant-dark"],
    colorPrimaryTextActive: colors["primary-dominant-dark"],
    colorLink: colors["primary-dominant"],
    colorPrimaryText: colors["text-light"],
    colorText: colors["text-dark"],
    colorSuccess: colors["color-success"],
    colorError: colors["color-error"],

    //typo
    fontSizeHeading1: 40,
    fontSizeHeading2: 34,
    fontSizeHeading3: 28,
    fontSizeHeading4: 24,
    fontSizeHeading5: 20,
    fontSizeHeading6: 16,
    fontSize: 14,
    lineHeightHeading1: 48,
    lineHeightHeading2: 40,
    lineHeightHeading3: 36,
    lineHeightHeading4: 32,
    lineHeightHeading5: 28,
    lineHeightHeading6: 24,
    lineHeight: 1.5,
    fontWeightStrong: 600,
  },
  components: {
    Table: {
      rowHoverBg: colors["primary-dominant-lighter"],
      rowExpandedBg: colors["primary-dominant-lighter"],
      bodySortBg: colors["primary-dominant-lighter"],
      headerBg: colors["primary-dominant"],
      headerColor: colors["text-light"],
      headerSortActiveBg: colors["primary-dominant-light"],
      headerSortHoverBg: colors["primary-dominant-light"],
      headerSplitColor: colors["text-light"],
      rowSelectedBg: colors["primary-accent"],
      rowSelectedHoverBg: colors["primary-accent-light"],
    },
  },
};
