import VisComponent from '../../VisComponent';
import vega from '../../util/vega';
import spec from './spec.json';

export default class ScatterPlot extends VisComponent {
  static get spec () {
    return {
      options: [
        {
          name: 'data',
          type: 'table',
          format: 'objectlist'
        },
        {
          name: 'x',
          type: 'string',
          format: 'text',
          domain: {
            mode: 'field',
            from: 'data',
            fieldTypes: ['date', 'number', 'integer', 'boolean']
          }
        },
        {
          name: 'y',
          type: 'string',
          format: 'text',
          domain: {
            mode: 'field',
            from: 'data',
            fieldTypes: ['date', 'number', 'integer', 'boolean']
          }
        },
        {
          name: 'size',
          type: 'string',
          format: 'text',
          optional: true,
          domain: {
            mode: 'field',
            from: 'data',
            fieldTypes: ['number', 'integer', 'boolean']
          }
        },
        {
          name: 'shape',
          type: 'string',
          format: 'text',
          optional: true,
          domain: {
            mode: 'field',
            from: 'data',
            fieldTypes: ['string', 'date', 'number', 'integer', 'boolean']
          }
        },
        {
          name: 'color',
          type: 'string',
          format: 'text',
          optional: true,
          domain: {
            mode: 'field',
            from: 'data',
            fieldTypes: ['string', 'date', 'number', 'integer', 'boolean']
          }
        },
        {
          name: 'hover',
          type: 'string_list',
          format: 'string_list',
          optional: true,
          domain: {
            mode: 'field',
            from: 'data',
            fieldTypes: ['string', 'date', 'number', 'integer', 'boolean']
          }
        }
      ]
    };
  }

  constructor (el, options) {
    super(el);
    this.options = options;
  }

  render () {
    this.chart = vega.parseChart(spec, this.el, this.options);
  }

  getSerializationFormats () {
    return ['png', 'svg'];
  }

  serialize (format) {
    if (!this.chart) {
      this.render();
    }
    return this.chart.then((vobj) => {
      return vobj.toImageURL(format);
    });
  }
}
