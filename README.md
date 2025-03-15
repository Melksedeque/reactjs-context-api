# Dogpedia - Explorador Interativo de Raças de Cachorro com Imagens em Tempo Real

Dogpedia é uma aplicação moderna em React que oferece uma maneira interativa de explorar raças de cachorro e suas características. A aplicação busca dados em tempo real de múltiplas APIs de cachorro para exibir informações abrangentes sobre diferentes raças, junto com imagens atualizadas dinamicamente.

A aplicação combina dados da TheDogAPI e Dog.CEO API para fornecer informações detalhadas sobre raças, incluindo temperamento, expectativa de vida, grupo da raça e propósito, junto com imagens de alta qualidade. Os usuários podem clicar em qualquer raça para ver seus detalhes e uma imagem selecionada aleatoriamente que muda a cada interação, tornando a experiência de exploração dinâmica e envolvente.

## Estrutura do Repositório

```
.
├── src/                      # Diretório principal do código-fonte
│   ├── api/                  # Definições de tipos e interfaces da API
│   ├── components/           # Componentes React organizados por funcionalidade
│   │   ├── Cabecalho/       # Componente do cabeçalho com título e status
│   │   ├── ListaRacas/      # Componente da lista de raças de cachorro
│   │   ├── RacaSelecionada/ # Exibição de detalhes da raça selecionada
│   │   └── Status/          # Componente de mensagem de status
│   ├── context/             # Definições de contexto React
│   ├── hooks/               # Hooks React personalizados para integração com API
│   └── App.tsx              # Componente principal da aplicação
├── public/                  # Ativos estáticos e template HTML
├── vite.config.ts          # Configuração de build do Vite
└── package.json            # Dependências e scripts do projeto
```

## Instruções de Uso

### Pré-requisitos

- Node.js (v14.0.0 ou superior)
- npm (v6.0.0 ou superior) ou yarn
- Navegador web moderno com JavaScript habilitado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Melksedeque/reactjs-context-api

# Navegue até o diretório do projeto
cd reactjs-context-api

# Instale as dependências
npm install
# ou
yarn install
```

### Início Rápido

1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

2. Abra seu navegador e acesse `http://localhost:5173`

3. Clique em qualquer raça de cachorro da lista para ver informações detalhadas e uma imagem aleatória dessa raça.

### Exemplos Mais Detalhados

```typescript
// Buscando informações da raça
const { racas, loading, error } = useApi();

// Selecionando uma raça específica
const selecionaRaca = async (raca: string) => {
  setRacaSelecionada(raca);
  const response = await fetch(
    `https://dog.ceo/api/breed/${raca.toLowerCase()}/images/random`
  );
  const data = await response.json();
  setImagemRaca(data.message);
};
```

### Solução de Problemas

1. Limite de Taxa da API

   - Problema: "Não foi possível buscar informações da raça"
   - Solução: Verifique a configuração da chave da API em `useApi.ts`
   - Depuração: Habilite o registro do console com `console.log(response)`

2. Problemas no Carregamento de Imagens
   - Problema: Imagens não são exibidas
   - Solução: Verifique a conectividade de rede e endpoints da API
   - Localização: Verifique o console do navegador para erros de rede

## Fluxo de Dados

A aplicação gerencia o fluxo de dados através de uma combinação de hooks React e contexto, buscando informações sobre raças e imagens de APIs externas.

```ascii
[Entrada do Usuário] -> [Componente ListaRacas]
      ↓
[Requisições API] -> [TheDogAPI] -> [Info da Raça]
                    [Dog.CEO API] -> [Imagens da Raça]
      ↓
[Gerenciamento de Estado] -> [Componente RacaSelecionada]
      ↓
[Atualização UI] -> [Exibe Info Atualizada e Imagem]
```

Interações principais dos componentes:

1. Hook useApi gerencia requisições à API e busca de dados
2. Componente App coordena o estado entre componentes
3. ListaRacas exibe as raças disponíveis para seleção
4. RacaSelecionada mostra informações detalhadas sobre a raça selecionada
5. Contexto Status fornece feedback ao usuário sobre atualizações de imagem
