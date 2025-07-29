import NotFoundButton from "@/components/generic/not-found-button";


export default function NotFoundPage(){
    return(
        <section className={`text-center h-full flex flex-col items-center justify-center gap-4`}>
            <span>eyo, this page does not exist (404).</span>
            <NotFoundButton />
        </section>
    );
}