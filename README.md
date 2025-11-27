# Power Coffee ☕

Uma aplicação web moderna para e-commerce de café premium desenvolvida com **Next.js**, **React** e **TypeScript**. O projeto combina um design elegante com animações suaves e componentes interativos.

## 📋 Sobre o Projeto

Power Coffee é um site de vendas de café especial desenvolvido para programadores que buscam concentração e energia. O projeto apresenta:

- **Homepage** com hero section e call-to-action
- **Página de Produtos** com catálogo de cafés
- **Seção de Avaliações** de clientes
- **Formulário de Contato** com validação
- **Barra de Pesquisa** com debounce
- **Ícone do Instagram** com animações
- **Design Responsivo** para mobile e desktop
- **Animações CSS** suaves e modernas

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14.0+
- **Linguagem**: TypeScript 5
- **UI Library**: React 18.2
- **Estilos**: CSS3 com animações
- **Node.js**: v16+ recomendado
- **Package Manager**: npm

## 📁 Estrutura do Projeto

```
website/
├── pages/
│   ├── _app.tsx              # App wrapper (importa CSS global)
│   └── index.tsx             # Página principal
├── components/
│   ├── SearchBar.tsx         # Componente de busca com debounce
│   ├── ContactForm.tsx       # Formulário de contato com validação
│   └── InstagramIcon.tsx     # Ícone do Instagram com animações
├── styles/
│   ├── globals.css           # Estilos globais e animações
│   └── style.css             # Estilos originais (legado)
├── img/                       # Pasta de imagens
│   ├── logo.png
│   ├── about-img.jpg
│   ├── product.png
│   └── ... (outras imagens)
├── public/                    # Arquivos estáticos (Next.js)
├── globals.d.ts             # Declaração de tipos para CSS
├── next-env.d.ts            # Referências do Next.js
├── tsconfig.json            # Configuração do TypeScript
├── package.json             # Dependências do projeto
├── package-lock.json        # Lock file de dependências
├── next.config.js           # Configuração do Next.js
├── index.html               # HTML original (legado)
└── README.md                # Este arquivo
```

## 🎨 Componentes

### SearchBar.tsx
- Barra de pesquisa com ícone
- Debounce de 300ms
- Callback customizável
- Animações no hover

### ContactForm.tsx
- Validação de nome, email e mensagem
- Mensagens de erro personalizadas
- Toast de sucesso ao enviar
- Foco automático no campo de nome

### InstagramIcon.tsx
- Ícone do Instagram customizável
- Animações de scale e rotate
- Link para perfil do Instagram
- Acessibilidade (aria-label)

## 🎬 Animações CSS

O projeto inclui as seguintes animações:

- **slideUp**: Slide-up com fade-in para o formulário
- **shake**: Animação de tremida para campos com erro
- **toastSlideIn/Out**: Slide in/out para notificações
- **fadeInUp**: Fade-in com movimento para cards
- **buttonPulse**: Pulse animation para botões
- **Hover Effects**: Scale, rotate e glow effects

## 🔧 Configuração TypeScript

O projeto usa as seguintes configurações:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "moduleResolution": "Bundler",
    "jsx": "preserve",
    "strict": false,
    "skipLibCheck": true,
    "esModuleInterop": true
  }
}
```

## 📱 Responsividade

O projeto é totalmente responsivo com suporte para:
- Desktop (1920px e acima)
- Tablet (768px - 1024px)
- Mobile (até 767px)

## 🎯 Próximas Melhorias

- [ ] Integração com carrinho de compras
- [ ] Página de detalhes do produto
- [ ] Sistema de avaliações dinâmico
- [ ] Integração de pagamento (Stripe/PayPal)
- [ ] Dashboard administrativo
- [ ] API Backend (Node.js + Express)
- [ ] Autenticação de usuários
- [ ] Testes unitários (Jest)
- [ ] E2E tests (Cypress)

## 📞 Contato e Suporte

Para dúvidas ou sugestões, entre em contato através do formulário no site.

## 📄 Licença

Este projeto é licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido com muito ☕.

---

**Última atualização:** 26 de Novembro de 2025
**Versão:** 1.0.0
