Vue.config.devtools = true;

const app = new Vue ({
    el: "#root",
    data: {
        nome: "Michele",
        cognome: "Ierniero",
        classi: "orange size",
        immagine: "./img/repin.jpg" // bonus
    },
    methods: {
        saluta: function () {
            return alert("Ciao" + " " + this.nome + " " + this.cognome + "!");
        },
        ricolora : function () {
            (this.classi == "orange size") ? this.classi = "blue size": this.classi = "orange size" 
        }
    }
});

// document.write(app.saluta());