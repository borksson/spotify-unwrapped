import React, { ChangeEvent } from "react";
import { Select } from "@chakra-ui/react";
import { TimeFrame } from "../api/SpotifyFacade";

interface TimeFrameDropdownProps {
  value: TimeFrame;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const TimeFrameDropdown: React.FC<TimeFrameDropdownProps> = ({ value, onChange }) => {
  return (
    <Select value={value} onChange={onChange} margin={"5px"} bg="blackAlpha.800">
      <option value={TimeFrame.long_term}>Long Term</option>
      <option value={TimeFrame.medium_term}>Medium Term</option>
      <option value={TimeFrame.short_term}>Short Term</option>
    </Select>
  );
};

export default TimeFrameDropdown;