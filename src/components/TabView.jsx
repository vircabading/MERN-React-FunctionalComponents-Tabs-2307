import React, { useState } from 'react'

///////////////////////////////////////////////////
//  TAB VIEW COMPONENT
///////////////////////////////////////////////////

const TabView = (props) => {
    const [currentTab, setCurrentTab] = useState(props.currentTab);
    const tabs = props.tabs;

    return (
        <div className='bg-light-color m-2 p-2 round' >
            <h3>Tab View Component</h3>
            <br />
            <p>
                Current Tab: {JSON.stringify(currentTab)};
            </p>
            {
                tabs.map((tab, i) =>
                    <div>
                        <p>Location: {i}</p>
                        <p>Tab: {JSON.stringify(tab.label)}</p>
                    </div>
                )
            }
        </div>
    )
}

export default TabView;