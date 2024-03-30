import { Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function newIssuePageLoading() {
  return (
    <Box className="max-w-xl space-y-10">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </Box>
  );
}

export default newIssuePageLoading;
