import { connect } from 'react-redux';
import { setAsyncMessageMockThunk } from '../../store/actions';

import Message from './MessageComponent';

export default connect(
    ({ app }) => ({
        message: app.asyncMessage,
    }),
    dispatch => ({
        updateMessage: (extraArgs) => dispatch(setAsyncMessageMockThunk("State preload failed")),
    })
)(Message);