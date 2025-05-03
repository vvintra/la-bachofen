import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      <Container className="py-20 relative">
        {/* Skeleton para el título */}
        <div className="text-center space-y-6 mb-16">
          <Skeleton className="h-12 w-3/4 max-w-xl mx-auto rounded-lg" />
          <Skeleton className="h-6 w-2/4 max-w-md mx-auto rounded-lg" />
        </div>

        {/* Skeletons para las secciones de años */}
        <div className="space-y-16">
          {[1, 2].map((year) => (
            <section key={year} className="space-y-8">
              <Skeleton className="h-8 w-40 rounded-lg" />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={index} className="h-48 rounded-2xl" />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  )
}
