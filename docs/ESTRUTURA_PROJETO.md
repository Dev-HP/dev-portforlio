# Estrutura do Projeto - Guia

## 📁 Estrutura Reorganizada

```
dev-portforlio/
├── docs/                   # 📚 Documentação do projeto
│   ├── CHECKLIST_VERIFICACAO.md
│   ├── CLEANUP_PLAN.md
│   ├── EMAILJS_SETUP.md
│   ├── MELHORIAS*.md
│   ├── ideas.md
│   └── todo.md
│
├── config/                 # ⚙️ Arquivos de configuração
│   └── components.json
│
├── shared/                 # 🔄 Código compartilhado
│   ├── types/              # TypeScript interfaces
│   │   └── index.ts
│   ├── constants/          # Constantes globais
│   │   └── index.ts
│   └── utils/              # Funções reutilizáveis
│       └── index.ts
│
├── patches/                # 🔧 Patches de dependências
│
├── client/                 # 💻 Aplicação frontend React
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── pages/          # Páginas da aplicação (rotas)
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   │
│   │   ├── components/     # Componentes React
│   │   │   ├── sections/   # Componentes de seção
│   │   │   │   ├── AboutSection.tsx
│   │   │   │   ├── ContactSection.tsx
│   │   │   │   ├── ProjectsSection.tsx
│   │   │   │   ├── SkillsSection.tsx
│   │   │   │   └── TerminalPrompt.tsx
│   │   │   ├── layout/     # Componentes de layout
│   │   │   │   └── ErrorBoundary.tsx
│   │   │   ├── ui/         # Componentes de UI reutilizáveis
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── sonner.tsx
│   │   │   │   └── textarea.tsx
│   │   │
│   │   ├── services/       # Serviços e APIs
│   │   │   └── email.ts    # Integração com EmailJS
│   │   │
│   │   ├── hooks/          # Custom React hooks
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   │
│   │   ├── contexts/       # React Context providers
│   │   │   └── ThemeContext.tsx
│   │   │
│   │   ├── styles/         # Estilos globais
│   │   │   └── index.ts
│   │   │
│   │   ├── lib/            # Utilitários específicos do cliente
│   │   │   └── utils.ts
│   │   │
│   │   ├── App.tsx         # Componente principal
│   │   ├── main.tsx        # Entry point
│   │   ├── index.css       # Estilos CSS
│   │   └── const.ts        # Constantes do client
│   │
│   └── index.html          # Arquivo HTML principal
│
├── package.json            # Dependências do projeto
├── tsconfig.json           # Configuração TypeScript
└── vite.config.ts          # Configuração Vite
```

## 🎯 Princípios de Organização

### `docs/`
- Toda documentação do projeto
- Guias, checklists, planos de implementação
- Não vai para produção

### `config/`
- Arquivos de configuração (JSON, YAML, etc)
- Variáveis de ambiente
- Arquivos estáticos de configuração

### `shared/`
**Código reutilizável entre cliente e servidores**

- `types/` - Interfaces TypeScript compartilhadas
- `constants/` - Valores constantes globais (ex: cookie names, time values)
- `utils/` - Funções utilitárias puras (ex: formatDate, deepClone)

### `client/src/components/`
**Organizado por tipo e responsabilidade**

- `sections/` - Componentes grandes de seção (AboutSection, Projects, etc)
- `layout/` - Componentes que definem layout (ErrorBoundary, Layout wrapper)
- `ui/` - Componentes de UI reutilizáveis e primitivos (Button, Input, Badge)

### `client/src/services/`
- Integração com APIs externas (EmailJS)
- Lógica de chamadas HTTP
- Serviços de terceiros

### `client/src/hooks/`
- Custom React hooks
- Lógica reutilizável

### `client/src/contexts/`
- React Context providers (temas, auth, etc)

## 📦 Importações Recomendadas

```typescript
// ✅ Tipos compartilhados
import type { ProjectData } from "@shared/types";

// ✅ Constantes compartilhadas
import { COOKIE_NAME } from "@shared/constants";

// ✅ Utilitários compartilhados
import { formatDate } from "@shared/utils";

// ✅ Componentes de seção
import AboutSection from "@/components/sections/AboutSection";

// ✅ Componentes de UI
import { Button } from "@/components/ui/button";

// ✅ Serviços
import { sendEmail } from "@/services/email";

// ✅ Hooks
import { useTheme } from "@/contexts/ThemeContext";
```

## 🚀 Próximas Melhorias

- [ ] Adicionar mais tipos em `shared/types/`
- [ ] Expandir utilitários em `shared/utils/`
- [ ] Criar mais serviços conforme necessário
- [ ] Considerar adicionar `client/src/store/` para state management (Zustand/Redux)
- [ ] Adicionar `client/src/utils/` para utilitários específicos do frontend

---

**Última atualização:** Feb 26, 2026
