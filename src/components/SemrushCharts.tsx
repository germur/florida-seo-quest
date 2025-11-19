'use client';

import { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    LineController,
    PieController,
    DoughnutController,
    RadarController,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    LineController,
    PieController,
    DoughnutController,
    RadarController,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
    Filler
);

// Market Share Chart (Doughnut)
export function MarketShareChart() {
    const data = {
        labels: ['Semrush', 'Ahrefs', 'Moz', ['Other', 'Tools']],
        datasets: [{
            label: 'Market Share (Est.)',
            data: [40, 30, 15, 15],
            backgroundColor: ['#5E5CE6', '#007AFF', '#FF9F0A', '#FFD60A'],
            borderColor: '#ffffff',
            borderWidth: 2
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    font: { size: 12, family: 'Inter' },
                    color: '#333'
                }
            },
            tooltip: {
                enabled: true,
                titleFont: { family: 'Inter', weight: 'bold' as const },
                bodyFont: { family: 'Inter' },
            }
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto" style={{ height: '400px' }}>
            <Chart type="doughnut" data={data} options={options} />
        </div>
    );
}

// Sentiment Chart (Pie)
export function SentimentChart() {
    const data = {
        labels: ['Concerned', 'Expectant', 'Indifferent'],
        datasets: [{
            label: 'SEO Community Sentiment',
            data: [65, 25, 10],
            backgroundColor: ['#FF3B30', '#FF9F0A', '#BDBDBD'],
            borderColor: '#ffffff',
            borderWidth: 2
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    font: { size: 12, family: 'Inter' },
                    color: '#333'
                }
            },
            tooltip: {
                enabled: true,
                titleFont: { family: 'Inter', weight: 'bold' as const },
                bodyFont: { family: 'Inter' },
            }
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto" style={{ height: '400px' }}>
            <Chart type="pie" data={data} options={options} />
        </div>
    );
}

// Focus Radar Chart
export function FocusRadarChart() {
    const data = {
        labels: [
            ['Technical', 'SEO'],
            ['Link', 'Building'],
            ['Content', 'Marketing'],
            ['Enterprise', 'Integration'],
            ['Accessible', 'Pricing']
        ],
        datasets: [
            {
                label: 'Current Focus (Semrush)',
                data: [9, 8, 7, 3, 8],
                fill: true,
                backgroundColor: 'rgba(0, 122, 255, 0.2)',
                borderColor: '#007AFF',
                pointBackgroundColor: '#007AFF',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#007AFF'
            },
            {
                label: 'Feared Focus (Adobe)',
                data: [5, 4, 8, 9, 3],
                fill: true,
                backgroundColor: 'rgba(255, 59, 48, 0.2)',
                borderColor: '#FF3B30',
                pointBackgroundColor: '#FF3B30',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#FF3B30'
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    font: { size: 12, family: 'Inter' },
                    color: '#333'
                }
            },
            tooltip: {
                enabled: true,
                mode: 'index' as const,
                intersect: false,
                titleFont: { family: 'Inter', weight: 'bold' as const },
                bodyFont: { family: 'Inter' },
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                max: 10,
                grid: { color: '#ddd' },
                angleLines: { color: '#eee' },
                pointLabels: {
                    font: { size: 11, family: 'Inter', weight: 600 },
                    color: '#333'
                }
            }
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto" style={{ height: '400px' }}>
            <Chart type="radar" data={data} options={options} />
        </div>
    );
}

// Price Projection Chart (Bar)
export function PriceProjectionChart() {
    const data = {
        labels: [
            ['Pro Plan', '(Current)'],
            ['Pro Plan', '(Adobe Est.)'],
            ['Guru Plan', '(Current)'],
            ['Guru Plan', '(Adobe Est.)']
        ],
        datasets: [{
            label: 'Monthly Cost (USD)',
            data: [130, 250, 250, 500],
            backgroundColor: ['#007AFF', '#FF3B30', '#007AFF', '#FF3B30'],
            borderRadius: 4
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                titleFont: { family: 'Inter', weight: 'bold' as const },
                bodyFont: { family: 'Inter' },
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value: any) {
                        return '$' + value;
                    },
                    color: '#333'
                },
                grid: { color: '#eee' }
            },
            x: {
                ticks: { color: '#333' },
                grid: { display: false }
            }
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto" style={{ height: '400px' }}>
            <Chart type="bar" data={data} options={options} />
        </div>
    );
}
