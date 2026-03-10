import { motion } from "motion/react";
import { BookOpen, RefreshCw, BarChart3 } from "lucide-react";

const features = [
  { icon: BookOpen, label: "人気作品をコミコミ", desc: "話題作から定番まで幅広いラインナップ" },
  { icon: RefreshCw, label: "新刊自動追加サービス", desc: "常に最新巻が届くから管理不要" },
  { icon: BarChart3, label: "最適な配本", desc: "物件に合わせた最適なジャンル構成" },
];

const pricingDetails = [
  { label: "書籍代", value: "100冊〜" },
  { label: "初期費用", value: "1,100円〜（税込）" },
  { label: "新刊追加", value: "月額追加（任意サービス）" },
  { label: "特別プラン", value: "物件・ご要望に応じてご相談可能" },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#F4F7FB]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl text-gray-900 mb-4">
            スマートコミックの賃貸向けサービス
          </h2>
          <div className="w-16 h-1 bg-[#1B3B6F] mx-auto rounded-full" />
        </motion.div>

        {/* Pricing card */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg border border-[#E0E8F0] overflow-hidden max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1B3B6F] to-[#2B5EA7] text-white p-8 text-center">
            <p className="text-white/80 text-sm mb-2">100冊 月額</p>
            <div className="flex items-end justify-center gap-1">
              <span className="text-5xl md:text-6xl">3,000</span>
              <span className="text-xl mb-2">円〜</span>
              <span className="text-sm text-white/70 mb-2.5">（税別）</span>
            </div>
            <p className="text-white/70 text-sm mt-3">
              人気コミック・話題作もセットでこの価格に含まれています
            </p>
          </div>

          {/* Features */}
          <div className="p-6 md:p-8">
            <div className="grid gap-5 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1B3B6F]/8 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-[#2B5EA7]" />
                  </div>
                  <div>
                    <p className="text-gray-900">{f.label}</p>
                    <p className="text-gray-500 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Details table */}
            <div className="border-t border-gray-100 pt-6">
              {pricingDetails.map((detail, i) => (
                <div
                  key={i}
                  className={`flex justify-between py-3 ${
                    i < pricingDetails.length - 1 ? "border-b border-gray-50" : ""
                  }`}
                >
                  <span className="text-gray-500 text-sm">{detail.label}</span>
                  <span className="text-gray-900 text-sm">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
