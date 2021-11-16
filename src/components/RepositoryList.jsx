import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Form for reaction',
    link: 'https://github.com/th1ago'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositorio</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>

        </section>
    )
}