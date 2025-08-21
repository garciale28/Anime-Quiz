import React, { useMemo, useState } from 'react';

function MultipleChoice(props) {
    const options = [];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const quote = useMemo(() => {
        return props.data.data[getRandomInt(props.data.data.length)];
    }, [props.data.data]);

    for (let i = 0; i < 4; i++) {
        options.push(props.charData[getRandomInt(45)]);
    }
    options[getRandomInt(4)] = quote.character;

    console.log(quote);
    console.log(options);

    return (
        <div>
            <h1>{quote.quote}</h1>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input
                            id="list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                            htmlFor="list-radio-license"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            {options[0]}
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input
                            id="list-radio-id"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                            htmlFor="list-radio-id"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            {options[1]}
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input
                            id="list-radio-military"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                            htmlFor="list-radio-military"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            {options[2]}
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input
                            id="list-radio-passport"
                            type="radio"
                            value=""
                            name="list-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                            htmlFor="list-radio-passport"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            {options[3]}
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default MultipleChoice;
