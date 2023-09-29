import Link from "next/link";
import "../src/app/globals.css";
import { useState } from "react";

export default function FatorialNumero() {
  const [result, setResult] = useState(Number);
  const [firstNumber, setFirstNumber] = useState(Number);

  const Calcular = () => {
    try {
      let resultado = firstNumber;
      for (let i = firstNumber - 1; i > 0; i--) {
        resultado = resultado * i;
      }
      setResult(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col dark:bg-gray-900 items-center justify-center p-24">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5 text-center">
          Fatorial de um Número
        </h5>
        <div>
          <input
            type="number"
            id="result"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={result}
            disabled
            readOnly
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="first_number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Primeiro Número
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path
                  d="M256,0C114.609,0,0,114.609,0,256c0,141.391,114.609,256,256,256c141.391,0,256-114.609,256-256
	C512,114.609,397.391,0,256,0z M256,472c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
                />
                <path
                  d="M249.703,201.25H188v-25h19.312c6.859,0,13.422-1.219,19.5-3.594c6.172-2.375,11.438-5.641,15.797-9.797
		c4.358-4.203,7.922-9.25,10.547-15.234c2.734-5.906,4.047-12.5,4.047-19.625H284v256h-34.297V201.25z"
                />
              </svg>
            </span>
            <input
              type="number"
              id="first_number"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setFirstNumber(e.target.valueAsNumber)}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex">
              <button
                type="button"
                className="grow mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={Calcular}
              >
                Calcular
              </button>
            </div>
            <div>
              <Link
                href={"/"}
                type="button"
                className="grow text-white mt-5 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Voltar ao início
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
