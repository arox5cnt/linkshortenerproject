import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Link2, BarChart3, LayoutDashboard, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Link2,
    title: "Instant Link Shortening",
    description:
      "Paste any long URL and get a clean, shareable short link in seconds. No setup required.",
  },
  {
    icon: BarChart3,
    title: "Click Analytics",
    description:
      "See exactly how many times each link has been clicked so you know what resonates.",
  },
  {
    icon: LayoutDashboard,
    title: "Centralized Dashboard",
    description:
      "All your shortened links in one place. Edit, disable, or delete them at any time.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Redirects",
    description:
      "Our infrastructure routes visitors to your destination instantly, every time.",
  },
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center gap-8 px-4 py-28 text-center">
        <h1 className="max-w-2xl text-5xl font-bold tracking-tight leading-tight">
          Shorten links.{" "}
          <span className="text-muted-foreground">Track clicks.</span>{" "}
          Stay in control.
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
          The simplest way to create short, memorable links and understand your
          audience. Free to get started.
        </p>
        <div className="flex gap-3">
          <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
            <Button size="lg" className="h-11 px-6 text-base">
              Get started free
            </Button>
          </SignUpButton>
          <SignInButton mode="modal" forceRedirectUrl="/dashboard">
            <Button variant="outline" size="lg" className="h-11 px-6 text-base">
              Sign in
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-28">
        <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight">
          Everything you need to manage your links
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-muted">
                  <Icon className="size-5 text-foreground" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 px-4 py-20 text-center">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">
          Ready to shorten your first link?
        </h2>
        <p className="mb-8 text-muted-foreground">
          Join today and start creating short links in seconds.
        </p>
        <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
          <Button size="lg" className="h-11 px-8 text-base">
            Create your free account
          </Button>
        </SignUpButton>
      </section>
    </div>
  );
}
