import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Lightbulb, Rocket, Code, Mail, ArrowRight, Brain } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-16">
        <div className="absolute inset-0 pt-16">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Hero background"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container px-4 md:px-6 py-32 md:py-48">
          <div className="max-w-[700px] space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
              エコで潤う社会を実現する
            </h1>
            <p className="text-white/90 md:text-xl">
              エコウルは、豊かな脱炭素社会の実現に向けて、生成AIを活用した革新的なソリューションを提供します。私たちの使命は、環境に優しい技術で未来を変えることです。
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-12">
            サービス
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Code className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">1. 脱炭素×システム開発</h3>
                <p className="text-muted-foreground">
                  脱炭素領域のシステム開発の支援を通じ、貴社の業務効率化と最適化を実現します。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Rocket className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">2. 脱炭素×新規事業立上げ支援</h3>
                <p className="text-muted-foreground">
                  脱炭素領域での専門的な知見を基に競争力のある新規事業立上げを伴走します。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Brain className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">3. 脱炭素×生成AI導入</h3>
                <p className="text-muted-foreground">
                  高度な先進技術を用い、貴社独自のユニークなソリューションを構築します。
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              相談する
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-12">
            ご提供の流れ            
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {[
              {
                step: "01",
                title: "現状分析",
                description: "お客様の課題やニーズを詳しくヒアリングし、最適なソリューションを検討します。",
              },
              {
                step: "02",
                title: "戦略立案",
                description: "収集したデータを基に、具体的な施策と導入計画を策定します。",
              },
              {
                step: "03",
                title: "実行支援",
                description: "計画に基づいて、システム開発・導入から運用までをサポートします。",
              },
            ].map((item, index, array) => (
              <div key={item.step} className="flex flex-col items-center text-center mb-8 md:mb-0 relative">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground max-w-xs">{item.description}</p>
                {index < array.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-4 text-primary" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            事例紹介
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            大手企業から中小・スタートアップ企業まで幅広い実績がございます。<br />
            お困りごとがございましたら、是非お気軽にご相談ください。
          </p>
          <div className="flex justify-center mb-12">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              相談する
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">損害保険大手</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">従業員数</div>
                    <div className="text-muted-foreground">1万人〜</div>
                  </div>
                  <div>
                    <div className="font-semibold">実施内容</div>
                    <div className="text-muted-foreground">
                      脱炭素サービスプラットフォームの事業立上げ、デジタルプラットフォームのシステム開発
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">環境ベンチャー</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">従業員数</div>
                    <div className="text-muted-foreground">1〜50人</div>
                  </div>
                  <div>
                    <div className="font-semibold">実施内容</div>
                    <div className="text-muted-foreground">
                      環境負荷や装置パフォーマンスデータ等を可視化するハードウェア連動型のソフトウェアの開発
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">PPA事業者</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">従業員数</div>
                    <div className="text-muted-foreground">1〜50人</div>
                  </div>
                  <div>
                    <div className="font-semibold">実施内容</div>
                    <div className="text-muted-foreground">
                      リアルタイムの発電情報や電気料金等の可視化と発電所管理を行うソフトウェアの開発
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section id="company" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-12">会社情報</h2>
          <div className="max-w-2xl mx-auto">
            <dl className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-semibold">社名</dt>
                <dd className="col-span-2">エコウル株式会社</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-semibold">設立</dt>
                <dd className="col-span-2">2024年12月</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-semibold">代表取締役</dt>
                <dd className="col-span-2">江森 靖紘</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-semibold">事業内容</dt>
                <dd className="col-span-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>脱炭素×システム開発</li>
                    <li>脱炭素×新規事業立上げ支援</li>
                    <li>脱炭素×生成AI導入支援</li>
                  </ul>
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-semibold">所在地</dt>
                <dd className="col-span-2">〒135-0006 東京都江東区常盤1-6-5-202</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-[800px] mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">お問い合わせ</h2>
              <p className="text-muted-foreground">
                サービスについてのご質問やご相談は、お気軽にお問い合わせください。
              </p>
            </div>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="required">会社名</Label>
                <Input id="company" placeholder="例）エコウル株式会社" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="required">姓</Label>
                  <Input id="lastName" placeholder="環境" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="required">名</Label>
                  <Input id="firstName" placeholder="太郎" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="required">メールアドレス</Label>
                <Input id="email" type="email" placeholder="例）name@example.com" required />
                <p className="text-sm text-muted-foreground">会社のメールアドレスをご入力ください</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="required">電話番号</Label>
                <Input id="phone" type="tel" placeholder="例）090-1234-5678" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiry-type" className="required">お問い合わせ内容</Label>
                <Select required>
                  <SelectTrigger id="inquiry-type">
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="service">サービス内容について</SelectItem>
                    <SelectItem value="implementation">導入について</SelectItem>
                    <SelectItem value="pricing">料金について</SelectItem>
                    <SelectItem value="partnership">協業について</SelectItem>
                    <SelectItem value="recruitment">採用について</SelectItem>
                    <SelectItem value="press">取材について</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">お問い合わせ内容詳細</Label>
                <Textarea id="message" placeholder="お問い合わせ内容の詳細をご記入ください。" />
              </div>
              <Button type="submit" className="w-full">
                送信する
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">エコウル株式会社</h3>
              <Image
                src="/brandmark-design.png"
                alt="ECOULU"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:inquiry@ecoulu.com" className="hover:underline">
                    inquiry@ecoulu.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">サイトマップ</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                    Cases
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('company')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                    Company
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">サービス</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                    脱炭素×システム開発
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                    脱炭素×新規事業立上げ支援
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">
                    脱炭素×生成AI導入支援
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} エコウル株式会社. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

