

import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts'
const YearBarChart = ({ newData }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: [
                {
                    name: 'Net Profit',
                    data: newData,
                },
                {
                    name: 'Revenue',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                },
                {
                    name: 'Free Cash Flow',
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
                },
            ],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false,
                    tools: {
                        download: false,
                    },
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: (val) => `$ ${val} thousands`,
                },
            },
        };

        if (chartRef.current) {
            const chart = new ApexCharts(chartRef.current, options);
            chart.render();
        }
    }, [newData]);

    return <div id="chart" ref={chartRef} />;
};


export default YearBarChart;
