import * as React from "react";
import SeekSlider from "@netless/seek-slider";
import "./App.less";

export type AppStates = {
    currentTime: number;
    progress: number;
    test: boolean;
};

export default class App extends React.Component<{}, AppStates> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            currentTime: 10,
            progress: 0,
            test: false,
        };
    }


    public componentDidMount(): void {
        setInterval(() => {
            this.setState({
                currentTime: this.state.currentTime < 11150 ? this.state.currentTime + 10 : 0,
            });
        }, 100);
        setInterval(() => {
            this.setState({
                progress: this.state.progress < 11150 ? this.state.progress + 20 : 0,
            });
        }, 100);
    }

    private getSlider(): React.ReactNode {
        return <SeekSlider
            fullTime={11150}
            thumbColor={"black"}
            bufferColor={"#D8D8D8"}
            sliderColor={"pink"}
            sliderHoverColor={"#E3E3E3"}
            currentTime={this.state.currentTime}
            bufferProgress={this.state.progress}
            onChange={(time: number, offsetTime: number) => {
                this.setState({
                    currentTime: time,
                });
            }}
            offset={0}
            limitTimeTooltipBySides={true}
            secondsPrefix="00:00:"
            minutesPrefix="00:"
        />;
    }

    public render(): React.ReactNode {
        return (
            <div className="container">
                <h1>React slider</h1>
                {this.getSlider()}
            </div>
        );
    }
}
