import AudioVisualClient from "./AudioVisualClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audio Visual | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Audio Visual facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <AudioVisualClient />;
}
