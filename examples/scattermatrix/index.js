import candela from 'candela';
import 'candela/plugins/vega/load';

import showComponent from '../util/showComponent';
import { iris } from '../datasets';

window.onload = () => {
  showComponent(candela.components.ScatterPlotMatrix, {
    data: iris,
    fields: [
      'petalWidth',
      'petalLength',
      'sepalLength',
      'sepalWidth'
    ],
    color: 'species',
    width: 500,
    height: 500,
    renderer: 'svg'
  });
};
