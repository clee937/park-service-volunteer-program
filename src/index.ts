import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  raccoonMeadowsVolunteers,
} from "./raccoon-meadows-log";

import {
  WolfPointVolunteers,
  WolfPointActivity,
  wolfPointVolunteers,
} from "./wolf-point-log";

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

const combineVolunteers = (
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) => {
  return volunteers.map((volunteer) => {
    let id = volunteer.id;
    if (typeof id === "string") {
      id = parseInt(id, 10);
    }
    return {
      id: id,
      name: volunteer.name,
      activities: volunteer.activities,
    };
  });
};

const isVerified = (verified: string | boolean) => {
  if (typeof verified === "string") {
    verified === "Yes" ? true : false;
  }
  return verified;
};

const getHours = (activity: CombinedActivity) => {
  return "hours" in activity ? activity.hours : activity.time;
};

function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {});

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

const combinedVolunteers = combineVolunteers(
  [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
);

console.log(combinedVolunteers);
