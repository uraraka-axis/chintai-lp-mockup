import { motion } from "motion/react";
import { MessageCircle, ListChecks, BookOpen, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "お問い合わせ・ヒアリング",
    description: "物件の情報やご要望をお聞かせください。入居者層や共用部の状況に合わせてご提案いたします。",
  },
  {
    icon: ListChecks,
    title: "書籍セレクト＆お見積もり",
    description: "物件タイプ・入居者層に最適なラインナップをセレクト。お見積もりをご提示します。",
  },
  {
    icon: BookOpen,
    title: "書棚設置・コミック配送",
    description: "設置場所に合わせた書棚をご用意。コミックと一緒にお届けし、すぐにご利用いただけます。",
  },
  {
    icon: Rocket,
    title: "運営開始",
    description: "設置完了後すぐに入居者様にご利用いただけます。ポータルサイト等へのアピールも開始。",
  },
  {
    icon: RefreshCw,
    title: "新刊自動追加でラインナップ更新",
    description: "新刊追加サービスをご利用いただくと、話題作が自動で届きます。管理の手間はゼロです。",
  },
];

export function FlowSection() {
  return (
    <section id="flow" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl text-gray-900 mb-4">導入の流れ</h2>
          <div className="w-16 h-1 bg-[#1B3B6F] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1B3B6F] via-[#2B5EA7]/50 to-transparent" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative flex gap-5 md:gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Number circle */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#1B3B6F] flex items-center justify-center shadow-md shadow-[#1B3B6F]/20">
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F5A623] text-white flex items-center justify-center text-xs">
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-[#F4F7FB] rounded-xl p-5 md:p-6 flex-1 border border-[#E0E8F0]">
                  <h3 className="text-gray-900 text-lg mb-1.5">{step.title}</h3>
                  <p className="text-gray-600 text-sm !leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
