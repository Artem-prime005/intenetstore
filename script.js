document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', (e) => {
                // Если ссылки пустые (#), отменяем переход по умолчанию
                if(button.getAttribute('href') === '#') {
                    e.preventDefault();
                }
                
                const platform = button.getAttribute('data-platform');
                console.log(`Користувач переходить на: ${platform}`);
                      });
        });