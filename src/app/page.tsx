import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BrainCircuit, Code, Github, Mail, TestTube, Zap } from "lucide-react";
import Link from "next/link";
import { AiProgressTool } from "@/components/ai-progress-tool";

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center">
      <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
        <BrainCircuit className="h-6 w-6 text-primary" />
        <span className="text-lg">NeuroStream Labs</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4">
        <Button asChild variant="outline" size="sm">
          <Link href="#" prefetch={false}>
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Link>
        </Button>
      </nav>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="container grid place-items-center gap-6 pb-8 pt-6 md:py-24">
    <div className="mx-auto flex flex-col items-center gap-4 text-center">
      <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl">
        Streaming Thought into Language
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground">
        Home of MindBridge — open-source BCI models that decode brain activity into speech and text.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="#mindbridge" prefetch={false}>Explore MindBridge</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#" prefetch={false}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Open Innovation for Neural Decoding</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          NeuroStream Labs empowers BCI researchers with advanced software architectures for real-time neural decoding. Our mission is to reduce the dependency on invasive or expensive hardware by optimizing models for non-invasive brain signals like EEG. We build for openness, accessibility, and scientific collaboration.
        </p>
      </div>
    </div>
  </section>
);

const ProductSection = () => (
  <section id="mindbridge" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container space-y-12 px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Introducing MindBridge</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A modular, research-ready model for brain-to-text and brain-to-speech tasks.
          </p>
        </div>
      </div>
      <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        <FeatureCard
          icon={<Zap className="h-8 w-8 text-primary" />}
          title="Real-time Decoding"
          description="Process and decode neural signals with minimal latency from low-SNR signals."
        />
        <FeatureCard
          icon={<TestTube className="h-8 w-8 text-primary" />}
          title="Optimized for EEG"
          description="Specifically tailored for non-invasive data streams like EEG for broader accessibility."
        />
        <FeatureCard
          icon={<Code className="h-8 w-8 text-primary" />}
          title="Research Extensibility"
          description="Built for extensibility, allowing for easy fine-tuning and integration of new modules."
        />
      </div>
      <div className="flex justify-center">
        <Button asChild size="lg">
          <Link href="#" prefetch={false}>Read the Documentation</Link>
        </Button>
      </div>
    </div>
  </section>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
    <CardHeader className="flex flex-col items-center text-center">
      <div className="mb-4 rounded-full bg-primary/10 p-4">{icon}</div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const CommunitySection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Built for Impact</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We believe in the power of open science and community collaboration to push the boundaries of what's possible in brain-computer interfaces. Join us in building the future of neural decoding.
        </p>
      </div>
      <div className="mx-auto w-full max-w-sm space-y-2">
        <Button type="submit" size="lg">Join the Waiting List</Button>
      </div>
    </div>
  </section>
);

const AiProgressSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
       <AiProgressTool />
    </div>
  </section>
);

const NewsletterSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 border-t">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stay in the Stream</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Get the latest updates on MindBridge development, research, and community events.
        </p>
      </div>
      <div className="mx-auto w-full max-w-sm space-y-2">
        <form className="flex space-x-2">
          <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
          <Button type="submit">Get Updates on MindBridge</Button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-card border-t">
    <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <BrainCircuit className="h-6 w-6 text-primary" />
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} NeuroStream Labs
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
           <Mail className="h-4 w-4" />
           <a href="mailto:f.abdul-samadu@rgu.ac.uk" className="hover:text-primary transition-colors">f.abdul-samadu@rgu.ac.uk</a>
        </div>
        <p className="text-center text-xs">
          Disclaimer: MindBridge is focused on technical architectures. NeuroStream Labs does not develop or sell hardware.
        </p>
      </div>
    </div>
  </footer>
);


export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <CommunitySection />
        <AiProgressSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
