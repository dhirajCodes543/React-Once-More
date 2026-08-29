
export default function PokemonCard({ pokemon }) {
    return (
        <>
        <div className="max-w-sm rounded overflow-hidden  shadow-lg bg-white m-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{pokemon.name}</div>
                <p className="text-gray-700 text-base">Base Experience: {pokemon.base_experience}</p>
            </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Abilities</div>
                {pokemon.abilities.map((ability, index) => (
                    <p key={index} className="text-gray-700 text-base">{ability.ability.name}</p>
                ))}
            </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Cries</div>
                <audio controls>
                    <source src={pokemon.cries.latest} type="audio/ogg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
        </>
    )
}