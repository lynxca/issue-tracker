"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

function NewIssuePage() {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title">
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>Submit new issue</Button>
    </div>
  );
}

export default NewIssuePage;
