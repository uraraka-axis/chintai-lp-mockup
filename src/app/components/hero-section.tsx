import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
const logoImg = "https://smart-comic.co.jp/wp-content/uploads/2025/02/logo_01.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[100vh] md:min-h-[700px] flex flex-col bg-[#F7F9FC]">
      {/* Background image with blur */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1601639426179-45168809390a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGJvb2tzJTIwc2hlbGYlMjBjbG9zZSUyMHVwJTIwY29sb3JmdWwlMjBzcGluZXMlMjBqYXBhbnxlbnwxfHx8fDE3NzMxMTY1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover blur-[6px] scale-110"
        />
        <div className="absolute inset-0 bg-[#F7F9FC]/85" />
      </div>

      {/* Decorative wave shapes — organic flowing curves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large flowing wave — top right */}
        <svg
          className="absolute -top-20 -right-40 w-[900px] h-[700px] opacity-[0.07]"
          viewBox="0 0 900 700"
          fill="none"
        >
          <path
            d="M900 0C900 0 750 120 600 180C450 240 350 160 200 220C50 280 0 400 0 400L0 700L900 700Z"
            fill="#1B3B6F"
          />
        </svg>

        {/* Flowing outline wave — mid */}
        <motion.svg
          className="absolute top-[30%] -right-20 w-[1200px] h-[300px]"
          viewBox="0 0 1200 300"
          fill="none"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <path
            d="M0 150C100 80 200 200 350 140C500 80 550 200 700 160C850 120 950 200 1100 140C1150 120 1200 130 1200 130"
            stroke="#1B3B6F"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.12"
          />
          <path
            d="M0 180C120 110 220 230 380 170C540 110 580 230 730 190C880 150 980 230 1130 170C1180 150 1200 160 1200 160"
            stroke="#1B3B6F"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.07"
          />
        </motion.svg>

        {/* Filled wave accent — bottom area */}
        <svg
          className="absolute bottom-[80px] left-0 w-full h-[250px] opacity-[0.04]"
          viewBox="0 0 1440 250"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120C240 40 480 180 720 100C960 20 1200 160 1440 80V250H0Z"
            fill="#1B3B6F"
          />
        </svg>

        {/* Subtle circle accent */}
        <div className="absolute top-[15%] right-[8%] w-[300px] h-[300px] rounded-full border border-[#1B3B6F]/[0.06]" />
        <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] rounded-full border border-[#1B3B6F]/[0.04]" />
      </div>

      {/* Top navigation */}
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="SmartComic" className="h-10" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#1B3B6F]/60">
            <a href="#benefits" className="hover:text-[#1B3B6F] transition-colors">導入メリット</a>
            <a href="#property-types" className="hover:text-[#1B3B6F] transition-colors">活用イメージ</a>
            <a href="#pricing" className="hover:text-[#1B3B6F] transition-colors">料金プラン</a>
            <a href="#flow" className="hover:text-[#1B3B6F] transition-colors">導入の流れ</a>
            <a href="#faq" className="hover:text-[#1B3B6F] transition-colors">よくある質問</a>
          </nav>
          <a
            href="https://smart-comic.co.jp/contact-new/"
            className="hidden md:inline-flex bg-[#F5A623] text-white text-sm px-5 py-2.5 rounded-lg hover:bg-[#E09410] transition-all"
          >
            資料請求
          </a>
        </div>
      </div>

      {/* Main hero content — centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-sm px-5 py-2 rounded-full mb-8 border border-[#1B3B6F]/8 text-[#1B3B6F]/70 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
              賃貸物件オーナー・管理会社様へ
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] !leading-[1.45] text-[#1B3B6F] mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            賃貸物件の空室対策に
            <br />
            <span className="relative inline-block">
              <span className="text-[#F5A623]">マンガコーナー</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
                <path d="M2 6C50 1 250 1 298 6" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
              </svg>
            </span>
            を導入
          </motion.h1>

          <motion.p
            className="text-[#1B3B6F]/55 text-base md:text-lg max-w-xl mx-auto !leading-[1.9] mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            共用部にコミックコーナーを設置するだけで、物件の魅力が段違いに。
            <br className="hidden sm:block" />
            入居者の満足度向上・長期入居の促進・仲介会社へのアピールに。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="https://smart-comic.co.jp/contact-new/" className="bg-[#F5A623] text-white px-8 py-4 rounded-xl text-lg hover:bg-[#E09410] transition-all shadow-lg shadow-[#F5A623]/25 cursor-pointer inline-block">
              資料請求はこちら（無料）
            </a>
            <a href="https://smart-comic.co.jp/contact-new/" className="text-[#1B3B6F]/70 px-8 py-4 rounded-xl text-lg border border-[#1B3B6F]/15 hover:border-[#1B3B6F]/30 hover:text-[#1B3B6F] transition-all cursor-pointer bg-white/60 backdrop-blur-sm inline-block">
              お問い合わせ
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-10 flex justify-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#1B3B6F]/25"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px]"
        >
          <path
            d="M0 60C180 20 360 90 540 50C720 10 900 80 1080 40C1260 0 1380 50 1440 30V120H0Z"
            fill="#F4F7FB"
          />
        </svg>
      </div>
    </section>
  );
}
