const Page = (props) => {
    
    return (
        <>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <div>
                {props.children}
            </div>
        </>
    )
}
export default Page