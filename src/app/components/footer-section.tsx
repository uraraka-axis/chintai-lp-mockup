import { motion } from "motion/react";
import logoImg from "figma:asset/fabeb8c70dc874a01912da2c00ddd55d81efe6b1.png";

export function FooterSection() {
  return (
    <>
      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-4">
              まずは無料の資料請求から
              <br />
              お気軽にご相談ください
            </h2>
            <p className="text-gray-600 mb-8 !leading-relaxed">
              物件の空室対策・入居率アップに関するお悩みを解決します。
              <br className="hidden md:block" />
              導入事例や料金の詳細をまとめた資料を無料でお送りいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#1B3B6F] text-white px-8 py-4 rounded-xl text-lg hover:bg-[#162f5a] transition-all hover:scale-105 shadow-lg shadow-[#1B3B6F]/20 cursor-pointer">
                資料請求はこちら（無料）
              </button>
              <button className="bg-white text-[#1B3B6F] px-8 py-4 rounded-xl text-lg border-2 border-[#1B3B6F] hover:bg-[#1B3B6F]/5 transition-all cursor-pointer">
                お問い合わせ
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2550] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src={logoImg} alt="SmartComic" className="h-10 brightness-0 invert" />
              </div>
              <p className="text-gray-400 text-sm !leading-relaxed max-w-xs">
                賃貸物件の空室対策・入居率向上をマンガコーナーで実現するサービスです。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-gray-400">
              <a href="#benefits" className="hover:text-white transition-colors">導入メリット</a>
              <a href="#pricing" className="hover:text-white transition-colors">料金プラン</a>
              <a href="#property-types" className="hover:text-white transition-colors">活用イメージ</a>
              <a href="#faq" className="hover:text-white transition-colors">よくある質問</a>
              <a href="#flow" className="hover:text-white transition-colors">導入の流れ</a>
              <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              &copy; 2026 SmartComic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
