
export default function Welcome() {
    return (
        <div className="bg-gradient-to-r from-purple-400 to-blue-600 min-h-screen p-0.5">
            <main
                className="
            bg-white 
            flex 
            flex-col 
            justify-center
            items-center
            w-4/5 
            mx-auto 
            m-40 
            p-12 
            shadow-2xl
            opacity-50
            lg:flex-row
        ">
                <img className="w-2/5 lg:w-1/5" src="../logo-tailwind.png" alt="Logo Tailwind CSS" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center whitespace-nowrap">Olá Tailwind CSS!</h1>
                <img className="w-2/5 lg:w-1/5" src="../logo-tailwind.png" alt="Logo Tailwind CSS" />
            </main>
        </div>
    );
}

