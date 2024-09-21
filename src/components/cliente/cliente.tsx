import { useEffect, useState } from 'react';

interface Cliente {
    id: number;
    nome: string;
    email: string;
}

const Clientes: React.FC = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/cliente')
            .then(response => response.json())
            .then(data => setClientes(data));
    }, []);

    return (
        <div>
            <h1>Lista de Clientes</h1>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>{cliente.nome} - {cliente.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Clientes;
