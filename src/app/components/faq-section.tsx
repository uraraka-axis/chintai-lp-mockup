import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "費用はどのくらいかかりますか？",
    a: "100冊 月額3,000円〜（税別）でご利用いただけます。入居コミック・話題作もセットでこの価格に含まれています。初期費用は別途お見積もりとなります。",
  },
  {
    q: "何冊から導入できますか？",
    a: "100冊からご導入いただけます。エレベーターホールやエントランスなど、スペースに応じた冊数をご提案いたします。",
  },
  {
    q: "新しいマンガは届きますか？",
    a: "はい。新刊自動追加サービス（オプション）をご利用いただくと、話題作・新刊が定期的に届きます。ラインナップの鮮度を保ち、入居者の満足度を維持します。",
  },
  {
    q: "管理の手間はかかりますか？",
    a: "ほぼゼロです。初期設置はすべてお任せいただけます。日常的な管理は書棚の整理程度で、入居者様に自由にご利用いただくスタイルです。",
  },
  {
    q: "こんな物件に向いていますか？",
    a: "賃貸マンション・アパート、学生寮、社宅、シェアハウスなど幅広い物件タイプでご利用いただいています。単身者向け・ファミリー向け問わず導入実績がございます。",
  },
  {
    q: "書籍のジャンルは選べますか？",
    a: "はい。入居者様の層（学生、社会人、ファミリーなど）に応じて最適なジャンル構成をご提案します。ご要望に応じたカスタマイズも可能です。",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F4F7FB]">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl text-gray-900 mb-4">よくあるご質問</h2>
          <div className="w-16 h-1 bg-[#1B3B6F] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl border border-[#E0E8F0] overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <button
                className="w-full flex items-center gap-4 p-5 text-left cursor-pointer hover:bg-[#F4F7FB] transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="w-8 h-8 rounded-lg bg-[#1B3B6F]/8 flex items-center justify-center shrink-0">
                  <span className="text-[#1B3B6F] text-sm">Q{i + 1}</span>
                </div>
                <span className="text-gray-900 flex-1">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0 ml-12">
                      <p className="text-gray-600 !leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
