'use client'
import { useEffect, useRef, useState } from "react"
import lottie from "lottie-web"
import { Triangular } from '../math/triangle'
import { createFibonacci } from '../math/fibonacci'
import { isPrime } from '../math/prime'
import { useRouter } from 'next/router'

export default function Home() {
  // Creacion de animacion lottie
  const container = useRef(null)
  useEffect(() => {
    lottie.destroy()
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require('../utils/robot.json'),
    });
  }, [])

  const router = useRouter()//Enviar datos por Get
  const [fibonacci, setFibonacci] = useState('')
  const [triangle, setTriangle] = useState('')
  const [prime, setPrime] = useState('')
  
  //Validacion del formulario
  const onSubmit = e => {
    e.preventDefault()
    if ([fibonacci, triangle].includes(''))
      alert('Sedeben llenar todos los campos')
    else {
      let f = createFibonacci(+fibonacci, 10)
      let t = Triangular(+triangle)
      let p = isPrime(prime)
      router.push({
        pathname: '/results',
        query: { fib: f, tri: t, prime: p},
      })
    }
  }


  return (
    <main className="flex flex-col items-center">
      <div ref={container} style={{ height: 300, }} />
      <h1 className="mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Bienvenido</span> Crea tu serie Matematica.
      </h1>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Fibonacci
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="1..."
              onChange={(e) => setFibonacci(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Triangular
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="4..."
              onChange={(e) => setTriangle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Primo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="11..."
              onChange={(e) => setPrime(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Generar Serie
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
