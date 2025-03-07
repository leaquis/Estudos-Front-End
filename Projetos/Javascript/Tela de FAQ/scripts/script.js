const headers = document.querySelectorAll(".accordion-header");
const accordionItems = document.querySelectorAll(".accordion-item");

headers.forEach(function(header) {

    header.addEventListener("click", function() {
        const item = this.parentNode;

        const isActive = item.classList.contains("accordion-item--active");

        //remove todas as classes "accordion-item--active" dos itens
        accordionItems.forEach(function(item) {
            item.classList.remove("accordion-item--active");
            item.classList.add("accordion-item--close");
        });       
        
        //a função acima vai dar um "reset" nas FAQs e deixar todas fechadas para a proxima abrir apenas a que foi clicada

        //adiciona a classe "accordion-item--active" no item clicado
        if(!isActive) {
            item.classList.add("accordion-item--active");
            item.classList.remove("accordion-item--close");
        }
    });
});
