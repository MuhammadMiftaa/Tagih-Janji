import Image from "next/image";
import { Inter } from "next/font/google";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <main>
      <FloatingNav className="font-lora" navItems={navItems} />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-xl font-lora md:text-4xl font-bold dark:text-white text-center">
            Tagih <span className="text-red">Janji</span>.
          </div>
        </motion.div>
      </AuroraBackground>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-lg font-quicksand px-4 md:text-2xl lg:text-3xl text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto font-light"
        >
          Janji adalah utang, dan kami di sini untuk
          <br />
          <Highlight className="text-black font-medium dark:text-white">
            mengingatkan.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      <div className="pt-16 px-48 bg-zinc-50">
        <div className="flex flex-col font-lora text-justify">
          <h1 className="font-bold text-3xl">
            Janji Politik, Berita Bohong, dan Politik Penyangkalan
          </h1>
          <p className="mt-7">
            Tahun politik 2024 merupakan momen bagi masyarakat Indonesia untuk
            memilih presiden dan wakil presiden serta calon anggota legislatif
            yang baru. Saat ini publik tengah antusias menyaksikan debat calon
            presiden dan calon wakil presiden sebagai sarana mengekspos
            visi-misi para kandidat tersebut.
          </p>
          <Image
            className="mt-12 self-center"
            src={
              "https://i.pinimg.com/564x/7f/89/c2/7f89c2381dd66402686f13021c974aad.jpg"
            }
            alt="banner"
            width={500}
            height={500}
          />
          <p className="font-poppins text-xs mb-12 self-center mt-2">
            Source:{" "}
            <a
              href="https://i.pinimg.com/564x/7f/89/c2/7f89c2381dd66402686f13021c974aad.jpg"
              className="italic text-zinc-500"
            >
              https://i.pinimg.com/564x/7f/89/c2/7f89c2381dd66402686f13021c974aad.jpg
            </a>
          </p>
          <p className="my-3">
            Dalam hasil penelitian Centre for Strategic and International
            Studies (CSIS), Fernandes (2023) menyebutkan bahwa debat
            diperkirakan dapat memengaruhi terjadinya penggeseran dukungan
            pemilih pada kandidat yang sudah dipilih sebelum debat berlangsung
            atau untuk memoderasi, bahkan mengoreksi pilihan seseorang.
            Sementara di tingkat daerah juga bermunculan poster dan baliho
            kandidat calon anggota legislatif beserta janji-janji bombastis dan
            retorika manis guna menarik dukungan.
          </p>
          <p className="my-3">
            Meskipun debat dan penyampaian janji-janji dalam masa kampanye
            merupakan tahapan yang penting dalam proses politik, publik seakan
            dilanda amnesia terhadap apa yang dijanjikan para pemimpin terpilih
            pascapemilu. Hal ini mencerminkan lemahnya akuntabilitas politik
            pemimpin terhadap pemilihnya.
          </p>
          <p className="my-3">
            Selain itu, negara ini juga tidak mengenal sistem ”kontrak politik”
            yang mengikat pemimpin dengan konstituennya. Dalam kontrak tersebut,
            idealnya ada perjanjian bahwa pemimpin terpilih harus benar-benar
            mewujudkan apa yang sudah dijanjikannya.
          </p>
        </div>
        <div>
          <h1 className="font-light text-5xl py-20 font-quicksand ">
            Janji Presiden dan Wakil Presiden Terpilih.
          </h1>
        </div>
      </div>
    </main>
  );
}
