const transparent = 'transparent';
const current = 'currentColor';
const black = '#000000';
const white = '#FFFFFF';

const whiteAlpha = {
  50: 'rgba(255, 255, 255, 0.04)',
  100: 'rgba(255, 255, 255, 0.06)',
  200: 'rgba(255, 255, 255, 0.08)',
  300: 'rgba(255, 255, 255, 0.16)',
  400: 'rgba(255, 255, 255, 0.24)',
  500: 'rgba(255, 255, 255, 0.36)',
  600: 'rgba(255, 255, 255, 0.48)',
  700: 'rgba(255, 255, 255, 0.64)',
  800: 'rgba(255, 255, 255, 0.80)',
  900: 'rgba(255, 255, 255, 0.92)',
};
const blackAlpha = {
  50: 'rgba(0,0,0 0.04)',
  100: 'rgba(0,0,0 0.06)',
  200: 'rgba(0,0,0 0.08)',
  300: 'rgba(0,0,0 0.16)',
  400: 'rgba(0,0,0 0.24)',
  500: 'rgba(0,0,0 0.36)',
  600: 'rgba(0,0,0 0.48)',
  700: 'rgba(0,0,0 0.64)',
  800: 'rgba(0,0,0 0.80)',
  900: 'rgba(0,0,0 0.92)',
};

const blacks = {
  50: 'hsla(0, 0%, 95%, 1)',
  100: 'hsla(0, 0%, 86%, 1)',
  200: 'hsla(0, 0%, 77%, 1)',
  300: 'hsla(0, 0%, 68%, 1)',
  400: 'hsla(0, 0%, 59%, 1)',
  500: 'hsla(0, 0%, 50%, 1)',
  600: 'hsla(0, 0%, 40%, 1)',
  700: 'hsla(0, 0%, 30%, 1)',
  800: 'hsla(0, 0%, 20%, 1)',
  900: 'hsla(0, 0%, 0%, 1)',
};

const gray = {
  50: '#F7FAFC',
  100: '#EDF2F7',
  200: '#E2E8F0',
  300: '#CBD5E0',
  400: '#A0AEC0',
  500: '#718096',
  600: '#4A5568',
  700: '#2D3748',
  800: '#1A202C',
  900: '#171923',
};

const red = {
  50: '#FFF5F5',
  100: '#FED7D7',
  200: '#FEB2B2',
  300: '#FC8181',
  400: '#F56565',
  500: '#E53E3E',
  600: '#C53030',
  700: '#9B2C2C',
  800: '#822727',
  900: '#63171B',
};

const orange = {
  50: '#FFFAF0',
  100: '#FEEBC8',
  200: '#FBD38D',
  300: '#F6AD55',
  400: '#ED8936',
  500: '#DD6B20',
  600: '#C05621',
  700: '#9C4221',
  800: '#7B341E',
  900: '#652B19',
};

const yellow = {
  50: '#FFFFF0',
  100: '#FEFCBF',
  200: '#FAF089',
  300: '#F6E05E',
  400: '#ECC94B',
  500: '#D69E2E',
  600: '#B7791F',
  700: '#975A16',
  800: '#744210',
  900: '#5F370E',
};

const green = {
  50: '#F0FFF4',
  100: '#C6F6D5',
  200: '#9AE6B4',
  300: '#68D391',
  400: '#48BB78',
  500: '#38A169',
  600: '#2F855A',
  700: '#276749',
  800: '#22543D',
  900: '#1C4532',
};

const blue = {
  50: '#F0F3F3',
  100: '#ECEFEF',
  200: '#E7EBEC',
  300: '#E2E7E8',
  400: '#DDE3E4',
  500: '#B9C5C7',
  600: '#96A8AB',
  700: '#728A8E',
  800: '#56686B',
  900: '#394547',
};

const lightGreen = {
  50: '#E4EADD',
  100: '#DBE3D2',
  200: '#D1DCC7',
  300: '#C8D5BB',
  400: '#C0CFB1',
  500: '#A4BA8E',
  600: '#89A56C',
  700: '#6D8853',
  800: '#52663E',
  900: '#37442A',
};

const cream = {
  50: '#F9F7F6',
  100: '#F7F5F3',
  200: '#F5F2F0',
  300: '#F3EFED',
  400: '#F0ECE9',
  500: '#D5CAC1',
  600: '#BAA799',
  700: '#9E8471',
  800: '#796352',
  900: '#514237',
};

const crimson = {
  50: '#C88D97',
  100: '#B66875',
  200: '#9B4B58',
  300: '#753842',
  400: '#4F262D',
  500: '#442127',
  600: '#391B20',
  700: '#2D161A',
  800: '#221013',
  900: '#170B0D',
};

const pink = {
  50: '#F5E6EA',
  100: '#F2DEE3',
  200: '#EED5DC',
  300: '#EBCDD5',
  400: '#E7C3CC',
  500: '#D699A8',
  600: '#C56D83',
  700: '#AF4660',
  800: '#833448',
  900: '#582330',
};

const colors = {
  black,
  white,
  transparent,
  current,
  blackAlpha,
  whiteAlpha,
  blacks,
  gray,
  red,
  orange,
  yellow,
  green,
  lightGreen,
  blue,
  cream,
  crimson,
  pink,
  primary: lightGreen,
  secondary: blue,
  tertiary: cream,
  lightAccent: pink,
  darkAccent: crimson,
};

export default colors;
