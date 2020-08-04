import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/menu/components/FormField';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000',
    }

    const [value, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...value,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) { setValue( infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value); }


    return (
        <PageDefault>
            <h1>Página de Cadastro de Categoria: {value.nome}</h1>
            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    value
                ]);

                setValues(valoresIniciais);
               
                }}>

                <FormField
                    label="Nome da categoria"
                    type="text" 
                    name="nome"
                    value={setValues.name}
                    onChange={handleChange}
                />
            
                <FormField
                    label="Descrição"
                    type="text" 
                    textatrea="textarea"
                    value={setValues.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color" 
                    value={setValues.cor}
                    onChange={handleChange}
                />
                    <button>
                        Cadastrar
                    </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return(
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                    );
                })}
            </ul>
            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;