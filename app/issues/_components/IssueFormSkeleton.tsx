import { Box, Skeleton } from "@radix-ui/themes";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";


function IssueFormSkeleton() {
  return (
    <Box className="max-w-xl space-y-10">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </Box>
  );
}

export default IssueFormSkeleton;
