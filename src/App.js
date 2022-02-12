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
    <div className="max-w-2xl mx-auto h-[90%] my-10 align-middle rounded-lg bg-indigo-300">
      <h1 className="flex text-4xl pt-10 font-bold text-blue-600 justify-center">
        Automata App
      </h1>
      <div className="flex space-y-10 lg:space-y-0 flex-col lg:flex-row p-10 justify-between">
        <div className="flex space-y-1  flex-col">
          <div className="flex   space-x-2">
            <label className="flex" htmlFor="nama">
              Nama:
            </label>
            <input
              type="text"
              placeholder=""
              className="focus:outline-none flex-1 py-1 rounded-lg text-center"
              id="nama"
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="flex space-x-5">
            <label className="flex" htmlFor="nim">
              Nim:
            </label>
            <input
              type="text"
              className="focus:outline-none flex-1 py-1 rounded-lg text-center"
              placeholder=""
              onChange={(e) => setNim(e.target.value)}
              id="nim"
            />
          </div>
        </div>

        <div className="flex space-x-2">
          <label className="flex items-center " htmlFor="search">
            Search:
          </label>
          <input
            type="text"
            className="focus:outline-none flex-1 py-1 rounded-lg text-center"
            value={search}
            readOnly
            id="search"
          />
        </div>
      </div>
      <div className="flex p-10 flex-col my-10">
        <button
          className="rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          onClick={run}
          type="submit"
        >
          Run
        </button>
      </div>
      <div className="flex p-10 space-y-1 flex-col">
        <input
          type="text"
          className="focus:outline-none py-1 rounded-lg text-center"
          placeholder=""
          value={hasilNama}
          readOnly
          id="name"
        />
        <input
          type="text"
          className="focus:outline-none py-1 rounded-lg text-center"
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
