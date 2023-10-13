
import ApexCharts from 'apexcharts'
import { useEffect, useRef, useState } from 'react';

const ApplyChart = ({ data }) => {
    const chartRef = useRef(null);
    const [chart, setChart] = useState(null);

    const options = {
        series: [
            {
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            },
            {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41]
            }
        ],
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false,
                tools: {
                    download: false,
                },
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z"
            ]
        },
        yaxis: {
            show: false,
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    };

    useEffect(() => {
        if (chartRef.current) {
            if (chart) {
                chart.updateSeries([{ data: data }]);
            } else {
                const newChart = new ApexCharts(chartRef.current, options);
                newChart.render();
                setChart(newChart);
            }
        }
    }, [data]);
    return (
        <div ref={chartRef}></div>
    );
};

export default ApplyChart;