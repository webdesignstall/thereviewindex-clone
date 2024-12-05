'use client'

import { Card, CardContent } from "@/components/ui/card";
import React from "react";

// Data for the word cloud
const data = [
    { word: "monitor", value: 8.90761234131913 },
    { word: "monitor", value: 8.285513309079741 },
    { word: "five stars", value: 8.076204527239026 },
    { word: "great monitor", value: 7.755338812846501 },
    { word: "dell", value: 7.455876687491824 },
    { word: "dell", value: 7.422373700986824 },
    { word: "monitors", value: 7.266128779556451 },
    { word: "gaming", value: 7.1693500166706 },
    { word: "monitors", value: 6.60934924316738 },
    { word: "hdmi", value: 6.573680166960646 },
    { word: "screen", value: 6.548219102762372 },
    { word: "computer", value: 6.536691597591305 },
    { word: "price", value: 6.532334292222349 },
    { word: "brightness", value: 6.481577129276431 },
    { word: "amazon", value: 6.476972362889683 },
    { word: "picture quality", value: 6.464588303689961 },
    { word: "amazon", value: 6.439350371100098 },
    { word: "laptop", value: 6.437751649736401 },
    { word: "excellent monitor", value: 6.329720905522696 },
    { word: "screen", value: 6.253828811575473 },
    { word: "speakers", value: 6.234410725718371 },
    { word: "good monitor", value: 6.234410725718371 },
    { word: "great price", value: 6.226536669287466 },
    { word: "best monitor", value: 6.137727054086234 },
    { word: "work", value: 6.124683390894205 },
    { word: "nice monitor", value: 6.082218910376446 },
    { word: "great product", value: 6.07993319509559 },
    { word: "colors", value: 6.042632833682381 },
    { word: "computer", value: 6.023447592961033 },
    { word: "one", value: 6.0063531596017325 }
];

// Helper function to generate random color
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const WordCloud = () => {
    // Function to scale the font size based on value
    const getFontSize = (value: any) => {
        const minFontSize = 12; // Minimum font size
        const maxFontSize = 50; // Maximum font size
        const maxValue = Math.max(...data.map(item => item.value));
        const minValue = Math.min(...data.map(item => item.value));

        // Calculate the font size based on the value, with scaling
        const scale = (value - minValue) / (maxValue - minValue);
        return `${minFontSize + scale * (maxFontSize - minFontSize)}px`;
    };

    return (
        <Card title={'Word Cloud'} className={'h-[480px] flex items-center justify-center'}>
            <CardContent>
                <p className={'text-2xl'}>Word Cloud</p>
                <div className="flex flex-wrap gap-4 p-6 justify-center items-center">
                    {data.map((item, index) => (
                        <span
                            key={index}
                            className="text-center font-semibold transition-all duration-300 ease-in-out"
                            style={{
                                fontSize: getFontSize(item.value),
                                color: getRandomColor(), // Apply random color
                            }}
                        >
                            {item.word}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default WordCloud;
