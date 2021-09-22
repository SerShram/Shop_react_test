import React from 'react';

const Preloader = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             style="margin: auto; background-color: transparent; display: block; shape-rendering: auto;" width="50px"
             height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="translate(80,50)">
                <g transform="rotate(0)">
                    <circle cx="0" cy="0" r="10" fill="#1890ff" fill-opacity="1">
                        <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1"
                                          keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0"
                                 begin="-0.75s"></animate>
                    </circle>
                </g>
            </g>
            <g transform="translate(50,80)">
                <g transform="rotate(90)">
                    <circle cx="0" cy="0" r="10" fill="#1890ff" fill-opacity="0.75">
                        <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1"
                                          keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0"
                                 begin="-0.5s"></animate>
                    </circle>
                </g>
            </g>
            <g transform="translate(20,50.00000000000001)">
                <g transform="rotate(180)">
                    <circle cx="0" cy="0" r="10" fill="#1890ff" fill-opacity="0.5">
                        <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1"
                                          keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0"
                                 begin="-0.25s"></animate>
                    </circle>
                </g>
            </g>
            <g transform="translate(49.99999999999999,20)">
                <g transform="rotate(270)">
                    <circle cx="0" cy="0" r="10" fill="#1890ff" fill-opacity="0.25">
                        <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1"
                                          dur="1s" repeatCount="indefinite"></animateTransform>
                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0"
                                 begin="0s"></animate>
                    </circle>
                </g>
            </g>
        </svg>
    );
};

export default Preloader;