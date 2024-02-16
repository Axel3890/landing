
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"

export function Portfolio2() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div
        className="container px-4 grid items-center gap-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow-500">Descubre el poder de la edición profesional</h2>
          <p
            className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Observa cómo nuestros expertos transforman videos simples en contenido atractivo e impactante.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          <div className="flex flex-col gap-1.5">
            <Card className="w-full">
              <CardHeader className="pb-0">
                <h3 className="text-lg font-bold">Project X</h3>
                <p className="text-sm font-medium leading-none truncate">Description of Project X</p>
              </CardHeader>
              <CardContent>
              <video width="320" height="240" controls>
      <source src="/video.mp4" type="video/mp4" />

      Your browser does not support the video tag.
    </video>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-col gap-1.5">
            <Card className="w-full">
              <CardHeader className="pb-0">
                <h3 className="text-lg font-bold">Project Y</h3>
                <p className="text-sm font-medium leading-none truncate">Description of Project Y</p>
              </CardHeader>
              <CardContent>
              <video width="320" height="240" controls>
      <source src="/video.mp4" type="video/mp4" />

      Your browser does not support the video tag.
    </video>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-col gap-1.5">
            <Card className="w-full">
              <CardHeader className="pb-0">
                <h3 className="text-lg font-bold">Project Z</h3>
                <p className="text-sm font-medium leading-none truncate">Description of Project Z</p>
              </CardHeader>
              <CardContent>
              <video width="320" height="240" controls>
      <source src="/video.mp4" type="video/mp4" />

      Your browser does not support the video tag.
    </video>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>)
  );
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}
