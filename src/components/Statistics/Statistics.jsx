import React from 'react';
import {
    ComposedChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

const Statistics = () => {

    const assignmentMarks = [
        {
            id: 1,
            name: "Assignment 1",
            marks: 57
        },
        {
            id: 2,
            name: "Assignment 2",
            marks: 53
        },
        {
            id: 3,
            name: "Assignment 3",
            marks: 60
        },
        {
            id: 4,
            name: "Assignment 4",
            marks: 30
        },
        {
            id: 5,
            name: "Assignment 5",
            marks: 53
        },
        {
            id: 6,
            name: "Assignment 6",
            marks: 53
        },
        {
            id: 7,
            name: "Assignment 7",
            marks: 60
        },
        {
            id: 8,
            name: "Assignment 8",
            marks: 42
        }
    ];
    return (
        <div>
            <ComposedChart
                width={1400}
                height={400}
                data={assignmentMarks}
            >
                <Area dataKey="marks"></Area>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid></CartesianGrid>
            </ComposedChart>
        </div>
    );
};

export default Statistics;