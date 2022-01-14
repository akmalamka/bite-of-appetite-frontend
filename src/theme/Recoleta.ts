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
};

export default RecoletaAltRegular;
