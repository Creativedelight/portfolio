import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <header className="mb-14 border-b border-gray-300 pb-6 text-center">
        <h1 className="text-5xl font-extrabold text-emerald-700 tracking-wide">
          Faith Munuhe
        </h1>
        <p className="mt-2 text-xl text-gray-600 font-semibold">
          Lead AI/ML Engineer | Backend Developer
        </p>
        <p className="mt-1 text-sm italic text-gray-500">
          munuhefay@gmail.com | +254 702163616 |{" "}
          <a
            href="https://www.linkedin.com/in/fay-munuhe-1157b3363"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-emerald-600"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://faithmunuhe.online"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-emerald-600"
          >
            Portfolio
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/Creativedelight"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-emerald-600"
          >
            GitHub
          </a>
        </p>
      </header>

      
      <WorkHistory />
    </Container>

  );
}
