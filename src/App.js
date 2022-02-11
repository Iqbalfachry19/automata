import { useState } from "react";
import "./App.css";

function App() {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [search, setSearch] = useState("");
  const [hasilNama, setHasilNama] = useState("");
  const [hasilNim, setHasilNim] = useState("");

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const scan = async () => {
    let huruf = [
      " ",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let angka = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    setHasilNama("");
    setHasilNim("");
    for (let i = 0; i < nama.length; i++) {
      for (let a = 0; a < huruf.length; a++) {
        setSearch(huruf[a].toString());

        if (huruf[a] === nama.split("")[i]) {
          await sleep(10);
        } else {
          await sleep(10);
        }
        setSearch("");
        if (huruf[a] === nama.split("")[i]) {
          break;
        }
      }
      setSearch(nama.split("")[i].toString());

      setHasilNama((alphabet) => alphabet + nama.split("")[i]);
      await sleep(1000);
    }
    setHasilNama(nama);
    for (let i = 0; i < nim.length; i++) {
      for (let a = 0; a < angka.length; a++) {
        setSearch(angka[a].toString());

        if (angka[a] === nim.split("")[i]) {
          await sleep(1000);
        } else {
          await sleep(100);
        }
        setSearch("");
        if (angka[a] === nim.split("")[i]) {
          break;
        }
      }
      setSearch(nim.split("")[i]);
      setHasilNim((alphabet) => alphabet + nim.split("")[i]);
      await sleep(1000);
    }
    setHasilNim(nim);
  };

  const run = () => {
    console.log(nama);
    console.log(nim);

    scan();
  };

  return (
    <div className="App">
      <div className="flex flex-col">
        <div className="flex flex-col ">
          <label className="" htmlFor="nama">
            Nama:
          </label>
          <input
            type="text"
            placeholder=""
            className="border-2 text-center"
            id="nama"
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="flex flex-col  ">
          <label className="" htmlFor="nim">
            Nim:
          </label>
          <input
            type="text"
            className="border-2 text-center"
            placeholder=""
            onChange={(e) => setNim(e.target.value)}
            id="nim"
          />
        </div>
      </div>
      <div className="flex flex-col ">
        <label className="" htmlFor="search">
          Search:
        </label>
        <input
          type="text"
          className="border-2 text-center"
          value={search}
          readOnly
          id="search"
        />
      </div>
      <div className="flex flex-col">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={run}
          type="submit"
        >
          Run
        </button>
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          className="border-2"
          placeholder=""
          value={hasilNama}
          readOnly
          id="name"
        />
        <input
          type="text"
          className="border-2"
          placeholder=""
          value={hasilNim}
          readOnly
          id="nim"
        />
      </div>
    </div>
  );
}

export default App;
