 // Menu mobile
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Formulário de contato
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Orçamento solicitado! Entraremos em contato em breve.');
            this.reset();
        });

        // Navegação suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Carregar imagem do hero
        fetch('https://api.unsplash.com/photos/random?query=web%20design&client_id=PnMZCoOkM5LAZV4yk0dG_S4_TIkWIs007o7xs4AJfA4')
            .then(response => response.json())
            .then(data => {
                const heroSection = document.getElementById('hero');
                heroSection.style.backgroundImage = `url(${data.urls.full})`;
            })
            .catch(error => {
                console.error('Erro ao carregar imagem do hero:', error);
                // Fallback para imagem estática
                document.getElementById('hero').style.backgroundImage = `url('https://images.unsplash.com/photo-1467232004584-400ff8856561?auto=format&fit=crop&w=1200')`;
            });

        // Carregar galeria do Unsplash
        fetch('https://api.unsplash.com/photos/random?query=web%20design&count=6&client_id=PnMZCoOkM5LAZV4yk0dG_S4_TIkWIs007o7xs4AJfA4')
            .then(response => response.json())
            .then(data => {
                const gallery = document.getElementById('portfolioGallery');
                data.forEach(photo => {
                    const img = document.createElement('img');
                    img.src = photo.urls.small;
                    img.alt = photo.alt_description || 'Exemplo de design de website';
                    img.className = 'w-full h-48 object-cover rounded-lg';
                    gallery.appendChild(img);
                });
            })
            .catch(error => {
                console.error('Erro ao carregar imagens:', error);
                document.getElementById('portfolioGallery').innerHTML = '<p class="text-center text-gray-600">Erro ao carregar portfólio. Tente novamente mais tarde.</p>';
            });