import type { LucideIcon } from "lucide-react";

import {
    Braces,
    CloudCog,
    CodeXml,
    Database,
    KeyRound,
    ServerCog,
    ShieldCheck,
    TestTube2,
    Workflow,
    Wrench,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

interface SkillGroup {
    title: string;
    description: string;
    icon: LucideIcon;
    skills: string[];
}

interface SkillCategory {
    value: string;
    label: string;
    groups: SkillGroup[];
}

const skillCategories: SkillCategory[] = [
    {
        value: "backend",
        label: "Backend",
        groups: [
            {
                title: "Lenguajes y frameworks",
                description:
                    "Tecnologías principales para construir aplicaciones backend.",
                icon: Braces,
                skills: [
                    "Python",
                    "Django",
                    "Django REST Framework",
                    "FastAPI",
                    "PHP",
                    "Laravel",
                ],
            },
            {
                title: "APIs y comunicación",
                description:
                    "Diseño de servicios, autenticación y comunicación en tiempo real.",
                icon: CodeXml,
                skills: [
                    "APIs REST",
                    "OpenAPI",
                    "Swagger",
                    "WebSockets",
                    "Django Channels",
                    "Inertia.js",
                ],
            },
            {
                title: "Procesamiento asíncrono",
                description:
                    "Tareas en segundo plano, colas y procesamiento desacoplado.",
                icon: Workflow,
                skills: [
                    "Celery",
                    "Laravel Queue",
                    "Background Tasks",
                    "Redis",
                ],
            },
        ],
    },
    {
        value: "datos",
        label: "Bases de datos",
        groups: [
            {
                title: "Bases de datos relacionales",
                description:
                    "Diseño, consultas y persistencia de información estructurada.",
                icon: Database,
                skills: [
                    "PostgreSQL",
                    "MySQL",
                    "SQL Server",
                    "SQLite",
                    "SQL",
                ],
            },
            {
                title: "ORM y modelado",
                description:
                    "Acceso a datos mediante abstracciones y migraciones.",
                icon: ServerCog,
                skills: [
                    "Django ORM",
                    "Eloquent ORM",
                    "Migraciones",
                    "Relaciones",
                    "Consultas optimizadas",
                ],
            },
            {
                title: "Caché y almacenamiento",
                description:
                    "Herramientas para mejorar rendimiento y disponibilidad.",
                icon: CloudCog,
                skills: [
                    "Redis",
                    "Firebase",
                    "Cache",
                    "File Storage",
                ],
            },
        ],
    },
    {
        value: "devops",
        label: "DevOps",
        groups: [
            {
                title: "Contenedores y servidores",
                description:
                    "Empaquetado, despliegue y ejecución de aplicaciones.",
                icon: CloudCog,
                skills: [
                    "Docker",
                    "Docker Compose",
                    "Gunicorn",
                    "Uvicorn",
                    "Nginx",
                    "Apache",
                ],
            },
            {
                title: "Integración y control de versiones",
                description:
                    "Flujos de trabajo para mantener y publicar software.",
                icon: Workflow,
                skills: [
                    "Git",
                    "GitHub",
                    "GitHub Actions",
                    "CI/CD",
                ],
            },
            {
                title: "Infraestructura y sistemas",
                description:
                    "Entornos de ejecución y servicios en la nube.",
                icon: ServerCog,
                skills: [
                    "Linux",
                    "AWS",
                    "Google Cloud Platform",
                ],
            },
        ],
    },
    {
        value: "calidad",
        label: "Seguridad y calidad",
        groups: [
            {
                title: "Autenticación y seguridad",
                description:
                    "Protección de usuarios, sesiones y servicios.",
                icon: KeyRound,
                skills: [
                    "JWT",
                    "OAuth2",
                    "Django Authentication",
                    "Laravel Sessions",
                    "CSRF",
                    "Permisos",
                ],
            },
            {
                title: "Pruebas",
                description:
                    "Validación automatizada del comportamiento del sistema.",
                icon: TestTube2,
                skills: [
                    "Pytest",
                    "pytest-django",
                    "Pest",
                    "PHPUnit",
                    "Mockery",
                    "Factory Boy",
                ],
            },
            {
                title: "Calidad de código",
                description:
                    "Formato, análisis estático y consistencia del proyecto.",
                icon: ShieldCheck,
                skills: [
                    "Ruff",
                    "Laravel Pint",
                    "ESLint",
                    "Prettier",
                    "TypeScript",
                ],
            },
            {
                title: "Herramientas de desarrollo",
                description:
                    "Utilidades para probar, documentar y mantener servicios.",
                icon: Wrench,
                skills: [
                    "Postman",
                    "Insomnia",
                    "GitHub",
                    "VS Code",
                ],
            },
        ],
    },
];

export function SkillsSection() {
    return (
        <section
            id="habilidades"
            className="scroll-mt-24 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="max-w-3xl">
                        <Badge className="mb-5 border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-sky-300">
                            Stack tecnológico
                        </Badge>

                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Habilidades
                        </h2>

                        <div className="mt-6 h-1 w-20 rounded-full bg-sky-400" />

                        <p className="mt-7 text-lg leading-8 text-slate-400">
                            Tecnologías y herramientas que utilizo para
                            desarrollar soluciones backend seguras,
                            mantenibles y preparadas para crecer.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={120}>
                    <Tabs
                        defaultValue="backend"
                        className="mt-12"
                    >
                        <TabsList className="!grid !h-auto w-full grid-cols-2 gap-2 overflow-visible rounded-xl border border-slate-800 bg-slate-900/80 p-2 sm:grid-cols-4">
                            {skillCategories.map((category) => (
                                <TabsTrigger
                                    key={category.value}
                                    value={category.value}
                                    className="!h-auto min-h-11 w-full rounded-lg border border-transparent px-3 py-2.5 text-center text-sm font-medium text-slate-400 shadow-none transition duration-300 hover:bg-slate-800 hover:text-white data-active:border-sky-300/30 data-active:bg-sky-400 data-active:font-semibold data-active:text-slate-950 data-active:shadow-none data-active:hover:bg-sky-300"
                                >
                                    {category.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {skillCategories.map((category) => (
                            <TabsContent
                                key={category.value}
                                value={category.value}
                                className="mt-6 outline-none"
                            >
                                <div className="grid gap-5 md:grid-cols-2">
                                    {category.groups.map(
                                        (group, index) => {
                                            const Icon = group.icon;

                                            return (
                                                <Reveal
                                                    key={group.title}
                                                    delay={index * 90}
                                                    className="h-full"
                                                >
                                                    <Card className="group h-full border-slate-800 bg-slate-900/75 text-slate-100 shadow-xl shadow-black/15 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-sky-950/20">
                                                        <CardHeader>
                                                            <div className="mb-2 grid h-11 w-11 place-items-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300 transition duration-300 group-hover:scale-110 group-hover:bg-sky-400/15">
                                                                <Icon className="h-5 w-5" />
                                                            </div>

                                                            <CardTitle className="text-xl text-white">
                                                                {group.title}
                                                            </CardTitle>

                                                            <CardDescription className="leading-6 text-slate-400">
                                                                {
                                                                    group.description
                                                                }
                                                            </CardDescription>
                                                        </CardHeader>

                                                        <CardContent>
                                                            <ul className="flex flex-wrap gap-2">
                                                                {group.skills.map(
                                                                    (
                                                                        skill,
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                skill
                                                                            }
                                                                        >
                                                                            <Badge
                                                                                variant="outline"
                                                                                className="border-sky-400/20 bg-sky-400/5 px-3 py-1.5 font-normal text-slate-300 transition hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-200"
                                                                            >
                                                                                {
                                                                                    skill
                                                                                }
                                                                            </Badge>
                                                                        </li>
                                                                    ),
                                                                )}
                                                            </ul>
                                                        </CardContent>
                                                    </Card>
                                                </Reveal>
                                            );
                                        },
                                    )}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </Reveal>
            </div>
        </section>
    );
}