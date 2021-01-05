import React from 'react'
import "./TimeLine.css"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import {Typography} from '@material-ui/core'
const TimeLine = ({title,icon,children }) => {
    return (
        <div>
            <Timeline className="timeline">
            {/* ITEM HEADER */}
      <TimelineItem className="timeline-fitem">
        <TimelineSeparator>
          <TimelineDot className="timeline-fdot">
          {icon} 
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h6" className="timeline-header">{title} </Typography>
            </TimelineContent>
      </TimelineItem>
          {children}
      </Timeline>
            
    </div>
    )
};
export const Tmseperator=()=>(
   <>
   <TimelineSeparator className="separator-padding">
    <TimelineDot variant={'outlined'} className="timeline-dot"/>
    <TimelineConnector />
    </TimelineSeparator>
    </>
)

export default TimeLine
