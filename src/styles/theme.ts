import { lighten } from "polished";

const theme = {
  background: '#E5E5E5',
  backgroundSecondary: '#373737',

  blue: '#0F52BA',
  blueLight: `${lighten(0.05, '#0F52BA')}`,

  textLight: '#FFFFFF',

  textDark: '#000000',
  textDarkLight: `${lighten(0.05, '#000000')}`,

  shade: '#2C2C2C',
  border: '#BFBFBF',

  footer: '#EEEEEE',
};

export default theme;