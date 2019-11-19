import React from 'react';
import './RightPanel.scss';

function RightPanel(props) {
    const rightPaneMarkup = props.activeEventDetails.eventRightPaneList.map((eventUrl, index) => {
        return(
            <span className={`event-url ${index}`} key={`event-url-${index}`}>
                { eventUrl }
            </span>
        )
    });
    const tabsMarkup = <Tabs eventList={props.eventListArray} tabsCallBack={props.tabsHandler} tabsCloseHandler={props.tabsCloseHandler} eventIndex={props.activeEventDetails.currentEventIndex} />
    return (
        <div className='event-url-container'>
            <div className='tabs-container'>{ tabsMarkup }</div>
            { rightPaneMarkup }
        </div>
    )
}

function Tabs(props) {
    const tabsContent = props.eventList.map(eventIndex => {
        const buttonClickEvent = props.eventList.length === 1 ? {pointerEvents: 'none'} : {};
        const activeTabClass = props.eventIndex === eventIndex ? 'active' : '';
        return <button className={`event-tab ${eventIndex} ${activeTabClass}`} key={`event ${eventIndex}`} onClick={() => props.tabsCallBack(eventIndex)}>
            {`Tab for Event ${eventIndex}`}
            <button style={buttonClickEvent} className='close-tab' onClick={(e) => props.tabsCloseHandler(e, eventIndex)}>x</button>
        </button>
    });
    return tabsContent;
}

export default RightPanel;

