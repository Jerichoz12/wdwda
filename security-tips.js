document.addEventListener('DOMContentLoaded', function() {
    const sidebarButtons = document.querySelectorAll('.sidebar-btn');
    const aiContent = document.querySelector('.ai-content');
    const readMoreBtn = document.querySelector('.read-more');
    let isExpanded = false;

    // Show AI content when clicking Artificial Intelligence button
    sidebarButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'Artificial Intelligence') {
                aiContent.style.display = 'block';
                window.scrollTo({
                    top: aiContent.offsetTop - 100,
                    behavior: 'smooth'
                });
            } else {
                aiContent.style.display = 'none';
            }
        });
    });

    // Toggle read more/less
    if (readMoreBtn) {
        const fullText = document.querySelector('.effort-content p').textContent;
        const shortText = fullText.substring(0, 200) + '...';
        
        readMoreBtn.addEventListener('click', function() {
            const paragraph = document.querySelector('.effort-content p');
            isExpanded = !isExpanded;
            
            if (isExpanded) {
                paragraph.textContent = fullText;
                this.textContent = 'READ LESS ▲';
            } else {
                paragraph.textContent = shortText;
                this.textContent = 'READ MORE ▼';
            }
        });
    }
});