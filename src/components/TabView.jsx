import React from 'react'

///////////////////////////////////////////////////
//  TAB VIEW COMPONENT
///////////////////////////////////////////////////

const TabView = (props) => {
    let currentTab = props.currentTab;
    const tabs = props.tabs;

    const setNewTab = (e, newTabLocation) => {
        console.log("*** in set new tab");
        console.log("new tab: ", newTabLocation);
        props.getNewTab(newTabLocation);
    }

    return (
        <div className='bg-light-color m-2 p-2 round' >
            {
                tabs.map((tab, i) =>
                    (i === currentTab) ?
                    <button     className='btn bg-highlight-button text-white m-2 p-2 round'
                    onClick={ (e)=>setNewTab(e, i) } 
                    key={i} >
                        <strong>{ tab.label }</strong>
                    </button> :
                    <button     className='btn bg-tab-button text-white m-2 p-2 round'
                                onClick={ (e)=>setNewTab(e, i) } 
                                key={i} >
                        <strong>{ tab.label }</strong>
                    </button>
                )
            }
        </div>
    )
}

export default TabView;