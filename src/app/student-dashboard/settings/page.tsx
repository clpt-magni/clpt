import { UserProfile } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-primary/10 rounded-2xl text-primary">
          <Settings size={32} />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-primary-dark font-poppins">Account Settings</h1>
          <p className="text-slate-500">Manage your profile and change your security credentials.</p>
        </div>
      </div>

      <div className="grid gap-8">
        <Card className="border-none shadow-2xl bg-white rounded-[40px] overflow-hidden">
          <CardHeader className="bg-slate-50 border-b p-8">
            <CardTitle className="text-xl font-bold font-poppins text-primary-dark">Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex justify-center py-8">
               <UserProfile 
                 routing="hash"
                 appearance={{
                   elements: {
                     rootBox: "w-full shadow-none border-none",
                     card: "shadow-none border-none w-full",
                     navbar: "hidden",
                     pageScrollBox: "p-8",
                     headerTitle: "hidden",
                     headerSubtitle: "hidden"
                   }
                 }}
               />
            </div>
          </CardContent>
        </Card>

        <div className="bg-amber-50 border border-amber-200 p-8 rounded-[32px] flex items-start gap-6">
          <div className="p-2 bg-amber-100 rounded-lg text-amber-600 font-bold text-xl">!</div>
          <div>
            <h3 className="text-amber-900 font-bold mb-2">Password Security Tip</h3>
            <p className="text-amber-800/80 text-sm leading-relaxed">
              For better security, we recommend choosing a password that is at least 12 characters long and includes a mix of uppercase letters, numbers, and special symbols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
