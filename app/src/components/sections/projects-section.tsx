import type { ElementType } from "react";

import {
    ExternalLink,
    GitFork,
    ImageOff,
    Layers3,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { Reveal } from "@/components/reveal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type ProjectStatus = "En desarrollo" | "Completado";

interface TechnologyGroup {
    label: string;
    value: string;
}

interface ProjectAction {
    label: string;
    url: string;
    icon: ElementType;
    variant: "primary" | "secondary";
}

interface Project {
    title: string;
    description: string;
    status: ProjectStatus;
    image?: string;
    imageAlt: string;
    collaboration?: string;
    technologies: string[];
    technologyGroups: TechnologyGroup[];
    actions: ProjectAction[];
}

/*
 * Agrega aquí la URL real del sistema de tareas.
 * Mientras esté vacía, aparecerá un botón deshabilitado.
 */
const TASKS_REPOSITORY_URL = "https://github.com/Omar2709/teamflow-api";

const projects: Project[] = [
    {
        title: "Sistema de gestión de tareas por equipos",
        description:
            "Plataforma backend para crear equipos de trabajo, administrar miembros, asignar tareas y controlar el estado y avance de las actividades.",
        status: "En desarrollo",
        imageAlt:
            "Vista del sistema de gestión de tareas por equipos",
        technologies: [
            "Python",
            "Django",
            "Django REST Framework",
            "PostgreSQL",
            "JWT",
            "Celery",
            "Redis",
            "Docker",
        ],
        technologyGroups: [
            {
                label: "Backend",
                value:
                    "Python, Django y Django REST Framework.",
            },
            {
                label: "Base de datos",
                value:
                    "PostgreSQL, Django ORM y migraciones.",
            },
            {
                label: "Autenticación",
                value:
                    "JWT, permisos y protección de endpoints.",
            },
            {
                label: "Filtros y documentación",
                value:
                    "django-filter, OpenAPI y Swagger.",
            },
            {
                label: "Procesos asíncronos",
                value:
                    "Celery y Redis para colas, tareas y caché.",
            },
            {
                label: "Pruebas",
                value:
                    "Pytest, pytest-django y Factory Boy.",
            },
            {
                label: "Calidad",
                value:
                    "Ruff, Git y GitHub.",
            },
            {
                label: "Infraestructura",
                value:
                    "Docker, Docker Compose, Gunicorn y Nginx.",
            },
            {
                label: "Integración continua",
                value:
                    "GitHub Actions.",
            },
            {
                label: "Pruebas manuales",
                value:
                    "Postman o Insomnia.",
            },
        ],
        actions: TASKS_REPOSITORY_URL
            ? [
                  {
                      label: "Ver código",
                      url: TASKS_REPOSITORY_URL,
                      icon: FaGithub,
                      variant: "primary",
                  },
              ]
            : [],
    },
    {
        title: "Sistema de información para Bienestar Universitario",
        description:
            "Sistema funcional desarrollado como modalidad de grado para apoyar la gestión de información del área de Bienestar Universitario de la Universidad de La Guajira, sede Maicao.",
        status: "Completado",
        image: "/images/proyecto-bienestar.jpg",
        imageAlt:
            "Sistema de información para Bienestar Universitario",
        collaboration:
            "Proyecto desarrollado en colaboración. Mi participación puede comprobarse mediante el historial de commits del repositorio.",
        technologies: [
            "PHP",
            "Laravel 12",
            "React 18",
            "TypeScript",
            "Inertia.js",
            "MySQL",
            "Tailwind CSS",
            "GitHub Actions",
        ],
        technologyGroups: [
            {
                label: "Backend",
                value:
                    "PHP 8.2+, Laravel 12 y Eloquent ORM.",
            },
            {
                label: "Frontend",
                value:
                    "React 18, TypeScript 5.7, JavaScript, Inertia.js 2 y Blade.",
            },
            {
                label: "Interfaz",
                value:
                    "Tailwind CSS 4, shadcn/ui, Radix UI y Headless UI.",
            },
            {
                label: "Compilación",
                value:
                    "Vite 6.",
            },
            {
                label: "Base de datos",
                value:
                    "MySQL como base principal y SQLite en memoria para pruebas.",
            },
            {
                label: "Autenticación",
                value:
                    "Sesiones de Laravel, bcrypt, CSRF, verificación de correo, rutas firmadas y throttle.",
            },
            {
                label: "Filtros",
                value:
                    "TanStack React Table, estados de React y consultas con Eloquent ORM.",
            },
            {
                label: "Colas y caché",
                value:
                    "Laravel Queue y almacenamiento basado en base de datos.",
            },
            {
                label: "Pruebas",
                value:
                    "Pest 3, PHPUnit, Mockery, RefreshDatabase, FakerPHP y factories.",
            },
            {
                label: "Calidad",
                value:
                    "Laravel Pint, ESLint, Prettier y TypeScript Compiler.",
            },
            {
                label: "Integración continua",
                value:
                    "GitHub Actions para pruebas, compilación y análisis de calidad.",
            },
        ],
        actions: [
            {
                label: "Ver mi fork",
                url: "https://github.com/Omar2709/Bienestar",
                icon: GitFork,
                variant: "primary",
            },
            {
                label: "Repositorio original",
                url: "https://github.com/Jmrm16/Bienestar",
                icon: ExternalLink,
                variant: "secondary",
            },
        ],
    },
];

function openExternalUrl(url: string) {
    window.open(
        url,
        "_blank",
        "noopener,noreferrer",
    );
}

function getStatusClasses(status: ProjectStatus) {
    if (status === "Completado") {
        return "border-emerald-400/30 bg-emerald-400/15 text-emerald-300";
    }

    return "border-amber-400/30 bg-amber-400/15 text-amber-300";
}

export function ProjectsSection() {
    return (
        <section
            id="proyectos"
            className="scroll-mt-24 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="max-w-3xl">
                        <Badge className="mb-5 border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-sky-300">
                            Mi trabajo
                        </Badge>

                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Proyectos
                        </h2>

                        <div className="mt-6 h-1 w-20 rounded-full bg-sky-400" />

                        <p className="mt-7 text-lg leading-8 text-slate-400">
                            Proyectos en los que he aplicado
                            arquitectura backend, autenticación,
                            bases de datos, pruebas y despliegue.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-14 grid items-start gap-7 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <Reveal
                            key={project.title}
                            delay={index * 120}
                            className="h-full"
                        >
                            <Card className="group h-full overflow-hidden border-slate-800 bg-slate-900/80 text-slate-100 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:shadow-sky-950/30">
                                <div className="relative aspect-video overflow-hidden border-b border-slate-800 bg-slate-950">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-950 to-slate-900 text-slate-500">
                                            <div className="grid h-16 w-16 place-items-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                                                <ImageOff className="h-7 w-7" />
                                            </div>

                                            <p className="text-sm">
                                                Captura próximamente
                                            </p>
                                        </div>
                                    )}

                                    <Badge
                                        variant="outline"
                                        className={`absolute right-4 top-4 backdrop-blur-md ${getStatusClasses(
                                            project.status,
                                        )}`}
                                    >
                                        {project.status}
                                    </Badge>
                                </div>

                                <CardHeader className="p-6 sm:p-7">
                                    <CardTitle className="text-2xl leading-8 text-white">
                                        {project.title}
                                    </CardTitle>

                                    <p className="mt-4 leading-7 text-slate-400">
                                        {project.description}
                                    </p>

                                    {project.collaboration && (
                                        <p className="mt-4 border-l-2 border-sky-400/60 pl-4 text-sm leading-7 text-slate-400">
                                            {project.collaboration}
                                        </p>
                                    )}
                                </CardHeader>

                                <CardContent className="flex h-full flex-col px-6 pb-7 sm:px-7">
                                    <ul className="flex flex-wrap gap-2">
                                        {project.technologies.map(
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

                                    <Accordion className="mt-7">
                                        <AccordionItem
                                            value="stack"
                                            className="rounded-xl border border-slate-800 bg-slate-950/30 px-4"
                                        >
                                            <AccordionTrigger className="gap-3 py-4 text-left text-sm font-semibold text-sky-300 hover:no-underline hover:text-sky-200">
                                                <span className="flex items-center gap-2">
                                                    <Layers3 className="h-4 w-4" />
                                                    Ver stack completo
                                                </span>
                                            </AccordionTrigger>

                                            <AccordionContent className="pb-5">
                                                <dl className="space-y-4">
                                                    {project.technologyGroups.map(
                                                        (group) => (
                                                            <div
                                                                key={
                                                                    group.label
                                                                }
                                                            >
                                                                <dt className="text-sm font-semibold text-slate-200">
                                                                    {
                                                                        group.label
                                                                    }
                                                                </dt>

                                                                <dd className="mt-1 text-sm leading-6 text-slate-400">
                                                                    {
                                                                        group.value
                                                                    }
                                                                </dd>
                                                            </div>
                                                        ),
                                                    )}
                                                </dl>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    <div className="mt-auto flex flex-wrap gap-3 pt-7">
                                        {project.actions.length > 0 ? (
                                            project.actions.map(
                                                (action) => {
                                                    const Icon =
                                                        action.icon;

                                                    return (
                                                        <Button
                                                            key={
                                                                action.label
                                                            }
                                                            type="button"
                                                            variant={
                                                                action.variant ===
                                                                "secondary"
                                                                    ? "outline"
                                                                    : "default"
                                                            }
                                                            onClick={() =>
                                                                openExternalUrl(
                                                                    action.url,
                                                                )
                                                            }
                                                            className={
                                                                action.variant ===
                                                                "secondary"
                                                                    ? "gap-2 border-sky-400/50 bg-transparent text-sky-300 hover:bg-sky-400/10 hover:text-sky-200"
                                                                    : "gap-2 bg-sky-400 font-bold text-slate-950 hover:bg-sky-300"
                                                            }
                                                        >
                                                            <Icon className="h-4 w-4" />
                                                            {action.label}
                                                        </Button>
                                                    );
                                                },
                                            )
                                        ) : (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                disabled
                                                className="gap-2 border-slate-700 bg-transparent text-slate-500"
                                            >
                                                <FaGithub className="h-4 w-4" />
                                                Agrega la URL del repositorio
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}