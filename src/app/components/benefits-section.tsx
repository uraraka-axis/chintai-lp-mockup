import { motion } from "motion/react";
import { Sparkles, Building2, Users, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "共用部の活用で物件価値を向上",
    description:
      "エントランスやラウンジにコミックコーナーを設置。空きスペースを活かした差別化で、物件全体の魅力がアップ。入居者同士のコミュニケーション促進にも。",
  },
  {
    icon: Building2,
    title: "他物件との差別化ポイント",
    description:
      "「マンガ読み放題」という他にはない設備で、SUUMO等のポータルサイトでも目を引く物件に。内見時のインパクトも抜群で成約率アップに貢献。",
  },
  {
    icon: Users,
    title: "入居者満足度向上と長期入居を実現",
    description:
      "マンガコーナーは日常的に利用される共用設備。入居者の生活の質を高め、「この物件に住み続けたい」という気持ちを育て、退去率低下につなげます。",
  },
  {
    icon: Handshake,
    title: "仲介会社への訴求力",
    description:
      "仲介会社にとっても「マンガ読み放題」は紹介しやすい物件の特徴。他物件との差を明確に伝えられるため、優先的に紹介されやすくなります。",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-[#F4F7FB]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl text-gray-900 mb-2">
            マンガコーナー導入が
          </h2>
          <h2 className="text-2xl md:text-4xl text-[#1B3B6F] mb-4">
            賃貸物件の差別化になる理由
          </h2>
          <div className="w-16 h-1 bg-[#1B3B6F] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E0E8F0] hover:shadow-md hover:border-[#2B5EA7]/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1B3B6F]/8 flex items-center justify-center mb-5 group-hover:bg-[#1B3B6F]/12 transition-colors">
                <benefit.icon className="w-7 h-7 text-[#2B5EA7]" />
              </div>
              <h3 className="text-lg md:text-xl text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 !leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}