import React, { Component } from 'react';
import './styles.css'
import { Icon, Popover, Input, Button, Popconfirm } from 'antd'

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Custom
import { editComment, deleteComment } from '../../actions/index.js';

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            value: '',
            disable: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.updateComment = this.updateComment.bind(this)
    }

    hide = () => {
        this.setState({
            visible: false,
        });
    };

    handleVisibleChange = visible => {
        this.setState({ visible });
    };

    // Verify if comments are between 1 and 100 chars
    handleChange(e) {
        if (e.target.value.length > 100 || e.target.value.length === 0) {
            this.setState({ value: e.target.value, disable: true })
        } else {
            this.setState({ value: e.target.value, disable: false })
        }
    }

    // Updates a comment by id
    updateComment(e) {
        this.props.editComment(this.props.id, this.state.value)
        this.setState({ value: '', disable: true, visible: false })
    }

    render() {
        return (
            <div className='commentWrapper'>
                <p className='commentText'>{this.props.value}</p>
                <div clasName="actionButtons" style={{ display: 'flex', flexDirection: 'row' }}>

                    {/* Popover to handle the editting of comments */}
                    <Popover
                        content={
                            <div className='flexRow'>
                                <Input
                                    type="text"
                                    placeholder="Place your comment..."
                                    value={this.state.value}
                                    name="commentInput"
                                    onChange={this.handleChange}
                                    style={{ marginRight: '10px' }}
                                />
                                <Button onClick={() => this.updateComment()} type='primary' disabled={this.state.disable}>Submit</Button>
                            </div>
                        }
                        title="Edit comment"
                        trigger="click"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                    >
                        <div className='editButton'>
                            <Icon type='edit' />
                        </div>
                    </Popover>

                    {/* Prompt to confirm the delition of comments */}
                    <Popconfirm
                        placement="bottom"
                        title={'Are you sure you want to delete this comment?'}
                        onConfirm={() => this.props.deleteComment(this.props.id)}
                        okText="Yes"
                        cancelText="No">
                        <div className='editButton'>
                            <Icon type='close' />
                        </div>
                    </Popconfirm>

                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editComment: editComment,
        deleteComment: deleteComment
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Comment);