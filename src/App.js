import React, { useState } from 'react';
import LeftPanel from './components/LeftPanel/LeftPanel';
import RightPanel from './components/RightPanel/RightPanel';
import { data } from './services/EventsData';
import './App.scss';

function App() {
    
	const leftPaneCallBack = (index) => {
        const eventAlreadyPresent = eventList.includes(index);
        const updatedEventsList = eventAlreadyPresent ? eventList : [...eventList, index];
        const eventRightPaneList = data.events[index].data.map((datum => datum.url));
        setCurrentEventIndex(index);
        setEventList(updatedEventsList);
        setEventRightPaneList(eventRightPaneList);
    };

    const tabsCallBack = (index) => {
        const eventRightPaneList = data.events[index].data.map(datum => datum.url);
        setCurrentEventIndex(index);
        setEventRightPaneList(eventRightPaneList);
    }

    const tabsOnClose = (event, index) => {
        event.stopPropagation();
        const eventListLength = eventList.length;
        let updatedIndex = 0;
        if(eventList.indexOf(index) + 1 === eventListLength) {
            updatedIndex = eventList.indexOf(index) - 1;
        }
        else if(eventList.indexOf(index) < eventListLength) {
            updatedIndex = eventList.indexOf(index) + 1;
        }
        const currentEventIndex = eventList[updatedIndex];
        const updatedEventList = eventList.filter(eventIndex => eventIndex !== index);
        const eventRightPaneList = data.events[currentEventIndex].data.map(datum => datum.url)
        setCurrentEventIndex(currentEventIndex);
        setEventRightPaneList(eventRightPaneList);
        setEventList(updatedEventList);
    }

    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const defaultEventList = [currentEventIndex];
    const [eventList, setEventList] = useState(defaultEventList);
    const defaultEventRightPaneList = data.events[currentEventIndex].data.map(datum => datum.url);
    const [eventRightPaneList, setEventRightPaneList] = useState(defaultEventRightPaneList);
	return (
		<div className='Events-App'>
			<div className='events-data-container'>
				<div className='header-container'>Events Details</div>
                <div className='events-details-container'>
                    <LeftPanel eventsData={data.events} currentEventIndex={currentEventIndex} callBackHandler={leftPaneCallBack} />
                    <div className='vertical-divider'></div>
                    <RightPanel activeEventDetails={{eventRightPaneList, currentEventIndex}} eventListArray={eventList} tabsHandler={tabsCallBack} tabsCloseHandler={tabsOnClose} />
                </div>
			</div>
		</div>
	)
}

export default App;
