/****************************************************/
/* ELEMENTOS */
/****************************************************/

const modal = document.getElementById("hobbyModal");

const modalTitle = document.querySelector(".modal-title");
const modalText = document.querySelector(".modal-text");
const modalImage = document.querySelector(".modal-image");
const modalVideo = document.querySelector(".modal-video");

const modalCounter = document.querySelector(".modal-counter");

const btnPrev = document.querySelector(".modal-prev");
const btnNext = document.querySelector(".modal-next");
const btnClose = document.querySelector(".modal-close");

const hobbyLinks = document.querySelectorAll("[data-hobby]");
let hobbyActual = 0;

/****************************************************/
/* DATOS */
/****************************************************/

const aficiones = [
    //-- PADEL
    {
        titulo: "Pádel",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/MHtmDsgf/padel.png"},
            {
                text: `
                    <p><b>Juego a través de:</b> Partidos competitivos de la APP de <a href="https://playtomic.io/" target="_blank">Playtomic</a></p>
                    <p><b>Mi nivel:</b> 3</p>
                    <p><b>Rango de mis contrincantes:</b> 2,4 - 3,4</p>
                `
            },
            {
                text: `<p><b>Vídeo sobre mí jugando al pádel:</b></p>`,
                video: "https://streamable.com/e/skh8vt"
            }
        ]
    },
    //-- NUTRICION
    {
        titulo: "Nutrición",
        pagina: 0,
        pages: [
            {
                text: `
                    <p><b>¿Qué es la nutrición?:</b></p>
                    <ul>
                        <p>
                            Es un conjunto de procesos biológicos, involuntarios y celulares mediante los cuales el organismo ingiere,
                            absorbe y asimila los nutrientes de los alimentos
                        </p>
                    </ul>
                    <p><b>¿Y la nutrición deportiva?:</b></p>
                    <ul>
                        <p>
                            Es la rama de la dietética especializada en las personas que practican deporte. Su objetivo principal
                            es adaptar la alimentación a las necesidades del ejercicio para optimizar el rendimiento físico, acelerar
                            la recuperación tras el esfuerzo y prevenir lesiones
                        </p>
                        <p>
                            Hay tres conceptos a tener en cuenta:
                            <ul>
                                <p>1. Aporte de energía => para adaptar la ingesta de carbohidratos (principal combustible)
                                según la intensidad y duración de la actividad</p>
                                <p>2. Reparación y desarrollo muscular => para utilizar las proteínas, reparar los tejidos
                                dañados durante el ejercicio y favorecer la hipertrofia</p>
                                <p>3. Regulación y salud => para emplear grasas saludables, vitaminas y minerales (micronutrientes),
                                mantener el sistema inmunológico fuerte y regular el metabolismo</p>
                            </ul>
                        </p>
                    </ul>
                `
            },
            {
                text: `
                    <p><b>Personalización según el tipo de deporte:</b></p>
                    <p>Las necesidades nutricionales varían drásticamente dependiendo de la disciplina que practiques:</p>
                    <ul>
                        <p>1. Deportes de resistencia => requieren de una alta carga de carbohidratos para mantener los niveles
                        de glucógeno y una correcta hidratación y reposición de electrolitos</p>
                        <p>2. Deportes de fuerza y potencia => requieren un mayor hincapié en el consumo proteico
                        para favorecer el aumento de la masa muscular</p>
                    </ul>
                `
            },
            {
                text: `
                    <p><b>¿Qué comprar para llevar una buena nutrición?:</b></p>
                    <img src="https://i.postimg.cc/PJwxRHmB/Listado-Compra-im-igenes-0.jpg"/>
                `
            },
            {img: "https://i.postimg.cc/tgt5n0wb/Listado-Compra-im-igenes-1.jpg"},
            {img: "https://i.postimg.cc/3wCB0MVH/Listado-Compra-im-igenes-2.jpg"},
            {img: "https://i.postimg.cc/TPq958F6/Listado-Compra-im-igenes-3.jpg"},
            {img: "https://i.postimg.cc/tgt5n0wZ/Listado-Compra-im-igenes-4.jpg"},
            {img: "https://i.postimg.cc/TPq958Fm/Listado-Compra-im-igenes-5.jpg"},
            {img: "https://i.postimg.cc/7LMVJvd0/Listado-Compra-im-igenes-6.jpg"},
            {img: "https://i.postimg.cc/8CBHf89L/Listado-Compra-im-igenes-7.jpg"},
            {img: "https://i.postimg.cc/Qt8qp4ZT/Listado-Compra-im-igenes-8.jpg"},
            {img: "https://i.postimg.cc/gJzKvSbh/Listado-Compra-im-igenes-9.jpg"},
            {img: "https://i.postimg.cc/xCfPKxVL/Listado-Compra-im-igenes-10.jpg"},
            {img: "https://i.postimg.cc/FRrxjWXj/Listado-Compra-im-igenes-11.jpg"},
            {img: "https://i.postimg.cc/SsSGWTbf/Listado-Compra-im-igenes-12.jpg"},
            {img: "https://i.postimg.cc/d1s98Hc9/Listado-Compra-im-igenes-13.jpg"},
            {img: "https://i.postimg.cc/SsSGWTbd/Listado-Compra-im-igenes-14.jpg"},
            {
                text: `
                    <p><b>¿Qué desayunar para llevar una buena nutrición?:</b></p>
                    <img src="https://i.postimg.cc/qBXW2SVV/Desayunar-page-0001.jpg"/>
                `
            },
            {img: "https://i.postimg.cc/k4hqCHnh/Desayunar-page-0002.jpg"},
            {img: "https://i.postimg.cc/DZYnhN2R/Desayunar-page-0003.jpg"},
            {img: "https://i.postimg.cc/cH50Wzsk/Desayunar-page-0004.jpg"},
            {img: "https://i.postimg.cc/pT1RvS27/Desayunar-page-0005.jpg"},
            {
                text: `
                    <p><b>Receta 1 para llevar una buena nutrición:</b></p>
                    <img src="https://i.postimg.cc/9XtsyK5h/Receta1.png"/>
                `
            },
            {
                text: `
                    <p><b>Receta 2 para llevar una buena nutrición:</b></p>
                    <img src="https://i.postimg.cc/ZYFX62tz/Receta2.png"/>
                `
            },
            {
                text: `
                    <p><b>Receta 3 para llevar una buena nutrición:</b></p>
                    <img src="https://i.postimg.cc/SQ7Hc3F0/IMG-20260612-WA0003.jpg"/>
                `
            }
        ]
    },
    //-- GYM
    {
        titulo: "Gym",
        pagina: 0,
        pages: [
            {
                text: `<p><b>Vídeo sobre mí entrenando en el gimnasio:</b></p>`,
                video: "https://streamable.com/e/93rn4c"
            },
            {
                text: `
                    <p>El gimnasio donde entreno se llama: <b>Corpore Fit-365</b></p>
                    <p><b>Web:</b> <a href="https://corporefit365.com/" target="_blank">Acceso</a></p>
                    <p><b>Contacto:</b> info@corporefit365.com</p>
                    <p><b>Ubicación:</b> <a href="https://maps.app.goo.gl/h4tBZbczhbBmcwRa8" target="_blank">Avenida Quitapesares, 44, 28670 Villaviciosa de Odón, Madrid, España</a></p>
                `,
                img: "https://i.postimg.cc/XJ3NRnpZ/IMG-20260614-WA0000.jpg"
            },
            {
                text: `<p><b>Mi progresión en el gimnasio:</b></p>`,
                img: "https://i.postimg.cc/MKhwkzFN/IMG20260312221435.jpg"
            },
            {img: "https://i.postimg.cc/TYZx8TsX/IMG20260309192412.jpg"},
            {img: "https://i.postimg.cc/dtzFMJxb/MG-0797.jpg"},
            {img: "https://i.postimg.cc/ZK1mkJMX/MG-0798.jpg"},
            {
                text: `<p><b>Vídeo sobre mi reto 5 min Plancha Abdomen:</b></p>`,
                video: "https://streamable.com/e/p5b0h0"
            }
        ]
    },
    //-- VAN LIFE
    {
        titulo: "Van life",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/GmtGL78g/001.png"},
            {img: "https://i.postimg.cc/BQq2yQq0/002.png"}
        ]
    },
    //-- HELICOPTER EXPERIENCE
    {
        titulo: "Helicopter experience",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/fTHJc7Gq/IMG-20251012-165659.png"},
            {img: "https://i.postimg.cc/fTxb1RsW/IMG-20251012-142831-086.webp"},
            {img: "https://i.postimg.cc/wThBnjzT/IMG-20251012-143003-822.webp"},
            {img: "https://i.postimg.cc/FzX4x073/IMG-20251012-140146-353.webp"},
            {img: "https://i.postimg.cc/RhxBTwNf/IMG-20251012-141236.png"},
            {img: "https://i.postimg.cc/Kj7yp4Mk/IMG-20251012-141304.png"},
            {video: "https://streamable.com/e/gb0olf"},
            {img: "https://i.postimg.cc/Pxtz95NY/IMG-20251012-143521.png"},
            {img: "https://i.postimg.cc/g0yHgZcy/IMG-20251012-143543.png"},
            {img: "https://i.postimg.cc/LXHBw8hZ/IMG-20251012-143557.png"},
            {img: "https://i.postimg.cc/g0yHgZcX/IMG-20251012-143806-748.webp"},
            {video: "https://streamable.com/e/8xvl3p"}
        ]
    },
    //-- PAPIROFLEXIA
    {
        titulo: "Papiroflexia",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/50ZcKRcH/1.jpg"},
            {video: "https://streamable.com/e/mdw08o"},
            {img: "https://i.postimg.cc/tg4Hs6tg/2.jpg"},
            {img: "https://i.postimg.cc/cJkGwJXB/3.jpg"},
            {img: "https://i.postimg.cc/ydJ4PzG4/4.jpg"},
            {img: "https://i.postimg.cc/KjL66DF0/5.jpg"},
            {img: "https://i.postimg.cc/WpkcqTr0/6.jpg"},
            {img: "https://i.postimg.cc/BQf9xkck/7.jpg"},
            {img: "https://i.postimg.cc/c47qThFH/8.jpg"}
        ]
    },
    //-- IA MUSICAL
    {
        titulo: "IA Musical",
        pagina: 0,
        pages: [
            {video: "https://streamable.com/e/pt2zmc"},
            {video: "https://streamable.com/e/03ds8t"},
            {video: "https://streamable.com/e/xz81ah"},
            {video: "https://streamable.com/e/euyokb"},
            {video: "https://streamable.com/e/eevhb0"},
            {video: "https://streamable.com/e/53mvce"},
            {video: "https://streamable.com/e/6u5uwx"}
        ]
    },
    //-- IA VISUAL
    {
        titulo: "IA Visual",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/bJPPVVP8/1.png"},
            {img: "https://i.postimg.cc/j2dbtWCF/2.png"},
            {img: "https://i.postimg.cc/cHcSp713/3.png"},
            {img: "https://i.postimg.cc/VNn1RQ3D/4.png"},
            {img: "https://i.postimg.cc/fR3MV054/5.png"},
            {img: "https://i.postimg.cc/9QvCZFND/6.png"},
            {img: "https://i.postimg.cc/1579RKGc/7.png"},
            {img: "https://i.postimg.cc/L689MW18/8.png"},
            {img: "https://i.postimg.cc/T1RR17NQ/9.png"},
            {img: "https://i.postimg.cc/xjRfhQqZ/10.png"},
            {img: "https://i.postimg.cc/rsQqr1vT/11.png"}
        ]
    },
    //-- COCHES
    {
        titulo: "Coches",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/d3Rp0QXF/1.jpg"},
            {img: "https://i.postimg.cc/Pf1ByKq7/2.jpg"},
            {img: "https://i.postimg.cc/28mgKvbS/3.jpg"},
            {img: "https://i.postimg.cc/GhQ6w2GJ/4.jpg"},
            {img: "https://i.postimg.cc/GmmVcCj0/5.jpg"},
            {img: "https://i.postimg.cc/mgpqk5dP/6.jpg"},
            {img: "https://i.postimg.cc/g0w7ZH5N/7.jpg"},
            {img: "https://i.postimg.cc/VN3VBbP1/8.jpg"},
            {img: "https://i.postimg.cc/3RmbLJ3G/9.jpg"},
            {img: "https://i.postimg.cc/FzvCw5KB/10.jpg"},
            {img: "https://i.postimg.cc/T1cN67LY/11.jpg"},
            {img: "https://i.postimg.cc/9XPnZM85/12.jpg"},
            {img: "https://i.postimg.cc/BQqwg0k8/13.jpg"},
            {img: "https://i.postimg.cc/hPpZZYR2/14.jpg"},
            {img: "https://i.postimg.cc/W1zWB72T/15.jpg"},
            {img: "https://i.postimg.cc/kgH1qt48/16.jpg"},
            {img: "https://i.postimg.cc/fb0HLTtP/17.jpg"},
            {img: "https://i.postimg.cc/mDfmFf7g/18.jpg"},
            {img: "https://i.postimg.cc/QtQ0Q4qk/19.jpg"},
            {img: "https://i.postimg.cc/XqnxQfHM/20.jpg"},
            {img: "https://i.postimg.cc/sxKm8MqM/21.jpg"},
            {img: "https://i.postimg.cc/mZSmhnkT/22.jpg"},
            {img: "https://i.postimg.cc/dtt4C9Zr/23.jpg"},
            {img: "https://i.postimg.cc/WbWSwJ0K/24.jpg"},
            {img: "https://i.postimg.cc/RZWdsVR0/25.jpg"},
            {img: "https://i.postimg.cc/vZCzpFqt/26.jpg"},
            {img: "https://i.postimg.cc/hGxrnyNW/27.jpg"},
            {img: "https://i.postimg.cc/Kz2587yK/28.jpg"},
            {img: "https://i.postimg.cc/XJkkGZVs/29.jpg"},
            {img: "https://i.postimg.cc/2yjF4zyr/30.jpg"},
            {img: "https://i.postimg.cc/pr0QCg58/31.jpg"},
            {img: "https://i.postimg.cc/2jTxCB96/32.jpg"},
            {img: "https://i.postimg.cc/c4HBC4Pc/33.jpg"},
            {img: "https://i.postimg.cc/zXcSgYrY/34.jpg"},
            {img: "https://i.postimg.cc/W1qmmYNF/35.jpg"},
            {img: "https://i.postimg.cc/FKtyTbzP/36.jpg"},
            {img: "https://i.postimg.cc/G2dkCckG/37.jpg"},
            {img: "https://i.postimg.cc/fbxxp30M/38.jpg"},
            {img: "https://i.postimg.cc/HxzbWf2K/39.jpg"},
            {img: "https://i.postimg.cc/j2jPDZ3j/40.jpg"},
            {img: "https://i.postimg.cc/MZs1CJXf/41.jpg"},
            {img: "https://i.postimg.cc/qqZnyyWx/42.jpg"},
            {img: "https://i.postimg.cc/CLzbYrfP/43.jpg"},
            {img: "https://i.postimg.cc/NfSm086g/44.jpg"},
            {img: "https://i.postimg.cc/qvKn6tw2/45.jpg"},
            {img: "https://i.postimg.cc/fbhdcwqp/46.jpg"},
            {img: "https://i.postimg.cc/g0qZ4ffJ/47.jpg"},
            {img: "https://i.postimg.cc/B6S1zm0C/48.jpg"},
            {img: "https://i.postimg.cc/gJg6b3cb/49.jpg"},
            {img: "https://i.postimg.cc/y6SfTXQL/50.png"},
            {img: "https://i.postimg.cc/vT93HbgJ/51.png"}
        ]
    },
    //-- DIBUJO
    {
        titulo: "Dibujo",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/6qjWQhFt/1.jpg"},
            {img: "https://i.postimg.cc/0j25x4WV/2.jpg"}
        ]
    },
    //-- VLOGS
    {
        titulo: "Vlogs",
        pagina: 0,
        pages: [
            {video: "https://streamable.com/e/122r66"},
            {video: "https://streamable.com/e/rldhmr"},
            {video: "https://streamable.com/e/63krjm"},
            {video: "https://streamable.com/e/g1sbjn"},
            {video: "https://streamable.com/e/qrj2nj"},
            {video: "https://streamable.com/e/6q1ny5"}
        ]
    },
    //-- LIGAS FANTASY jugadas
    {
        titulo: "Ligas Fantasy jugadas",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/PJv3nfBf/1.png"},
            {img: "https://i.postimg.cc/MHfPJZhp/2.png"},
            {img: "https://i.postimg.cc/hvQyR4Hj/3.png"},
            {img: "https://i.postimg.cc/sxG6Cft2/4.png"},
            {img: "https://i.postimg.cc/wMRfYxSq/5.png"},
            {img: "https://i.postimg.cc/vTxqw8pH/6.png"},
            {img: "https://i.postimg.cc/8cfKgkqc/7.png"}
        ]
    },
    //-- MODA
    {
        titulo: "Moda",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/66nDQ84C/001.png"},
            {img: "https://i.postimg.cc/NfxS1Z4M/002.png"},
            {img: "https://i.postimg.cc/7Y4jJqSd/003.png"},
            {img: "https://i.postimg.cc/6qJg0Xg7/004.png"},
            {img: "https://i.postimg.cc/9MqsZM85/005.png"},
            {img: "https://i.postimg.cc/R0YjWfTL/006.png"},
            {img: "https://i.postimg.cc/7h3ctRrK/007.png"},
            {img: "https://i.postimg.cc/13vxZbnT/008.png"},
            {img: "https://i.postimg.cc/6Qqk6zCQ/009.png"},
            {img: "https://i.postimg.cc/ZKFtwWTJ/010.png"},
            {img: "https://i.postimg.cc/T3d8FTwg/011.png"},
            {img: "https://i.postimg.cc/QxrZgQZ6/012.png"},
            {img: "https://i.postimg.cc/8kvVry9J/013.png"},
            {img: "https://i.postimg.cc/rsDCKZZX/IMG-20250419-131150.png"},
            {img: "https://i.postimg.cc/1XDhhtwc/014.png"}, 
            {img: "https://i.postimg.cc/xCwD4HJ1/015.png"},
            {img: "https://i.postimg.cc/7PncJ2CL/nike-Platinum.png"},
            {img: "https://i.postimg.cc/GmHSfgXB/nike-AI.png"}, 
            {img: "https://i.postimg.cc/fbTfrSF6/nikejordanazules.png"},
            {img: "https://i.postimg.cc/6QjfJ5xT/nikejordanmidpatentbwg.png"}, 
            {img: "https://i.postimg.cc/sxFnqD57/chaqueta.png"}, 
            {img: "https://i.postimg.cc/5NchqyX7/IMG-20250903-095121.png"}
        ]
    },
    //-- FOOTBALL EVENTS
    {
        titulo: "Eventos futbolísticos",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/7Zd24Kcc/1.png"},
            {img: "https://i.postimg.cc/526CDhPL/2.png"},
            {img: "https://i.postimg.cc/vHPnqYvG/3.png"},
            {img: "https://i.postimg.cc/sDfS4Q7n/4.png"},
            {img: "https://i.postimg.cc/66fnZL22/5.png"}, 
            {img: "https://i.postimg.cc/fyCdhDnj/6.png"},
            {img: "https://i.postimg.cc/nrpm5M5h/7.png"}, 
            {img: "https://i.postimg.cc/vBW9350K/8.png"}, 
            {img: "https://i.postimg.cc/LXdLtx3f/9.png"},
            {img: "https://i.postimg.cc/jjnynpPt/10.png"}, 
            {img: "https://i.postimg.cc/ht59jDJ2/11.png"}, 
            {img: "https://i.postimg.cc/Z5R84Bq9/12.png"},
            {img: "https://i.postimg.cc/xTgvwy9D/13.png"},
            {img: "https://i.postimg.cc/X7nK1DSk/14.png"}, 
            {img: "https://i.postimg.cc/BbBTQ2DF/15.png"},
            {img: "https://i.postimg.cc/c1RMmGjJ/16.png"}, 
            {img: "https://i.postimg.cc/0jsGsV6x/17.png"}, 
            {img: "https://i.postimg.cc/zBWw6sG0/18.png"},
            {img: "https://i.postimg.cc/8C7mBJQ8/19.png"}, 
            {img: "https://i.postimg.cc/nLNYdFpX/20.png"}, 
            {img: "https://i.postimg.cc/L8CV1kWB/21.png"},
            {img: "https://i.postimg.cc/RZVRhpgZ/22.png"}, 
            {img: "https://i.postimg.cc/Kv5fZhrW/23.png"}, 
            {img: "https://i.postimg.cc/GhRzwmYY/24.png"},
            {img: "https://i.postimg.cc/SR6r2B0J/25.png"}, 
            {img: "https://i.postimg.cc/qByQ53t4/26.png"}, 
            {img: "https://i.postimg.cc/QCGmMXy2/27.png"},
            {img: "https://i.postimg.cc/C1fJYZmC/28.png"}, 
            {img: "https://i.postimg.cc/fRB8vQVd/29.png"}, 
            {img: "https://i.postimg.cc/KYWQd7rv/30.png"},
            {img: "https://i.postimg.cc/g2YMR22d/31.png"}, 
            {img: "https://i.postimg.cc/fbyB2qdr/32.png"}, 
            {img: "https://i.postimg.cc/50Z7F56k/33.png"},
            {img: "https://i.postimg.cc/5NWK43cX/34.png"}, 
            {img: "https://i.postimg.cc/jq7kY11V/35.png"}, 
            {img: "https://i.postimg.cc/1XwW0gFR/36.png"},
            {video: "https://streamable.com/e/sfq2wr"},
            {img: "https://i.postimg.cc/tR5BdZ7J/38.png"}, 
            {img: "https://i.postimg.cc/90J1cSsZ/39.png"}, 
            {img: "https://i.postimg.cc/sDgwTjZc/40.png"},
            {video: "https://streamable.com/e/gyi6ao"},
            {img: "https://i.postimg.cc/FKwR1g26/42.png"}, 
            {img: "https://i.postimg.cc/9Q8zHj1C/43.png"}, 
            {img: "https://i.postimg.cc/R0WhMbbf/44.png"},
            {video: "https://streamable.com/e/bbcu4a"},
            {img: "https://i.postimg.cc/XvYHX9w9/46.png"},
            {video: "https://streamable.com/e/embdxm"},
            /* España Campeona del Mundo 2026 */
            {img: "https://i.postimg.cc/T19pv6kH/descripcion-mundial.png"},
            {img: "https://i.postimg.cc/NfFgjmL6/IMG-20260720-WA0014.jpg"},
            {img: "https://i.postimg.cc/wMV7YpfY/IMG-20260722-125825-323.jpg"},
            {video: "https://streamable.com/e/ist7ko"},
            {video: "https://streamable.com/e/zwjeiz"},
            {img: "https://i.postimg.cc/gjDnbWMf/IMG-20260722-125902-825.jpg"},
            {video: "https://streamable.com/e/vjv0ps"},
            {img: "https://i.postimg.cc/sDxVg71p/IMG-20260720-WA0015.jpg"},
            {video: "https://streamable.com/e/636cv7"}
        ]
    },
    //-- RELAJACION
    {
        titulo: "Relajación",
        pagina: 0,
        pages: [
            {video: "https://streamable.com/e/a59e6g"}
        ]
    },
    //-- MIS RELIQUIAS
    {
        titulo: "Mis reliquias",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/CMshcF68/1.png"},
            {img: "https://i.postimg.cc/SRdmRrzd/2.png"},
            {img: "https://i.postimg.cc/RFrSDqB7/3.png"},
            {img: "https://i.postimg.cc/6qt9BSTT/4.png"},
            {video: "https://streamable.com/e/wxanpx"},
            {img: "https://i.postimg.cc/RVCM8jjD/6.png"},
            {img: "https://i.postimg.cc/fTHwh8sT/7.png"},
            {img: "https://i.postimg.cc/Nj5QGRG8/8.png"},
            {img: "https://i.postimg.cc/N0VdcZyW/IMG-20250822-182108.png"},
            {img: "https://i.postimg.cc/XvXstnvf/IMG-20250822-182340.png"}
        ]
    },
    //-- MIS SERIES DE TV FAVORITAS
    {
        titulo: "Mis series de TV favoritas",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/DwpRrfnS/1.png"},
            {img: "https://i.postimg.cc/VvZ7hPHB/18.jpg"},
            {img: "https://i.postimg.cc/C5xPJxJx/17.jpg"},
            {img: "https://i.postimg.cc/1XKjfsv5/2.png"},
            {img: "https://i.postimg.cc/2yYtkVFK/3.png"},
            {img: "https://i.postimg.cc/bJkMfQbn/4.png"},
            {img: "https://i.postimg.cc/DztDNCWF/5.png"},
            {img: "https://i.postimg.cc/hGJ6pFtp/6.png"},
            {img: "https://i.postimg.cc/T33Z55M8/7.png"},
            {video: "https://streamable.com/e/mushpp"},
            {img: "https://i.postimg.cc/YqZNw6TJ/8.jpg"},
            {img: "https://i.postimg.cc/43Qhx972/9.png"},
            {img: "https://i.postimg.cc/7Lk24V6T/10.png"},
            {img: "https://i.postimg.cc/W1rkxK2v/11.png"},
            {img: "https://i.postimg.cc/TYBb7Gv0/12.png"},
            {img: "https://i.postimg.cc/wMvNPjBf/13.png"},
            {img: "https://i.postimg.cc/DySsP0Hm/14.png"},
            {img: "https://i.postimg.cc/SRv9pb2y/15.png"},
            {img: "https://i.postimg.cc/597LzLPZ/16.png"}
        ]
    },
    //-- ARTE CALLEJERO
    {
        titulo: "Street Art",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/FKdzSqjY/1.jpg"},
            {img: "https://i.postimg.cc/KjF8d8CT/2.jpg"},
            {img: "https://i.postimg.cc/C1bKPqrY/3.jpg"},
            {img: "https://i.postimg.cc/k504vccf/4.jpg"},
            {img: "https://i.postimg.cc/C5NxYVVQ/5.jpg"},
            {img: "https://i.postimg.cc/gkz0srVF/6.jpg"},
            {img: "https://i.postimg.cc/y6Xd00Sy/7.jpg"},
            {img: "https://i.postimg.cc/9FLQnVb4/8.jpg"},
            {img: "https://i.postimg.cc/Mp4KzDhq/9.jpg"},
            {img: "https://i.postimg.cc/bwdwXMVm/10.jpg"}
        ]
    },
    //-- TENIS
    {
        titulo: "Tenis",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/cL6Pwt6r/tenis.png"},
            {
                text: `
                    <p><b>Juego a través de:</b> Partidos competitivos de la APP de <a href="https://playtomic.io/" target="_blank">Playtomic</a></p>
                    <p><b>Mi nivel:</b> 1</p>
                    <p><b>Rango de mis contrincantes:</b> 0,5 - 1,5</p>
                `
            }
        ]
    },
    //-- MOUNTAIN BIKE
    {
        titulo: "Mountain Bike",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/J0K5qTSt/bike.png"},
            {
                text: `<p><b>Vídeo sobre mí haciendo mountain bike:</b></p>`,
                video: "https://streamable.com/e/r7373x"
            }
        ]
    },
    //-- ESCALADA
    {
        titulo: "Escalada",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/yxnyPf2k/escalada.png"},
            {
                text: `<p><b>Vídeo sobre mí haciendo escalada:</b></p>`,
                video: "https://streamable.com/e/fvee31"
            }
        ]
    },
    //-- NATACION
    {
        titulo: "Natación",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/qqQxLmWh/natacion.png"},
            {
                text: `<p><b>Vídeo sobre mí haciendo natación:</b></p>`,
                video: "https://streamable.com/e/68701l"
            }
        ]
    },
    //-- PADEL SURF
    {
        titulo: "Pádel Surf",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/GtzxQM6s/padelsurf.png"},
            {
                text: `<p><b>Vídeo sobre mí haciendo pádel surf:</b></p>`,
                video: "https://streamable.com/e/l7d4ip"
            }
        ]
    },
    //-- QUAD
    {
        titulo: "Quad",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/66hct3q0/quad.png"},
            {
                text: `<p><b>Vídeo sobre mí montando en quad (01/06/2025):</b></p>`,
                video: "https://streamable.com/e/pdqpgx"
            }
        ]
    },
    //-- SURF
    {
        titulo: "Surf",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/Dfc6nZ0P/surf.png"},
            {
                text: `<p><b>Experiencia surfera en el Honna Surf Hub (Alcorcón):</b></p>`,
                video: "https://streamable.com/e/m951fz"
            }
        ]
    },
    //-- TIROLINAS
    {
        titulo: "Tirolinas",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/3rZ1YRN1/tirolinas.png"},
            {
                text: `<p><b>Vídeo sobre mí en las tirolinas de Cercedilla:</b></p>`,
                video: "https://streamable.com/e/haoavt"
            }
        ]
    },
    //-- CALISTENIA
    {
        titulo: "Calistenia",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/KYnt9RXH/fit-man-working-out-in-climbing-parcour-doing-pull-royalty-free-image-1600264048.avif"},
            {
                text: `<p><b>Vídeo sobre mí haciendo calistenia:</b></p>`,
                video: "https://streamable.com/e/sxi9v5"
            },
            {
                text: `<p><b>Otros vídeos:</b></p>`,
                video: "https://streamable.com/e/qqblmj"
            },
            {video: "https://streamable.com/e/mnmvpt"}
        ]
    },
    //-- COCINA
    {
        titulo: "Cocina",
        pagina: 0,
        pages: [
            {img: "https://i.postimg.cc/k4NHQJXN/tipos-de-cocina-opt.jpg"},
            {
                text: `
                    <p><b>Receta de Salmorejo:</b></p>
                    <p>Ingredientes:</p>
                    <ul>
                        <p>- 1 Kg de tomates pera</p>
                        <p>- 1/2 barra de pan</p>
                        <p>- 1/2 cucharada de ajo en polvo o 1/2 diente de ajo</p>
                        <p>- 1 cucharada de vinagre</p>
                        <p>- 1 cucharada de sal</p>
                        <p>- Aceite de oliva para emulsionar</p>
                        <p>- 2 huevos frescos</p>
                    </ul>
                `,
                img: "https://i.postimg.cc/Bvxp2Xsm/2.jpg"
            },
            {
                text: `
                    <p><b>Preparación de Salmorejo (para 6 personas):</b></p>
                    <ul>
                        <p>1º) Cuece los huevos en una cacerola con agua (cubriendo los huevos), vinagre y sal. Cuando empiece a hervir el agua (con los huevos dentro), empieza a contar los 12 min de coción</p>
                        <p>2º) Tira el agua de la cacerola, enfría los huevos ya cocidos, pélalos y resérvalos en el frigorífico</p>
                        <p>3º) Bate con la batidora todos los tomates hasta que estén totalmente líquidos</p>
                        <p>4º) Bate con la batidora todo el pan hasta que la mezcla esté totalmente líquida</p>
                        <p>5º) Echa el ajo en polvo (o medio diente de ajo), la sal y el vinagre y mézclalo con la batidora</p>
                        <p>6º) Echa muy poco a poco el aceite de oliva, mientras bates al mismo tiempo, para que emulsione la mezcla y dé lugar al Salmorejo</p>
                        <p>7º) Opcionalmente, déjalo reposar en el frigorífico y después, sírvelo y ¡a disfrutar!</p>
                    </ul>
                `,
                video: "https://streamable.com/e/lsfoyw"
            },
            {
                text: `
                    <p><b>Receta de Pastel de brócoli, queso y zanahoria:</b></p>
                    <p>Ingredientes:</p>
                    <ul>
                        <p>- 1 árbol de brócoli</p>
                        <p>- 2 zanahorias</p>
                        <p>- Aceite de oliva</p>
                        <p>- 1 cebolla blanca</p>
                        <p>- 1 brick de leche evaporada</p>
                        <p>- 4 huevos</p>
                        <p>- Sal</p>
                        <p>- Pimienta negra molida</p>
                        <p>- 1 bolsa de queso mozzarella rallado</p>
                    </ul>
                `,
                img: "https://i.postimg.cc/SKCCr292/5.png"
            },
            {
                text: `
                    <p><b>Preparación de Pastel de brócoli, queso y zanahoria (para 6 personas):</b></p>
                    <ul>
                        <p>1º) Cuece el brócoli, córtalo y resérvalo en un bowl aparte</p>
                        <p>2º) En una sartén con aceite de oliva (o aceite de girasol), rehoga la cebolla picada durante 4 minutos y luego, agregar la zanahoria picada para cocinarla durante 3-4 minutos. Reserva la mezcla en un bowl aparte</p>
                        <p>3º) Bate los huevos frescos y sazona con sal y pimienta negra molida a gusto</p>
                        <p>4º) Añade la leche evaporada y el queso mozarella y mezclarlo bien</p>
                        <p>5º) Incorpora a esa mezcla, el brócoli y la zanahoria picada</p>
                        <p>6º) Mezcla todo bien</p>
                        <p>7º) Prepara un molde de cristal de 20 cm de radio, pon papel de horno y añade copos de avena hasta cubrir el fondo</p>
                        <p>8º) Vierte toda la mezcla realizada previamente en el molde, e introdúcelo en el horno a 180°C durante 30 minutos</p>
                        <p>9º) Deja reposarlo unos minutos a temperatura ambiente antes de cortarlo y servirlo</p>
                    </ul>
                `
            },
            {
                text: `
                    <p><b>Receta de Arroz con champiñones y salsa de curry:</b></p>
                    <p>Ingredientes:</p>
                    <ul>
                        <p>- 500 g de arroz cocido</p>
                        <p>- 3 vasos con caldo de Avecrem</p>
                        <p>- 200 gramos de champiñones laminados cortados</p>
                        <p>- 3 cucharadas de curry</p>
                        <p>- 2 dientes ajo o 2 cucharadas de ajo en polvo</p>
                        <p>- Sal al gusto</p>
                        <p>- Perejil al gusto</p>
                        <p>- Pimienta negra al gusto</p>
                        <p>- 1 vaso de vino blanco</p>
                    </ul>
                `,
                img: "https://i.postimg.cc/HnhrHd51/9.png"
            },
            {
                text: `
                    <p><b>Preparación de Arroz con champiñones y salsa de curry:</b></p>
                    <ul>
                        <p>1º) Trocea los ajos en rodajitas mientras hervimos agua con un avecrem</p>
                        <p>2º) Sofríe los ajos en una olla hasta que estén dorados</p>
                        <p>3º) Añade el arroz y remueve con una espátula</p>
                        <p>4º) Añade 2 cucharadas de curry</p>
                        <p>5º) Añade el caldo de Avecrem, sal y perejil</p>
                        <p>6º) Deja que se cocine durante 12 min</p>
                        <p>7º) Al empezar a hervir, baja la potencia de la vitrocerámica y cocina a fuego lento</p>
                        <p>8º) Lava los champiñones y en otra sartén cocínalos, añadiendo sal, pereji, una pizca de pimienta negra y 1 cucharada de curry</p>
                        <p>9º) Añade 1 vaso de vino blanco</p>
                        <p>10º) Mézclalo bien y deja que se evapore el alcohol</p>
                        <p>11º) Junta el arroz y los champiñones, remuévelo y listo</p>
                    </ul>
                `,
                video: "https://streamable.com/e/jlope4"
            },
            {
                text: `
                    <p><b>Receta de Arroz con garbanzos y salsa de curry:</b></p>
                    <p>Ingredientes:</p>
                    <ul>
                        <p>- 200 g de arroz SOS</p>
                        <p>- 200 g de garbanzos cocidos</p>
                        <p>- 2 cucharadas de curry amarillo</p>
                        <p>- 120 ml de leche semidesnatada</p>
                        <p>- Aceite de oliva</p>
                        <p>- Sal</p>
                        <p>- Perejil</p>
                    </ul>
                `,
                img: "https://i.postimg.cc/PxMDgg2d/6.png"
            },
            {
                text: `
                    <p><b>Preparación de Arroz con garbanzos y salsa de curry:</b></p>
                    <ul>
                        <p>1º) Cuece los garbanzos en una cacerola</p>
                        <p>2º) En una sartén grande, calienta un poco de aceite y añade los garbanzos cocidos junto con la leche semidesnatada y el curry amarillo. Condimenta con sal al gusto</p>
                        <p>3º) Cocina la mezcla a fuego medio hasta que la salsa se reduzca y los sabores se intensifiquen</p>
                        <p>4º) Cocina el arroz en una olla hasta que esté al dente. Una vez listo, resérvalo para más adelante</p>
                        <p>5º) Sirve el arroz en un bol y coloca los garbanzos al curry al lado. Decora con perejil fresco para un toque de color y frescura, ¡y a disfrutar!</p>
                    </ul>
                `
            },
            {
                text: `
                    <p><b>Receta de Tortilla de patata:</b></p>
                    <p>Ingredientes:</p>
                    <ul>
                        <p>- 4 patatas medianas</p>
                        <p>- 5 huevos</p>
                        <p>- 1 cebolla mediana</p>
                        <p>- 1/4 de litro de aceite de oliva</p>
                        <p>- Sal al gusto</p>
                    </ul>
                `,
                img: "https://i.postimg.cc/brCtJ17M/7.png"
            },
            {
                text: `
                    <p><b>Preparación de Tortilla de patata:</b></p>
                    <ul>
                        <p>1º) Pela, lava y seca las patatas</p>
                        <p>2º) Cortarlas en rodajas finas</p>
                        <p>3º) Introducelas en una sartén honda con el aceite de oliva a temperatura media para que se cuezan lentamente</p>
                        <p>4º) Agrega la cebolla cortada finita</p>
                        <p>5º) Fríela lentamente con las patatas hasta que estén blandas y empiecen a dorarse</p>
                        <p>6º) Remueve con la espumadera</p>
                        <p>7º) Corta con la misma los ingredientes</p>
                        <p>8º) Pasados 10 minutos, escurre el aceite</p>
                        <p>9º) Bate en un cuenco los huevos con un poco de sal</p>
                        <p>10º) Agrega la mezcla de las patatas con la cebolla</p>
                        <p>11º) Pon de nuevo la sartén con un poco del aceite escurrido y añade toda la mezcla</p>
                        <p>12º) Déjalo a fuego lento tapando la sartén durante unos 5 ó 10 minutos, hasta que se dore por abajo</p>
                        <p>13º) Da la vuelta a la tortilla sobre sí misma con la ayuda de una tapadera y déjala caer por el otro lado en la sartén hasta que se cuaje despacio</p>
                        <p>14º) Finalmente, cuando la tortilla esté dorada por ambos lados, significa que está lista para servir</p>
                    </ul>
                `
            },
            {
                text: `
                    <p><b>Receta de Gazpacho:</b></p>
                    <p>Ingredientes:</p>
                    <ul>
                        <p>- 1350 g de tomate</p>
                        <p>- 150 g de pepino</p>
                        <p>- 135 g de pimiento verde</p>
                        <p>- 1 diente de ajo o 1 cucharada de ajo en polvo</p>
                        <p>- 100 g de migas de pan</p>
                        <p>- 120 ml de aceite de oliva virgen extra</p>
                        <p>- 30 ml de vinagre</p>
                        <p>- 600 ml de agua</p>
                        <p>- Sal al gusto</p>
                    </ul>
                `,
                img: "https://i.postimg.cc/3NJGYtcm/8.png"
            },
            {
                text: `
                    <p><b>Preparación de Gazpacho (para 6 personas):</b></p>
                    <ul>
                        <p>1º) Lava muy bien todas las hortalizas</p>
                        <p>2º) Pela el pepino y cortalo desechando los extremos</p>
                        <p>3º) Corta también el pimiento verde, retirándole las semillas y las venas interiores</p>
                        <p>4º) Corta los tomates, quitándoles siempre el pedúnculo verde</p>
                        <p>5º) Pela el diente de ajo y retirale el germen interior</p>
                        <p>6º) Pon en un bol la miga de pan con el agua fría para que se vaya ablandando</p>
                        <p>7º) Incorpora en un bol grande, todas las hortalizas, el ajo, la sal, el aceite de oliva virgen extra, el vinagre, la miga de pan y el agua</p>
                        <p>8º) Bate con una batidora a máxima potencia hasta conseguir una textura líquida y uniforme, sin ningún grumo ni resto de piel o pepitas</p>
                        <p>9º) Prueba el gazpacho para comprobar el punto de sal y para ver si hice falta echarle algo más de agua</p>
                        <p>10º) Cuélalo para que quede con una textura aún más fina y no notemos ningún grumo que pueda haber por las semillas o la piel de los tomates</p>
                        <p>11º) Mételo en la nevera una hora como mínimo para que esté bien fresquito</p>
                        <p>12º) Finalmente, sírvelo frío en tazas o cuencos hondos</p>
                        <p>OPCIONALMENTE:</p>
                        <p>13º) Pon de guarnición: trocitos de tomate, pepino y pimiento verde</p>
                        <p>14º) Echa por encima un chorrito de aceite de oliva virgen extra</p>
                    </ul>
                `
            },
            {
                text: `
                    <p><b>Receta de Pasta con salsa carbonara y bacon:</b></p>
                    <p>Ingredientes:</p>
                    <ul>
                        <p>- 500 g de pasta</p>
                        <p>- 2 huevos</p>
                        <p>- 1/2 brick de nata para cocinar</p>
                        <p>- Leche al gusto</p>
                        <p>- Ajo en polvo al gusto</p>
                        <p>- Sal al gusto</p>
                        <p>- Perejil al gusto</p>
                        <p>- Canela al gusto</p>
                        <p>- Pimienta negra al gusto</p>
                        <p>- 1/2 envase de bacon</p>
                    </ul>
                `,
                img: "https://i.postimg.cc/qMNtw6VJ/10.png"
            },
            {
                text: `
                    <p><b>Preparación de Pasta con salsa carbonara y bacon:</b></p>
                    <ul>
                        <p>1º) Pon a cocer la pasta</p>
                        <p>2º) Haz la salsa carbonara, mezclando: los huevos, la nata, la leche, el ajo en polvo, la sal, el perejil, la canela y la pimienta negra</p>
                        <p>3º) Dora en una sartén el bacon</p>
                        <p>4º) Remueve en la sartén: la pasta, el bacon y la salsa carbonara</p>
                        <p>5º) Sirve con queso rayado por encima</p>
                    </ul>
                `
            },
            {
                text: `
                    <p><b>Receta de Queso provolone al horno con huevo y salsa de tomate:</b></p>
                    <p>Ingredientes:</p>
                    <ul>
                        <p>- 1 queso provolone con orégano</p>
                        <p>- Salsa de tomate</p>
                        <p>- Un huevo fresco</p>
                    </ul>
                `,
                img: "https://i.postimg.cc/sD4ZP7ZQ/3.jpg"
            },
            {
                text: `
                    <p><b>Preparación de Queso provolone al horno con huevo y salsa de tomate:</b></p>
                    <ul>
                        <p>1º) Precalienta el horno a 200º, arriba y abajo</p>
                        <p>2º) Coge un cuenco/plato de barro donde preparar al horno y servir el queso provolone</p>
                        <p>3º) Esparce la salsa de tomate por todo el cuenco/plato sin dejar ningún hueco</p>
                        <p>4º) Pon encima el queso provolone</p>
                        <p>5º) Rompe un huevo fresco y separa la yema de la clara, quedándonos con lo primero</p>
                        <p>6º) Pon la yema encima del queso provolone</p>
                        <p>7º) Si el horno está preparado y suficientemente caliente, introduce el cuenco/plato de barro con el queso provolone y el resto de ingredientes en él</p>
                        <p>8º) Cuando veas y notes que ya está cocinado, sácalo sin quemarte, sírvelo y ¡a comer!</p>
                    </ul>
                `
            }
        ]
    }
];

