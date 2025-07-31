import dynamic from 'next/dynamic'


const ShootingStarsComp = dynamic(
    () => import(`./shooting-stars`).then(mod => mod.ShootingStars),
    { ssr: false }
)

export default function LazyShootingStars ( { theme } : {theme : string | undefined}) {

    return (
        <>
            <ShootingStarsComp
                className={`-z-10`}
                starColor={theme === 'dark' ? '#ffffff' : '#000000'}
                trailColor={theme === 'dark' ? '#a3a3a3' : '#4a4a4a'}
                minDelay={1000}
                maxDelay={2000}
                maxSpeed={20}
            />
        </>
    )
}

