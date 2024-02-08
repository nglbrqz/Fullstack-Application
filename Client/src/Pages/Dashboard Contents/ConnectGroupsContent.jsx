import "./Dashboard Style/VolunteersContent.css";
import { useState } from "react";
import EventCard from "../Dashboard Contents/Dashboard Components/ConnectgroupCard";


const ConnectGroupsContent = () => {
  const hardcodedConnectgroupActivities = [
    { connectgroupActivityId: 1, 
      connectgroupActivityName: "Youth Connect",
      connectgroupActivityDescription: "See the Youth Connect participants.",
    },

    { connectgroupActivityId: 2, 
      connectgroupActivityName: "Jubilant Connect",
      connectgroupActivityDescription: "See the Jubilant Connect participants.",
    },

    { connectgroupActivityId: 3, 
      connectgroupActivityName: "Young Adults Connect",
      connectgroupActivityDescription: "See the Young Adults Connect participants.",
    },

    { connectgroupActivityId: 4, 
      connectgroupActivityName: "Couples Connect",
      connectgroupActivityDescription: "See the Couples Connect participants.",
    },
    
    { connectgroupActivityId: 5, 
      connectgroupActivityName: "Basketball",
      connectgroupActivityDescription: "See the Basketball participants.",
    },
  ];

  const [connectgroupActivities] = useState(hardcodedConnectgroupActivities);

  return (
    <>
      <div className="vp-header-container">
        <h1 className="vp-header-title">CONNECT GROUPS</h1>
      </div>
      <div className="vp-event-container">
        <div className="vp-header-wrapper">
          <h2 id="vp-events-heading">Choose an Event</h2>
        </div>
        <div className="vp-event-wrapper">
          {connectgroupActivities.map((connectgroupActivity) => (
              <EventCard key={connectgroupActivity.connectgroupActivityId} 
              connectgroupActivity={connectgroupActivity}
              connectgroupActivities={connectgroupActivities}
              />
          ))}
        </div>
      </div>

    </>
  );
};

export default ConnectGroupsContent;
