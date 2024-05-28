import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  const timelineData = [
    {
      Year: "2018 - 2019",
      title: "Matriculation",
      college: "Narayana Olympiad School",
      description: "Vijayawada, Andhra Pradesh, India",
      Grade: "10 CGPA",
      iconStyle: { background: 'rgba(178,121,216,.959)', color: '#fff' }
    },
    {
      Year: "2019 - 2021",
      title: "Intermediate",
      college: "Narayana Junior College",
      Grade: "95.3%",
      description: "Vijayawada, Andhra Pradesh, India",
      iconStyle: { background: 'rgba(178,121,216,.959)', color: '#fff' }
    },
    {
      Year: "2021 - present",
      title: "B.Tech, ECE",
      college: "LNM Institute of Information Technology",
      Grade: "7.97 CGPA",
      description: "Jaipur, Rajasthan, India",
      iconStyle: { background: 'rgba(178,121,216,.959)', color: '#fff' }
    },
  ];

  return (
    <VerticalTimeline lineColor='white'>
      {timelineData.map((element, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          date={element.Year}
          iconStyle={element.iconStyle}
          contentStyle={{ background: 'black', boxShadow: '0 0 0 0', borderRadius: '8px' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(178,121,216,.959)', transition: 'background 0s' }}
        >
          <h3 className="vertical-timeline-element-title font-semibold" style={{ color: 'rgba(178,121,216,.959)' }}>{element.college}</h3>
          <h3 className="vertical-timeline-element-subtitle font-semibold">{element.title}</h3>
          <h4 className="vertical-timeline-element-subtitle font-semibold">{element.Grade}</h4>
          <p className='font-semibold'>{element.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default App;
