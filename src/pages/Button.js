import React from "react";
import { RxLightningBolt } from "react-icons/rx";
import { BiBrain } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { LiaFacebookMessenger } from "react-icons/lia";

function Button(props) {
  function getColour() {
    switch (props.title) {
      case "Reaction":
        return "text-primary-light-red bg-rose-50";
      case "Memory":
        return "text-primary-orangey-yellow bg-amber-50";
      case "Verbal":
        return "text-primary-green-teal bg-teal-50";
      case "Visual":
        return "text-primary-cobalt-blue bg-indigo-50";
    }
  }
  function getIcon() {
    switch (props.title) {
      case "Reaction":
        return reactionIcon;
      case "Memory":
        return memoryIcon;
      case "Verbal":
        return verbalIcon;
      case "Visual":
        return visualIcon;
    }
  }

  const memoryIcon = <BiBrain />;
  const reactionIcon = <RxLightningBolt />;
  const visualIcon = <AiOutlineEye />;
  const verbalIcon = <LiaFacebookMessenger />;

  const colour = getColour();
  const icon = getIcon();

  return (
    <button
      className={`flex justify-between w-60 rounded-md  ${colour} px-4 py-3 mb-3 text-sm font-semibold`}
    >
      <a>{icon}</a>
      {props.title} <a> </a> <a> </a>
      <p className="text-gray-400 ">
        <a className="text-black">{props.score} </a>/ 100{" "}
      </p>
    </button>
  );
}

export default Button;
