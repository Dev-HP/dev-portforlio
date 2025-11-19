# 💻 Portfólio Interativo - Hélio Paulo Leite de Lima

Portfólio pessoal com tema terminal/hacker, desenvolvido com React, TypeScript e Tailwind CSS.

🌐 **[Ver Portfolio Online](https://dev-hp.github.io/dev-portforlio/)**

## ✨ Características

- 🖥️ **Tema Terminal Interativo** - Interface inspirada em linha de comando
- ⚡ **Performance Otimizada** - Animações rápidas e responsivas
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em mobile e desktop
- ⌨️ **Navegação por Teclado** - Use ESC para voltar e teclas 1-4 para navegar
- 🎨 **Animações Suaves** - Efeitos de digitação, glow e transições
- 📧 **Formulário de Contato** - Integrado com EmailJS
- 📄 **Download de CV** - Botão para baixar currículo em PDF
- 🔍 **SEO Otimizado** - Meta tags para redes sociais

## 🚀 Tecnologias

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS v4
- **Build:** Vite
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** EmailJS
- **Deploy:** GitHub Pages (CI/CD automático)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Dev-HP/dev-portforlio.git
cd dev-portforlio

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais

# Inicie o servidor de desenvolvimento
pnpm dev
```

O projeto estará disponível em `http://localhost:3000/dev-portforlio/`

## ⚙️ Configuração

### 1. EmailJS (Formulário de Contato)

Para que o formulário de contato funcione:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template
4. Adicione as credenciais no `.env`

📖 **[Ver guia completo](./EMAILJS_SETUP.md)**

### 2. Adicionar seu CV

1. Crie/exporte seu CV em PDF
2. Renomeie para `cv-helio-paulo.pdf`
3. Coloque em `client/public/`

📖 **[Ver instruções detalhadas](./client/public/CV_INSTRUCTIONS.md)**

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento

# Build
pnpm build            # Build para produção
pnpm build:full       # Build completo (frontend + backend)

# Preview
pnpm preview          # Preview do build de produção

# Qualidade de Código
pnpm check            # Verifica tipos TypeScript
pnpm format           # Formata código com Prettier
```

## 📁 Estrutura do Projeto

```
dev-portforlio/
├── client/                 # Frontend
│   ├── public/            # Arquivos estáticos
│   │   ├── favicon.svg
│   │   └── cv-helio-paulo.pdf
│   └── src/
│       ├── components/    # Componentes React
│       │   ├── AboutSection.tsx
│       │   ├── ProjectsSection.tsx
│       │   ├── SkillsSection.tsx
│       │   ├── ContactSection.tsx
│       │   └── TerminalPrompt.tsx
│       ├── pages/         # Páginas
│       ├── hooks/         # Custom hooks
│       └── lib/           # Utilitários
├── .github/
│   └── workflows/
│       └── deploy.yml     # CI/CD GitHub Actions
├── .env.example           # Exemplo de variáveis
├── EMAILJS_SETUP.md       # Guia EmailJS
└── README.md              # Este arquivo
```

## 🎨 Personalização

### Cores do Tema

Edite `client/src/index.css`:

```css
--primary: oklch(0.78 0.20 210);    /* Cyan */
--secondary: oklch(0.72 0.34 328);  /* Magenta */
--accent: oklch(0.97 0.23 110);     /* Yellow */
--foreground: oklch(0.90 0.30 145); /* Green */
```

### Conteúdo

- **Sobre:** `client/src/components/AboutSection.tsx`
- **Projetos:** `client/src/components/ProjectsSection.tsx`
- **Habilidades:** `client/src/components/SkillsSection.tsx`
- **Contato:** `client/src/components/ContactSection.tsx`

## 🚀 Deploy

O deploy é automático via GitHub Actions:

1. Faça push para a branch `main`
2. GitHub Actions faz o build
3. Deploy automático no GitHub Pages

**URL:** https://dev-hp.github.io/dev-portforlio/

### Deploy Manual

```bash
pnpm build
# Os arquivos estarão em dist/public/
```

## 📝 Roadmap

- [x] Tema terminal interativo
- [x] Navegação por teclado
- [x] Formulário de contato com EmailJS
- [x] Download de CV
- [x] Meta tags para SEO
- [x] Deploy automático
- [ ] PWA (Progressive Web App)
- [ ] Modo claro/escuro
- [ ] Seção de blog
- [ ] Analytics

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Hélio Paulo Leite de Lima**

- GitHub: [@Dev-HP](https://github.com/Dev-HP)
- LinkedIn: [/in/helio-leite](https://www.linkedin.com/in/helio-leite)
- Email: paulohelio751@gmail.com

## 🙏 Agradecimentos

- Design inspirado em terminais Unix/Linux
- Ícones por [Lucide](https://lucide.dev/)
- UI Components por [Radix UI](https://www.radix-ui.com/)
- Hospedagem por [GitHub Pages](https://pages.github.com/)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
