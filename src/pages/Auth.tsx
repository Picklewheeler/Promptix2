import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Card } from "@/components/ui/card";
import { supabase } from '../lib/supabase'

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800">
      <Card className="w-[400px] p-6 space-y-4 shadow-xl">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome to Promptix</h1>
          <p className="text-sm text-muted-foreground">Sign in to continue</p>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: 'hsl(var(--primary))',
                  brandAccent: 'hsl(var(--primary))',
                },
              },
            },
            style: {
              button: {
                fontWeight: '600',
                borderRadius: '0.5rem',
                padding: '0.75rem 1rem',
              },
              input: {
                borderRadius: '0.5rem',
              },
              anchor: {
                color: 'hsl(var(--primary))',
              },
            },
          }}
          providers={['google', 'github']}
          redirectTo={`${window.location.origin}/dashboard`}
        />
      </Card>
    </div>
  );
}
