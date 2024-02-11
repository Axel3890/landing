/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/FIXm5qiqEEW
 */
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  return (
    (<section key="1" className="w-full py-12 lg:py-16 xl:py-24">
      <div
        className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Video Portfolio</h2>
          <p
            className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Showcase your best work with our video portfolio template.
          </p>
        </div>
      </div>
      <div
        className="container max-w-6xl grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
        <div
          className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-stretch gap-2">
            <Card>
              <div className="grid w-full items-stretch">
                <img
                  alt="Video thumbnail"
                  className="aspect-video object-cover rounded-t-lg"
                  height="400"
                  src="/placeholder.svg"
                  width="600" />
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-none">Video Title</h3>
                    <p className="text-sm text-gray-500 leading-snug dark:text-gray-400">
                      Description for the video. It can be a bit longer to showcase the details of the project.
                    </p>
                  </div>
                </CardContent>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    className="rounded-full border border-gray-200 w-24 h-24 p-0 flex items-center justify-center dark:border-gray-800"
                    variant="ghost">
                    <div className="w-8 h-8 bg-white rounded-md" />
                    <span className="sr-only">Play</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex flex-col items-stretch gap-2">
            <Card>
              <div className="grid w-full items-stretch">
                <img
                  alt="Video thumbnail"
                  className="aspect-video object-cover rounded-t-lg"
                  height="400"
                  src="/placeholder.svg"
                  width="600" />
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-none">Video Title</h3>
                    <p className="text-sm text-gray-500 leading-snug dark:text-gray-400">
                      Description for the video. It can be a bit longer to showcase the details of the project.
                    </p>
                  </div>
                </CardContent>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    className="rounded-full border border-gray-200 w-24 h-24 p-0 flex items-center justify-center dark:border-gray-800"
                    variant="ghost">
                    <div className="w-8 h-8 bg-white rounded-md" />
                    <span className="sr-only">Play</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex flex-col items-stretch gap-2">
            <Card>
              <div className="grid w-full items-stretch">
                <img
                  alt="Video thumbnail"
                  className="aspect-video object-cover rounded-t-lg"
                  height="400"
                  src="/placeholder.svg"
                  width="600" />
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-none">Video Title</h3>
                    <p className="text-sm text-gray-500 leading-snug dark:text-gray-400">
                      Description for the video. It can be a bit longer to showcase the details of the project.
                    </p>
                  </div>
                </CardContent>
                <div className="absolute inset-0 flex items-center justify-center" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>)
  );
}
