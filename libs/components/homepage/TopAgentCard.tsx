import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const TopAgentCard = () => {
  return (
    <Stack className={"top-agent-card"}>
      <Box className={"agent-avatar"}>
        <img src="/img/profile/defaultUser.svg" alt="Top agent" />
      </Box>

      <Box className={"agent-info"}>
        <strong>Robert Fox</strong>
        <span>Real estate agent</span>
      </Box>

      <Box className={"agent-meta"}>
        <Box className={"rating"}>
          <StarIcon />
          <Typography>4.8</Typography>
        </Box>
        <Typography className={"property-count"}>12 properties</Typography>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;
