import React from 'react'

const ContentView = (props) => {
    const currentTab = props.currentTab;
    const tabs = props.tabs;

    return (
        <div>
            <h3>Content</h3>
            <hr />
            <p>Current Tab: {JSON.stringify(currentTab)}</p>
        </div>
    )
}

export default ContentView;