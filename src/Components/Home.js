
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home(){

useEffect(()=>{
  localStorage.setItem("responsemsg","logged out")
})

const navigate = useNavigate()

    return(
      <div>
        
<main>
  <section class="text-black">
    <div class="container mx-auto px-6 py-16 text-center">
      <div class="mx-auto max-w-lg">
        <h1 class="text-3xl text-left font-bold text-gray-800 dark:text-black lg:text-4xl">Managing corporates Petty Cash since 2016</h1>
        <p class="mt-6 text-left text-green-800">We are a petty cash accounting web application.</p>
        <button align-left onClick={()=>navigate("/signup")} class="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">Sign Up Now !</button>
        <p class="mt-3 text-sm text-gray-400">No credit card required</p>
      </div>

      <div class="mt-10 flex justify-center">
        <img alt="" class="h-96 w-full rounded-xl object-cover lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
      </div>
    </div>
  </section>

  <footer class="bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <p class="font-semibold text-left text-gray-800 dark:text-white">Quick Link</p>

          <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="_#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Home</a>
            <a href="_#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Who We Are</a>
            <a href="_#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Our Philosophy</a>
          </div>
        </div>

        <div>
          <p class="font-semibold text-left text-gray-800 dark:text-white">Industries</p>

          <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="_#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Retail & E-Commerce</a>
            <a href="_#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Information Technology</a>
            <a href="_#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Finance & Insurance</a>
          </div>
        </div>

        <div>
          <p class="font-semibold text-left text-gray-800 dark:text-white">Services</p>

          <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="_#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Translation</a>
            <a href="_#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Proofreading & Editing</a>
            <a href="_#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Content Creation</a>
          </div>
        </div>

        <div>
          <p class="font-semibold text-left text-gray-800 dark:text-white">Contact Us</p>

          <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="_#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">+880 768 473 4978</a>
            <a href="_#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">info@pettycashmanager.com</a>
          </div>
        </div>
      </div>

      <hr class="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

      <div class="flex flex-col items-center justify-between sm:flex-row">
        <button class="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300">PCM</button>

        <p class="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">© Copyright 2021. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</main>

      </div>
    )
  }