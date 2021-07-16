import React from 'react';
import { withRouter } from 'react-router';
import ToonmoaAdd from './ToonmoaAdd';

function ToonmoaAddContainer({ history }) {
    console.log(history);
    const moveLink = (href) => {
        history.push(href);
    }

    return <ToonmoaAdd moveLink={moveLink} />
}

export default withRouter(ToonmoaAddContainer);
