import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Box, Container, Stack } from "@mui/material";

const PropertDetail = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>PROPERTY DETAIL MOBILE</Stack>;
  } else {
    return <Container>PROPERTY DETAIL</Container>;
  }
};

export default withLayoutBasic(PropertDetail);
