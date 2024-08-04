import { getUsers } from "./index";

const testCases = [
    {
        name: 'Impaling Thrust',
        anim: 601_040000,
        siblings: [
            601_040200,
            601_040300,
            601_044200,
            601_045900
        ]
    },
    {
        name: 'Impaling Thrust Fists',
        anim: 601_044200,
        siblings: [
            601_040000,
            601_040200,
            601_040300,
            601_045900
        ]
    },
    {
        name: 'Impaling Thrust Dueling Shield',
        anim: 601_045900,
        siblings: [
            601_040000,
            601_040200,
            601_040300,
            601_044200
        ]
    },
    {
        name: 'Spinning Slash',
        anim: 603_040000,
        siblings: [
            601_040200,
            601_040300,
            601_042400,
            601_045800
        ]
    },
    {
        name: 'Spinning Slash Extension',
        anim: 603_040010,
        siblings: [
            601_040210,
            601_040310,
            601_042410,
            601_045810
        ]
    }
]

for (const testCase of testCases) {
    console.log(testCase.name, testCase.anim, getUsers(testCase.anim, testCase.siblings))
}