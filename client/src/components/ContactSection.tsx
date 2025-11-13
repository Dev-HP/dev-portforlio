import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

interface ContactSectionProps {
  onBack: () => void;
}

export default function ContactSection({ onBack }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.", {
      description: "Obrigado por entrar em contato!"
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:paulohelio751@gmail.com",
      username: "paulohelio751@gmail.com"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      username: "/in/helio-leite"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      username: "@heliopauloleite"
    },
    {
      name: "Telefone",
      icon: Phone,
      url: "tel:+5569999020537",
      username: "(69) 99902-0537"
    }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-8 terminal-scanline">
      <div className="max-w-4xl mx-auto">
        {/* Command Header */}
        <div className="mb-6 flex items-center gap-2">
          <span className="text-primary">$</span>
          <span className="text-foreground font-mono">contact --help</span>
        </div>

        {/* Help Output */}
        <div className="bg-card border border-border rounded p-6 mb-6">
          <pre className="text-foreground text-sm">
{`NOME
    contact - Entre em contato com Hélio Paulo Leite de Lima

SINOPSE
    contact [--email] [--social] [--form]

DESCRIÇÃO
    Utilize os métodos abaixo para entrar em contato:
    
    --email     Envie um email direto para paulohelio751@gmail.com
    --social    Conecte-se nas redes sociais (LinkedIn, GitHub)
    --form      Preencha o formulário de contato
    --phone     Ligue para (69) 99902-0537

LOCALIZAÇÃO
    Porto Velho, Rondônia - Brasil
    Avenida Brasília - Areal

DISPONIBILIDADE
    Respondo geralmente em até 24 horas.
    Fuso horário: GMT-4 (Brasília)
    
INTERESSES
    • Oportunidades de trabalho em Automação e Desenvolvimento
    • Projetos de Robótica e IoT
    • Pesquisa em IA e Machine Learning
    • Colaborações em projetos open source
`}
          </pre>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary">$</span>
              <h3 className="text-lg font-semibold text-primary">
                contact --form
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-foreground text-sm mb-1 block font-mono">
                  Nome:
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  required
                  className="bg-background border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-foreground text-sm mb-1 block font-mono">
                  Email:
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="bg-background border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-foreground text-sm mb-1 block font-mono">
                  Mensagem:
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Sua mensagem..."
                  required
                  rows={5}
                  className="bg-background border-primary/30 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="bg-card border border-border rounded p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary">$</span>
              <h3 className="text-lg font-semibold text-primary">
                contact --social
              </h3>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border border-border rounded hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:terminal-glow" />
                    <div className="flex-1">
                      <p className="text-foreground font-semibold text-sm">
                        {link.name}
                      </p>
                      <p className="text-muted-foreground text-xs font-mono">
                        {link.username}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Location */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-start gap-3 p-3 border border-border rounded">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold text-sm mb-1">
                    Localização
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Avenida Brasília - Areal<br />
                    Porto Velho, Rondônia - Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="border-l-2 border-secondary pl-4">
                <h4 className="text-sm font-semibold text-secondary mb-2">
                  Disponível para:
                </h4>
                <ul className="text-foreground text-sm space-y-1">
                  <li>• Oportunidades full-time</li>
                  <li>• Projetos de automação e robótica</li>
                  <li>• Pesquisa em IA e Machine Learning</li>
                  <li>• Colaborações open source</li>
                  <li>• Consultorias técnicas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="outline"
          className="border-primary/30 hover:border-primary hover:bg-primary/10"
        >
          <span className="text-primary">$ clear</span>
        </Button>
      </div>
    </div>
  );
}
