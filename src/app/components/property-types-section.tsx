import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const propertyTypes = [
  {
    image:
      "https://images.unsplash.com/photo-1589572368687-c093a494522a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3IlMjBjbGVhbnxlbnwxfHx8fDE3NzMxMTU4MzdfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "賃貸マンション・アパート",
    description:
      "エントランスや共用ラウンジに設置。入居者の満足度向上で退去率ダウン、空室対策の切り札に。",
    tags: ["空室対策", "入居率UP"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1768666197970-1b6614f94ffe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMHN0dWRpbyUyMGFwYXJ0bWVudCUyMGZ1cm5pc2hlZCUyMGJlZCUyMGRlc2slMjBicmlnaHQlMjB3aW5kb3clMjBqYXBhbnxlbnwxfHx8fDE3NzMxMTc1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "学生寮・学生マンション",
    description:
      "学生に人気のマンガは入居の決め手に。共用スペースの活性化で寮生活の魅力もアップ。",
    tags: ["学生向け", "コミュニティ"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1762640448649-4eb3b65e67da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwbGlicmFyeSUyMHdhbGwlMjBzaGVsdmVzJTIwc29mYSUyMGNvenklMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzczMTE3OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "シェアハウス",
    description:
      "共用リビングに設置してコミュニケーションのきっかけに。住人同士の交流促進や物件の個性づくりに最適。",
    tags: ["交流促進", "差別化"],
  },
];

export function PropertyTypesSection() {
  return (
    <section id="property-types" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl text-gray-900 mb-4">
            物件タイプ別の活用イメージ
          </h2>
          <div className="w-16 h-1 bg-[#1B3B6F] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {propertyTypes.map((type, i) => (
            <motion.div
              key={i}
              className="group rounded-2xl overflow-hidden bg-white border border-[#E0E8F0] shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {type.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/90 backdrop-blur-sm text-xs px-2.5 py-1 rounded-full text-[#1B3B6F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm !leading-relaxed">{type.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#1B3B6F] to-[#2B5EA7] rounded-2xl p-8 md:p-10 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl mb-3">
            スマートコミックは法人向け・社宅向けにも
            <br className="hidden md:block" />
            幅広くご対応しております
          </h3>
          <p className="text-white/80 mb-6">
            まずはお気軽にお問い合わせください
          </p>
          <a href="https://smart-comic.co.jp/contact-new/" className="bg-[#F5A623] text-white px-8 py-3.5 rounded-xl hover:bg-[#E09410] transition-all hover:scale-105 shadow-lg shadow-black/15 cursor-pointer inline-block">
            資料請求はこちら（無料）
          </a>
        </motion.div>
      </div>
    </section>
  );
}