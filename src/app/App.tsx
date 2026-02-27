import { Mail, MapPin, GraduationCap, Github, Linkedin, BookOpen, Camera, Activity, Code } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800">
      <div className="max-w-[1070px] mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* 左侧侧边栏 - 固定信息 */}
          <aside className="md:w-[280px] md:flex-shrink-0 space-y-8">
            <div className="sticky top-8 space-y-8">
              {/* 个人简介卡片 */}
              <div>
                <div className="text-center mb-4">
                  <div className="inline-block relative mb-4">
                    <ImageWithFallback
                      src="/avatar.jpg"
                      alt="Zhiying Xiang"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white shadow-sm mx-auto"
                    />
                  </div>
                  
                  <h1 className="text-2xl font-bold text-slate-900 mb-1">Zhiying Xiang</h1>
                  <p className="text-slate-500 font-medium mb-4">AI Product Manager @Alibaba</p>
                </div>
                
                <div className="space-y-3 text-sm text-slate-600">
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 shrink-0 opacity-70" />
                    <span>Singapore & Hangzhou, China</span>                

                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 shrink-0 opacity-70" />
                    <a href="mailto:zhangsan@tsinghua.edu.cn" className="hover:text-blue-600 transition-colors">
                      nishiimizo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* 社交链接 */}
              
            </div>
          </aside>

          {/* 右侧主内容区域 */}
          <main className="md:w-[730px] md:flex-shrink-0 space-y-12">
            
            {/* 关于我 */}
            <section>
              <SectionTitle>👋 About Me</SectionTitle>
              <div className="text-sm text-slate-600 leading-7 space-y-4">
                <p>
                  I am a Product Manager specializing in AI products, focusing on AI Agents for <b>Design and DevOps</b>. 
                </p>
                <p>Before joining Alibaba, I worked at Tencent and ByteDance as a Technical Product Manager Intern, where I built <b>Developer Tools</b> aimed at improving engineering efficiency. I've shipped multiple products from concept to scale, which gave me solid insights into developer workflows and what they actually struggle with.
</p>

              </div>
            </section>

            {/* 教育经历 */}
            <section>
              <SectionTitle>🎓 Educations</SectionTitle>
              <div className="space-y-8">
                <TimelineItem 
                  date="2023.08 - 2024.11"
                  title="M.E."
                  subtitle="University of Singapore · Software Engineering"                />
                <TimelineItem 
                  date="2019.09 - 2023.07"
                  title="B.Eng."
                  subtitle="University of Electronic Science and Technology of China · Software Engineering"                />
              </div>
            </section>

            {/* 实习经历 */}
            <section>
              <SectionTitle>💼 Work Experience</SectionTitle>
              <div className="space-y-8">
                <TimelineItem 
                  date="2024.06 - Now"
                  title="AI Product Manager"
                  subtitle="Alibaba · Taobao & Tmall Group"                />
                <TimelineItem 
                  date="2023.09 - 2024.04"
                  title="Product Manager Intern"
                  subtitle="Shopee · Core Service"                />
                <TimelineItem 
                  date="2023.06 - 2023.08"
                  title="Platform Product Manager Intern"
                  subtitle="Tencent · Tencent Cloud"                />
                <TimelineItem 
                  date="2022.12 - 2023.05"
                  title="Platform Product Manager Intern"
                  subtitle="Shanghai AI Lab · DataLab"                />
                <TimelineItem 
                  date="2022.06 - 2022.11"
                  title="Technical Product Manager Intern"
                  subtitle="ByteDance · PDI"                />
                <TimelineItem 
                  date="2021.10 - 2022.06"
                  title="Platform Product Manager Intern"
                  subtitle="Tencent · Tencent Cloud"                />
              </div>
            </section>

            {/* 个人爱好 */}
            {/* <section>
              <SectionTitle>个人爱好</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <HobbyItem icon={<Camera className="w-4 h-4" />} title="摄影" desc="胶片摄影爱好者，记录城市与自然" />
                <HobbyItem icon={<Activity className="w-4 h-4" />} title="长跑" desc="马拉松完赛者，坚持每周训练" />
                <HobbyItem icon={<BookOpen className="w-4 h-4" />} title="阅读" desc="历史、哲学与科幻小说" />
                <HobbyItem icon={<Code className="w-4 h-4" />} title="开源" desc="GitHub活跃贡献者" />
              </div>
            </section> */}

            {/* 页脚 */}
            <footer className="pt-12 border-t border-slate-100 mt-12">
              <p className="text-slate-400 text-xs text-center md:text-left">
                © 2026 Zhiying Xiang. All rights reserved.
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-lg font-semibold text-slate-900">{children}</h2>
      <div className="h-px bg-slate-200 flex-grow"></div>
    </div>
  );
}

function TimelineItem({ date, title, subtitle, description }: { date: string, title: string, subtitle: string, description?: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-2">
      <div className="text-sm font-medium text-slate-400 pt-0.5">{date}</div>
      <div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <div className="text-sm text-slate-700 font-medium">{subtitle}</div>
        </div>
        {description && <p className="text-sm text-slate-600 leading-relaxed opacity-90 mt-1.5">{description}</p>}
      </div>
    </div>
  );
}

function HobbyItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 bg-white hover:border-slate-200 transition-colors">
      <div className="mt-0.5 text-slate-500">{icon}</div>
      <div>
        <div className="text-sm font-medium text-slate-900">{title}</div>
        <div className="text-xs text-slate-500 mt-0.5">{desc}</div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
