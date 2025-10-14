function toggleDarkMode() {
    // Elementos del modo oscuro
    const darkVideo = document.getElementById('video-background');
    const darkContent = document.getElementById('main-content');
    const darkButton = document.getElementById('socket');
    const darkIcon = document.getElementById('socket-icon');
    
    // Elementos del modo claro
    const lightVideo = document.getElementById('video-background-light');
    const lightContent = document.getElementById('main-content-light');
    
    // Verificar si estamos en modo oscuro actualmente
    const isDarkMode = darkContent.classList.contains('hidden');
    
    if (isDarkMode) {
        // Cambiar a MODO OSCURO
        darkContent.classList.remove('hidden');
        darkVideo.classList.remove('hidden');
        lightContent.classList.add('hidden');
        lightVideo.classList.add('hidden');
        
        // Actualizar botón
        darkButton.className = 'toggle-button-dark';
        darkIcon.className = 'icon-dark';
        
        console.log('Cambiando a modo OSCURO');
    } else {
        // Cambiar a MODO CLARO
        darkContent.classList.add('hidden');
        darkVideo.classList.add('hidden');
        lightContent.classList.remove('hidden');
        lightVideo.classList.remove('hidden');
        
        // Actualizar botón
        darkButton.className = 'toggle-button-light';
        darkIcon.className = 'icon-light';
        
        console.log('Cambiando a modo CLARO');
    }
}

// Inicializar en modo oscuro al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const darkContent = document.getElementById('main-content');
    const lightContent = document.getElementById('main-content-light');
    const darkVideo = document.getElementById('video-background');
    const lightVideo = document.getElementById('video-background-light');
    
    // Asegurar que empiece en modo oscuro
    darkContent.classList.remove('hidden');
    darkVideo.classList.remove('hidden');
    lightContent.classList.add('hidden');
    lightVideo.classList.add('hidden');
    
    console.log('Página iniciada en modo OSCURO');
});