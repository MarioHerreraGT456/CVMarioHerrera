document.addEventListener('DOMContentLoaded', function() {
        const splashScreen = document.getElementById('splash-screen');
        const mainContent = document.getElementById('main-content');

        // Establecer un tiempo de espera igual o ligeramente mayor a la transición CSS (0.5s)
        const transitionDuration = 500; // 500ms = 0.5 segundos

        function hideSplashScreen() {
            // 1. Aplica la clase de zoom/fade-out
            // ¡Esto inicia la animación de acercamiento y transparencia!
            splashScreen.classList.add('splash-zoom-out');

            // 2. Espera a que la animación termine
            setTimeout(() => {
                // 3. Oculta la pantalla de carga completamente
                splashScreen.style.display = 'none'; 
                
                // 4. Muestra el contenido principal
                mainContent.classList.remove('hidden');

                // Opcional: Eliminar el listener
                splashScreen.removeEventListener('click', hideSplashScreen);
            }, transitionDuration + 50); // 550ms: Espera 50ms extra para asegurar la transición completa
        }

        // Agrega el listener de clic
        splashScreen.addEventListener('click', hideSplashScreen);
    });