import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary: 'bg-primary hover:bg-primary-dark text-sm normal-case',
          },
        }}
        signUpUrl="/sign-up"
        fallbackRedirectUrl="/student-dashboard"
      />
    </div>
  );
}
