import React from 'react';
import ReactDOM from 'react-dom/server';
import Layout from '../common/Layout';

export default function renderer(html) {
    const serverHtml = ReactDOM.renderToString(<Layout />);
    const regex = /(<div id="root">)(<\/div>)/;
    return html.replace(regex, function(original, div1, div2) {
        return div1 + serverHtml + div2;
    });
}