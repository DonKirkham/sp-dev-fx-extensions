import * as React from "react";
import Ticker from "react-ticker";

import INewsTickerProps from "./INewsTickerProps";
import styles from "./NewsTicker.module.scss";
import Constants from "../helpers/Constants";

export default function NewsTicker(props: INewsTickerProps) {
    const [isMove, setIsMove] = React.useState(true);

    function generateNewsText(date: Date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    const itemStyle: React.CSSProperties = {
        margin: "0 5px",
    };
    const newsContainer: React.CSSProperties = {
        backgroundColor: props.bgColor ? props.bgColor : '#48c78e',
        color: props.textColor ? props.textColor : 'white',
        padding: '5px 0',
        fontSize: '16px'
    };
    return (
        <div
            id={Constants.ROOT_ID}
            onMouseEnter={() => {
                setIsMove(false);
            }}
            onMouseLeave={() => {
                setIsMove(true);
            }}
            style={newsContainer}
        >
            <Ticker move={isMove} speed={5}>
                {({ index }) => (
                    <>
                        {props.items &&
                            props.items.map((news) => (
                                <>
                                    <span style={itemStyle}>|</span>
                                    <span style={itemStyle}><b>{generateNewsText(news.publishDate)}</b>: {news.content}</span>
                                </>
                            ))}
                    </>
                )}
            </Ticker>
        </div>
    );
}
