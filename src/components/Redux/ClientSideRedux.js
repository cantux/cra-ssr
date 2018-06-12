import { connect } from 'react-redux';
import { setClientMessage } from '../../store/actions';

import Message from './MessageComponent';

export default connect(
    ({ app }) => ({
        message: app.clientMessage,
    }),
    dispatch => ({
        updateMessage: (txt) => dispatch(setClientMessage(txt)),
    })
)(Message);