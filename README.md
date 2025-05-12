# WebMaster

Landing Page para Criação de Websites



Uma landing page moderna e responsiva para promover serviços de criação de websites, desenvolvida com HTML, Tailwind CSS e JavaScript. A página integra a Unsplash API para carregar dinamicamente imagens na seção hero e na galeria de portfólio, oferecendo uma experiência visual atraente e interativa.

📖 Descrição

Esta landing page foi projetada para atrair clientes interessados em serviços de desenvolvimento web, como sites institucionais, lojas virtuais e otimização SEO. A página é totalmente funcional no lado do cliente, sem necessidade de backend, e inclui cinco seções principais: cabeçalho com navegação, hero, serviços, portfólio, depoimentos e formulário de contato. A integração com a Unsplash API adiciona dinamismo ao carregar imagens aleatórias relacionadas a "web design".



✨ Funcionalidades


Navegação Responsiva: Menu fixo com rolagem suave e menu colapsável para dispositivos móveis.

Seção Hero Dinâmica: Imagem de fundo carregada aleatoriamente via Unsplash API.

Galeria de Portfólio: Exibe 6 imagens de projetos fictícios, também carregadas dinamicamente.

Formulário de Contato: Simula o envio de solicitações de orçamento com validação no cliente.

Depoimentos: Exibe comentários fictícios de clientes para aumentar a credibilidade.

Responsividade: Design ajustado para telas de todos os tamanhos, com layout otimizado para mobile.

Acessibilidade: Textos alternativos para imagens e suporte a navegação por teclado.


🛠️ Tecnologias Utilizadas


HTML5: Estrutura semântica da página.

Tailwind CSS: Estilização moderna e responsiva.

JavaScript: Interatividade, incluindo navegação suave, formulário e integração com API.

Unsplash API: Carregamento dinâmico de imagens para o hero e portfólio.


📋 Pré-requisitos

Navegador moderno (ex.: Chrome, Firefox, Safari).

Conexão à internet (para carregar imagens da Unsplash API).

Chave de API do Unsplash (obtida em Unsplash Developers).


🚀 Instalação e Configuração

Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

Obtenha a chave da Unsplash API:

Acesse Unsplash Developers e crie uma conta.

Registre um novo aplicativo para obter a Access Key.

Abra o arquivo landing-page.html e substitua SUA_API_KEY nas duas chamadas fetch pela sua chave real:

fetch('https://api.unsplash.com/photos/random?query=web%20design&client_id=SUA_API_KEY')
fetch('https://api.unsplash.com/photos/random?query=web%20design&count=6&client_id=SUA_API_KEY')



Abra o arquivo landing-page.html em um navegador (ex.: arraste o arquivo para o Chrome ou use um servidor local como Live Server no VS Code).


🖱️ Como Usar

Navegação:

Clique nos links do menu para rolar suavemente até as seções (Início, Serviços, Portfólio, Depoimentos, Contato).

Em dispositivos móveis, clique no ícone ☰ para abrir o menu.

Seção Hero:

A imagem de fundo muda a cada carregamento, carregada dinamicamente via Unsplash API.

Portfólio:

Veja 6 imagens de exemplo na seção de portfólio, representando projetos de web design.

Formulário de Contato:

Preencha o formulário com nome, email e mensagem.

Clique em "Enviar" para ver uma mensagem de confirmação (simulada com um alerta).

Teste de Erros:

Se a chave da API for inválida, a seção hero usará uma imagem estática de fallback, e a galeria exibirá uma mensagem de erro.


🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

Faça um fork do repositório.

Crie uma branch para sua feature:

git checkout -b minha-feature

Faça commit das suas alterações:

git commit -m "Adiciona minha feature"

Envie para o repositório remoto:

git push origin minha-feature


Abra um Pull Request.

Por favor, siga o Código de Conduta (crie um, se necessário).

📜 Licença

Este projeto está licenciado sob a MIT License.
