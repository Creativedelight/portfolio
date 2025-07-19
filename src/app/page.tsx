import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-start md:space-x-8">
        <div className="md:w-1/2">
          <span className="text-4xl">👋</span>
          <Heading className="font-black">Hello there! I&apos;m Munuhe</Heading>
          <Paragraph className="max-w-xl mt-4">
            I&apos;m a full-stack developer that loves{" "}
            <Highlight>building products</Highlight> and web apps that can impact
            millions of lives
          </Paragraph>
          <Paragraph className="max-w-xl mt-4">
            I&apos;m a senior software engineer with{" "}
            <Highlight>4 years of experience</Highlight> building scalable web apps
            that are performance optimized and good looking.
          </Paragraph>
        </div>
        <div className="md:w-1/2 flex justify-center items-center" style={{ width: "300px", height: "400px" }}>
          <ProfileCard
            name="Faith Munuhe"
            title="Software Engineer"
            handle="faithmunuhe"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/images/mainImg.png"
            showUserInfo={true}
            enableTilt={true}
            iconUrl="/images/iconpattern.png"
            grainUrl="/images/grain.webp"
            behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)"
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            showBehindGradient={true}
            className="my-custom-profile-card"
            miniAvatarUrl="/images/avatar.png"
          />
        </div>
      </div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
