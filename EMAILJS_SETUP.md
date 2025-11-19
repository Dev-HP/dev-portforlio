# 📧 Configuração do EmailJS

Este guia explica como configurar o EmailJS para que o formulário de contato do portfólio envie emails reais.

## 🚀 Passo a Passo

### 1. Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em **"Sign Up"** (é gratuito - 200 emails/mês)
3. Confirme seu email

### 2. Adicionar Serviço de Email

1. No dashboard, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor (Gmail recomendado)
4. Siga as instruções para conectar sua conta
5. Anote o **Service ID** (ex: `service_abc123`)

### 3. Criar Template de Email

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template:

**Subject (Assunto):**
```
Nova mensagem de {{from_name}} - Portfolio
```

**Content (Conteúdo):**
```
Você recebeu uma nova mensagem através do seu portfólio!

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato do portfólio
```

4. Clique em **"Save"**
5. Anote o **Template ID** (ex: `template_xyz789`)

### 4. Obter Public Key

1. Vá em **"Account"** → **"General"**
2. Encontre a seção **"Public Key"**
3. Copie a chave (ex: `abcdefghij1234567`)

### 5. Configurar no Projeto

Edite o arquivo `.env` na raiz do projeto:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghij1234567
```

**⚠️ IMPORTANTE:** Não commite o arquivo `.env` com suas credenciais reais!

### 6. Testar

1. Reinicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```

2. Acesse o portfólio e vá na seção de contato
3. Preencha o formulário e envie
4. Verifique seu email!

## 🔒 Segurança

- O `.env` já está no `.gitignore` (não será enviado ao GitHub)
- Para o GitHub Pages, adicione as variáveis nas **Settings** → **Secrets and variables** → **Actions**
- As credenciais do EmailJS são seguras para uso no frontend (Public Key)

## 🆘 Problemas Comuns

### Email não chega
- Verifique a pasta de spam
- Confirme que o serviço está ativo no EmailJS
- Verifique os logs no console do navegador

### Erro de CORS
- Certifique-se de que o domínio está autorizado no EmailJS
- Adicione `https://dev-hp.github.io` na lista de domínios permitidos

### Limite de emails excedido
- Plano gratuito: 200 emails/mês
- Considere upgrade se necessário

## 📚 Recursos

- [Documentação EmailJS](https://www.emailjs.com/docs/)
- [Exemplos de Templates](https://www.emailjs.com/docs/examples/reactjs/)
- [FAQ](https://www.emailjs.com/docs/faq/)

---

**Dica:** Após configurar, teste enviando uma mensagem para você mesmo!
