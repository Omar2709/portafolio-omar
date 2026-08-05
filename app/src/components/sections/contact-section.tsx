import {
    useState,
    type FormEvent,
} from "react";

import {
    LoaderCircle,
    Mail,
    Send,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormData {
    nombre: string;
    correo: string;
    asunto: string;
    mensaje: string;
}

const initialFormData: ContactFormData = {
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
};

const contactLinks = [
    {
        label: "GitHub",
        value: "Omar2709",
        href: "https://github.com/Omar2709",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        value: "Omar López",
        href: "https://www.linkedin.com/in/omar-l%C3%B3pez-8a0009269/",
        icon: FaLinkedin,
    },
    {
        label: "Correo",
        value: "omarrglopez@gmail.com",
        href: "mailto:omarrglopez@gmail.com",
        icon: Mail,
    },
];

function encodeFormData(data: ContactFormData) {
    return new URLSearchParams({
        "form-name": "contacto-portafolio",
        ...data,
    }).toString();
}

export function ContactSection() {
    const [formData, setFormData] =
        useState<ContactFormData>(initialFormData);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [errorMessage, setErrorMessage] =
        useState("");

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
        setErrorMessage("");
        setIsSubmitting(true);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded",
                },
                body: encodeFormData(formData),
            });

            if (!response.ok) {
                throw new Error(
                    `Netlify respondió con estado ${response.status}`,
                );
            }

            window.location.assign("/gracias.html");
        } catch (error) {
            console.error(
                "Error al enviar el formulario:",
                error,
            );

            setErrorMessage(
                "No se pudo enviar el mensaje. Intenta nuevamente o utiliza el correo de contacto.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contacto"
            className="scroll-mt-24 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="max-w-3xl">
                        <Badge className="mb-5 border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-sky-300">
                            Hablemos
                        </Badge>

                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Contacto
                        </h2>

                        <div className="mt-6 h-1 w-20 rounded-full bg-sky-400" />

                        <p className="mt-7 text-lg leading-8 text-slate-400">
                            Puedes escribirme para conversar sobre
                            oportunidades laborales, proyectos backend
                            o colaboraciones.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-14 grid items-start gap-7 lg:grid-cols-[0.75fr_1.25fr]">
                    <Reveal delay={100}>
                        <Card className="border-slate-800 bg-slate-900/80 text-slate-100 shadow-2xl shadow-black/20">
                            <CardHeader className="p-6 sm:p-7">
                                <CardTitle className="text-2xl text-white">
                                    Información de contacto
                                </CardTitle>

                                <p className="mt-3 leading-7 text-slate-400">
                                    Completa el formulario y responderé
                                    mediante el correo electrónico que
                                    proporciones.
                                </p>
                            </CardHeader>

                            <CardContent className="space-y-3 px-6 pb-7 sm:px-7">
                                {contactLinks.map((link) => {
                                    const Icon = link.icon;

                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target={
                                                link.label === "Correo"
                                                    ? undefined
                                                    : "_blank"
                                            }
                                            rel={
                                                link.label === "Correo"
                                                    ? undefined
                                                    : "noopener noreferrer"
                                            }
                                            className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/30 p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-sky-400/5"
                                        >
                                            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-300 transition group-hover:scale-110">
                                                <Icon className="h-5 w-5" />
                                            </span>

                                            <span className="min-w-0">
                                                <span className="block text-xs text-slate-500">
                                                    {link.label}
                                                </span>

                                                <strong className="block overflow-hidden text-ellipsis text-sm text-sky-300">
                                                    {link.value}
                                                </strong>
                                            </span>
                                        </a>
                                    );
                                })}
                            </CardContent>
                        </Card>
                    </Reveal>

                    <Reveal delay={180}>
                        <Card className="border-slate-800 bg-slate-900/80 text-slate-100 shadow-2xl shadow-black/20">
                            <CardContent className="p-6 sm:p-8">
                                <form
                                    name="contacto-portafolio"
                                    method="POST"
                                    data-netlify="true"
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <input
                                        type="hidden"
                                        name="form-name"
                                        value="contacto-portafolio"
                                    />

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="nombre"
                                                className="text-sm font-semibold text-slate-200"
                                            >
                                                Nombre
                                            </label>

                                            <Input
                                                id="nombre"
                                                name="nombre"
                                                type="text"
                                                value={formData.nombre}
                                                onChange={(event) => {
                                                    setFormData(
                                                        (current) => ({
                                                            ...current,
                                                            nombre:
                                                                event.target
                                                                    .value,
                                                        }),
                                                    );
                                                }}
                                                placeholder="Tu nombre"
                                                autoComplete="name"
                                                required
                                                disabled={isSubmitting}
                                                className="h-12 border-slate-700 bg-slate-950/60 text-white placeholder:text-slate-600 focus-visible:border-sky-400 focus-visible:ring-sky-400/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="correo"
                                                className="text-sm font-semibold text-slate-200"
                                            >
                                                Correo electrónico
                                            </label>

                                            <Input
                                                id="correo"
                                                name="correo"
                                                type="email"
                                                value={formData.correo}
                                                onChange={(event) => {
                                                    setFormData(
                                                        (current) => ({
                                                            ...current,
                                                            correo:
                                                                event.target
                                                                    .value,
                                                        }),
                                                    );
                                                }}
                                                placeholder="correo@ejemplo.com"
                                                autoComplete="email"
                                                required
                                                disabled={isSubmitting}
                                                className="h-12 border-slate-700 bg-slate-950/60 text-white placeholder:text-slate-600 focus-visible:border-sky-400 focus-visible:ring-sky-400/20"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="asunto"
                                            className="text-sm font-semibold text-slate-200"
                                        >
                                            Asunto
                                        </label>

                                        <Input
                                            id="asunto"
                                            name="asunto"
                                            type="text"
                                            value={formData.asunto}
                                            onChange={(event) => {
                                                setFormData(
                                                    (current) => ({
                                                        ...current,
                                                        asunto:
                                                            event.target
                                                                .value,
                                                    }),
                                                );
                                            }}
                                            placeholder="Motivo del mensaje"
                                            maxLength={120}
                                            required
                                            disabled={isSubmitting}
                                            className="h-12 border-slate-700 bg-slate-950/60 text-white placeholder:text-slate-600 focus-visible:border-sky-400 focus-visible:ring-sky-400/20"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="mensaje"
                                            className="text-sm font-semibold text-slate-200"
                                        >
                                            Mensaje
                                        </label>

                                        <Textarea
                                            id="mensaje"
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={(event) => {
                                                setFormData(
                                                    (current) => ({
                                                        ...current,
                                                        mensaje:
                                                            event.target
                                                                .value,
                                                    }),
                                                );
                                            }}
                                            placeholder="Escribe tu mensaje..."
                                            minLength={10}
                                            maxLength={1500}
                                            required
                                            disabled={isSubmitting}
                                            className="min-h-40 resize-y border-slate-700 bg-slate-950/60 text-white placeholder:text-slate-600 focus-visible:border-sky-400 focus-visible:ring-sky-400/20"
                                        />
                                    </div>

                                    {errorMessage && (
                                        <p
                                            role="alert"
                                            className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300"
                                        >
                                            {errorMessage}
                                        </p>
                                    )}

                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="h-12 gap-2 bg-sky-400 px-6 font-bold text-slate-950 hover:bg-sky-300 disabled:cursor-wait disabled:opacity-60"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <LoaderCircle className="h-5 w-5 animate-spin" />
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5" />
                                                    Enviar mensaje
                                                </>
                                            )}
                                        </Button>

                                        <p className="max-w-sm text-xs leading-5 text-slate-500">
                                            Tus datos se utilizarán
                                            únicamente para responder
                                            este mensaje.
                                        </p>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}