import React from "react";
import { Link } from "react-router-dom";

export default function PreStep() {
  return (
    <div>
      <Link to='/resume'>Start Resume</Link>
      <Link to='/cv'>Start CV</Link>
    </div>
  );
}
