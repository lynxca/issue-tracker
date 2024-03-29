import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function IssueActions() {
  return (
    <div className="mb-2">
      <Button className="mb-5">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
}

export default IssueActions;
