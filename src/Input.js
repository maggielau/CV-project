import React from "react";
import Preview from "./Preview";
import uniqid from "uniqid";

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                basic: {name: '', occupation: '', phone: '', email: '', location: '', desc: '', theme:'blue'},
                edu: [
                    {degree:'', school:'', start:'', end:'', desc:'', key:'1'}, 
                ],
                work: [
                    {position:'', company:'', start:'', end:'', desc:'', key:'1'},
                ],
        };

        this.fillDemo = this.fillDemo.bind(this);
        this.handleBasicChange = this.handleBasicChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.handleEduChange = this.handleEduChange.bind(this);
        this.renderEdu = this.renderEdu.bind(this);
        this.addEdu = this.addEdu.bind(this);
        this.delEdu = this.delEdu.bind(this);
        this.handleWorkChange = this.handleWorkChange.bind(this);
        this.renderWork = this.renderWork.bind(this);
        this.addWork = this.addWork.bind(this);
        this.delWork = this.delWork.bind(this);


    }


    fillDemo(e) {
        e.preventDefault();
        this.setState({edu: 
            [...this.state.edu, 
                {degree:'', school:'', start:'', end:'', desc:'', key:uniqid()}]
            });
        this.setState({work: 
            [...this.state.work, 
                {position:'', company:'', start:'', end:'', desc:'', key:uniqid()}],
            });

        this.setState(prevState => {
            let state = {...prevState};
            state.basic.name ='Jane Doe';
            state.basic.occupation ='Design Engineer';
            state.basic.phone ='555-555-1234';
            state.basic.email ='janedoe@hello.com';
            state.basic.location ='Toronto, ON';
            state.basic.desc ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique cursus eleifend. Donec nulla erat, lacinia et suscipit eu.';
            state.edu[0].degree = 'M.A.Sc. Industrial Engineering';
            state.edu[0].school = 'University of Someplace';
            state.edu[0].start = 'Sep 2016';
            state.edu[0].end = 'Apr 2017';
            state.edu[0].desc = 'Integer eget dolor nec sapien volutpat accumsan. Praesent tincidunt euismod mauris gravida porta. Integer feugiat lobortis quam eget scelerisque. Vestibulum gravida malesuada dolor, vitae semper augue ultrices eget. Morbi vel feugiat quam.';
            state.edu[0].key = '0';
            state.edu[1].degree = 'B.A.Sc. Mechanical Engineering';
            state.edu[1].school = 'University of Somewhere';
            state.edu[1].start = 'Sep 2010';
            state.edu[1].end = 'Apr 2014';
            state.edu[1].desc = 'Fusce sed ante eros. Duis pharetra eros venenatis mauris pretium, et tincidunt ante vehicula. Donec sit amet diam volutpat, dapibus erat at, pellentesque tellus. Mauris eu maximus neque, ut posuere mi.';
            state.edu[1].key = '1';
            state.work[0].position = 'Sr. Design Engineer';
            state.work[0].company = 'Flying Automotive Inc.';
            state.work[0].start = 'Sep 2017';
            state.work[0].end = 'Current';
            state.work[0].desc = 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec diam sem, ultricies ut neque et, aliquam iaculis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pharetra purus in urna malesuada elementum. Sed id blandit ligula. Aliquam tellus sapien, posuere id luctus gravida, mollis non elit. Quisque felis lacus, aliquet quis ligula maximus, pharetra vulputate arcu. Sed dignissim diam at nunc facilisis fermentum.';
            state.work[0].key = '0';
            state.work[1].position = 'Mechanical Engineer';
            state.work[1].company = 'Automotive Co.';
            state.work[1].start = 'May 2014';
            state.work[1].end = 'Aug 2017';
            state.work[1].desc = 'Aliquam erat volutpat. Praesent tincidunt sapien eu cursus semper. Duis porttitor erat id convallis dictum. Phasellus porta risus sed orci placerat bibendum. Vestibulum quam massa, fringilla ac lobortis at, mattis sed eros. Vestibulum mattis consequat condimentum. Nam vestibulum tempus mollis. Donec fringilla leo et felis viverra, ut venenatis neque tristique. Donec convallis quam nec lectus dictum, id euismod est sagittis. Curabitur viverra velit ut ullamcorper dictum. Sed non risus metus. Integer ultricies odio urna, facilisis viverra eros vulputate a. Ut a ornare lacus, pretium porta eros. ';
            state.work[1].key = '1';


            return {state};
        });
    }

    handleBasicChange(e) {
        this.setState(prevState => {
            let basic = {...prevState.basic};
            basic[e.target.name]= e.target.value;
            return {basic};
        });
    }

    handleThemeChange(e) {
        this.setState(prevState => {
            let basic = {...prevState.basic};
            basic["theme"]= e.target.value;
            this.changeThemeColor(e.target.value);
            return {basic};
        });
    }

    changeThemeColor(color) {
        const root = document.querySelector(':root');

        if (color === 'blue') {
            root.style.setProperty('--mainColour', 'rgb(0, 36, 104)');
            root.style.setProperty('--accent1', 'rgb(28, 80, 179)');
            root.style.setProperty('--accent2', 'rgb(42, 132, 235)');
        }
        else if (color === 'red') {
            root.style.setProperty('--mainColour', '#A13333');
            root.style.setProperty('--accent1', '#461111');
            root.style.setProperty('--accent2', '#B3541E');
        }
        else if (color === 'green') {
            root.style.setProperty('--mainColour', '#5F7A61');
            root.style.setProperty('--accent1', '#444941');
            root.style.setProperty('--accent2', '#7FC8A9');
        }
        else if (color === 'grey') {
            root.style.setProperty('--mainColour', '#424242');
            root.style.setProperty('--accent1', '#9A9483');
            root.style.setProperty('--accent2', '#AAA492');
        }


    }

    handleEduChange(e) {
        let index = e.target.id;
        let key = e.target.name;
        this.setState(prevState => {
            let edu = [...this.state.edu];
            edu[index][key] = e.target.value;   
            return {edu};
        });
    }

    handleWorkChange(e) {
        let index = e.target.id;
        let key = e.target.name;
        this.setState(prevState => {
            let work = [...this.state.work];
            work[index][key] = e.target.value;   
            return {work};
        });
    }



    renderEdu(){

        const eduList = this.state.edu;

        return eduList.map((edu, index) => 
            <div className="edu" id={edu.key} key={edu.key}>
                <label>Degree/Diploma:</label>
                <input type="text" id={index} name="degree" placeholder="Mechanical Engineering" value={this.state.edu[index].degree} onChange={this.handleEduChange}></input>
                <label>School/Institution:</label>
                <input type="text" id={index} name="school" placeholder="University of Somewhere" value={this.state.edu[index].school} onChange={this.handleEduChange}></input>
                <label>Start date:</label>
                <input type="text" id={index} name="start" placeholder="Sept 2010" value={this.state.edu[index].start} onChange={this.handleEduChange}></input>
                <label>End date:</label>
                <input type="text" id={index} name="end" placeholder="Apr 2014" value={this.state.edu[index].end} onChange={this.handleEduChange}></input>
                <label>Description:</label>
                <textarea id={index} name="desc" rows="4" placeholder="Enter a brief description about your education." value={this.state.edu[index].desc} onChange={this.handleEduChange}></textarea>
                <button id={edu.key} onClick={this.delEdu} className="delButton">Delete</button>
            </div>
            );
    }

    renderWork(){

        const workList = this.state.work;

        return workList.map((work, index) => 
            <div className="work" id={work.key} key={work.key}>
                <label>Position:</label>
                <input type="text" id={index} name="position" placeholder="Mechanical Engineer" value={this.state.work[index].position} onChange={this.handleWorkChange}></input>
                <label>Company:</label>
                <input type="text" id={index} name="company" placeholder="Automotive Co." value={this.state.work[index].company} onChange={this.handleWorkChange}></input>
                <label>Start date:</label>
                <input type="text" id={index} name="start" placeholder="May 2014" value={this.state.work[index].start} onChange={this.handleWorkChange}></input>
                <label>End date:</label>
                <input type="text" id={index} name="end" placeholder="Current" value={this.state.work[index].end} onChange={this.handleWorkChange}></input>
                <label>Description:</label>
                <textarea id={index} name="desc" rows="4" placeholder="Enter a brief description about your role." value={this.state.work[index].desc} onChange={this.handleWorkChange}></textarea>
                <button id={work.key} onClick={this.delWork} className="delButton">Delete</button>
            </div>
            );
    }


    addEdu(e) {
        e.preventDefault();
        this.setState({edu: 
            [...this.state.edu, 
                {degree:'', school:'', start:'', end:'', desc:'', key:uniqid()}]
            });
    }

    addWork(e) {
        e.preventDefault();
        this.setState({work: 
            [...this.state.work, 
                {position:'', company:'', start:'', end:'', desc:'', key:uniqid()}],
            });
    }


    delEdu(e) {
        e.preventDefault();
        let newEduList = this.state.edu.filter(item => item.key !== e.target.id)
        this.setState({edu: newEduList});
    }

    delWork(e) {
        e.preventDefault();
        let newWorkList = this.state.work.filter(item => item.key !== e.target.id)
        this.setState({work: newWorkList});
    }




    render () {
        return (
            <div id="container">
                <div id="InputContainer">
                    <h1>Welcome!</h1>
                    <p>Please input your information below to build your resume.</p>
                    <button id="demo" onClick={this.fillDemo} className="demoButton">Demo</button>
                    <div className="themeInput">
                        <h2>Theme</h2>
                        <label htmlFor="theme">Select your resume theme colours:</label>
                        <select name="themeColors" id="theme" value={this.state.basic.theme} onChange={this.handleThemeChange}>
                            <option value="blue">Big Boss Blue</option>
                            <option value="red">Employed Ember</option>
                            <option value="green">Promoted Pistachio</option>
                            <option value="grey">Guaranteed Greyscale</option>
                        </select>
                    </div>
                    <div className="basicInput">
                        <h2>Basic Information</h2>
                        <label>Name:</label>
                        <input type="text" name="name" placeholder="Jane Doe" value={this.state.basic.name} onChange={this.handleBasicChange}></input>
                        <label>Occupation:</label>
                        <input type="text" name="occupation" placeholder="Design Engineer" value={this.state.basic.occupation} onChange={this.handleBasicChange}></input>
                        <label>Phone Number:</label>
                        <input type="text" name="phone" placeholder="555-555-1234" value={this.state.basic.phone} onChange={this.handleBasicChange}></input>
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="yourname@hello.com" value={this.state.basic.email} onChange={this.handleBasicChange}></input>
                        <label>Location:</label>
                        <input type="text" name="location" placeholder="Toronto, ON" value={this.state.basic.location} onChange={this.handleBasicChange}></input>
                        <label>Description:</label>
                        <textarea name="desc" rows="4" placeholder="Enter a brief description/blurb about yourself." value={this.state.basic.desc} onChange={this.handleBasicChange}></textarea>
                    </div>
                    <div className="Education">
                        <h2>Education</h2>
                        {this.renderEdu()}
                        <button id="addEdu" onClick={this.addEdu} className="addButton">Add Education</button>
                    </div>
                    <div className="Work">
                        <h2>Work Experience</h2>
                        {this.renderWork()}
                        <button id="addWork" onClick={this.addWork} className="addButton">Add Work Experience</button>
                    </div>
                </div>
                <Preview data={this.state}/>
            </div>
        );
    }
}

export default Input;
