import { Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/query";

const Home: NextPage = () => {
  const device = useDeviceDetect();

  const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getPropertiesError,
    refetch: getPropertiesRefetch,
  } = useQuery(GET_PROPERTIES, {
    fetchPolicy: "network-only",
    variables: {
      input: {
        page: 1,
        limit: 10,
        sort: "createdAt",
        direction: "DESC",
        search: {
          // "memberId": "69dd000950120993d06ad75b",
          // "locationList": ["SEOUL", "BUSAN"],
          // "pricesRange": {"start": 10000, "end": 100000}
        },
      },
    },
  });
  console.log("getPropertiesData => ", getPropertiesData);

  if (device === "mobile") {
    return <Stack>HOMEPAGE MOBILE</Stack>;
  } else {
    return (
      <Stack className={"home-page"}>
        <TrendProperties />
        <PopularProperties />
        <Advertisement />
        <TopProperties />
        <TopAgents />
      </Stack>
    );
  }
};

export default withLayoutMain(Home);
