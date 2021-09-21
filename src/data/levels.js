import locnar from "../assets/locnar.jpg"
import ryuk from "../assets/Ryuk.png";
import stewie from "../assets/Stewie.png";
import ash from "../assets/Ash.png";
import universe from "../assets/universe113.jpg"
import waldo from "../assets/waldo.png"
import johnny from "../assets/johnny.png"
import r2d2 from "../assets/r2d2.png"



const levels = [

    {
        name: "Loc Nar",
        img: locnar,
        characters: [
            {
                name: "Ryuk",
                img: ryuk,
              },
              {
                name: "Stewie",
                img: stewie,
              },
              {
                name: "Ash",
                img: ash,
              },
        ]
    },
    {
        name: "Universe 113",
        img: universe,
        characters: [
            {
                name: "Waldo",
                img: waldo,
              },
              {
                name: "R2-D2",
                img: r2d2,
              },
              {
                name: "Johnny",
                img: johnny,
              },
        ]


    }

]

export default levels;