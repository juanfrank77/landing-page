import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CopySection from "../components/CopySection";
import FeaturesSection from "../components/FeaturesSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";

function IndexPage() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        color="white"
        spaced={true}
        logo="/startup-logo.png"
      />
      <HeroSection
        color="primary"
        size="medium"
        backgroundImage="https://images.unsplash.com/photo-1553524913-efba3f0b533e"
        backgroundImageOpacity={0.3}
        title="'Staying relevant in tech while having a healthy life is so easy'"
        subtitle="Said no one ever right? But even though is far from easy, it's still possible. And with the right tools and support it's even more possible now. "
      />
      <CopySection />
      <FeaturesSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="What's in it for me?"
        subtitle="Here's what we're aiming for."
        columns={2}
      />
      <NewsletterSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Want to join the club?"
        subtitle="Get updates and actionable insights along the way."
        buttonText="Send me the goods!"
        buttonColor="primary"
        buttonInverted={false}
        inputPlaceholder="Your email here"
        subscribedMessage="Congrats. You are now in!"
      />
      <Footer
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        copyright="© 2021"
        logo="/startup-logo.png"
      />
    </>
  );
}

export default IndexPage;
