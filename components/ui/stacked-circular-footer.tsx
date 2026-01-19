import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function StackedCircularFooter() {
  return (
    <footer className="bg-deep-black py-20 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-gradient-to-br from-sony-blue/20 to-electric-cyan/20 p-8 backdrop-blur-sm border border-electric-cyan/30">
            <Icons.logo className="w-12 h-12 text-electric-cyan" />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-8">
            <a href="#optics" className="text-white/70 hover:text-electric-cyan transition-colors font-medium">Optics</a>
            <a href="#intelligence" className="text-white/70 hover:text-electric-cyan transition-colors font-medium">Intelligence</a>
            <a href="#display" className="text-white/70 hover:text-electric-cyan transition-colors font-medium">Display</a>
            <a href="#gallery" className="text-white/70 hover:text-electric-cyan transition-colors font-medium">Gallery</a>
            <a href="#timeline" className="text-white/70 hover:text-electric-cyan transition-colors font-medium">Timeline</a>
          </nav>
          <div className="mb-10 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-electric-cyan hover:bg-electric-cyan/10 transition-all">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-electric-cyan hover:bg-electric-cyan/10 transition-all">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-electric-cyan hover:bg-electric-cyan/10 transition-all">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:border-electric-cyan hover:bg-electric-cyan/10 transition-all">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm text-white/50 font-light">
              © 2025 Sony Smart Glasses. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Designed for context, built for the real world.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
