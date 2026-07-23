import ExtensionActivitiesClient from "./ExtensionActivitiesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extension Activities | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Extension Activities at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export default function Page() {
  return <ExtensionActivitiesClient />;
}
