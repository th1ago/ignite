export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Desualt'}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.link}>
                Acessar repositorio
            </a>
        </li>
    )
}