# Portfólio de Hélio Paulo

> Portfólio pessoal com interface inspirada em terminal para apresentar projetos de sistemas inteligentes, automação, web e inteligência artificial.

- **Site:** [dev-hp.github.io/dev-portforlio](https://dev-hp.github.io/dev-portforlio/)
- **Autor:** [Hélio Paulo Leite de Lima](https://github.com/Dev-HP)
- **Status:** ativo, com deploy no GitHub Pages

## Por que este projeto existe

O portfólio organiza projetos técnicos em uma experiência interativa, mas a informação principal deve continuar acessível mesmo sem animações, teclado ou estado local. O objetivo é permitir que uma pessoa recrutadora, cliente ou colaboradora entenda rapidamente o posicionamento profissional, veja evidências e encontre os repositórios correspondentes.

## Características

| Área | Descrição |
|---|---|
| Identidade | Tema terminal/hacker com navegação interativa e animações. |
| Acessibilidade de uso | Navegação por teclado e layout responsivo para desktop e mobile. |
| Contato | Formulário integrado ao EmailJS e links profissionais. |
| Materiais | Download de currículo em PDF e links para projetos. |
| Publicação | Build e deploy automatizados no GitHub Pages. |

## Demonstração visual

![Perfil do autor](client/public/profile.jpg)

Adicione também uma captura da tela inicial e um GIF curto mostrando a navegação entre os projetos. A primeira tela deve oferecer uma alternativa clara para acessar projetos, currículo e contato sem depender de esperar a animação de inicialização.

## Stack

- React 18 e TypeScript
- Vite e Tailwind CSS
- Framer Motion, Radix UI e Lucide React
- React Hook Form e Zod
- EmailJS
- GitHub Pages e GitHub Actions

## Execução local

```bash
git clone https://github.com/Dev-HP/dev-portforlio.git
cd dev-portforlio
pnpm install
cp .env.example .env
pnpm dev
```

Acesse o endereço exibido pelo Vite. Para testar o formulário de contato, configure as credenciais do EmailJS somente no arquivo local de ambiente.

## Scripts

```bash
pnpm dev       # desenvolvimento
pnpm build     # build de produção
pnpm preview   # preview do build
pnpm check     # tipos TypeScript
pnpm format    # formatação
```

## Estrutura

```text
client/src/components/   seções de sobre, projetos, habilidades e contato
client/src/pages/        páginas e estados de navegação
client/src/hooks/        hooks reutilizáveis
client/public/           favicon e currículo
.github/workflows/       automação de deploy
EMAILJS_SETUP.md         configuração do formulário
```

## Conteúdo e curadoria

Os projetos apresentados devem ter links funcionais, README próprio e uma descrição em formato de case: problema, solução, tecnologias, resultado e limitações. Evite listar ferramentas sem evidência visual ou sem explicar a decisão técnica.

## Deploy

O deploy é executado por GitHub Actions após push para a branch `main`. A URL pública é:

```text
https://dev-hp.github.io/dev-portforlio/
```

## Licença

Este projeto está sob a licença [MIT](LICENSE).
