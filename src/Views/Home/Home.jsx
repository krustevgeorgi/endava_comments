import React, { Component } from 'react';
import './styles.css'
import { Row, Col, Input, Button, Icon, Typography } from 'antd';
// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// React router
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'

// Custom
import { editComment, deleteComment, addComment } from '../../actions/index.js';
import Comment from '../../Components/Comment'
const { Title } = Typography;

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            comments: [],
            disable: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)
    }

    // Submits a comment to the global store
    submit(e) {
        e.preventDefault();
        this.setState({ disable: true, value: '' })
        this.props.addComment(+new Date(), this.state.value, this.props.activeUser.username)
    }

    // Verify that the comment input is between 1 and 100 chars 
    handleChange(e) {
        if (e.target.value.length > 100 || e.target.value.length === 0) {
            this.setState({ value: e.target.value, disable: true })
        } else {
            this.setState({ value: e.target.value, disable: false })
        }
    }

    render() {
        // If no user is set restrict access to the home page of the app
        if (Object.keys(this.props.activeUser).length === 0) {
            return <Redirect push to="/login" />;
        }

        return (
            <Row type="flex" justify="center">
                <Col xs={24} md={12} lg={8}>
                    <div className='homeWrapper'>
                        <div className='flexRow' style={{justifyContent: 'space-between', alignItems: 'center' }}>
                            <Title level={3}>{this.props.activeUser ? this.props.activeUser.username : null}</Title>
                            <Link to='/'>
                                <div className='editButton'>
                                    <Icon type="logout" />
                                </div>
                            </Link>
                        </div>

                        {/* Main comments input form */}
                        <form onSubmit={this.submit}>
                            <div className='actions flexRow'>
                                <Input
                                    type="text"
                                    placeholder="Place your comment..."
                                    value={this.state.value}
                                    name="commentInput"
                                    onChange={this.handleChange}
                                    style={{ marginRight: '10px' }}
                                />
                                <Button
                                    htmlType='submit'
                                    type='primary'
                                    disabled={this.state.disable}>Submit
                                </Button>
                            </div>
                        </form>

                        {/* Render only comments that are owned by the current active user */}
                        {
                            this.props.comments.filter(comment => {
                                return comment.owner === this.props.activeUser.username
                            }).map(comment => {
                                return < Comment key={comment.id} value={comment.value} id={comment.id} />
                            })
                        }
                    </div>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments,
        users: state.users,
        activeUser: state.activeUser
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editComment: editComment,
        deleteComment: deleteComment,
        addComment: addComment
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)