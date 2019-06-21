import React, { Component } from 'react';
import './styles.css'
import { Modal, Input, Button } from 'antd';

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// React router
import { Redirect } from 'react-router';

// Custom
import { setActiveUser, addUser } from '../../actions/index.js';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            visible: true,
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    showModal = () => {
        this.setState({ visible: true, username: '' });
    };

    handleOk = e => {
        // Check if username enteres
        if(this.state.username === ''){
            alert('You must enter a username!')
            return
        }

        // If user does not exist, add him to store
        if (!this.props.users.includes(this.state.username)) {
            this.props.addUser(this.state.username)
        }
        this.props.setActiveUser(this.state.username)
        this.setState({ visible: false, username: '', redirect: true });
    };

    handleCancel = e => {
      this.setState({ visible: false, username: '', redirect: true });
    };

    switchUser = user => {
        this.props.setActiveUser(user)
        this.setState({ visible: false, username: '', redirect: true });
    };

    handleChange(e) {
        this.setState({ username: e.target.value })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/app" />;
        }

        return (
            <div>
                <Modal
                    title="Enter your name"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >

                    <Input
                        type="text"
                        placeholder="Please enter your name here..."
                        value={this.state.username}
                        name="commentInput"
                        onChange={this.handleChange}
                    />

                    {/* If any users exist render a quick access button for each user */}
                    {
                        this.props.users !== undefined && this.props.users.length !== 0
                            ? this.props.users.map(user =>
                                <Button
                                    style={{ marginRight: '10px', marginTop: '10px' }}
                                    onClick={this.switchUser.bind(this, user)}>{user}
                                </Button>
                            )
                            : null
                    }
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setActiveUser: setActiveUser,
        addUser: addUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)