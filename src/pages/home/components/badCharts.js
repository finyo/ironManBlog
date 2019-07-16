import * as React from 'react';
import { Chart, Tooltip, Coord, Legend, Pie, registerShape } from 'viser-react';

const data = [
  {
    type: '打起架来',
    value: 20,
  },
  {
    type: '激烈吵架',
    value: 18,
  },
  {
    type: '北极冷战',
    value: 32,
  },
  {
    type: '大受委屈',
    value: 15,
  },
  {
    type: '提起分手',
    value: 15,
  },
];

// 根据比例，获取两点之间的点
function getPoint(p0, p1, ratio) {
  return {
    x: (1 - ratio) * p0.x + ratio * p1.x,
    y: (1 - ratio) * p0.y + ratio * p1.y,
  };
}
const pointRatio = 0.7; // 设置开始变成三角形的位置 0.7

// 自定义 other 的图形，增加两条线
registerShape('interval', 'triangleShape', {
  draw: function draw(cfg, container) {
    let centerPoint = {
      x: cfg.points[3].x,
      y: (cfg.points[2].y + cfg.points[3].y) / 2,
    };
    centerPoint = this.parsePoint(centerPoint);

    const points = this.parsePoints(cfg.points);
    const tmpPoint1 = getPoint(points[0], points[3], pointRatio);
    const tmpPoint2 = getPoint(points[1], points[2], pointRatio);
    const path = [];
    path.push(['M', points[0].x, points[0].y]);
    path.push(['L', points[1].x, points[1].y]);
    path.push(['L', tmpPoint2.x, tmpPoint2.y]);
    path.push(['L', centerPoint.x, centerPoint.y]);
    path.push(['L', tmpPoint1.x, tmpPoint1.y]);
    path.push('Z');
    return container.addShape('path', {
      attrs: {
        fill: cfg.color,
        path: path,
        lineWidth: 0,
        stroke: 'white',
      },
    });
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit={true} height={500} data={data}>
        <Tooltip showTitle={false} />
        <Legend 
          dataKey="type" 
          offsetY={20}
          // 配置图例 marker 的显示样式，支持指定 point 
          // 几何标记支持的所有 shape(除去 'rect')：'circle', 'square', 'bowtie', 'diamond', 'hexagon', 'triangle', 'triangle-down', 'hollowCircle', 'hollowSquare', 'hollowBowtie', 'hollowDiamond', 'hollowHexagon', 'hollowTriangle', 'hollowTriangle-down', 'cross', 'tick', 'plus', 'hyphen', 'line'
          marker="square"
          textStyle= {{
            // textAlign: 'center', // 文本对齐方向，可取值为： start middle end
            fill: '#fff', // 文本的颜色
            fontSize: '14', // 文本大小
            // fontWeight: 'bold', // 文本粗细
            // rotate: 30, // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
            // textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
          }}
        />
        <Coord type="theta" radius={0.8} />
        <Pie position="value" color="type" shape="triangleShape" label={['type', {
            formatter: (val, item) => {
              return val + ': ' + item.point.value + '次';
            },
            textStyle: {
              fill: '#fff'
            }
          }]} />
      </Chart>
    );
  }
}
