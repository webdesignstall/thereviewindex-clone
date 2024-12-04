'use client';
import React, { useEffect } from 'react';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface PieChartProps {}

const PieChartWithAnimation: React.FC<PieChartProps> = () => {
  useEffect(() => {
    (function (H: typeof Highcharts) {
      // Custom fan-like animation
      // @ts-ignore
      H.wrap(H.seriesTypes.pie.prototype, 'animate', function (proceed, init) {
        // @ts-ignore
        const series = this;
        const chart = series.chart;
        const points = series.points || [];
        const animation = series.options.animation;
        const startAngleRad = series.startAngleRad || 0;

        function fanAnimate(point: Highcharts.Point, startAngle: number) {
          const graphic = point.graphic;
          const args = point.shapeArgs;

          if (graphic && args) {
            graphic
                .attr({
                  start: startAngle,
                  end: startAngle,
                  opacity: 0,
                })
                .animate(
                    {
                      start: args.start,
                      end: args.end,
                      opacity: 1,
                    },
                    {
                      duration: (animation as any)?.duration / points.length || 500,
                    },
                    function () {
                      if (points[point.index + 1]) {
                        fanAnimate(points[point.index + 1], args.end);
                      }

                      // On last point, finalize animation
                      if (point.index === points.length - 1) {
                        series.dataLabelsGroup?.animate({ opacity: 1 });
                        chart.update({
                          plotOptions: {
                            pie: {
                              innerSize: '40%',
                              borderRadius: 8,
                            },
                          },
                        });
                        series.update(
                            { enableMouseTracking: true },
                            false
                        );
                      }
                    }
                );
          }
        }

        if (init) {
          // @ts-ignore
          points.forEach((point) => {
            if (point.graphic) {
              point.graphic.attr({ opacity: 0 });
            }
          });
        } else {
          fanAnimate(points[0], startAngleRad);
        }
      });
    })(Highcharts);
  }, []);

  const options: Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },
    tooltip: {
      headerFormat: '',
      pointFormat:
          '<span style="color:{point.color};">\u25cf</span> {point.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    title: undefined,
    plotOptions: {
      pie: {
        borderColor: 'transparent',
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b><br>{point.percentage:.1f}%',
          distance: 20,
          style: {
            textOutline: 'none',
            fontWeight: 'normal',
            color: 'gray',
          },
        },
        animation: {
          duration: 2000,
        },
      },
    },
    series: [
      {
        type: 'pie',
        // @ts-ignore
        colorByPoint: true,
        enableMouseTracking: true,
        animation: {
          duration: 2000,
        },
        data: [
          { name: 'Positive', y: 66.0, color: '#1AAE9F' },
          { name: 'Neutral', y: 7.2, color: '#e4e4e7' },
          { name: 'Negative', y: 26.6, color: '#D3455B' },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChartWithAnimation;




