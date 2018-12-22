import React from 'react';

export default function NotFound({ staticContext }) {
    if (staticContext) {
        staticContext.notFound = true;
    }
    return (
        <div>Not found</div>
    );
}