import Image from "next/image";
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
export default function Home() {
  return (
      <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="550"
                src="/axel.png"
                width="550" />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    ¿Quieres ser un experto en la generación de citas y llevar tu negocio al siguiente nivel? 
                  </h1>
                  <p
                    className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
En nuestra plataforma, te proporcionamos las herramientas y estrategias necesarias para convertirte en un maestro del appointment setting. No importa si eres un emprendedor, un profesional de ventas o un empresario, dominar esta habilidad te abrirá las puertas al éxito.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#">
                    Agenda tu llamada
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="#">
                    Asesoria personalizada
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  New Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Por qué es Importante Dominar esta Habilidad?</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
Es el primer paso crucial en el proceso de ventas, donde se establece el contacto inicial y se comienza a construir una relación con el cliente.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/axel.png"
                width="550" />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Incrementa tus Ventas</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      Al dominar el appointment setting, aumentarás tus oportunidades de cerrar ventas. Al tener reuniones programadas, puedes presentar tu oferta de manera personalizada y persuasiva, lo que aumenta las posibilidades de éxito.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Ahorra Tiempo y Recursos</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      Con un enfoque efectivo en la generación de citas, no perderás tiempo persiguiendo clientes potenciales poco interesados. En su lugar, te enfocarás en aquellos que están genuinamente interesados en lo que tienes para ofrecer.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Construye Relaciones Sólidas</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      l appointment setting bien hecho establece una base sólida para futuras interacciones con tus clientes. Construir relaciones sólidas desde el principio aumenta la lealtad del cliente y puede llevar a referencias y ventas repetidas.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div
            className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              En nuestra plataforma, te proporcionamos las estrategias probadas y las tácticas más efectivas para dominar el appointment setting
              </h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Formación Personalizada, Herramientas Innovadoras, Asesoramiento Expertos
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300"
                href="#">
                Contact Sales
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 dark:border-gray-800"
                href="#">
                Learn more
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Testimonials
                </div>
                <div className="grid gap-6">
                  <div className="bg-white p-6 rounded-xl dark:bg-gray-950">
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center gap-0.5 ml-auto">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                    <div className="grid gap-0.5 text-sm">
                      <h3 className="font-semibold">Client Name</h3>
                      <time className="text-sm text-gray-500 dark:text-gray-400">2 days ago</time>
                    </div>
                    <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                      <p>Testimonial content goes here. It can be a review or a success story.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}


function StarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 17.77 5.82 7 8.91" />
    </svg>)
  );
}
