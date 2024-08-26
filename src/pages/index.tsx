import Image from "next/image";
import { Inter } from "next/font/google";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import HyperText from "@/components/magicui/hyper-text";
import TypingAnimation from "@/components/magicui/typing-animation";
import { cn } from "@/lib/utils";
import TextReveal from "@/components/magicui/text-reveal";

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
      {/* <FloatingNav className="font-lora" navItems={navItems} /> */}
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
      <div className="pt-16 bg-zinc-50">
        <div className="flex flex-col font-lora text-justify px-48">
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
        <div className="mt-20 bg-yellow px-48 py-20">
          {/* 
          <h1 className="font-light text-5xl py-20 font-quicksand ">
            Janji Presiden dan Wakil Presiden Terpilih.
          </h1> */}
          <TypingAnimation
            className="text-7xl text-left font-lora font-light text-black dark:text-white"
            text="Janji Presiden dan Wakil Presiden Terpilih."
          />
          <p className="font-lora text-2xl mt-10">
            Dari sekian banyak janji dan program Prabowo-Gibran di Pilpres 2024,
            terdapat tiga hal yang paling menonjol dan sering disampaikan oleh
            pasangan capres-cawapres tersebut.
          </p>
          <div className="py-8">
            <div>
              <h1 className="font-lora my-6 text-4xl font-semibold">
                1. Melanjutkan Pembangunan IKN
              </h1>
              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-[27rem] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                  "bg-[url(https://hypeabis.id/assets/content/20230425154852000000istanaNyoman.jpg)] bg-cover",
                  // Preload hover image by setting it in a pseudo-element
                  "before:bg-[url(/gif/pembangunan-ikn.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                  "hover:bg-[url(/gif/pembangunan-ikn.gif)]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                  "transition-all duration-500"
                )}
              >
                <div className="text relative z-50 font-lora group-hover:bottom-0 -bottom-28 duration-500">
                  <h1
                    className="font-bold text-xl md:text-3xl text-gray-50 relative"
                    style={{ textShadow: "3px 3px 5px #000" }}
                  >
                    CNN Indonesia | 12 Agustus 2024
                  </h1>
                </div>
              </div>
              <TextReveal
                className="font-lora"
                text="Janji Prabowo Subianto untuk melanjutkan pembangunan Ibu Kota
                Negara (IKN) Nusantara pertama kali ditegaskan dalam berbagai
                kesempatan, terutama setelah menjadi Presiden terpilih. Salah
                satu momen signifikan adalah ketika Prabowo berkomitmen untuk
                melanjutkan proyek IKN saat menghadiri Sidang Kabinet pada
                Agustus 2024, di mana ia menyatakan akan meneruskan dan
                menyelesaikan inisiatif yang dimulai oleh Presiden Jokowi."
              />
            </div>
            <div>
              <h1 className="font-lora my-6 text-4xl font-semibold">
                2. Hilirisasi
              </h1>
              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-[27rem] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                  "bg-[url(https://cdn.visiteliti.com/article/2021-12/28/POLJoU9HQYgkkesuTJU7_1640662510.jpeg)] bg-cover",
                  // Preload hover image by setting it in a pseudo-element
                  "before:bg-[url(/gif/hilirisasi.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                  "hover:bg-[url(/gif/hilirisasi.gif)]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                  "transition-all duration-500"
                )}
              >
                <div className="text relative z-50 font-lora group-hover:bottom-0 -bottom-28 duration-500">
                  <h1
                    className="font-bold text-xl md:text-3xl text-gray-50 relative"
                    style={{ textShadow: "3px 3px 5px #000" }}
                  >
                    CNN Indonesia | 12 Agustus 2024
                  </h1>
                </div>
              </div>
              <TextReveal
                className="font-lora"
                text="Prabowo telah berulang kali menekankan pentingnya hilirisasi industri sebagai bagian dari strategi ekonomi nasional, terutama dalam meningkatkan nilai tambah sumber daya alam Indonesia. Janji ini semakin ditekankan selama kampanye pemilihan presiden 2024 sebagai salah satu prioritas utamanya dalam membangun ekonomi yang lebih mandiri."
              />
            </div>
            <div>
              <h1 className="font-lora my-6 text-4xl font-semibold">
                3. Makan Siang Gratis di Sekolah
              </h1>
              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-[27rem] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                  "bg-[url(https://assets.ladiestory.id/gallery/16582055731130052815-makan-siang.jpg)] bg-cover",
                  // Preload hover image by setting it in a pseudo-element
                  "before:bg-[url(/gif/makan-siang-gratis.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                  "hover:bg-[url(/gif/makan-siang-gratis.gif)]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                  "transition-all duration-500"
                )}
              >
                <div className="text relative z-50 font-lora group-hover:bottom-0 -bottom-28 duration-500">
                  <h1
                    className="font-bold text-xl md:text-3xl text-gray-50 relative"
                    style={{ textShadow: "3px 3px 5px #000" }}
                  >
                    CNN Indonesia | 12 Agustus 2024
                  </h1>
                </div>
              </div>
              <TextReveal
                className="font-lora"
                text="Program ini pertama kali disampaikan secara luas selama kampanye pemilihan presiden 2024. Prabowo menjanjikan bahwa jika terpilih, ia akan meluncurkan program makan siang gratis untuk semua siswa di sekolah-sekolah di Indonesia, dengan tujuan meningkatkan gizi anak-anak dan mendukung pertumbuhan dan perkembangan mereka."
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
