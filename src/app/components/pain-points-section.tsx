import { motion } from "motion/react";
import { AlertCircle, Check } from "lucide-react";

const painPoints = [
  "空室が埋まらず、家賃を下げるしかないのか…",
  "リフォームしたいが、数百万円の費用は回収できるか不安",
  "AD（広告費）を増やしても、効果が一時的にしか続かない",
  "他の物件と差別化できるポイントがなかなか見つからない",
  "入居してもすぐ退去されてしまい、仲介回数ばかり増えてしまう",
  "内見の際に印象を持っておきたいが引きになるものがない",
];

export function PainPointsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl text-gray-900 mb-4">
            こんなお悩みありませんか？
          </h2>
          <div className="w-16 h-1 bg-[#1B3B6F] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-[#F4F7FB] rounded-xl p-5 border border-[#E0E8F0]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="mt-0.5 w-6 h-6 rounded-full bg-[#1B3B6F]/10 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-[#1B3B6F]" />
              </div>
              <p className="text-gray-700">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-gradient-to-r from-[#EBF1FA] to-[#F0F5FC] rounded-2xl p-6 md:p-8 border border-[#1B3B6F]/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-[#2B5EA7] shrink-0 mt-0.5" />
            <p className="text-gray-700 !leading-relaxed">
              低コストで導入でき、入居者に直接的な付加価値を届けられる手法として、
              <br className="hidden md:block" />
              いま注目されているのが物件共用部への
              <span className="text-[#1B3B6F]">マンガコーナー</span>の設置です。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
