import * as React from 'react';
import {
  Chart,
  Coord,
  registerShape,
  Tooltip,
  StackInterval,
  Legend,
} from 'viser-react';

const data = [
  {
    type: '一同学习',
    value: 8,
  },
  {
    type: '开黑游戏',
    value: 8,
  },
  {
    type: '在家做饭',
    value: 12,
  },
  {
    type: '运动健身',
    value: 6,
  },
  {
    type: '牵手旅游',
    value: 3,
  },
  {
    type: '外出大餐',
    value: 10,
  },
];

// 根据比例，获取两点之间的点
function getPoint(p0, p1, ratio) {
  return {
    x: (1 - ratio) * p0.x + ratio * p1.x,
    y: (1 - ratio) * p0.y + ratio * p1.y,
  };
}

const pointRatio = 0.7; // 设置开始变成圆弧的位置 0.7
// 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
const sliceNumber = 0.005;

// 自定义 other 的图形，增加两条线
registerShape('interval', 'platelet', {
  draw: function draw(cfg, container) {
    cfg.points[1].y = cfg.points[1].y - sliceNumber;
    cfg.points[2].y = cfg.points[2].y - sliceNumber;
    let centerPoint = {
      x: cfg.points[3].x,
      y: (cfg.points[2].y + cfg.points[3].y) / 2,
    };
    centerPoint = this.parsePoint(centerPoint);
    const points = this.parsePoints(cfg.points);
    const path = [];
    const tmpPoint1 = getPoint(points[0], points[3], pointRatio);
    const tmpPoint2 = getPoint(points[1], points[2], pointRatio);
    path.push(['M', points[0].x, points[0].y]);
    path.push(['L', tmpPoint1.x, tmpPoint1.y]);
    path.push(['Q', points[3].x, points[3].y, centerPoint.x, centerPoint.y]);
    path.push(['Q', points[2].x, points[2].y, tmpPoint2.x, tmpPoint2.y]);
    path.push(['L', points[1].x, points[1].y]);
    path.push(['z']);
    return container.addShape('path', {
      attrs: {
        fill: cfg.color,
        path: path,
      },
    });
  },
});

export default class App extends React.Component {
  // var itemDetails = {
  //   一同学习: '一起学'
  // }
  render() {
    return (
      <Chart height={500} forceFit={true} padding={[90, 0]} data={data}>
        <Tooltip 
         itemTpl={ 
          '<li data-index={index} style="border-bottom:4px solid {color};width:120px;">'
            + '<p>{name}: {value} 次</p>'
            + '<p></p>'
            + '</li>'
          }
         showTitle={false} />
        <Legend 
          // 需要显示字段的key值
          dataKey="type" 
          // 图标偏移位置
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
        <Coord type="theta" />
        <StackInterval
          position="value"
          color="type"
          shape="platelet"
          label={['type', {
            formatter: (val, item) => {
              return val + ': ' + item.point.value + '次';
            },
            textStyle: {
              fill: '#fff'
            }
          }]}
        />
      </Chart>
    );
  }
}
