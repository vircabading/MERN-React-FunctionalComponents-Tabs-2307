import React from 'react'

const ContentView = (props) => {
    const currentTab = props.currentTab;
    const tabs = props.tabs;

    return (
        <div>
            {
                tabs.map((tab,i) =>
                    (i === currentTab) ?
                        <div key={i} >{tab.content}</div> :
                        <div key={i} ></div>
                )
            }
        </div>
    )
}

export default ContentView;