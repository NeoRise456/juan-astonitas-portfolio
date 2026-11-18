import path from "node:path";
import {Document, Font, Link, Page, StyleSheet, Text, View} from "@react-pdf/renderer";
import type {Locale} from "@/i18n/config";
import {cvProjects, education, experience, formatRange, profile, skills} from "@/lib/resume-data";

// Embedded TTF (Carlito, metric-compatible with Calibri, OFL) so every character, including
// accents and dashes, maps back to Unicode when an ATS extracts the text. The built-in PDF
// fonts (Helvetica) do not, and Spanish text comes out garbled.
const FONT_DIR = path.join(process.cwd(), "fonts", "carlito");
Font.register({
    family: "Carlito",
    fonts: [
        {src: path.join(FONT_DIR, "Carlito-Regular.ttf")},
        {src: path.join(FONT_DIR, "Carlito-Bold.ttf"), fontWeight: "bold"},
        {src: path.join(FONT_DIR, "Carlito-Italic.ttf"), fontStyle: "italic"},
    ],
});

// Never split words with hyphens: ATS parsers would read "deploy-" + "ment" as two words.
Font.registerHyphenationCallback((word) => [word]);

const ACCENT = "#1F4E79";
const INK = "#111111";
const MUTED = "#444444";

const styles = StyleSheet.create({
    page: {
        paddingTop: 26,
        paddingBottom: 24,
        paddingHorizontal: 40,
        fontFamily: "Carlito",
        fontSize: 10,
        lineHeight: 1.22,
        color: INK,
        // Ligatures (fi, ft, ti...) render as single glyphs that many ATS parsers can't map back
        // to letters ("Software" would read as "Sofware"), so keep every character separate.
        fontFeatureSettings: {liga: 0, clig: 0, dlig: 0, calt: 0},
    },
    name: {fontWeight: "bold", fontSize: 21, lineHeight: 1.15, textAlign: "center", marginBottom: 2},
    contact: {fontSize: 9.5, textAlign: "center", color: MUTED, marginTop: 1},
    link: {color: MUTED, textDecoration: "none"},
    section: {marginTop: 6},
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 11.5,
        color: ACCENT,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        borderBottomWidth: 1,
        borderBottomColor: ACCENT,
        paddingBottom: 2,
        marginBottom: 5,
    },
    entry: {marginBottom: 4},
    entryTitle: {fontWeight: "bold", fontSize: 10.5},
    entryMeta: {fontStyle: "italic", fontSize: 9.5, color: MUTED, marginBottom: 2},
    bulletRow: {flexDirection: "row", marginBottom: 0.5, paddingLeft: 4},
    bulletMark: {width: 10},
    bulletText: {flex: 1},
    skillRow: {marginBottom: 1},
    bold: {fontWeight: "bold"},
});

const LABELS = {
    en: {summary: "Summary", experience: "Experience", projects: "Projects", education: "Education", skills: "Skills"},
    es: {summary: "Resumen", experience: "Experiencia", projects: "Proyectos", education: "Educación", skills: "Habilidades"},
} satisfies Record<Locale, Record<string, string>>;

function Section({title, children}: { title: string; children: React.ReactNode }) {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {children}
        </View>
    );
}

function Bullets({items}: { items: string[] }) {
    return (
        <>
            {items.map((item, index) => (
                <View key={index} style={styles.bulletRow} wrap={false}>
                    <Text style={styles.bulletMark}>•</Text>
                    <Text style={styles.bulletText}>{item}</Text>
                </View>
            ))}
        </>
    );
}

function ContactLink({href, children}: { href: string; children: string }) {
    return <Link src={href} style={styles.link}>{children}</Link>;
}

export default function CvDocument({locale}: { locale: Locale }) {
    const t = LABELS[locale];

    return (
        <Document
            title={`${profile.name} - CV`}
            author={profile.name}
            subject={profile.headline[locale]}
            keywords="Full-Stack, Software Engineer, Next.js, NestJS, React, Angular, TypeScript, PostgreSQL, AWS, Docker, DevOps"
            creator={profile.name}
            producer={profile.website}
            language={locale}
        >
            <Page size="A4" style={styles.page}>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.contact}>
                    {profile.location} | {profile.phone} | <ContactLink href={`mailto:${profile.email}`}>{profile.email}</ContactLink>
                </Text>
                <Text style={styles.contact}>
                    <ContactLink href={`https://${profile.website}`}>{profile.website}</ContactLink>
                    {" | "}
                    <ContactLink href={`https://www.${profile.linkedin}`}>{profile.linkedin}</ContactLink>
                    {" | "}
                    <ContactLink href={`https://${profile.github}`}>{profile.github}</ContactLink>
                </Text>

                <Section title={t.summary}>
                    <Text>{profile.summary[locale]}</Text>
                </Section>

                <Section title={t.experience}>
                    {experience.filter((job) => job.inCv).map((job) => {
                        const {start, end} = formatRange(job.start, job.end, locale, "short");
                        return (
                            <View key={job.company} style={styles.entry}>
                                <View wrap={false}>
                                    <Text style={styles.entryTitle}>{job.position[locale]} — {job.company}</Text>
                                    <Text style={styles.entryMeta}>
                                        {start} – {end} | {job.location} ({job.modality[locale]})
                                    </Text>
                                </View>
                                <Bullets items={job.bullets[locale]}/>
                            </View>
                        );
                    })}
                </Section>

                <Section title={t.projects}>
                    {cvProjects.map((project) => (
                        <View key={project.name} style={styles.entry} wrap={false}>
                            <Text>
                                <Text style={styles.bold}>{project.name}</Text>
                                {" — "}
                                {project.links.map((link, index) => (
                                    <Text key={link}>
                                        {index > 0 && " | "}
                                        <ContactLink href={`https://${link}`}>{link}</ContactLink>
                                    </Text>
                                ))}
                            </Text>
                            <Bullets items={[project.description[locale]]}/>
                        </View>
                    ))}
                </Section>

                <Section title={t.education}>
                    {education.map((item) => {
                        const {start, end} = formatRange(item.start, item.end, locale, "short");
                        return (
                            <View key={item.school.en} style={styles.entry} wrap={false}>
                                <Text style={styles.entryTitle}>{item.degree[locale]} — {item.school[locale]}</Text>
                                <Text style={styles.entryMeta}>
                                    {start} – {end} ({item.notes[locale].join(" ")}) | {item.location}
                                </Text>
                            </View>
                        );
                    })}
                </Section>

                <Section title={t.skills}>
                    {skills.map((skill) => (
                        <Text key={skill.label.en} style={styles.skillRow}>
                            <Text style={styles.bold}>{skill.label[locale]}: </Text>
                            {skill.items[locale]}
                        </Text>
                    ))}
                </Section>
            </Page>
        </Document>
    );
}
