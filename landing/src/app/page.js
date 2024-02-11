import Image from "next/image";
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Portfolio } from "@/components/component/portfolio";
import { Portfolio2 } from "@/components/component/portfolio2";
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
                     Servicios de Edición de Videos 
                  </h1>
                  <p
                    className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
Desde efectos especiales hasta transiciones creativas, nuestros editores pueden hacer que tus videos destaquen en la plataforma de moda. ¡Haz que tu contenido sea viral con nuestra ayuda!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#">
                    ¡Haz que mi TikTok brille!
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Personalización Total</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
Nos adaptamos a tus necesidades y preferencias. Ya sea que busques un estilo específico de edición o tengas requisitos únicos para tus videos, estamos aquí para cumplir con tus expectativas.
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
                      <h3 className="text-xl font-bold">Edición de Videos para TikTok</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      Desde efectos especiales hasta transiciones creativas, nuestros editores pueden hacer que tus videos destaquen en la plataforma de moda. ¡Haz que tu contenido sea viral con nuestra ayuda!
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Reels de Instagram Impecables</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      Los reels son una excelente manera de captar la atención de tu audiencia en Instagram. Déjanos encargarnos de la edición para que puedas concentrarte en crear contenido de calidad.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Creación de Contenido Promocional</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      ¿Necesitas un video promocional para tu producto o servicio? Nosotros lo tenemos cubierto. Creamos contenido atractivo que impulse tu marca y genere interés entre tu audiencia.
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
              Edición de Vlogs y Videos de Estilo de Vida
              </h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Si eres un creador de contenido o un influencer que quiere mejorar la calidad de sus videos, ¡estás en el lugar correcto! Nuestros servicios de edición pueden hacer que tus vlogs y videos de estilo de vida sean aún más atractivos y profesionales.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300"
                href="#">
                Impulsa mi Marca
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 dark:border-gray-800"
                href="#">
                Agendar una llamada
              </Link>
            </div>
          </div>
        </section>
        <Portfolio2></Portfolio2>
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
                    </div>
                    <div className="grid gap-0.5 text-sm">
                      <h3 className="font-semibold">Client Name</h3>
                      <time className="text-sm text-gray-500 dark:text-gray-400">2 days ago</time>
                    </div>
                    <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                      <p>Testimonial content goes here. It can be a review or a success story.</p>
                    </div>
                    
                  </div>
                  <div className="bg-white p-6 rounded-xl dark:bg-gray-950">
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
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

