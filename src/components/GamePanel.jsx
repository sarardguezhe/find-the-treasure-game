import { useState } from "react";

const initialPanel = [
    [{img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}],
    [{img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}],
    [{img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}],
    [{img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}, {img:'./img/middle-earth-map.jpg'}],
  ];

const failImages= ['./img/gollum-01.png', './img/gollum-02.webp', './img/gollum-03.png', './img/gollum-04.png']; 

const x= Math.floor(Math.random() * 4);
const y= Math.floor(Math.random() * 4);


export default function GamePanel (){

    const [panel, setPanel] = useState(initialPanel);

    const checkGame = (rowId, colId) =>{

        const copyPanel = [...panel];

        if (x === rowId && y === colId) {
            copyPanel[rowId][colId].img = './img/the-ring.png';
        } else {
            copyPanel[rowId][colId].img = failImages[Math.floor(Math.random() * 4)];
        }

        setPanel(copyPanel);
    }

    return <table>
            <tbody>
            {panel.map((row, rowId) =>
                <tr key={rowId}>
                    {row.map((item, colId) =>
                        <td key={colId}>
                        <img src={item.img} alt='panel de juego' width='120px' onClick={()=> checkGame(rowId, colId)}/>
                        </td>
                    )}
                </tr>
                )}
            </tbody>
        </table>
}