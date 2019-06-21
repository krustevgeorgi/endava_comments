export const editComment = (id, value) => ({
    id,
    value,
    type: 'EDIT_COMMENT'
});

export const addComment = (id, value, owner) => ({
    id,
    owner,
    value,
    type: 'ADD_COMMENT'
});

export const deleteComment = (id) => ({
    id,
    type: 'DELETE_COMMENT'
});

export const addUser = (username) => ({
    username,
    type: 'ADD_USERS'
});

export const setActiveUser = (username) => ({
    username,
    type: 'SET_ACTIVE_USER'
});