import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="border-b fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/brandmark-design.png"
                alt="ECOULU"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary">
                Services
              </button>
              <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-primary">
                Cases
              </button>
              <button onClick={() => scrollToSection('company')} className="text-sm font-medium hover:text-primary">
                Company
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary">
                Contact
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => scrollToSection('contact')}>
              お問い合わせ
            </Button>
            <Button onClick={() => scrollToSection('contact')}>
              相談する
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

