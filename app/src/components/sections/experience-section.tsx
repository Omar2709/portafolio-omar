import {
    BriefcaseBusiness,
    CalendarDays,
    CheckCircle2,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const technologies = [
    "Python",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Celery",
    "Docker",
    "Linux",
    "AWS",
    "CI/CD",
];

const responsibilities = [
    "Desarrollo e integración de APIs REST utilizando Django REST Framework y FastAPI.",
    "Implementación de autenticación mediante JWT, OAuth2 y sesiones de Django.",
    "Gestión de bases de datos relacionales, caché con Redis y tareas en segundo plano con Celery.",
    "Despliegue y mantenimiento de servicios mediante Docker, Linux, Nginx, Gunicorn y Uvicorn.",
];

export function ExperienceSection() {
    return (
        <section
            id="experiencia"
            className="scroll-mt-24 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="max-w-3xl">
                        <Badge className="mb-5 border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-sky-300">
                            Trayectoria profesional
                        </Badge>

                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Experiencia
                        </h2>

                        <div className="mt-6 h-1 w-20 rounded-full bg-sky-400" />

                        <p className="mt-7 text-lg leading-8 text-slate-400">
                            Experiencia desarrollando aplicaciones
                            backend, APIs y servicios orientados a la
                            seguridad, rendimiento y mantenibilidad.
                        </p>
                    </div>
                </Reveal>

                <div className="relative mt-14">
                    {/* Línea vertical */}
                    <div
                        className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-sky-400 via-sky-400/40 to-transparent sm:left-[23px]"
                        aria-hidden="true"
                    />

                    <ol>
                        <li className="relative pl-14 sm:pl-16">
                            {/* Indicador de la línea de tiempo */}
                            <div
                                className="timeline-dot absolute left-0 top-7 z-10 grid h-10 w-10 place-items-center rounded-full border border-sky-400/50 bg-[#0b1120] text-sky-300 shadow-lg shadow-sky-950/40 sm:h-12 sm:w-12"
                                aria-hidden="true"
                            >
                                <BriefcaseBusiness className="h-5 w-5" />
                            </div>

                            <Reveal delay={120}>
                                <Card className="group overflow-hidden border-slate-800 bg-slate-900/80 text-slate-100 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-sky-950/30">
                                    <CardHeader className="gap-5 p-6 sm:p-8">
                                        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                                            <div>
                                                <CardTitle className="text-2xl text-white sm:text-3xl">
                                                    Desarrollador Back-End
                                                    Semi-Senior
                                                </CardTitle>

                                                <p className="mt-2 text-lg font-semibold text-sky-300">
                                                    Efficode
                                                </p>
                                            </div>

                                            <Badge
                                                variant="outline"
                                                className="w-fit gap-2 border-sky-400/30 bg-sky-400/5 px-4 py-2 text-sky-200"
                                            >
                                                <CalendarDays className="h-4 w-4" />

                                                <time dateTime="2022-02">
                                                    Febrero 2022
                                                </time>

                                                <span aria-hidden="true">
                                                    —
                                                </span>

                                                Actualidad
                                            </Badge>
                                        </div>
                                    </CardHeader>

                                    <Separator className="bg-slate-800" />

                                    <CardContent className="space-y-8 p-6 sm:p-8">
                                        <p className="max-w-4xl leading-8 text-slate-300">
                                            Desarrollo de aplicaciones
                                            backend, APIs y servicios
                                            utilizando Python, Django,
                                            Django REST Framework y
                                            FastAPI, incluyendo
                                            persistencia de datos,
                                            autenticación, procesos
                                            asíncronos y despliegue.
                                        </p>

                                        <div>
                                            <h3 className="mb-5 text-lg font-semibold text-white">
                                                Responsabilidades principales
                                            </h3>

                                            <ul className="grid gap-4 lg:grid-cols-2">
                                                {responsibilities.map(
                                                    (responsibility) => (
                                                        <li
                                                            key={
                                                                responsibility
                                                            }
                                                            className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                                                        >
                                                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-sky-400" />

                                                            <span>
                                                                {
                                                                    responsibility
                                                                }
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="mb-4 text-lg font-semibold text-white">
                                                Tecnologías utilizadas
                                            </h3>

                                            <ul className="flex flex-wrap gap-2">
                                                {technologies.map(
                                                    (technology) => (
                                                        <li key={technology}>
                                                            <Badge
                                                                variant="outline"
                                                                className="border-sky-400/20 bg-sky-400/5 px-3 py-1.5 font-normal text-slate-300 transition hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-200"
                                                            >
                                                                {technology}
                                                            </Badge>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Reveal>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}