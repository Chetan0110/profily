import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { detectImage } from '../actions';

/**
 * Profile component which displays button to choose file,
 * upload button to make API request to kairos face-detection API,
 * profile picture, Logout button, and details like age,gender,ethinicity etc
 * about the person in image
 */
class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFileEncodedName: null,
            uploadBtnText: 'Upload!',
            imageOpacity: "0.5"
        }
        this.uploadHandler = this.uploadHandler.bind(this);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
    }

    /**
     * On selection of the image, execution comes in this func.
     * Keep opacity less than one(here,0.5) to indicate that the
     * pic is not uploaded yet.
     * Set the file location path as encoded string into state
     */
    fileChangedHandler = (event) => {
        const that = this;
        if (event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                let profilePic = document.getElementById('profile_pic');
                profilePic.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);

            this.setState({ imageOpacity: '0.5' });
            //The hack because state is being set before 
            //result(encoded file path) is stored in the 
            //reader obj
            setTimeout(function () { that.setState({ selectedFileEncodedName: reader.result }); }, 500);
        }
    }

    /**
     * On click of Upload button, execution comes in this function.
     * Change the button text to something which shows that some procedure
     * is going on in the background.
     * Use the eoncoded file location path and call the action 
     * which will internally will call any face detection API
     * to get the data like age, gender, ethnicity etc
     */
    uploadHandler = (event) => {
        const that = this;

        //Wait till the state is set properly in the fileChangedHandler mathod
        setTimeout(function () { that.props.detectImage(that.state.selectedFileEncodedName); }, 1000);
        this.setState({ uploadBtnText: "Uploading..." });
    }

    /**
     * Change the upload button text again to Upload!
     * and set opacity of the image to full(1.0)
     */
    componentWillReceiveProps(nextProps) {
        this.setState({ uploadBtnText: 'Upload!', imageOpacity: "1.0" })
    }

    /**
     * Render method to construct the DOM
     * which is shown on the UI
     */
    render() {

        const { asian, black, hispanic, other, white } = this.props.user_data.attributes ?
            this.props.user_data.attributes : '';

        const ethnicityObj = { asian, black, hispanic, other, white };
        const ethnicityValue = [asian, black, hispanic, other, white].reduce((a, b) => Math.max(a, b));
        let ethnicity = Object.keys(ethnicityObj).find(key => ethnicityObj[key] === ethnicityValue);
        ethnicity = ethnicity ? ethnicity.substring(0, 1).toUpperCase() + ethnicity.substring(1, ethnicity.length) : '';

        return (
            <div>
                <h1 style={{ marginTop: "20px" }}>Profily App</h1>
                <div className="loginDiv">
                    <div className="col-sm-12" style={{ float: "left", position: "inline-block" }}>
                        <img id="profile_pic"
                            src=""
                            alt="Profile Pic"
                            style={{
                                marginTop: "20px",
                                marginLeft: "275px",
                                height: "100px",
                                width: "100px",
                                opacity: this.state.imageOpacity
                            }}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            className="btn btn-primary col-sm-8"
                            onChange={this.fileChangedHandler}
                            style={{
                                marginTop: '20px'
                            }}
                        />
                        <button
                            id="upload_button"
                            className="btn btn-success col-sm-4"
                            onClick={e => this.uploadHandler(e)}
                            style={{
                                marginTop: '20px',
                                height: "44px"
                            }}
                        >
                            {this.state.uploadBtnText}
                        </button>
                    </div>
                    <div className="col-sm-12"
                        style={{
                            marginTop: "250px",
                            display: this.props.user_data.attributes && this.props.user_data.attributes.age ? "block" : "none"
                        }}
                    >
                        <span className="col-sm-4">Age :</span>
                        <span className="col-sm-8">{this.props.user_data.attributes && this.props.user_data.attributes.age}</span>
                    </div>
                    <div className="col-sm-12"
                        style={{
                            marginTop: "10px",
                            display: this.props.user_data.attributes && this.props.user_data.attributes.gender.type ? "block" : "none"
                        }}>
                        <span className="col-sm-4">Gender :</span>
                        <span className="col-sm-8">
                            {
                                this.props.user_data.attributes && this.props.user_data.attributes.gender.type === 'M' ?
                                    'Male' : this.props.user_data.attributes && this.props.user_data.attributes.gender.type === 'F' ?
                                        'Female' : ''
                            }
                        </span>
                    </div>
                    <div className="col-sm-12"
                        style={{
                            marginTop: "10px",
                            display: this.props.user_data.attributes && this.props.user_data.attributes.age ? "block" : "none"
                        }}
                    >
                        <span className="col-sm-4">Ethnicity :</span>
                        <span className="col-sm-8">{ethnicity}</span>
                    </div>
                </div >
                <button
                    type="button"
                    className='btn btn-danger'
                    style={{ marginTop: "10px", marginLeft: "70%" }}
                >
                    <Link
                        to='/'
                        style={{ color: 'white', display: 'block', height: '100%' }}
                    >
                        Logout
                    </Link>
                </button>
            </div>
        );
    }
}

Profile.propTypes = {
    user_data: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        user_data: state.userData
    }
}

export default connect(mapStateToProps, {
    detectImage
})(Profile)
