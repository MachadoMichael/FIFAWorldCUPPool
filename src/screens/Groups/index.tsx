import { useState } from "react";

import { DataSelectorButton } from "../../components/DataSelectorButton";
import { TabsButton } from "../../components/TabsButton";
import { Teambox } from "../../components/Teambox";
import { Title } from "../../components/Title";
import { Container, GroupsInterface } from "./styles";

import { WorldCupGroupsData } from "../../WorldCupData/WorldCupGroupsData";

export function Groups() {
  const [selectedGroup, setSelectedGroup] = useState("GroupA");

  const stringArrayGroups = [
    "GroupA",
    "GroupB",
    "GroupC",
    "GroupD",
    "GroupE",
    "GroupF",
    "GroupG",
    "GroupH",
  ];

  return (
    <Container>
      <TabsButton />
      <DataSelectorButton
        selectedData={selectedGroup}
        setSelectedData={setSelectedGroup}
        data={stringArrayGroups}
      />
      <Title text={selectedGroup} />
      <GroupsInterface>
        {WorldCupGroupsData.map((groupData) => {
          if (groupData.name === selectedGroup) {
            let GroupOrderForPoints = groupData.teams.sort((x, y) => {
              if (y.points === x.points) {
                return y.goalDifference - x.goalDifference;
              } else {
                return y.points - x.points;
              }
            });

            return GroupOrderForPoints.map((team) => {
              return (
                <Teambox
                  key={team.id}
                  teamName={team.id}
                  points={team.points}
                  type={
                    team === GroupOrderForPoints[0] ||
                    team === GroupOrderForPoints[1]
                      ? "DARK"
                      : "LIGHT"
                  }
                />
              );
            });
          }
        })}
      </GroupsInterface>
    </Container>
  );
}
