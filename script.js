// ========================================
// MENU MOBILE
// ========================================

function toggleMenu() {

    const menu =
        document.getElementById("menu");

    menu.classList.toggle("active");

}


// ========================================
// TUTUP MENU SAAT LINK DIKLIK
// ========================================

const menuLinks =
    document.querySelectorAll("#menu a");


menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const menu =
            document.getElementById("menu");

        menu.classList.remove("active");

    });

});
