import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <SignUp 
        appearance={{
          elements: {
            formButtonPrimary: 'bg-primary hover:bg-primary-dark text-sm normal-case',
          },
        }}
        signInUrl="/sign-in"
        fallbackRedirectUrl="/student-dashboard"
      />
    </div>
  );
}
