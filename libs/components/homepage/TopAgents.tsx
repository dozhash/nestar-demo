import React from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import TopAgentCard from "./TopAgentCard";

const topAgents = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  name: "Martin",
}));

const TopAgents = () => {
  return (
    <Stack className={"top-agents"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Agents</span>
            <p>Our Top Agents always ready to serve you</p>
          </Box>
          <Box className={"right"}>
            <div className={"more-box"}>
              <span>See All Agents</span>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className={"wrapper"}>
          <Box className={"switch-btn swiper-agents-prev"}>
            <WestIcon />
          </Box>
          <Box className={"card-wrapper"}>
            <Swiper
              className={"top-agents-swiper"}
              slidesPerView={"auto"}
              spaceBetween={44}
              navigation={{
                nextEl: ".swiper-agents-next",
                prevEl: ".swiper-agents-prev",
              }}
            >
              {topAgents.map((agent) => {
                return (
                  <SwiperSlide className={"top-agents-slide"} key={agent.id}>
                    <TopAgentCard name={agent.name} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Box className={"switch-btn swiper-agents-next"}>
            <EastIcon />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopAgents;
