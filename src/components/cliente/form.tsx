"use client";

import { useState } from 'react';
import Clientes from '@/components/cliente/cliente';

export default function FormPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    cnpj: '',
    telefone: '',
    endereco: '',
    cidade: '',
    uf: ''
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleConfirm = () => {
    // Lógica para confirmar os dados
    console.log('Dados confirmados:', formData);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-8 bg-gray-100">
       <button
          className="mt-4 px-3 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
          onClick={handleOpenModal}
        >
          Cadastrar
        </button>
      <form
        className="flex flex-wrap justify-start gap-4 mt-4 bg-white p-6 rounded-lg shadow-lg"
        style={{ width: '68%', height: '68%' }}
      >
       
        <div className="flex flex-row w-full justify-between px-2">
          <div className="flex flex-col">
            <label htmlFor="nome" className="mb-4 text-sm font-medium text-gray-700">Nome</label>
            
          </div>
          <div className="flex flex-col" style={{ marginLeft: '0.3cm' }}>
            <label htmlFor="cpf" className="mb-4 text-sm font-medium text-gray-700">CPF</label>
            
          </div>
          <div className="flex flex-col" style={{ marginLeft: '0.3cm' }}>
            <label htmlFor="cnpj" className="mb-4 text-sm font-medium text-gray-700">CNPJ</label>
            
          </div>
          <div className="flex flex-col" style={{ marginLeft: '0.3cm' }}>
            <label htmlFor="telefone" className="mb-4 text-sm font-medium text-gray-700">Telefone</label>
            
          </div>
          <div className="flex flex-col" style={{ marginLeft: '0.3cm' }}>
            <label htmlFor="endereco" className="mb-4 text-sm font-medium text-gray-700">Endereço</label>
            
          </div>
          <div className="flex flex-col" style={{ marginLeft: '0.3cm' }}>
            <label htmlFor="cidade" className="mb-4 text-sm font-medium text-gray-700">Cidade</label>
            
          </div>
          <div className="flex flex-col" style={{ marginLeft: '0.3cm' }}>
            <label htmlFor="uf" className="mb-4 text-sm font-medium text-gray-700">UF</label>
            
          </div>
        </div>
        
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Dados Cadastrados</h2>
            <div className="flex flex-col mb-4">
              <label htmlFor="modalNome" className="text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                id="modalNome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="modalCpf" className="text-sm font-medium text-gray-700">CPF</label>
              <input
                type="text"
                id="modalCpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="modalCnpj" className="text-sm font-medium text-gray-700">CNPJ</label>
              <input
                type="text"
                id="modalCnpj"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="modalTelefone" className="text-sm font-medium text-gray-700">Telefone</label>
              <input
                type="text"
                id="modalTelefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="modalEndereco" className="text-sm font-medium text-gray-700">Endereço</label>
              <input
                type="text"
                id="modalEndereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="modalCidade" className="text-sm font-medium text-gray-700">Cidade</label>
              <input
                type="text"
                id="modalCidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="modalUf" className="text-sm font-medium text-gray-700">UF</label>
              <input
                type="text"
                id="modalUf"
                name="uf"
                value={formData.uf}
                onChange={handleInputChange}
                className="px-3 py-2 border rounded-lg shadow-lg"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="mr-4 px-3 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
                onClick={handleConfirm}
              >
                Confirmar
              </button>
              <button
                className="px-3 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
                onClick={handleCloseModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
