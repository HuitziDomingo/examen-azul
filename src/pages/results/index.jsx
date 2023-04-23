import { useEffect, useRef, useState } from "react"
import lottie from "lottie-web"
import { useRouter } from 'next/router'


export default function index() {

  // Creacion de animacion lottie
  const container = useRef(null)
  useEffect(() => {
    lottie.destroy()
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require('../../utils/lab.json'),
    });
  }, [])

  //Recibir data por parametros
  const router = useRouter()
  const { fib, tri, prime } = router.query

  //Funcion de la ecuacion
  const resultado = []

  for (let i = 0; i < Math.min(tri.length, fib.length); i++) {
    resultado.push(fib[i] - tri[i] / prime)
  }

  return (
    <>
      <div className='flex mb-4 mt-5 '>
        <div className='w-1/2 p-2 text-center'>
          <h2>Fibonacci</h2>
          {
            fib.map((k, i) => (
              <p key={i}>{k}</p>
            ))
          }
          <h2>Triangular</h2>
          {
            tri.map((k, i) => (
              <p key={i}>{k}</p>
            ))
          }
        </div>
        <div className='w-1/2 p-2 text-center'>
          <div ref={container} style={{ height: 300, }} />

        </div>

        
      </div>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-auto mt-10" >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          {
            resultado.map((k, i) => (
              <p key={i}>{k}</p>
            ))
          }
        </h5>
      </div>
    </>
  )
}
