const userProjects = [
    {
        name: 'Tech Interpretations',
        description: 'A glossary of tech terms where you can create,edit and delete explanations of acronyms.',
        url: 'https://neo-nextjs-simple-crud-app.onrender.com',
        img: '/projects/tech-interpretations.png',
        sourceCode: '',
        technologies: ['Next.js', 'AppWrite','Render'],
    },
    {
        name: 'Tech Interpretations',
        description: 'A glossary of tech terms where you can create,edit and delete explanations of acronyms.',
        url: 'https://neo-nextjs-simple-crud-app.onrender.com',
        technologies: ['Next.js', 'AppWrite','Render'],
    },
    {
        name: 'Tech Interpretations',
        description: 'A glossary of tech terms where you can create,edit and delete explanations of acronyms.',
        url: 'https://neo-nextjs-simple-crud-app.onrender.com',
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
            <div className={`grid grid-cols-3`}>

            </div>
        </div>
    );
}