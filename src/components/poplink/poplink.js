import React, { Component } from "react";
import "./poplink.css";


export class poplink extends Component {
    render() {
        return (
            <div className="poplink">
                <form action="" method="get" id='shortform'>
                    <label htmlFor="link" id='short-label'>Your Shortend Fet2-URL</label>
                    <div id='shortlinkcon'>
                        <input type="url" name="url" id="shortlink" readOnly />
                        <input value="copy" id='copylink' readOnly />
                    </div>
                    <div className="btns-shortform">
                        <a href="/" id='myurls'>My URLs</a>
                        <button className='details'>Detailed Stats</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default poplink;