function renderModal() {
    const hobby = aficiones[hobbyActual];
    const page = hobby.pages[hobby.pagina];
    modalTitle.textContent = hobby.titulo;
    modalCounter.textContent = `${hobby.pagina+1} / ${hobby.pages.length}`;

    /************ TEXTO ************/
    if(page.text){
        modalText.innerHTML = page.text;
        modalText.style.display="block";
    }else{
        modalText.innerHTML="";
        modalText.style.display="none";
    }

    /************ IMAGEN ************/
    if(page.img){
        modalImage.src = page.img;
        modalImage.style.display="block";
    }else{
        modalImage.removeAttribute("src");
        modalImage.style.display="none";
    }

    /************ VIDEO ************/
    if(page.video){
        modalVideo.src = page.video;
        modalVideo.style.display="block";
    }else{
        modalVideo.removeAttribute("src");
        modalVideo.style.display="none";
    }
}

/* Abrir modal */
hobbyLinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        hobbyActual = Number(link.dataset.hobby);
        aficiones[hobbyActual].pagina = 0;
        renderModal();
        modal.classList.add("active");
    });
});

/* Cerrar modal */
btnClose.addEventListener("click",cerrarModal);
modal.addEventListener("click",(e)=>{
    if(e.target===modal){
        cerrarModal();
    }
});
document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        cerrarModal();
    }
});
function cerrarModal(){
    modal.classList.remove("active");
    modalVideo.removeAttribute("src");
}

/* Siguiente Página */
btnNext.addEventListener("click",()=>{
    const hobby = aficiones[hobbyActual];
    hobby.pagina++;
    if(hobby.pagina>=hobby.pages.length){
        hobby.pagina=0;
    }
    renderModal();
});

/* Anterior página */
btnPrev.addEventListener("click",()=>{
    const hobby = aficiones[hobbyActual];
    hobby.pagina--;
    if(hobby.pagina<0){
        hobby.pagina=hobby.pages.length-1;
    }
    renderModal();
});