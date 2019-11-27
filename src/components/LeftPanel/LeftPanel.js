import React from 'react';
import './LeftPanel.scss';

const LeftPanel = (props) => {
    const leftMarkup = props.eventsData.map((event, index) => {
        const buttonClass = props.currentEventIndex === index ? 'active' : '';
        return (
            <button className={`event-button ${buttonClass}`} key={`event-${index}`} onClick={() => props.callBackHandler(index)}>
                {`Event ${index}`}
            </button>
        );
    });
    return (
        <div className='events-list-container'>
            { leftMarkup }
        </div>
    );
}

export default LeftPanel;