import React from "react";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../scetions/aboutusSections/SecondaryNav";
import LeaderShipTitle from "../../scetions/leadershipSections/LeaderShipTitle";
import TeamLayoutOne from "../../scetions/leadershipSections/TeamLayoutOne";
import DarkFooter from '../../components/footer/DarkFooter'

export default function LeadershipTeam() {
  return (
    <>
      <Headers />
      <LeaderShipTitle />
      <SecondaryNav/>
      <TeamLayoutOne/>
      <DarkFooter/>
    </>
  );
}
