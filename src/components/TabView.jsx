import React, { useState } from 'react'

///////////////////////////////////////////////////
//  TAB VIEW COMPONENT
///////////////////////////////////////////////////

const TabView = (props) => {
    const [curerentTab, setCurerentTab] = useState(props.currentTab);

    return (
        <div>
            <h3>Tab View Component</h3>
            <br />
            <p>
                Current Tab: {JSON.stringify(curerentTab)};
            </p>
        </div>
    )
}

export default TabView;