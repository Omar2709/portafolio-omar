import { useState } from "react";

import {
    BriefcaseBusiness,
    Clock3,
    Code2,
    Database,
    FileText,
    FolderKanban,
    GraduationCap,
    MapPin,
    Menu,
    ServerCog,
    ShieldCheck,
    Workflow,
} from "lucide-react";

import { ContactSection } from "@/components/sections/contact-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/reveal";


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navigationLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
];

const professionalStats = [
    {
        value: "4+",
        label: "Años de experiencia",
        icon: Clock3,
    },
    {
        value: "2",
        label: "Proyectos destacados",
        icon: FolderKanban,
    },
    {
        value: "5",
        label: "Tecnologías de datos",
        icon: Database,
    },
    {
        value: "3",
        label: "Áreas backend principales",
        icon: Workflow,
    },
];

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const openCv = () => {
        window.open(
            "/documents/cv_omar_lopez.pdf",
            "_blank",
            "noopener,noreferrer",
        );
    };

    const scrollToProjects = () => {
        document
            .querySelector("#proyectos")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#0b1120] text-slate-100">
            <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-[#0b1120]/85 backdrop-blur-xl">
                <div className="mx-auto flex min-h-18 max-w-6xl items-center justify-between px-6">
                    <a
                        href="#inicio"
                        className="text-lg font-bold tracking-tight text-white"
                        aria-label="Ir al inicio del portafolio"
                    >
                        <span className="text-sky-400">&lt;</span>
                        Omar López
                        <span className="text-sky-400"> /&gt;</span>
                    </a>

                    {/* Navegación de escritorio */}
                    <nav
                        className="hidden items-center gap-7 lg:flex"
                        aria-label="Navegación principal"
                    >
                        {navigationLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="group relative text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
                            >
                                {link.label}

                                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Menú móvil */}
                    <div className="lg:hidden">
                        <Sheet
                            open={mobileMenuOpen}
                            onOpenChange={setMobileMenuOpen}
                        >
                            <SheetTrigger
                                aria-label="Abrir menú de navegación"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/70 text-slate-100 transition hover:border-sky-400/60 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                            >
                                <Menu className="h-6 w-6" />
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className="w-[min(86vw,360px)] border-slate-800 bg-[#0b1120] px-6 text-slate-100"
                            >
                                <SheetHeader className="text-left">
                                    <SheetTitle className="text-xl font-bold text-white">
                                        <span className="text-sky-400">&lt;</span>
                                        Omar López
                                        <span className="text-sky-400"> /&gt;</span>
                                    </SheetTitle>

                                    <SheetDescription className="text-slate-400">
                                        Backend Developer
                                    </SheetDescription>
                                </SheetHeader>

                                <Separator className="my-6 bg-slate-800" />

                                <nav
                                    className="flex flex-col gap-2"
                                    aria-label="Navegación móvil"
                                >
                                    {navigationLinks.map((link, index) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                            }}
                                            className="mobile-nav-link flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-slate-300 transition hover:bg-sky-400/10 hover:text-sky-300"
                                            style={{
                                                animationDelay: `${index * 55}ms`,
                                            }}
                                        >
                                            <span className="font-mono text-xs text-sky-400">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            {link.label}
                                        </a>
                                    ))}
                                </nav>

                                <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="availability-pulse h-2.5 w-2.5 rounded-full bg-emerald-400"
                                            aria-hidden="true"
                                        />

                                        <p className="text-sm font-medium text-slate-300">
                                            Disponible para oportunidades
                                        </p>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>

            <section
                id="inicio"
                className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
            >
                <div
                    className="pointer-events-none absolute right-[-10rem] top-20 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl"
                    aria-hidden="true"
                />

                <div
                    className="pointer-events-none absolute bottom-10 left-[-10rem] h-80 w-80 rounded-full bg-blue-700/10 blur-3xl"
                    aria-hidden="true"
                />

                <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Fotografía y tarjeta profesional */}
                    <div className="profile-enter order-2 lg:order-1">
                        <div className="mx-auto w-full max-w-[370px]">
                            <div className="photo-float relative mx-auto w-[270px] sm:w-[310px]">
                                <div
                                    className="absolute -inset-3 rounded-full border-2 border-sky-400/60"
                                    aria-hidden="true"
                                />

                                <div
                                    className="absolute -inset-8 rounded-full bg-sky-400/10 blur-2xl"
                                    aria-hidden="true"
                                />

                                <img
                                    src="/images/omar-lopez.jpg"
                                    alt="Fotografía profesional de Omar López"
                                    className="relative aspect-square w-full rounded-full border-6 border-slate-900 object-cover shadow-2xl shadow-black/50"
                                />
                            </div>

                            <Card className="mt-9 border-slate-700/70 bg-slate-900/85 text-slate-100 shadow-2xl shadow-black/30 backdrop-blur-xl">
                                <CardContent className="p-5">
                                    <div className="flex items-center gap-3 border-b border-slate-700/70 pb-4">
                                        <span
                                            className="availability-pulse h-2.5 w-2.5 rounded-full bg-emerald-400"
                                            aria-hidden="true"
                                        />

                                        <span className="text-sm font-semibold">
                                            Disponible para oportunidades
                                        </span>
                                    </div>

                                    <dl className="mt-5 space-y-4">
                                        <div className="flex items-center justify-between gap-4">
                                            <dt className="flex items-center gap-2 text-sm text-slate-400">
                                                <MapPin className="h-4 w-4 text-sky-400" />
                                                Ubicación
                                            </dt>

                                            <dd className="text-sm font-semibold">
                                                Colombia
                                            </dd>
                                        </div>

                                        <div className="flex items-center justify-between gap-4">
                                            <dt className="flex items-center gap-2 text-sm text-slate-400">
                                                <BriefcaseBusiness className="h-4 w-4 text-sky-400" />
                                                Experiencia
                                            </dt>

                                            <dd className="text-sm font-semibold">
                                                4+ años
                                            </dd>
                                        </div>

                                        <div className="flex items-center justify-between gap-4">
                                            <dt className="flex items-center gap-2 text-sm text-slate-400">
                                                <Code2 className="h-4 w-4 text-sky-400" />
                                                Especialidad
                                            </dt>

                                            <dd className="text-sm font-semibold">
                                                Backend y APIs
                                            </dd>
                                        </div>
                                    </dl>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Presentación */}
                    <div className="order-1 lg:order-2">
                        <Badge className="hero-enter hero-delay-1 mb-5 border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-sky-300">
                            Hola, soy
                        </Badge>

                        <h1 className="hero-enter hero-delay-2 text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                            Omar López
                        </h1>

                        <h2 className="hero-enter hero-delay-3 mt-6 text-3xl font-semibold text-slate-400 sm:text-4xl">
                            Backend Developer
                        </h2>

                        <p className="hero-enter hero-delay-4 mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                            Desarrollo APIs y aplicaciones backend seguras,
                            escalables y mantenibles utilizando Python,
                            Django, Django REST Framework y FastAPI.
                        </p>

                        <div className="hero-enter hero-delay-5 mt-10 flex flex-col gap-4 sm:flex-row">
                            <Button
                                type="button"
                                size="lg"
                                onClick={scrollToProjects}
                                className="h-12 gap-2 bg-sky-400 px-6 font-bold text-slate-950 shadow-lg shadow-sky-950/30 hover:-translate-y-1 hover:bg-sky-300"
                            >
                                <FolderKanban className="h-5 w-5" />
                                Ver proyectos
                            </Button>

                            <Button
                                type="button"
                                size="lg"
                                variant="outline"
                                onClick={openCv}
                                className="h-12 gap-2 border-sky-400/60 bg-transparent px-6 font-bold text-sky-300 hover:-translate-y-1 hover:bg-sky-400/10 hover:text-sky-200"
                            >
                                <FileText className="h-5 w-5" />
                                Ver CV
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="relative z-10 -mt-8 px-6 pb-24"
                aria-label="Resumen profesional"
            >
                <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {professionalStats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <Reveal
                                key={stat.label}
                                delay={index * 90}
                                className="h-full"
                            >
                                <Card className="group h-full border-slate-800 bg-slate-900/90 text-slate-100 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-sky-400/60 hover:shadow-sky-950/30">
                                    <CardContent className="flex min-h-44 flex-col items-center justify-center p-6 text-center">
                                        <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300 transition duration-300 group-hover:scale-110 group-hover:bg-sky-400/15">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <strong className="text-3xl font-bold tracking-tight text-white">
                                            {stat.value}
                                        </strong>

                                        <span className="mt-2 max-w-40 text-sm leading-5 text-slate-400">
                                            {stat.label}
                                        </span>
                                    </CardContent>
                                </Card>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            <section
                id="sobre-mi"
                className="scroll-mt-24 px-6 py-24"
            >
                <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                    <Reveal>
                        <div>
                            <Badge className="mb-5 border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-sky-300">
                                Perfil profesional
                            </Badge>

                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Sobre mí
                            </h2>

                            <div className="mt-6 h-1 w-20 rounded-full bg-sky-400" />

                            <p className="mt-7 text-lg leading-8 text-slate-400">
                                Desarrollo soluciones backend orientadas a la
                                seguridad, mantenibilidad y crecimiento de las
                                aplicaciones.
                            </p>
                        </div>
                    </Reveal>

                    <div className="space-y-6">
                        <Reveal delay={100}>
                            <Card className="border-slate-800 bg-slate-900/80 text-slate-100 shadow-xl shadow-black/20">
                                <CardContent className="space-y-5 p-7 text-base leading-8 text-slate-300 sm:p-9">
                                    <p>
                                        Soy desarrollador backend especializado en
                                        Python y Django, con experiencia en el
                                        desarrollo e integración de APIs REST,
                                        autenticación de usuarios, bases de datos
                                        relacionales, procesamiento de tareas en
                                        segundo plano y comunicación en tiempo real.
                                    </p>

                                    <p>
                                        Me interesa construir soluciones seguras,
                                        organizadas, mantenibles y preparadas para
                                        crecer. También tengo experiencia trabajando
                                        con Docker, Git, Linux, CI/CD, AWS y Google
                                        Cloud Platform.
                                    </p>
                                </CardContent>
                            </Card>
                        </Reveal>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <Reveal delay={180}>
                                <Card className="group h-full border-slate-800 bg-slate-900/70 text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50">
                                    <CardContent className="p-5">
                                        <ShieldCheck className="mb-4 h-6 w-6 text-sky-400 transition group-hover:scale-110" />

                                        <h3 className="font-semibold text-white">
                                            Seguridad
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Autenticación, permisos y protección de
                                            servicios backend.
                                        </p>
                                    </CardContent>
                                </Card>
                            </Reveal>

                            <Reveal delay={260}>
                                <Card className="group h-full border-slate-800 bg-slate-900/70 text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50">
                                    <CardContent className="p-5">
                                        <ServerCog className="mb-4 h-6 w-6 text-sky-400 transition group-hover:scale-110" />

                                        <h3 className="font-semibold text-white">
                                            Escalabilidad
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Arquitecturas preparadas para crecer y
                                            procesar tareas asíncronas.
                                        </p>
                                    </CardContent>
                                </Card>
                            </Reveal>

                            <Reveal delay={340}>
                                <Card className="group h-full border-slate-800 bg-slate-900/70 text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50">
                                    <CardContent className="p-5">
                                        <GraduationCap className="mb-4 h-6 w-6 text-sky-400 transition group-hover:scale-110" />

                                        <h3 className="font-semibold text-white">
                                            Mejora continua
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Pruebas, calidad de código y aprendizaje
                                            constante.
                                        </p>
                                    </CardContent>
                                </Card>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            <SkillsSection />

            <ExperienceSection />

            <ProjectsSection />

            <ContactSection />

            <footer className="border-t border-slate-800 bg-slate-950/40 px-6 py-8">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
                    <p>
                        © {new Date().getFullYear()} Omar López.
                        Todos los derechos reservados.
                    </p>

                    <p>
                        Construido con React, TypeScript,
                        Tailwind CSS y shadcn/ui.
                    </p>
                </div>
            </footer>

        </main>
    );
}

export default App;