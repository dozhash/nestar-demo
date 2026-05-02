import React from "react";
import { Box, Stack } from "@mui/material";

interface TopAgentCardProps {
  name: string;
}

const TopAgentCard = ({ name }: TopAgentCardProps) => {
  return (
    <Stack className={"top-agent-card"}>
      <Box className={"agent-avatar"}>
        <img src="/img/profile/girl.svg" alt={name} />
      </Box>

      <Box className={"agent-info"}>
        <strong>{name}</strong>
        <span>AGENT</span>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;
