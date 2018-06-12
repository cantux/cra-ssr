import { connect } from 'react-redux';
import { setPreloadedMessage } from '../../store/actions';

import Message from './MessageComponent';

export default connect(
    ({ app }) => ({
        message: app.preloadedMessage,
    }),
    dispatch => ({
        updateMessage: (txt) => dispatch(setPreloadedMessage(txt)),
    })
)(Message);