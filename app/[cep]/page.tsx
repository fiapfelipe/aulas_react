interface Params {
    params: {
        cep: number
    }
}
export default function Cep({ params: { cep }}: Params) {
    return (
        <div>
            <h1>CEP</h1>
            <p>{cep}</p>
        </div>
    )
}