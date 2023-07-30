import React from 'react'

const ContentView = (props) => {
    const currentTab = props.currentTab;
    const tabs = props.tabs;

    return (
        <div>
            {
                tabs.map((tab,i) =>
                    (i === currentTab) ?
                        <div>{tab.content}</div> :
                        <div></div>
                )
            }
        </div>
    )
}

export default ContentView;