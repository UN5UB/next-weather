import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchInput from "./SearchInput";
import { locate, search } from "@/app/utils/icons";

const SearchDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex justify-center gap-4 py-5">
          <div>{search}</div>
          <p>Search for places...</p>
          <div className="pl-8">{locate}</div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Set Location</DialogTitle>
        <SearchInput />
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
