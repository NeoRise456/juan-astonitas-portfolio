import ProjectDialog from "@/components/user-projects/project-dialog";


const userProjects = [
    {
        name: 'Tech Interpretations',
        description: 'A glossary of tech terms where you can create,edit and delete explanations of acronyms.',
        shortDescription: 'A glossary of tech terms',
        url: 'https://neo-nextjs-simple-crud-app.onrender.com',
        img: '/projects/tech-interpretations.png',
        sourceCode: 'https://github.com/NeoRise456/NextJS-CRUD-App',
        technologies: ['Next.js', 'AppWrite','Render'],
    },
    {
        name: 'Tech Interpretations',
        description: 'A glossary of tech terms where you can create,edit and delete explanations of acronyms.',
        shortDescription: 'A glossary of tech terms',
        url: 'https://neo-nextjs-simple-crud-app.onrender.com',
        img: '/projects/tech-interpretations.png',
        sourceCode: 'https://github.com/NeoRise456/NextJS-CRUD-App',
        technologies: ['Next.js', 'AppWrite','Render'],
    },
    {
        name: 'Tech Interpretations',
        description: 'A glossary of tech terms where you can create,edit and delete explanations of acronyms.',
        shortDescription: 'A glossary of tech terms',
        url: 'https://neo-nextjs-simple-crud-app.onrender.com',
        img: '/projects/tech-interpretations.png',
        sourceCode: 'https://github.com/NeoRise456/NextJS-CRUD-App',
        technologies: ['Next.js', 'AppWrite','Render'],
    }
]


export default function UserProjectsSection(){
    return (
        <div className={`relative mb-8`}>
            <div className={`mb-3`}>
                <h2 className={`text-sm uppercase tracking-wider `}>My Projects</h2>
                <p className={`text-muted-foreground text-xs`}> i like to code stuff </p>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-1`}>
                {
                    userProjects.map((project, index) => (
                        <ProjectDialog project={project} key={index} />
                    ))
                }
            </div>
        </div>
    );
}