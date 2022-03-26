import React from "react";

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    displayEdu() {
        return this.props.data.edu.map((edu, index) =>
            <div key={index} id={edu.key} className="eduItem">
                <div className="itemRow">
                    <div>
                        <h5>{edu.degree}</h5>
                        <h6>{edu.school}</h6>
                    </div>
                    <div className="itemDates">{edu.start} - {edu.end}</div>
                </div>
                <p>{edu.desc}</p>
            </div>
        );
    }

    displayWork() {
        return this.props.data.work.map((work, index) =>
            <div key={index} id={work.key} className="workItem">
                <div className="itemRow">
                    <div>
                        <h5>{work.position}</h5>
                        <h6>{work.company}</h6>
                    </div>
                    <div className="itemDates">{work.start} - {work.end}</div>
                </div>
                <p>{work.desc}</p>
            </div>
        );
    }

    render () {
        return (
            <div id="PreviewContainer">
                <div id="preview">
                    <div id="header">
                        <div id="headerName">
                            <h3>{this.props.data.basic.name}</h3>
                            <p id="headerOcc">{this.props.data.basic.occupation}</p>
                        </div>
                        <div id="headerInfo">
                            <div className="headerRow">
                                <div><svg xmlns="http://www.w3.org/2000/svg" className="headerIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                                <div>{this.props.data.basic.phone}</div>
                            </div>
                            <div className="headerRow">
                                <div><svg xmlns="http://www.w3.org/2000/svg" className="headerIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                                <div>{this.props.data.basic.email}</div>
                            </div>
                            <div className="headerRow">
                                <div><svg xmlns="http://www.w3.org/2000/svg" className="headerIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg></div>
                                <div>{this.props.data.basic.location}</div>
                            </div>
                        </div>
                    </div>
                    <div id="headerDesc">
                        <p>{this.props.data.basic.desc}</p>
                    </div>
                    <hr></hr>
                    <h4>Education</h4>
                    {this.displayEdu()}
                    <br></br>
                    <hr></hr>
                    <h4>Work Experience</h4>
                    {this.displayWork()}
                </div>
            </div>
        );
    }
}

export default Preview;