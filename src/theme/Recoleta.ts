import RecoletaAltRegularEot from 'fonts/Recoleta/RecoletaAlt-Regular.eot';
import RecoletaAltRegularTtf from 'fonts/Recoleta/RecoletaAlt-Regular.ttf';
import RecoletaAltRegularWoff from 'fonts/Recoleta/RecoletaAlt-Regular.woff';
import RecoletaAltRegularWoff2 from 'fonts/Recoleta/RecoletaAlt-Regular.woff2';

const RecoletaAltRegular = {
  fontFamily: 'Recoleta Alt',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `local('Recoleta Alt Regular'), 
  local('Recoleta-Alt-Regular'),
  url(${RecoletaAltRegularEot}),
  url(${RecoletaAltRegularWoff}) format('woff'),
  url(${RecoletaAltRegularWoff2}) format('woff2'),`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF UTF-8',
};

export default RecoletaAltRegular;
