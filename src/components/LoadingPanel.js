import React from "react";
import ReactLoading from "react-loading";

export class LoadingPanel extends React.Component {

    render = () => {
        return <ReactLoading type="spin" color="#fcba03" />
    }
}

export default LoadingPanel;