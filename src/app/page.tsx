import Image from "next/image";
import Link from "next/link";
import SomaDoisNumeros from "../../pages/somadoisnumeros";

export default function Home() {
  const Exercicios = [
    {
      Numero: 1,
      Nome: "Soma de Dois Números",
      Link: "somadoisnumeros",
    },
    {
      Numero: 2,
      Nome: "Verificar Número Par ou Ímpar",
      Link: "verificarnumeropar",
    },
    {
      Numero: 3,
      Nome: "Calculadora simples",
      Link: "calculadorasimples",
    },
    {
      Numero: 4,
      Nome: "Fatorial de um Número",
      Link: "fatorialnumero",
    },
    {
      Numero: 5,
      Nome: "Contagem Regressiva",
      Link: "contagemregressiva",
    },
    {
      Numero: 6,
      Nome: "Média de Números",
      Link: "medianumeros",
    },
    {
      Numero: 7,
      Nome: "Tabuada",
      Link: "tabuada",
    },
    {
      Numero: 8,
      Nome: "Verificar Palíndromo",
      Link: "verificarpalindromo",
    },
    {
      Numero: 9,
      Nome: "Conversor de Temperatura",
      Link: "conversortemperatura",
    },
    {
      Numero: 10,
      Nome: "Adivinhação de Números",
      Link: "adivinharnumero",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col dark:bg-gray-900 items-center justify-between p-12">
      <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Exercicios
      </h5>
      <div className="grid grid-cols-3 gap-4">
        {Exercicios.map((exercicio) => {
          return (
            <div
              key={exercicio.Numero}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Exercício #{exercicio.Numero}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {exercicio.Nome}
              </p>
              <Link
                href={exercicio.Link}
                type="button"
                className="mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Ver exercício
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
          );
        })}
      </div>
    </main>
  );
}
